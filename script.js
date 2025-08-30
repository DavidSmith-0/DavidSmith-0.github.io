// Small enhancements for the template
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form handling with Formspree (or fallback email link)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

async function postForm(data){
  // Replace with your real Formspree endpoint:
  const endpoint = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: data
  });
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';
    const data = new FormData(form);
    // basic honeypot check
    if (data.get('company')) {
      statusEl.textContent = 'Thanks!';
      form.reset();
      return;
    }
    try {
      const res = await postForm(data);
      if (res.ok) {
        statusEl.textContent = 'Thanks — we'll get back to you soon.';
        form.reset();
      } else {
        statusEl.textContent = 'Hmm, something went wrong. Email us at hello@example.com.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error — try again in a moment.';
    }
  });
}
