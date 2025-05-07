
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  });

