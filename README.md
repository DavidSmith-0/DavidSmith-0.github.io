# NextDoor Websites — Full Pack

Everything you need to launch your site on GitHub Pages and start outreach.

- `web/` → deploy-ready website
- `outreach/` → email kit (CSV + script + templates)

## Deploy
1. Create a repo named `DavidSmith-0.github.io` (Public).
2. Upload contents of `web/` to repo root.
3. Settings → Pages → Source: `main` / `/ (root)` (and keep `.nojekyll` in root).
4. Visit https://DavidSmith-0.github.io

## Configure
- Open `web/script.js` and set:
  - `STRIPE_LINK = https://buy.stripe.com/...`
  - `FORMSPREE_ENDPOINT = https://formspree.io/f/...`
- Optional: add `CNAME` file with your custom domain.
