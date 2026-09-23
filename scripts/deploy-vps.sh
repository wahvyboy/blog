#!/usr/bin/env bash
# ==============================================================================
# Life in New York - VPS Deployment Script (Caddy)
# ==============================================================================
set -e

VPS_USER="${VPS_USER:-root}"
VPS_HOST="${VPS_HOST:-}"
SSH_PORT="${SSH_PORT:-22}"
REMOTE_PATH="${VPS_PATH:-/var/www/lifeinnewyork.blog}"

if [ -z "$VPS_HOST" ]; then
  read -rp "Enter your VPS IP address or hostname: " VPS_HOST
fi

if [ -z "$VPS_HOST" ]; then
  echo "❌ Error: VPS IP or hostname is required."
  exit 1
fi

echo "🚀 Building production Vite bundle..."
npm run build

echo "📦 Ensuring remote directory exists..."
ssh -p "$SSH_PORT" "$VPS_USER@$VPS_HOST" "mkdir -p $REMOTE_PATH/dist"

echo "📤 Uploading dist/ files to VPS..."
scp -P "$SSH_PORT" -r dist/* "$VPS_USER@$VPS_HOST:$REMOTE_PATH/dist/"

echo "📄 Uploading Caddyfile..."
scp -P "$SSH_PORT" Caddyfile "$VPS_USER@$VPS_HOST:$REMOTE_PATH/Caddyfile"

echo "🔄 Reloading Caddy service on VPS..."
ssh -p "$SSH_PORT" "$VPS_USER@$VPS_HOST" "
  if [ -f /etc/caddy/Caddyfile ]; then
    cp $REMOTE_PATH/Caddyfile /etc/caddy/Caddyfile
    sudo systemctl reload caddy || sudo systemctl restart caddy
    echo '✅ Caddy service reloaded successfully!'
  else
    echo 'ℹ️ /etc/caddy/Caddyfile not found. You can link it with: sudo ln -sf $REMOTE_PATH/Caddyfile /etc/caddy/Caddyfile && sudo systemctl reload caddy'
  fi
"

echo "🎉 Deployment complete!"
