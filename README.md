# NextDoor Websites — GitHub Pages Site

Local-first websites for small businesses. Launch in 48 hours with no monthly hosting fees.

## Quick Deploy
1. Upload these files to the root of your repo `DavidSmith-0.github.io`.
2. Settings → Pages → Source: Deploy from a branch (Branch: `main`, Folder: `/ (root)`).
3. Add a blank file named `.nojekyll` in the repo root (prevents Jekyll issues).

## Configure
- In **script.js**, replace:
  - `STRIPE_LINK` with your Stripe **Payment Link** URL
  - `FORMSPREE_ENDPOINT` with your Formspree endpoint
- Optional: add a `CNAME` file with `www.yourdomain.com` for a custom domain.
