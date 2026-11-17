/* ==========================================================================
   20th Birthday Interactive Experience — JavaScript
   Nov 20 • 11:20 • Chapter 20 Celebration
   ========================================================================== */

// -------------------------------------------------------------
// 1. CONFIGURATION & STATE
// -------------------------------------------------------------
const birthdayConfig = {
  friendName: "Dhivya",
  nickname: "YellowHearteey",
  targetDate: "2026-11-20T11:20:00",
  specialTime: "11:20 AM",
  tamilGreeting: "இருபது வயதின் புது வசந்தம்... உன் வாழ்வின் ஒவ்வொரு நொடியும் புன்னகையால் நிறையட்டும்! 🌸",
  reasons: [
    {
      title: "Radiant Smile",
      text: "Your smile has the magical power to instantly light up any room.",
      tamil: "உன் புன்னகை தான் இந்த உலகத்தின் பேரழகு!"
    },
    {
      title: "Chapter 20 Begins",
      text: "Two decades of grace, kindness, and leaving footprints of joy.",
      tamil: "இருபது ஆண்டின் புது வசந்தம் மலரட்டும்!"
    },
    {
      title: "11:20 Magic",
      text: "November 20 at 11:20 — when the stars aligned to bring you here.",
      tamil: "விண்மீன்கள் சங்கமித்த நேரம் 11:20!"
    },
    {
      title: "Unstoppable Energy",
      text: "Your cheerful vibe and boundless positivity are truly infectious.",
      tamil: "உன் உற்சாகம் எப்போதும் நிலைக்கட்டும்!"
    },
    {
      title: "Golden Heart",
      text: "You genuinely care for everyone and love without holding back.",
      tamil: "தங்கமான மனம் கொண்ட என் அன்பே!"
    },
    {
      title: "Favorite Headache 😤❤️",
      text: "Even when we fight like Tom & Jerry, you are still the only person I want to talk to.",
      tamil: "ஆயிரம் சண்டை வந்தாலும், நீ தான்டி என் உலகம்!"
    },
    {
      title: "Fierce & Strong",
      text: "You handle every challenge like an absolute queen.",
      tamil: "தைரியமும் தன்னம்பிக்கையும் உனது பலம்."
    },
    {
      title: "Pure Soul",
      text: "In a world that can be tough, your genuine innocence is rare.",
      tamil: "கள்ளமில்லா வெள்ளை உள்ளம்!"
    },
    {
      title: "Biggest Dreamer",
      text: "May your roaring twenties turn every single dream into reality.",
      tamil: "உன் கனவுகள் அனைத்தும் நனவாகட்டும்!"
    },
    {
      title: "Style Icon",
      text: "Turning 20 never looked so effortlessly gorgeous!",
      tamil: "அழகும் கம்பீரமும் நிறைந்தவள்!"
    },
    {
      title: "Love & Hate You 💖😤",
      text: "I like you always, I love you endlessly, and I hate you for making me miss you this much.",
      tamil: "உன்னை வெறுக்க நினைத்தாலும் என் காதல் தான் வெல்லும்!"
    },
    {
      title: "Candid Laughter",
      text: "The sound of your uncontrollable laugh is literal music.",
      tamil: "கொஞ்சிப் பேசும் மழலைச் சிரிப்பு!"
    },
    {
      title: "Comfort Zone",
      text: "Just talking to you can turn a bad day completely around.",
      tamil: "மனதிற்கு இதம் தரும் நட்பு!"
    },
    {
      title: "Dancing Spirit",
      text: "Never let anything dull your sparkle or your rhythm.",
      tamil: "வானவில்லின் வர்ணங்கள் உனக்குள்ளே!"
    },
    {
      title: "Smart & Sharp",
      text: "Wisdom way beyond your 20 years, yet young at heart.",
      tamil: "அறிவும் அழகும் சேர்ந்தவள்!"
    },
    {
      title: "Foodie Partner",
      text: "Cheers to all the snacks, treats, and future food adventures!",
      tamil: "சுவையான தருணங்கள் தொடரட்டும்!"
    },
    {
      title: "True Original",
      text: "There is only one of you in the entire universe. Stay original.",
      tamil: "ஈடு இணையற்ற என் அன்பு!"
    },
    {
      title: "Miss You Always 🥺",
      text: "Every minute without talking to you feels like forever. No fight is bigger than my love.",
      tamil: "உன் குரல் கேட்காத நொடிகள் யாவும் ஒரு யுகம்!"
    },
    {
      title: "Cosmic Blessing",
      text: "Having you in my life is a gift I will always be grateful for.",
      tamil: "வாழ்க்கை கொடுத்த வரம் நீ!"
    },
    {
      title: "Happy 20th Birthday!",
      text: "Here's to love, laughter, and your most magical decade yet! 💖",
      tamil: "இனிய இருபதாவது பிறந்தநாள் நல்வாழ்த்துகள்!"
    }
  ]
};

// Check LocalStorage overrides if any
const savedName = localStorage.getItem("bday_friend_name");
if (savedName) birthdayConfig.nickname = savedName;

// -------------------------------------------------------------
// 2. AUDIO SYNTHESIZER (WEB AUDIO API - Zero external dependencies)
// -------------------------------------------------------------
class BirthdaySynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.notes = [
      { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.25 }, { note: 'A4', dur: 0.6 }, { note: 'G4', dur: 0.6 },
      { note: 'C5', dur: 0.6 },  { note: 'B4', dur: 1.1 },
      { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.25 }, { note: 'A4', dur: 0.6 }, { note: 'G4', dur: 0.6 },
      { note: 'D5', dur: 0.6 },  { note: 'C5', dur: 1.1 },
      { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.25 }, { note: 'G5', dur: 0.6 }, { note: 'E5', dur: 0.6 },
      { note: 'C5', dur: 0.6 },  { note: 'B4', dur: 0.6 },  { note: 'A4', dur: 0.8 },
      { note: 'F5', dur: 0.35 }, { note: 'F5', dur: 0.25 }, { note: 'E5', dur: 0.6 }, { note: 'C5', dur: 0.6 },
      { note: 'D5', dur: 0.6 },  { note: 'C5', dur: 1.4 }
    ];
    this.freqs = {
      'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
      'C5': 523.25, 'D5': 587.33, 'E5': 659.25,
      'F5': 698.46, 'G5': 783.99
    };
    this.timerId = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, duration, type = 'sine', gainVal = 0.15) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  startMelody() {
    this.init();
    this.isPlaying = true;
    let step = 0;

    const playNext = () => {
      if (!this.isPlaying) return;
      const current = this.notes[step % this.notes.length];
      const freq = this.freqs[current.note];

      // Dreamy glockenspiel-style tone
      this.playTone(freq, current.dur * 0.9, 'triangle', 0.18);
      this.playTone(freq * 2, current.dur * 0.4, 'sine', 0.05);

      step++;
      this.timerId = setTimeout(playNext, current.dur * 700);
    };

    playNext();
  }

  stopMelody() {
    this.isPlaying = false;
    if (this.timerId) clearTimeout(this.timerId);
  }

  // Sound Effect: Candle Whoosh
  playWhoosh() {
    this.init();
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // Sound Effect: Balloon Pop
  playPop() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  // Sound Effect: Chime / Ting
  playChime() {
    this.init();
    if (!this.ctx) return;
    [1046.50, 1318.51, 1567.98, 2093.00].forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.6, 'sine', 0.15);
      }, idx * 90);
    });
  }
}

const synth = new BirthdaySynth();

// -------------------------------------------------------------
// 3. BACKGROUND CANVAS PARTICLES (Floating golden stars & hearts)
// -------------------------------------------------------------
function setupParticlesCanvas() {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 0.4 + 0.1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.7 + 0.2;
      this.fade = Math.random() * 0.01 + 0.005;
      this.color = Math.random() > 0.4 ? '#ffd166' : '#ff758f';
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity += this.fade;
      if (this.opacity > 0.85 || this.opacity < 0.15) {
        this.fade = -this.fade;
      }
      if (this.y < -10) this.y = height + 10;
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const count = Math.min(65, Math.floor(window.innerWidth / 20));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// -------------------------------------------------------------
// 4. COUNTDOWN TIMER & 11:20 SYNCHRONICITY
// -------------------------------------------------------------
function setupCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const labelEl = document.getElementById('countdownLabel');

  function update() {
    const now = new Date();
    // Default target: Nov 20, 11:20 AM of current year
    let target = new Date(birthdayConfig.targetDate);

    // If target has passed this year, we can show celebration or next year
    let diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      if (labelEl) labelEl.textContent = "🎉 It's November 20! Celebrating Chapter 20 Right Now! 🎉";
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// -------------------------------------------------------------
// 5. INTERACTIVE CAKE & CANDLE BLOWING
// -------------------------------------------------------------
function setupCakeInteraction() {
  const flame1 = document.getElementById('flame1');
  const flame2 = document.getElementById('flame2');
  const smoke1 = document.getElementById('smoke1');
  const smoke2 = document.getElementById('smoke2');
  const candle2 = document.getElementById('candle2');
  const candle0 = document.getElementById('candle0');
  const blowBtn = document.getElementById('blowCandlesBtn');
  const cutBtn = document.getElementById('cutCakeBtn');
  const statusMsg = document.getElementById('cakeMessage');
  const cakeBody = document.getElementById('cakeBody');

  let candlesBlown = false;
  let cakeCut = false;

  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    synth.playWhoosh();

    if (flame1) flame1.classList.add('extinguished');
    if (flame2) flame2.classList.add('extinguished');
    if (smoke1) smoke1.classList.add('puff');
    if (smoke2) smoke2.classList.add('puff');

    triggerConfettiExplosion();
    synth.playChime();

    if (statusMsg) {
      statusMsg.innerHTML = "✨ <strong>YAY! Wish granted!</strong> Now click 'Cut the Cake' 🎂 ✨";
      statusMsg.style.color = "#ffd166";
    }

    if (blowBtn) blowBtn.disabled = true;
    if (cutBtn) {
      cutBtn.disabled = false;
      cutBtn.classList.add('glow-gold');
    }
  }

  if (candle2) candle2.addEventListener('click', blowCandles);
  if (candle0) candle0.addEventListener('click', blowCandles);
  if (blowBtn) blowBtn.addEventListener('click', blowCandles);

  if (cutBtn) {
    cutBtn.addEventListener('click', () => {
      if (cakeCut) return;
      cakeCut = true;
      synth.playChime();

      if (cakeBody) cakeBody.classList.add('cut-done');

      triggerStarShower();

      if (statusMsg) {
        statusMsg.innerHTML = "🍰 <strong>Happy 20th Birthday!</strong> Sweetest slice for the sweetest human! 🎉";
        statusMsg.style.color = "#ff758f";
      }

      cutBtn.disabled = true;
    });
  }

  const confettiBtn = document.getElementById('confettiShowerBtn');
  if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
      triggerConfettiExplosion();
      synth.playChime();
    });
  }
}

// -------------------------------------------------------------
// 6. 20 REASONS / 20 QUOTES INTERACTIVE DECK
// -------------------------------------------------------------
function setupReasonsGrid() {
  const grid = document.getElementById('reasonsGrid');
  const revealedCountEl = document.getElementById('revealedCount');
  const progressBar = document.getElementById('deckProgressBar');
  const revealAllBtn = document.getElementById('revealAllBtn');

  if (!grid) return;

  let revealedCount = 0;
  const total = birthdayConfig.reasons.length;

  grid.innerHTML = '';

  birthdayConfig.reasons.forEach((reason, index) => {
    const num = String(index + 1).padStart(2, '0');
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.setAttribute('data-index', index);

    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="card-front">
          <div class="card-num-badge">${num}</div>
          <div class="card-hint">Chapter Note</div>
          <div class="card-sparkle-icon">✨</div>
        </div>
        <div class="card-back">
          <h4>${reason.title}</h4>
          <p>${reason.text}</p>
          <div class="card-tamil-text">"${reason.tamil}"</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        synth.playPop();
        revealedCount++;
        updateProgress();

        if (revealedCount === total) {
          triggerConfettiExplosion();
        }
      } else {
        card.classList.remove('flipped');
      }
    });

    grid.appendChild(card);
  });

  function updateProgress() {
    if (revealedCountEl) revealedCountEl.textContent = revealedCount;
    if (progressBar) {
      const pct = (revealedCount / total) * 100;
      progressBar.style.width = `${pct}%`;
    }
  }

  if (revealAllBtn) {
    revealAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.flip-card').forEach(card => {
        if (!card.classList.contains('flipped')) {
          card.classList.add('flipped');
          revealedCount++;
        }
      });
      updateProgress();
      triggerConfettiExplosion();
      synth.playChime();
    });
  }
}

// -------------------------------------------------------------
// 7. BALLOON POP MINI GAME
// -------------------------------------------------------------
function setupBalloonArena() {
  const arena = document.getElementById('balloonArena');
  const wishDisplay = document.getElementById('balloonWishDisplay');
  const wishText = document.getElementById('balloonWishText');
  if (!arena) return;

  const balloonColors = [
    'linear-gradient(135deg, #ff4d8d, #ff758f)',
    'linear-gradient(135deg, #ffd166, #ffb703)',
    'linear-gradient(135deg, #7928ca, #9d4edd)',
    'linear-gradient(135deg, #48cae4, #0077b6)',
    'linear-gradient(135deg, #ff70a6, #ff9770)'
  ];

  const balloonWishes = [
    "May your 20s be the happiest chapter yet! 🌟",
    "May every single wish you make at 11:20 come true! 💫",
    "Unlimited joy, endless good food & late night talks! 🍕",
    "Golden confidence, wild dreams & peaceful heart! 🌸",
    "You are loved more than words could ever say! 💖",
    "Cheers to 20 years of making this world brighter! 🎂",
    "Never stop smiling, Thangom! Your smile is golden! ✨",
    "May success follow you in everything you do! 🚀"
  ];

  function spawnBalloon() {
    if (arena.children.length > 12) return;

    const balloon = document.createElement('div');
    balloon.className = 'floating-balloon';

    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.background = color;

    const left = Math.floor(Math.random() * 85) + 5;
    balloon.style.left = `${left}%`;

    const duration = Math.random() * 4 + 7;
    balloon.style.animationDuration = `${duration}s`;

    const emojis = ['🎈', '✨', '💖', '⭐', '🌸'];
    balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    balloon.addEventListener('click', () => {
      synth.playPop();

      // Pop burst animation
      balloon.style.transform = 'scale(1.4)';
      balloon.style.opacity = '0';
      balloon.style.transition = 'all 0.15s ease-out';

      const randomWish = balloonWishes[Math.floor(Math.random() * balloonWishes.length)];
      if (wishText) wishText.textContent = randomWish;
      if (wishDisplay) {
        wishDisplay.classList.add('active');
        setTimeout(() => wishDisplay.classList.remove('active'), 2500);
      }

      setTimeout(() => balloon.remove(), 200);
    });

    arena.appendChild(balloon);

    // Remove if floats away
    setTimeout(() => {
      if (balloon && balloon.parentNode) balloon.remove();
    }, duration * 1000);
  }

  // Pre-populate a few
  for (let i = 0; i < 5; i++) {
    setTimeout(spawnBalloon, i * 600);
  }

  setInterval(spawnBalloon, 1800);
}

// -------------------------------------------------------------
// 8. SECRET 11:20 ENVELOPE
// -------------------------------------------------------------
function setupEnvelope() {
  const envelope = document.getElementById('birthdayEnvelope');
  const seal = document.getElementById('envelopeSeal');
  const guide = document.getElementById('letterGuide');

  function toggleEnvelope() {
    if (!envelope) return;
    const isOpen = envelope.classList.toggle('open');
    if (isOpen) {
      synth.playChime();
      triggerConfettiExplosion();
      if (guide) guide.innerHTML = "✨ Sealed with love for Chapter 20! ✨";
    } else {
      if (guide) guide.innerHTML = "👇 Tap the wax seal <strong>'20'</strong> to open and read! 👇";
    }
  }

  if (seal) seal.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleEnvelope();
  });

  if (envelope) envelope.addEventListener('click', toggleEnvelope);
}

// -------------------------------------------------------------
// 9. CONFETTI & FIREWORKS EFFECTS (Using Canvas Confetti)
// -------------------------------------------------------------
function triggerConfettiExplosion() {
  if (typeof confetti !== 'function') return;

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff4d8d', '#ffd166', '#9d4edd', '#ffffff', '#ff758f']
  });
}

function triggerStarShower() {
  if (typeof confetti !== 'function') return;

  const end = Date.now() + 1200;
  const colors = ['#ffd166', '#ff4d8d', '#a2d2ff'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// -------------------------------------------------------------
// 10. 11:20 MAKE A WISH INTERACTION
// -------------------------------------------------------------
function setupMakeWish() {
  const wishBtn = document.getElementById('makeWishBtn');
  if (!wishBtn) return;

  wishBtn.addEventListener('click', () => {
    synth.playChime();
    triggerStarShower();

    const originalText = wishBtn.innerHTML;
    wishBtn.innerHTML = "<span>✨ 11:20 Wish Sent to the Universe! 🌠</span>";
    wishBtn.style.background = "linear-gradient(135deg, #ffd166, #ff4d8d)";

    setTimeout(() => {
      wishBtn.innerHTML = originalText;
      wishBtn.style.background = "";
    }, 3500);
  });

  const finalConfettiBtn = document.getElementById('finalConfettiBtn');
  if (finalConfettiBtn) {
    finalConfettiBtn.addEventListener('click', () => {
      triggerStarShower();
      triggerConfettiExplosion();
      synth.playChime();
    });
  }
}

// -------------------------------------------------------------
// 11. AUDIO MUSIC CONTROLLER (AUTOPLAY ON OPEN & STOP WHEN FINISHED)
// -------------------------------------------------------------
function setupAudioController() {
  const toggleBtn = document.getElementById('musicToggleBtn');
  const btnText = document.getElementById('musicBtnText');
  const wave = document.getElementById('soundWave');
  const audio = document.getElementById('bgMusic');

  if (!toggleBtn || !audio) return;

  // Make sure loop is disabled so it stops when finished
  audio.loop = false;

  function playAudio() {
    audio.play().then(() => {
      if (btnText) btnText.textContent = "Pause Song ⏸️";
      if (wave) wave.classList.add('playing');
    }).catch(() => {
      // Waiting for user gesture if browser restricts immediate autoplay
    });
  }

  function pauseAudio() {
    audio.pause();
    if (btnText) btnText.textContent = "Play Song 💖";
    if (wave) wave.classList.remove('playing');
  }

  // 1. Attempt to play immediately on open
  playAudio();

  // 2. Play on first interaction (click, touch, or scroll) if initial autoplay was blocked
  const playOnFirstInteraction = () => {
    if (audio.paused && !audio.ended) {
      playAudio();
    }
    ['click', 'touchstart', 'pointerdown', 'scroll'].forEach(evt => {
      document.removeEventListener(evt, playOnFirstInteraction);
      window.removeEventListener(evt, playOnFirstInteraction);
    });
  };

  ['click', 'touchstart', 'pointerdown', 'scroll'].forEach(evt => {
    document.addEventListener(evt, playOnFirstInteraction, { passive: true, once: true });
    window.addEventListener(evt, playOnFirstInteraction, { passive: true, once: true });
  });

  // 3. Toggle button
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (audio.paused) {
      if (audio.ended) audio.currentTime = 0;
      playAudio();
    } else {
      pauseAudio();
    }
  });

  // 4. When song finishes, STOP cleanly (no loop)
  audio.addEventListener('ended', () => {
    if (btnText) btnText.textContent = "Replay Song 🎵";
    if (wave) wave.classList.remove('playing');
  });
}

// -------------------------------------------------------------
// 12. CUSTOMIZE MODAL (Allows updating name, time, message live)
// -------------------------------------------------------------
function setupCustomizeModal() {
  const openBtn = document.getElementById('openSettingsBtn');
  const closeBtn = document.getElementById('closeSettingsBtn');
  const modal = document.getElementById('settingsModal');
  const saveBtn = document.getElementById('saveSettingsBtn');

  const inputName = document.getElementById('inputFriendName');
  const inputDate = document.getElementById('inputBirthDate');
  const inputTime = document.getElementById('inputSpecialTime');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      if (inputName) inputName.value = birthdayConfig.nickname;
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (inputName && inputName.value.trim()) {
        const newName = inputName.value.trim();
        birthdayConfig.nickname = newName;
        localStorage.setItem("bday_friend_name", newName);

        const nameDisplay = document.getElementById('displayFriendName');
        if (nameDisplay) nameDisplay.textContent = newName;

        document.querySelectorAll('.friend-name-placeholder').forEach(el => {
          el.textContent = newName;
        });
      }

      if (inputDate && inputDate.value) {
        birthdayConfig.targetDate = `${inputDate.value}T11:20:00`;
      }

      if (modal) modal.classList.remove('active');
      triggerConfettiExplosion();
      synth.playChime();
    });
  }
}

// -------------------------------------------------------------
// 13. SPECIAL BIRTHDAY VIDEO / REEL INTERACTION
// -------------------------------------------------------------
function setupVideoSection() {
  const video = document.getElementById('bdayVideo');
  const celebrateBtn = document.getElementById('videoCelebrationBtn');
  const btnText = document.getElementById('musicBtnText');
  const wave = document.getElementById('soundWave');
  const audio = document.getElementById('bgMusic');

  if (video) {
    video.addEventListener('play', () => {
      // Pause song if playing so audio does not overlap with video
      if (audio && !audio.paused) {
        audio.pause();
        if (btnText) btnText.textContent = "Play Song 💖";
        if (wave) wave.classList.remove('playing');
      }
    });

    video.addEventListener('ended', () => {
      triggerConfettiExplosion();
      synth.playChime();
    });
  }

  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', () => {
      triggerStarShower();
      triggerConfettiExplosion();
      synth.playChime();
    });
  }
}

// -------------------------------------------------------------
// 14. LOVE-HATE & PEACE TREATY INTERACTION
// -------------------------------------------------------------
function setupPeaceTreaty() {
  const hugBtn = document.getElementById('sendHugBtn');
  const missBtn = document.getElementById('missYouBtn');
  const hateBtn = document.getElementById('hateYouBtn');
  const responseBox = document.getElementById('treatyResponse');
  const treatyCard = document.querySelector('.treaty-card');

  if (hugBtn) {
    hugBtn.addEventListener('click', () => {
      triggerStarShower();
      triggerConfettiExplosion();
      synth.playChime();
      if (responseBox) {
        responseBox.innerHTML = "🫂 <strong>Warm Hug Sent!</strong> சண்டை எல்லாம் மறந்துட்டு patch up ஆகிக்கலாம்டி please... Happy 20th Birthday Thangom! ❤️";
        responseBox.style.color = "#ff758f";
      }
    });
  }

  if (missBtn) {
    missBtn.addEventListener('click', () => {
      synth.playChime();
      triggerConfettiExplosion();
      if (responseBox) {
        responseBox.innerHTML = "🥺 <strong>I Miss You So Much!</strong> Even a single day without your voice feels impossible. Text me soon!";
        responseBox.style.color = "#ffd166";
      }
    });
  }

  if (hateBtn) {
    hateBtn.addEventListener('click', () => {
      synth.playPop();
      if (treatyCard) {
        treatyCard.style.animation = "wobbleCake 0.5s ease";
        setTimeout(() => treatyCard.style.animation = "", 500);
      }
      if (responseBox) {
        responseBox.innerHTML = "😤 <strong>I Hate You!</strong> Only because I can't stop loving you this much... You win every argument anyway! ❤️";
        responseBox.style.color = "#ffb3c6";
      }
    });
  }
}

// -------------------------------------------------------------
// INITIALIZE EVERYTHING ON DOM READY
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setupParticlesCanvas();
  setupCountdown();
  setupCakeInteraction();
  setupReasonsGrid();
  setupBalloonArena();
  setupEnvelope();
  setupMakeWish();
  setupAudioController();
  setupCustomizeModal();
  setupVideoSection();
  setupPeaceTreaty();

  // Apply saved name if exists
  if (birthdayConfig.nickname) {
    const nameDisplay = document.getElementById('displayFriendName');
    if (nameDisplay) nameDisplay.textContent = birthdayConfig.nickname;
    document.querySelectorAll('.friend-name-placeholder').forEach(el => {
      el.textContent = birthdayConfig.nickname;
    });
  }
});
