import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const MIME_MAP = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_MAP[ext] || 'application/octet-stream';
}

function getAllFiles(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, base));
    } else {
      const relPath = path.relative(base, fullPath).replace(/\\/g, '/');
      const stats = fs.statSync(fullPath);
      files.push({
        path: relPath,
        fullPath,
        size: stats.size,
        contentType: getContentType(fullPath),
      });
    }
  }

  return files;
}

async function deploy() {
  console.log('🚀 Preparing deployment for Life in New York (lifeinnewyork.blog)...');

  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist/ directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  const files = getAllFiles(distDir);
  console.log(`📦 Found ${files.length} static assets in dist/ directory:`);
  files.forEach(f => console.log(`   - ${f.path} (${f.size} bytes, ${f.contentType})`));

  const publishPayload = {
    displayName: 'Life in New York',
    files: files.map(f => ({
      path: f.path,
      size: f.size,
      contentType: f.contentType,
    })),
  };

  console.log('\n📡 Step 1: Initiating publish handshake with here.now API...');
  
  try {
    const publishRes = await fetch('https://here.now/api/v1/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HereNow-Client': 'antigravity/lifeinnewyork',
      },
      body: JSON.stringify(publishPayload),
    });

    const resText = await publishRes.text();
    let data;
    try {
      data = JSON.parse(resText);
    } catch {
      console.error(`❌ Non-JSON response received from https://here.now/api/v1/publish (status ${publishRes.status}):\n${resText}`);
      process.exit(1);
    }

    if (!publishRes.ok) {
      console.error(`❌ Publish initialization failed with status ${publishRes.status}:`, data);
      process.exit(1);
    }

    console.log('✅ Publish handshake successful!');
    console.log('   Full API Response:\n', JSON.stringify(data, null, 2));

    // Step 2: Upload files
    console.log('\n📤 Step 2: Uploading asset files...');
    const uploadTargets = data.upload?.uploads || data.uploads || [];

    if (uploadTargets.length > 0) {
      for (const target of uploadTargets) {
        const fileObj = files.find(f => f.path === target.path);
        if (!fileObj) {
          console.warn(`⚠️ Warning: No local file found for upload target ${target.path}`);
          continue;
        }

        const fileBuffer = fs.readFileSync(fileObj.fullPath);
        const headers = target.headers || { 'Content-Type': fileObj.contentType };

        console.log(`   Uploading: ${fileObj.path}...`);
        const putRes = await fetch(target.url, {
          method: 'PUT',
          headers,
          body: fileBuffer,
        });

        if (!putRes.ok) {
          const errText = await putRes.text();
          console.error(`❌ Failed to upload ${fileObj.path} (status ${putRes.status}): ${errText}`);
          process.exit(1);
        }
      }
      console.log('✅ All assets uploaded successfully.');
    } else {
      console.log('ℹ️ No presigned upload targets returned; checking if files were inlined or direct.');
    }

    // Step 3: Finalize
    console.log('\n🔒 Step 3: Finalizing deployment...');
    const versionId = data.upload?.versionId || data.versionId;
    const finalizeEndpoint = data.upload?.finalizeUrl || data.finalizeUrl;
    console.log(`   Finalize endpoint: ${finalizeEndpoint}`);
    console.log(`   Version ID:        ${versionId}`);

    const finalizePayload = {
      versionId,
    };

    const finalizeRes = await fetch(finalizeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HereNow-Client': 'antigravity/lifeinnewyork',
      },
      body: JSON.stringify(finalizePayload),
    });

    const finalizeText = await finalizeRes.text();
    let finalizeData;
    try {
      finalizeData = JSON.parse(finalizeText);
    } catch {
      finalizeData = { raw: finalizeText };
    }

    if (!finalizeRes.ok) {
      console.error(`❌ Finalize request failed with status ${finalizeRes.status}:`, finalizeData);
      process.exit(1);
    }

    const liveUrl = finalizeData.url || finalizeData.siteUrl || data.siteUrl || data.url;
    const claimUrl = finalizeData.claimUrl || data.claimUrl;
    const claimToken = finalizeData.claimToken || data.claimToken;

    console.log('\n🎉 ========================================================');
    console.log('🎉 DEPLOYMENT SUCCEEDED!');
    console.log(`🌐 Live Site URL:   ${liveUrl}`);
    if (claimUrl) {
      console.log(`🔑 Claim URL:       ${claimUrl}`);
    }
    if (claimToken) {
      console.log(`🎫 Claim Token:     ${claimToken}`);
    }
    console.log(`🏷️ Custom Domain:   lifeinnewyork.blog`);
    console.log(`📧 Contact Email:   support@lifeinnewyork.blog`);
    console.log('========================================================\n');

    // Save deployment details to deployment.json for future reference
    const deploymentRecord = {
      timestamp: new Date().toISOString(),
      liveUrl,
      claimUrl,
      claimToken,
      versionId,
      customDomain: 'lifeinnewyork.blog',
      supportEmail: 'support@lifeinnewyork.blog',
      filesCount: files.length,
      publishStatus: data.publishStatus,
    };

    fs.writeFileSync(
      path.resolve(__dirname, '../deployment.json'),
      JSON.stringify(deploymentRecord, null, 2)
    );
    console.log('📁 Deployment metadata saved to deployment.json');

  } catch (err) {
    console.error('❌ Network or unexpected error during deployment:', err);
    process.exit(1);
  }
}

deploy();
