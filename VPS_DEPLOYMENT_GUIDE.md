# Hosting "Life in New York" on your Ubuntu/Debian VPS with Caddy

This guide walks you through deploying the **Life in New York** blog to an Ubuntu or Debian VPS using **Caddy Web Server**. 

Caddy was chosen because it automatically provisions, configures, and renews **free HTTPS/SSL certificates** (via Let's Encrypt / ZeroSSL) with zero extra setup, supports modern compression (Zstandard & Gzip), and handles Single Page Application (SPA) routing natively.

---

## 1. Prerequisites

### A. Point your Domain DNS to your VPS IP
Before requesting SSL certificates, point your domain's DNS records to your VPS IP address in your DNS provider (Cloudflare, Namecheap, GoDaddy, etc.):
* **A Record**: `@` (or `lifeinnewyork.blog`) &rarr; `<YOUR_VPS_IP>`
* **A Record** or **CNAME**: `www` &rarr; `<YOUR_VPS_IP>` (or `lifeinnewyork.blog`)

> [!NOTE]
> If you haven't pointed your domain yet and want to test immediately, you can replace the domain line in `Caddyfile` with `:80` or your VPS IP (e.g. `http://YOUR_VPS_IP`).

### B. Open Firewall Ports
SSH into your VPS and allow HTTP (80) and HTTPS (443):
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 2. Install Caddy on Ubuntu / Debian

Run the official Caddy installation commands on your VPS:

```bash
sudo apt update
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl

curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list

sudo apt update
sudo apt install -y caddy
```

Verify Caddy is installed and running:
```bash
sudo systemctl status caddy
```

---

## 3. Prepare the Web Directory on your VPS

Create the web root folder and set permissions so Caddy (running under `www-data` or `caddy`) can read the files:

```bash
sudo mkdir -p /var/www/lifeinnewyork.blog/dist
sudo chown -R $USER:$USER /var/www/lifeinnewyork.blog
sudo chmod -R 755 /var/www/lifeinnewyork.blog
```

---

## 4. Deploy your Blog

### Option A: Automated One-Click Script (Recommended)
From your local project terminal (Windows, macOS, or Linux), run:

```bash
npm run deploy:vps
```

The interactive script will ask for:
1. Your VPS IP address (or set via `VPS_HOST=your.ip.here`)
2. Your SSH username (default `root`)
3. SSH port (default `22`)

It will automatically:
1. Build the production bundle (`dist/`).
2. Upload all assets to `/var/www/lifeinnewyork.blog/dist/`.
3. Upload the `Caddyfile`.
4. Reload the Caddy service.

---

### Option B: Manual Upload via SCP or Rsync
If you prefer running commands manually:

1. **Build locally**:
   ```bash
   npm run build
   ```
2. **Copy files to your VPS**:
   ```bash
   # Windows PowerShell or Command Prompt:
   scp -r dist/* root@YOUR_VPS_IP:/var/www/lifeinnewyork.blog/dist/
   scp Caddyfile root@YOUR_VPS_IP:/etc/caddy/Caddyfile
   ```
3. **Reload Caddy on the VPS**:
   ```bash
   ssh root@YOUR_VPS_IP "sudo systemctl reload caddy"
   ```

---

## 5. Verify and Inspect Logs

Check the live status and TLS certificate generation:
```bash
# Check Caddy service status
sudo systemctl status caddy

# View live Caddy logs (including automated Let's Encrypt SSL issuance)
sudo journalctl -u caddy -f --no-tail
```

Open your browser and navigate to:
* `https://lifeinnewyork.blog`
* `https://www.lifeinnewyork.blog`

---

## 6. Updating Your Blog in the Future

Whenever you make changes to articles or code:
```bash
npm run deploy:vps
```
Your static assets will be updated with zero downtime!
