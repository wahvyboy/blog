# Deploying via GitHub to your VPS

This is the simplest workflow. Since you already have an existing project running on your VPS, you don't need manual file transfers or extra tooling.

---

## 1. On your Local Machine (Push to GitHub)

Whenever you make changes, just commit and push:
```bash
git add .
git commit -m "feat: updates for production"
git push origin main
```

---

## 2. On your VPS (First-Time Setup)

SSH into your VPS:

```bash
# 1. Navigate to your web directory (e.g. /var/www or your preferred folder)
cd /var/www

# 2. Clone this repository
git clone https://github.com/wahvyboy/blog.git lifeinnewyork

# 3. Enter folder, install dependencies, and build
cd lifeinnewyork
npm install
npm run build
```

The production assets will be built into `/var/www/lifeinnewyork/dist`.

---

## 3. Configure Your Existing Web Server

Depending on what web server your existing VPS project is using:

### If your VPS uses NGINX:
Create a new site configuration file:
```bash
sudo nano /etc/nginx/sites-available/lifeinnewyork.blog
```
Paste this configuration:
```nginx
server {
    listen 80;
    server_name lifeinnewyork.blog www.lifeinnewyork.blog;

    root /var/www/lifeinnewyork/dist;
    index index.html;

    # Single Page Application (SPA) routing fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|webp)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```
Enable the site and reload Nginx:
```bash
sudo ln -sf /etc/nginx/sites-available/lifeinnewyork.blog /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```
Get your free SSL certificate with Certbot:
```bash
sudo certbot --nginx -d lifeinnewyork.blog -d www.lifeinnewyork.blog
```

---

### If your VPS uses CADDY:
Simply append this to your existing `/etc/caddy/Caddyfile`:
```caddyfile
lifeinnewyork.blog, www.lifeinnewyork.blog {
    root * /var/www/lifeinnewyork/dist
    encode zstd gzip
    try_files {path} /index.html
    file_server
}
```
Then reload Caddy:
```bash
sudo systemctl reload caddy
```
*(Caddy handles SSL automatically).*

---

## 4. How to Update in the Future

Whenever you push new articles or design changes to GitHub:

On your VPS, simply run:
```bash
cd /var/www/lifeinnewyork
git pull
npm run build
```
That's it! Your site will update instantly.
