// Theme toggle — works on all pages
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(savedTheme);
if (toggle) {
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    document.body.classList.replace(isDark ? 'dark' : 'light', isDark ? 'light' : 'dark');
    toggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

// Contact form — only on index.html
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form && successMsg) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      form.reset();
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });
}
