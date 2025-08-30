# 🌐 NextDoor Websites

**Beautiful, affordable websites built for local small businesses.**  
Flat pricing • Zero hosting fees • Live in 48 hours

---

## 🚀 Live Site
👉 [https://DavidSmith-0.github.io](https://DavidSmith-0.github.io)

---

## 📂 What’s Inside
- **index.html** → Main landing page  
- **nextdoor.html** → “Neighbor Special” page for Nextdoor leads  
- **styles.css** → Modern styling  
- **script.js** → Stripe checkout + Formspree contact form  
- **assets/** → Logo and hero graphics (swap anytime)  
- **404.html** → Custom not-found page  
- **privacy.html**, **terms.html** → Policies  
- **robots.txt**, **sitemap.xml** → SEO support  
- **.nojekyll** → Ensures GitHub Pages serves raw HTML

---

## 🛠️ How It Works
- **Hosting:** Free via GitHub Pages (global CDN + SSL).  
- **Contact Form:** Uses [Formspree](https://formspree.io). Replace endpoint in `script.js`.  
- **Payments:** One-click Stripe Payment Link. Replace `STRIPE_LINK` in `script.js`.  
- **SEO:** Open Graph tags, `robots.txt`, and `sitemap.xml` included.  
- **Analytics:** You can drop in Google Analytics or Plausible easily.

---

## ✨ Next Steps
1. **Set your Stripe link**  
   - In `script.js`, replace:  
     ```js
     const STRIPE_LINK = 'https://buy.stripe.com/your-link';
     ```
2. **Set your Formspree endpoint**  
   - Replace:  
     ```js
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id';
     ```
3. **Customize content**  
   - Swap text in `index.html` and `nextdoor.html` (hero, pricing, footer).  
   - Replace SVGs in `/assets/` with your own logo/graphics.  
4. **Custom domain (optional)**  
   - Add a DNS CNAME → `DavidSmith-0.github.io`  
   - Create a file `CNAME` in repo root with your domain name.

---

## 📧 Outreach Kit
See `/outreach` folder for:
- `leads.csv` → add business contacts  
- `templates/` → 3-touch email scripts (intro, follow-up, last)  
- `send_campaign.py` → sends emails via SMTP  
- `.env.example` → fill with Gmail App Password or other SMTP creds

---

## 🏡 Nextdoor Playbook
- Claim your business page on [Nextdoor](https://business.nextdoor.com/).  
- Post **2×/week** (one value tip, one Neighbor Special).  
- Drive traffic to 👉 `https://DavidSmith-0.github.io/nextdoor.html`.  
- Use the DM script:  
  > “Hi neighbor, I run NextDoor Websites — quick, polished sites for small businesses. Here’s our Neighbor Special: [link]. Want me to mock up one for you?”

---

## 📜 License
MIT — free to use, modify, and share.
