const osData = [
  {
    name: 'Windows',
    maker: 'by Microsoft',
    icon: '<i class="fa-brands fa-windows"></i>', // Fallback icon
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/windows.svg',
    imgFilter: 'invert(1)', // For Windows icon
    title: 'What is Windows?',
    desc: 'Developed by Microsoft, Windows is the world\'s most widely used desktop OS. It powers over 70% of personal computers globally. Features a graphical Start Menu, taskbar, and file explorer, and supports thousands of applications. Current version: Windows 11 (2021).',
    tags: ['<i class="fa-solid fa-desktop"></i> Desktop', '<i class="fa-solid fa-laptop"></i> Laptop', '<i class="fa-solid fa-building"></i> Enterprise'],
    bg: '#003a6e'
  },
  {
    name: 'macOS',
    maker: 'by Apple',
    icon: '<i class="fa-brands fa-apple"></i>',
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg',
    imgFilter: 'invert(1)',
    title: 'What is macOS?',
    desc: 'Apple\'s desktop OS exclusively for Mac computers. Known for its sleek design, stability, and tight integration with iPhone. Based on Unix. Used heavily by creative professionals, designers, and developers worldwide. Current version: Sequoia.',
    tags: ['<i class="fa-solid fa-desktop"></i> Desktop', '<i class="fa-solid fa-laptop"></i> MacBook', '<i class="fa-solid fa-paintbrush"></i> Creative'],
    bg: '#1c1c1e'
  },
  {
    name: 'Linux',
    maker: 'Open source',
    icon: '<i class="fa-brands fa-linux"></i>',
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linux.svg',
    imgFilter: 'invert(1)',
    title: 'What is Linux?',
    desc: 'A free, open-source OS kernel created by Linus Torvalds in 1991. Powers servers, supercomputers, Android, and embedded devices. Popular distributions include Ubuntu, Fedora, and Kali. Preferred by developers and IT professionals.',
    tags: ['<i class="fa-solid fa-server"></i> Server', '<i class="fa-solid fa-code"></i> Developer', '<i class="fa-solid fa-lock-open"></i> Open source'],
    bg: '#1a1a1a'
  },
  {
    name: 'Android',
    maker: 'by Google',
    icon: '<i class="fa-brands fa-android"></i>',
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/android.svg',
    imgFilter: '',
    title: 'What is Android?',
    desc: 'Developed by Google, Android is the world\'s most used mobile OS. Powers smartphones, tablets, and smart TVs. Based on the Linux kernel. Over 3 billion active devices run Android worldwide. Apps distributed via Google Play Store.',
    tags: ['<i class="fa-solid fa-mobile-screen"></i> Mobile', '<i class="fa-solid fa-tablet"></i> Tablet', '<i class="fa-solid fa-tv"></i> Smart TV'],
    bg: '#013220'
  },
  {
    name: 'iOS',
    maker: 'by Apple',
    icon: '<i class="fa-brands fa-apple"></i>',
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ios.svg',
    imgFilter: 'invert(1)',
    title: 'What is iOS?',
    desc: 'Apple\'s mobile OS for iPhone and iPad. Known for its security, smooth performance, and strict App Store ecosystem. Shares code with macOS. Only runs on Apple hardware, making it highly optimized for those devices.',
    tags: ['<i class="fa-solid fa-mobile-screen"></i> iPhone', '<i class="fa-solid fa-tablet"></i> iPad', '<i class="fa-solid fa-shield"></i> Secure'],
    bg: '#1c1c1e'
  },
  {
    name: 'Chrome OS',
    maker: 'by Google',
    icon: '<i class="fa-brands fa-chrome"></i>',
    imgPath: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlechrome.svg',
    imgFilter: 'invert(1)',
    title: 'What is Chrome OS?',
    desc: 'Google\'s lightweight OS designed for Chromebooks. Primarily web-based — most work happens in the Chrome browser. Fast boot times, automatic updates, and strong security via sandboxing. Very popular in schools and businesses.',
    tags: ['<i class="fa-solid fa-laptop"></i> Chromebook', '<i class="fa-solid fa-globe"></i> Web-based', '<i class="fa-solid fa-graduation-cap"></i> Education'],
    bg: '#174ea6'
  }
];

function generateOsTabs() {
  const osTabsContainer = document.getElementById('osTabs');
  osTabsContainer.innerHTML = osData.map((os, index) => `
    <div class="os-tab ${index === 0 ? 'active' : ''}" onclick="selectOS(${index})">
      ${os.imgPath ? `<img src="${os.imgPath}" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';" style="${os.imgFilter ? `filter:${os.imgFilter}` : ''}"/>` : ''}
      <span style="${os.imgPath ? 'display:none' : ''}">${os.icon}</span>
      ${os.name}
    </div>
  `).join('');
}

function selectOS(idx) {
  document.querySelectorAll('.os-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  const d = osData[idx];

  const osPanelIcon = document.getElementById('osPanelIcon');
  osPanelIcon.innerHTML = d.imgPath ? `<img src="${d.imgPath}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="${d.imgFilter ? `filter:${d.imgFilter}` : ''}"/><span style="display:none">${d.icon}</span>` : d.icon;

  document.getElementById('osPanelName').textContent = d.name;
  document.getElementById('osPanelMaker').textContent = d.maker;
  document.getElementById('osPanelTitle').textContent = d.title;
  document.getElementById('osPanelDesc').textContent = d.desc;
  document.getElementById('osPanelImg').style.background = d.bg;
  document.getElementById('osPanelTags').innerHTML = d.tags.map(t => `<span class="os-tag-pill">${t}</span>`).join('');

  const p = document.getElementById('osPanel');
  p.style.animation = 'none';
  void p.offsetWidth; // Trigger reflow
  p.style.animation = 'fadeUp .3s ease';
}

let trafficRunning = false;
let trafficInterval;

function runTraffic() {
  if (trafficRunning) return;
  trafficRunning = true;

  const cars = [
    document.getElementById('dcar1'),
    document.getElementById('dcar2'),
    document.getElementById('dcar3')
  ];
  const msgs = [
    'OS scheduling memory task...',
    'OS managing print job...',
    'OS routing audio output...',
    'All tasks coordinated successfully!'
  ];
  const lights = [
    document.getElementById('tl-red'),
    document.getElementById('tl-yellow'),
    document.getElementById('tl-green')
  ];

  // Reset cars position and animation
  cars.forEach(c => {
    c.style.transition = 'none';
    c.style.left = '-12.5rem'; // Ensure it starts off-screen
  });

  setTimeout(() => {
    cars.forEach((c, i) => {
      setTimeout(() => {
        c.style.transition = `left ${10 + i * 2}s linear`; // Vary speed slightly
        c.style.left = '105%'; // Drive across
      }, i * 900); // Stagger start times
    });
  }, 100);

  let msgIndex = 0;
  trafficInterval = setInterval(() => {
    lights.forEach(l => { l.className = 'tl-light'; }); // Reset all lights
    if (msgIndex < 3) {
      lights[msgIndex % 3].classList.add(['on-red', 'on-yellow', 'on-green'][msgIndex % 3]);
    } else {
      lights[2].classList.add('on-green'); // Keep green light on for "all tasks coordinated"
    }
    document.getElementById('osStatusMsg').textContent = msgs[Math.min(msgIndex, 3)];
    msgIndex++;
    if (msgIndex > 4) { // Stop after displaying final message
      clearInterval(trafficInterval);
      trafficRunning = false;
    }
  }, 2200);
}

function doTranslate() {
  const v = document.getElementById('keyInput').value;
  if (!v) return;
  const ch = v[0];
  const bin = ch.charCodeAt(0).toString(2).padStart(8, '0');

  document.getElementById('tHuman').textContent = ch;
  document.getElementById('tBinary').textContent = bin;
  document.getElementById('tScreen').textContent = ch;

  const bitRow = document.getElementById('bitRow');
  bitRow.innerHTML = bin.split('').map((b, i) =>
    `<div class="bit ${b === '1' ? 'bit-1' : 'bit-0'}" style="animation:bitFlip .3s ease ${i * 0.06}s both">${b}</div>`
  ).join('');
}

const quizQuestions = [
  {
    question: "What is an Operating System (OS)?",
    options: ["A piece of hardware", "System software that manages hardware", "A web browser", "A game"],
    answer: 1
  },
  {
    question: "Which of these is the computer's native language?",
    options: ["English", "Urdu", "Binary (0s and 1s)", "Javascript"],
    answer: 2
  },
  {
    question: "What is the binary code for the letter 'A'?",
    options: ["11110000", "01000001", "10101010", "00001111"],
    answer: 1
  },
  {
    question: "Which account type has full control over the system?",
    options: ["Standard", "Guest", "Administrator", "User"],
    answer: 2
  },
  {
    question: "What is the main role of the OS in user interaction?",
    options: ["To play music", "To act as a translator", "To connect to Wi-Fi", "To charge the battery"],
    answer: 1
  }
];

function startQuiz() {
  const modal = document.getElementById('quizModal');
  const container = document.getElementById('quizContainer');
  modal.style.display = 'flex';
  
  container.innerHTML = quizQuestions.map((q, i) => `
    <div class="quiz-q-box">
      <p class="quiz-q-text">${i + 1}. ${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <label class="quiz-opt">
            <input type="radio" name="q${i}" value="${oi}"> ${opt}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('') + `
    <button class="submit-quiz-btn" onclick="gradeQuiz()">Submit Quiz</button>
  `;
}

function gradeQuiz() {
  let score = 0;
  let reviewHtml = '<div class="quiz-review"><h4>Review Your Answers:</h4>';

  quizQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const selectedIdx = selected ? parseInt(selected.value) : null;
    const isCorrect = selectedIdx === q.answer;

    if (isCorrect) score++;

    reviewHtml += `
      <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
        <p><strong>${i + 1}. ${q.question}</strong></p>
        <p>Your answer: ${selectedIdx !== null ? q.options[selectedIdx] : '<em>No answer provided</em>'}</p>
        ${!isCorrect ? `<p class="correct-note">Correct answer: ${q.options[q.answer]}</p>` : ''}
      </div>
    `;
  });

  reviewHtml += '</div>';

  const container = document.getElementById('quizContainer');
  const percentage = (score / quizQuestions.length) * 100;
  
  container.innerHTML = `
    <div class="quiz-results">
      <div class="quiz-score-circle">${score}/${quizQuestions.length}</div>
      <h3>${percentage >= 60 ? 'Great job!' : 'Keep practicing!'}</h3>
      <p>You scored ${percentage}% on Section 1.1</p>
      ${reviewHtml}
      <div class="quiz-actions">
        <button class="quiz-btn" onclick="startQuiz()">Retake Quiz</button>
        <button class="quiz-btn" onclick="closeQuiz()">Close</button>
      </div>
    </div>
  `;
}

function closeQuiz() {
  document.getElementById('quizModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  generateOsTabs();
  selectOS(0); // Select Windows by default
  runTraffic(); // Start traffic animation on load

  document.getElementById('keyInput').addEventListener('input', function() {
    if (this.value) doTranslate();
  });
});