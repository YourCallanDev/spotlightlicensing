document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const user = loginDetails.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid login');
  }
});
