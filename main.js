// Add JS here

// Formspree contact form
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

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

// Theme toggle
const toggle = document.getElementById('theme-toggle');

// Apply saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);
toggle.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  document.body.classList.replace(isDark ? 'dark' : 'light', isDark ? 'light' : 'dark');
  toggle.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});
