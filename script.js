// Global config — replace these two to go live
const STRIPE_LINK = 'https://buy.stripe.com/REPLACE_WITH_YOUR_LINK';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Wire Stripe buttons
const btnHome = document.getElementById('reserveBtnHome');
if (btnHome && STRIPE_LINK.includes('http')) btnHome.href = STRIPE_LINK;
const btnND = document.getElementById('reserveBtnND');
if (btnND && STRIPE_LINK.includes('http')) btnND.href = STRIPE_LINK + '?utm_source=nextdoor';

// Contact form submit
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
async function postForm(data){
  return fetch(FORMSPREE_ENDPOINT, { method:'POST', headers:{'Accept':'application/json'}, body: data });
}
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!statusEl) return;
    statusEl.textContent = '';
    const data = new FormData(form);
    // Honeypot
    if (data.get('company')) {
      statusEl.textContent = 'Thanks!';
      form.reset();
      return;
    }
    try {
      const res = await postForm(data);
      if (res.ok) {
        statusEl.textContent = 'Thanks — I will reply shortly.';
        form.reset();
      } else {
        statusEl.textContent = 'Hmm, something went wrong. Email me at hello@example.com.';
      }
    } catch(err) {
      statusEl.textContent = 'Network error — try again in a moment.';
    }
  });
}
