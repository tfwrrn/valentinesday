(() => {
  const CORRECT_CODE = '23-10-20';
  const input = document.getElementById('login-input');
  const btn = document.getElementById('login-btn');
  const error = document.getElementById('login-error');

  // Auto-insert dashes as user types
  input.addEventListener('input', (e) => {
    let val = input.value.replace(/[^0-9]/g, '');
    if (val.length > 6) val = val.slice(0, 6);
    if (val.length >= 5) {
      val = val.slice(0, 2) + '-' + val.slice(2, 4) + '-' + val.slice(4);
    } else if (val.length >= 3) {
      val = val.slice(0, 2) + '-' + val.slice(2);
    }
    input.value = val;
  });

  // Handle enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });

  btn.addEventListener('click', attemptLogin);

  function attemptLogin() {
    const code = input.value.trim();
    if (code === CORRECT_CODE) {
      error.style.opacity = '0';
      switchScreen('login-screen', 'captcha-screen');
    } else {
      // Shake input and show error
      input.classList.add('shake');
      error.style.opacity = '1';
      setTimeout(() => input.classList.remove('shake'), 500);
    }
  }
})();

function switchScreen(fromId, toId) {
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);

  from.classList.add('fade-out');
  setTimeout(() => {
    from.classList.remove('active', 'fade-out');
    to.classList.add('active', 'fade-in');
    setTimeout(() => to.classList.remove('fade-in'), 600);
  }, 400);
}
