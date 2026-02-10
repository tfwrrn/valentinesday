const adventure = {
  currentLevel: 0,
  dateChoices: {},   // { vibe: '...', food: '...', etc. }
  storyChoices: [],  // array of story choice values
  typewriterTimer: null,
};

const DATE_ICONS = {
  vibe: '✨',
  food: '🍽️',
  activity: '🎬',
  drink: '🥂',
  gift: '🎁',
  afsluiter: '🌙',
};

const DATE_LABELS = {
  vibe: 'Vibe',
  food: 'Eten',
  activity: 'Activiteit',
  drink: 'Drankje',
  gift: 'Verrassing',
  afsluiter: 'Afsluiter',
};

const LEVEL_EMOJIS = ['🌅', '✨', '🐱', '🍽️', '💭', '🌙', '📱', '🥂', '🌠', '🎁', '💫', '🎵'];

function startAdventure() {
  adventure.currentLevel = 0;
  adventure.dateChoices = {};
  adventure.storyChoices = [];
  renderLevel(0);
}

function renderLevel(index) {
  const level = STORY_LEVELS[index];
  if (!level) return showEnding();

  adventure.currentLevel = index;

  // Update progress bar
  const pct = ((index) / STORY_LEVELS.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('level-label').textContent = `Level ${index + 1} / ${STORY_LEVELS.length}`;
  document.getElementById('level-emoji').textContent = LEVEL_EMOJIS[index] || '🌹';

  // Interpolate scene text with previous choices
  const sceneText = interpolateText(level.scene);

  // Clear and render scene
  const sceneEl = document.getElementById('scene-text');
  const optionsEl = document.getElementById('options-container');
  const imageWrapper = document.getElementById('scene-image-wrapper');
  const imageEl = document.getElementById('scene-image');
  optionsEl.innerHTML = '';
  sceneEl.innerHTML = '';

  // Load scene image
  if (level.image) {
    imageWrapper.style.opacity = '0';
    imageEl.src = level.image;
    imageEl.onload = () => { imageWrapper.style.opacity = '1'; };
  }

  // Typewriter effect
  typewriteText(sceneEl, sceneText, () => {
    renderOptions(level.options, index);
  });
}

function interpolateText(text) {
  return text
    .replace(/\{vibe\}/gi, adventure.dateChoices.vibe?.toLowerCase() || 'bijzondere')
    .replace(/\{food\}/gi, adventure.dateChoices.food?.toLowerCase() || 'lekkers')
    .replace(/\{activity\}/gi, adventure.dateChoices.activity?.toLowerCase() || 'iets leuks')
    .replace(/\{drink\}/gi, adventure.dateChoices.drink?.toLowerCase() || 'een drankje')
    .replace(/\{gift\}/gi, adventure.dateChoices.gift?.toLowerCase() || 'een verrassing')
    .replace(/\{afsluiter\}/gi, adventure.dateChoices.afsluiter?.toLowerCase() || 'iets moois');
}

function typewriteText(el, text, onDone) {
  clearTimeout(adventure.typewriterTimer);
  let i = 0;
  const cursor = '<span class="cursor"></span>';

  // If user has reduced-motion preference, skip animation
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.innerHTML = text;
    if (onDone) onDone();
    return;
  }

  function tick() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i) + cursor;
      i++;
      adventure.typewriterTimer = setTimeout(tick, 25);
    } else {
      el.innerHTML = text;
      if (onDone) onDone();
    }
  }
  tick();
}

function renderOptions(options, levelIndex) {
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-card w-full';
    btn.innerHTML = `<span class="text-rose-400 font-semibold mr-2">${String.fromCharCode(65 + i)}.</span> ${opt.text}`;

    // Staggered entrance
    setTimeout(() => btn.classList.add('show'), 80 * i);

    btn.addEventListener('click', () => handleChoice(levelIndex, opt, btn));
    container.appendChild(btn);
  });
}

function handleChoice(levelIndex, option, btnEl) {
  const level = STORY_LEVELS[levelIndex];

  // Prevent double-click
  const allBtns = document.querySelectorAll('.option-card');
  allBtns.forEach(b => b.style.pointerEvents = 'none');

  // Highlight selected
  btnEl.classList.add('selected');

  // Store choice
  if (level.type === 'date' && level.category) {
    adventure.dateChoices[level.category] = option.value;
  } else {
    adventure.storyChoices.push(option.value);
  }

  // Animate out after brief pause
  setTimeout(() => {
    allBtns.forEach(b => b.classList.add('fade-out'));
    document.getElementById('scene-text').classList.add('fade-out');
    document.getElementById('scene-image-wrapper').style.opacity = '0';

    setTimeout(() => {
      document.getElementById('scene-text').classList.remove('fade-out');
      renderLevel(levelIndex + 1);
    }, 350);
  }, 400);
}

// ===== ENDING SCREEN =====

function showEnding() {
  // Fill progress bar to 100%
  document.getElementById('progress-bar').style.width = '100%';

  setTimeout(() => {
    switchScreen('adventure-screen', 'ending-screen');
    setTimeout(animateEnding, 300);
  }, 500);
}

function animateEnding() {
  // Start confetti
  startConfetti();

  // Animate title
  const title = document.getElementById('ending-title');
  title.classList.remove('ending-title-hidden');
  title.classList.add('ending-title-show');

  // Animate date card
  setTimeout(() => {
    renderDateCard();
    const card = document.getElementById('date-card');
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 1200);

  // Show replay button
  setTimeout(() => {
    document.getElementById('replay-btn').style.opacity = '1';
  }, 2000);
}

function renderDateCard() {
  const container = document.getElementById('date-summary');
  container.innerHTML = '';

  const categories = ['vibe', 'food', 'activity', 'drink', 'gift', 'afsluiter'];
  categories.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'date-element';
    el.innerHTML = `
      <span class="icon">${DATE_ICONS[cat]}</span>
      <div>
        <div class="label">${DATE_LABELS[cat]}</div>
        <div class="value">${adventure.dateChoices[cat] || '—'}</div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ===== CONFETTI =====

function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#e11d48', '#ff6b9d'];
  const heartChars = ['❤', '♥', '💕', '💖'];

  for (let i = 0; i < 60; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: 1.5 + Math.random() * 3,
      size: 10 + Math.random() * 16,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      char: heartChars[Math.floor(Math.random() * heartChars.length)],
      opacity: 0.6 + Math.random() * 0.4,
    });
  }

  let frame = 0;
  const maxFrames = 300; // ~5 seconds at 60fps

  function draw() {
    if (frame > maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    frame++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      h.x += h.vx;
      h.y += h.vy;
      h.rotation += h.rotSpeed;

      // Fade out near end
      const fadeStart = maxFrames * 0.7;
      const alpha = frame > fadeStart
        ? h.opacity * (1 - (frame - fadeStart) / (maxFrames - fadeStart))
        : h.opacity;

      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate((h.rotation * Math.PI) / 180);
      ctx.font = `${h.size}px serif`;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fillText(h.char, 0, 0);
      ctx.restore();

      // Wrap around horizontally
      if (h.x < -20) h.x = canvas.width + 20;
      if (h.x > canvas.width + 20) h.x = -20;

      // Reset if fallen off bottom
      if (h.y > canvas.height + 20) {
        h.y = -20;
        h.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  // Handle resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, { once: false });
}

// ===== REPLAY =====

document.getElementById('replay-btn').addEventListener('click', () => {
  // Reset ending state
  const title = document.getElementById('ending-title');
  title.classList.remove('ending-title-show');
  title.classList.add('ending-title-hidden');
  document.getElementById('date-card').style.opacity = '0';
  document.getElementById('date-card').style.transform = 'translateY(2rem)';
  document.getElementById('replay-btn').style.opacity = '0';

  switchScreen('ending-screen', 'adventure-screen');
  setTimeout(startAdventure, 400);
});
