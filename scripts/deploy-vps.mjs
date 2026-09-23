#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (query, defaultValue) => {
  return new Promise((resolve) => {
    const prompt = defaultValue ? `${query} [${defaultValue}]: ` : `${query}: `;
    rl.question(prompt, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
};

function run(cmd, desc) {
  console.log(`\n⏳ ${desc}...`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: rootDir });
  } catch (err) {
    console.error(`\n❌ Failed during: ${desc}`);
    process.exit(1);
  }
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║       Life in New York — VPS Deployment with Caddy Server        ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝\n');

  // Config via env vars or interactive prompts
  const vpsHost = process.env.VPS_HOST || await ask('Enter your VPS IP address or hostname');
  if (!vpsHost) {
    console.error('❌ VPS IP or hostname is required to deploy.');
    process.exit(1);
  }

  const vpsUser = process.env.VPS_USER || await ask('Enter VPS SSH username', 'root');
  const sshPort = process.env.SSH_PORT || await ask('Enter SSH port', '22');
  const remotePath = process.env.VPS_PATH || await ask('Enter remote destination path', '/var/www/lifeinnewyork.blog');

  rl.close();

  const remoteTarget = `${vpsUser}@${vpsHost}`;
  const sshOpts = `-p ${sshPort} -o StrictHostKeyChecking=accept-new`;

  // Step 1: Build the Vite production bundle
  const isWindows = process.platform === 'win32';
  const npmCmd = isWindows ? 'npm.cmd' : 'npm';
  run(`${npmCmd} run build`, 'Building production Vite bundle');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found after build!');
    process.exit(1);
  }

  // Step 2: Ensure remote directory exists
  run(
    `ssh ${sshOpts} ${remoteTarget} "mkdir -p ${remotePath}/dist"`,
    `Ensuring remote directory exists at ${remotePath}`
  );

  // Step 3: Copy dist files to VPS using scp
  const distGlob = path.join(distDir, '*');
  run(
    `scp -P ${sshPort} -r "${distGlob}" ${remoteTarget}:${remotePath}/dist/`,
    `Uploading dist/ files to ${remoteTarget}:${remotePath}/dist/`
  );

  // Step 4: Ask if Caddyfile should be synced to /etc/caddy/Caddyfile
  console.log('\n📄 Syncing Caddyfile configuration...');
  try {
    const caddyfilePath = path.join(rootDir, 'Caddyfile');
    if (fs.existsSync(caddyfilePath)) {
      run(
        `scp -P ${sshPort} "${caddyfilePath}" ${remoteTarget}:${remotePath}/Caddyfile`,
        `Uploading Caddyfile to ${remotePath}/Caddyfile`
      );

      // Check if Caddy service is running on VPS and reload it
      console.log('🔄 Reloading Caddy on VPS...');
      execSync(
        `ssh ${sshOpts} ${remoteTarget} "which caddy > /dev/null 2>&1 && (caddy reload --config ${remotePath}/Caddyfile || sudo systemctl reload caddy) || echo '⚠️ Caddy not yet running or not in PATH'"` ,
        { stdio: 'inherit' }
      );
    }
  } catch (err) {
    console.warn('⚠️ Could not automatically reload Caddy. You can reload it manually on your server with: sudo systemctl reload caddy');
  }

  console.log('\n🎉 ========================================================');
  console.log('🎉 VPS DEPLOYMENT COMPLETED!');
  console.log(`🌐 VPS Destination:  ${remoteTarget}:${remotePath}/dist/`);
  console.log('💡 To verify your server, visit your VPS IP or configured domain in browser.');
  console.log('========================================================\n');
}

main().catch((err) => {
  console.error('❌ Deployment error:', err);
  process.exit(1);
});
