// Add JS here

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
