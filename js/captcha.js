(() => {
  const TOTAL_CORRECT = 10;
  const TOTAL_FILLER = 6;
  let found = 0;

  function init() {
    const grid = document.getElementById('captcha-grid');
    const counter = document.getElementById('captcha-counter');
    grid.innerHTML = '';
    found = 0;
    counter.textContent = '0';

    // Build photo list
    const photos = [];
    for (let i = 1; i <= TOTAL_CORRECT; i++) {
      photos.push({ src: `images/me/${String(i).padStart(2, '0')}.jpg`, correct: true });
    }
    for (let i = 1; i <= TOTAL_FILLER; i++) {
      photos.push({ src: `images/filler/${String(i).padStart(2, '0')}.jpg`, correct: false });
    }

    // Shuffle
    for (let i = photos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [photos[i], photos[j]] = [photos[j], photos[i]];
    }

    // Render grid
    photos.forEach((photo) => {
      const cell = document.createElement('div');
      cell.className = 'captcha-cell';

      // Skeleton placeholder
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton';
      cell.appendChild(skeleton);

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = 'foto';
      img.src = photo.src;
      img.onload = () => skeleton.remove();
      img.onerror = () => {
        // Show a colored placeholder if image missing
        skeleton.remove();
        cell.style.background = photo.correct
          ? 'linear-gradient(135deg, #fda4af, #fb7185)'
          : 'linear-gradient(135deg, #e5e7eb, #d1d5db)';
        const label = document.createElement('span');
        label.textContent = photo.correct ? '?' : '?';
        label.className = 'absolute inset-0 flex items-center justify-center text-2xl text-white/70';
        cell.appendChild(label);
      };
      cell.appendChild(img);

      cell.addEventListener('click', () => handleClick(cell, photo));
      grid.appendChild(cell);
    });
  }

  function handleClick(cell, photo) {
    if (cell.classList.contains('correct') || cell.classList.contains('wrong')) return;

    if (photo.correct) {
      found++;
      cell.classList.add('correct');
      document.getElementById('captcha-counter').textContent = found;

      if (found === TOTAL_CORRECT) {
        setTimeout(() => onAllFound(), 600);
      }
    } else {
      cell.classList.add('wrong');
      setTimeout(() => cell.classList.remove('wrong'), 500);
    }
  }

  function onAllFound() {
    // Hearts rain animation
    const rain = document.createElement('div');
    rain.className = 'hearts-rain';
    document.body.appendChild(rain);

    const hearts = ['❤️', '💕', '💖', '💗', '💘', '🌹'];
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      heart.style.animationDelay = (Math.random() * 1) + 's';
      heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
      rain.appendChild(heart);
    }

    setTimeout(() => {
      rain.remove();
      switchScreen('captcha-screen', 'adventure-screen');
      if (typeof startAdventure === 'function') startAdventure();
    }, 2500);
  }

  // Initialize when captcha screen becomes active
  const observer = new MutationObserver(() => {
    const screen = document.getElementById('captcha-screen');
    if (screen.classList.contains('active')) {
      init();
      observer.disconnect();
    }
  });
  observer.observe(document.getElementById('captcha-screen'), { attributes: true, attributeFilter: ['class'] });
})();
