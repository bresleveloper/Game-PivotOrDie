# FULL SPEC FOR AI CODE ASSISTANT  
**Project Name:** Pivot or Die – Survive 250 Years of Technological Disruption  
**Tech Stack:** Pure HTML5 + CSS3 + Vanilla JavaScript (no frameworks)  
**Deploy:** GitHub Pages (single `index.html`, `style.css`, `script.js`, `data.json`, `about.html`, `contact.html`)  
**Goal:** Zero dependencies, < 100 KB total, works offline, mobile-first, instantly playable.

### Folder Structure (copy-paste this into GitHub repo)

```
/pivot-or-die/
│
├── index.html              → Homepage / Landing
├── play.html               → The actual game (single template)
├── about.html              → About + Contact page
│
├── assets/
│   ├── icon.png
│   └── og-image.jpg
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── data/
    └── eras.json           ← THE BIG JSON (all 13+ eras live here)
```

### 1. eras.json – The Big JSON (the heart of the game)

```json
[
  {
    "id": 1,
    "year": 1780,
    "eraName": "Pre-Industrial Village",
    "disruption": "Steam engines are spreading across Britain…",
    "question": "Why are your customers disappearing?",
    "answers": [
      "People stopped wearing clothes",
      "Power looms destroyed hand-weaving jobs",
      "Everyone moved to America",
      "Witches cursed the village"
    ],
    "correct": 1,
    "fact": "By 1810, power looms reduced hand-weavers from 250,000 → under 10,000 in England.",
    "pivots": [
      { "name": "Textile machine maintenance", "wealth": 5400, "jobsCreated": 18, "jobsLost": 42 },
      { "name": "Steam boiler repair shop", "wealth": 6800, "jobsCreated": 25, "jobsLost": 35 },
      { "name": "Railway supply contractor", "wealth": 9200, "jobsCreated": 40, "jobsLost": 28 }
    ]
  },
  {
    "id": 2,
    "year": 1890,
    "eraName": "Electrification Begins",
    "disruption": "Edison and Tesla are lighting cities…",
    ...
  },
  {
    "id": 10,
    "year": 2010,
    "eraName": "The Cloud Giants Rise",
    "disruption": "Amazon Web Services dominates infrastructure…",
    ...
  },
  {
    "id": 13,
    "year": 2030,
    "eraName": "AI-Native World",
    "disruption": "AI agents run entire businesses…",
    "question": "Your React developers just quit en masse. Why?",
    "answers": [
      "They all became monks",
      "AI writes production code faster and cheaper",
      "Facebook hired everyone",
      "JavaScript was banned"
    ],
    "correct": 1,
    "fact": "By 2030, 92% of code is expected to be AI-generated (GitHub/Gartner).",
    "pivots": [
      { "name": "AI prompt agency", "wealth": 280000, "jobsCreated": 8, "jobsLost": 120 },
      { "name": "AI model fine-tuning studio", "wealth": 450000, "jobsCreated": 12, "jobsLost": 95 },
      { "name": "Robotaxi fleet operator", "wealth": 780000, "jobsCreated": 40, "jobsLost": 400 }
    ]
  }
]
```

→ You only need to fill 13 objects like this. Everything else reads from this file.

### 2. index.html – Landing Page (copy-paste ready)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pivot or Die – Survive 250 Years of Tech Disruption</title>
  <link rel="stylesheet" href="css/style.css" />
  <meta property="og:title" content="Pivot or Die" />
  <meta property="og:description" content="Can you turn a 1700s blacksmith into a 2030 AI tycoon?" />
  <meta property="og:image" content="assets/og-image.jpg" />
</head>
<body class="landing">
  <div class="hero">
    <h1>Pivot <span class="highlight">or Die</span></h1>
    <p class="tagline">One entrepreneur. 250 years. Every technological revolution tries to kill your business.</p>
    <a href="play.html" class="btn-primary">Play Now – Free</a>
    <p class="byline">Built by <strong>bresleveloper</strong> – AI-first game studio</p>
  </div>

  <section class="features">
    <div class="card">13 Real Historical Disruptions</div>
    <div class="card">Learn Jobs Created & Destroyed</div>
    <div class="card">5-minute playthroughs</div>
    <div class="card">Share your dynasty</div>
  </section>

  <footer>
    <a href="about.html">About & Contact</a> • 
    <a href="https://github.com/bresleveloper/pivot-or-die">GitHub</a>
  </footer>
</body>
</html>
```

### 3. play.html – The One-Page Game Engine

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Pivot or Die</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body class="game">
  <div id="game-container">
    <!-- All content injected by script.js -->
  </div>

  <div id="summary" class="hidden">
    <h2>Your 250-Year Dynasty</h2>
    <div id="timeline"></div>
    <p id="final-score"></p>
    <button onclick="location.reload()">Play Again</button>
    <button id="share-btn">Share Result</button>
  </div>

  <script src="js/script.js"></script>
</body>
</html>
```

### 4. script.js – Core Game Logic (vanilla JS, ~200 lines)

```javascript
let eras = [];
let currentEra = 0;
let wealth = 100;
let history = [];
let currentBusiness = "Village Entrepreneur";

fetch('data/eras.json')
  .then(r => r.json())
  .then(data => {
    eras = data;
    showEra(0);
  });

function showEra(index) {
  if (index >= eras.length) return showSummary();

  const era = eras[index];
  const html = `
    <div class="era">
      <h2>${era.year} – ${era.eraName}</h2>
      <div class="disruption">${era.disruption}</div>
      
      <div class="business dying">
        <strong>Your business:</strong> ${currentBusiness}
      </div>

      <p class="question">${era.question}</p>
      <div class="answers">
        ${era.answers.map((a,i) => `
          <button class="answer-btn" data-index="${i}">
            ${a}
          </button>
        `).join('')}
      </div>

      <div class="pivots hidden">
        <p class="fact">${era.fact}</p>
        <div class="pivot-cards">
          ${era.pivots.map((p,i) => `
            <div class="pivot-card" data-index="${i}">
              <h3>${p.name}</h3>
              <small>+£${p.wealth.toLocaleString()}/year • ${p.jobsCreated} jobs created • ${p.jobsLost} lost</small>
            </div>
          `).join('')}
        </div>
        <button id="next-era" class="btn-primary">Next Era →</button>
      </div>
    </div>
  `;

  document.getElementById('game-container').innerHTML = html;

  // Answer buttons
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.onclick = () => {
      const chosen = parseInt(btn.dataset.index);
      if (chosen === era.correct) {
        document.querySelector('.pivots').classList.remove('hidden');
        document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);
      } else {
        btn.style.background = '#c0392b';
      }
    };
  });

  // Pivot selection
  document.querySelectorAll('.pivot-card').forEach(card => {
    card.onclick = () => {
      const i = card.dataset.index;
      const pivot = era.pivots[i];
      wealth += pivot.wealth;
      currentBusiness = pivot.name;
      history.push({ year: era.year, business: pivot.name, wealth: pivot.wealth });

      document.querySelectorAll('.pivot-card').forEach(c => c.style.opacity = '0.5');
      card.style.border = '4px solid #00ff9d';
      
      document.getElementById('next-era').onclick = () => showEra(index + 1);
    };
  });
}

function showSummary() {
  document.getElementById('game-container').classList.add('hidden');
  document.getElementById('summary').classList.remove('hidden');

  const timeline = history.map(h => `
    <div class="timeline-item">
      <strong>${h.year}</strong> → ${h.business}
    </div>
  `).join('');

  document.getElementById('timeline').innerHTML = timeline;
  document.getElementById('final-score').innerHTML = `
    Final wealth: <strong>£${wealth.toLocaleString()}</strong><br>
    You survived all 13 technological revolutions.
  `;

  // Share button
  document.getElementById('share-btn').onclick = () => {
    const text = `I just turned a 1700s village business into a ${currentBusiness} worth £${wealth.toLocaleString()} by surviving every tech revolution! Can you beat me?`;
    navigator.share ? navigator.share({text, url: location.href}) : alert(text);
  };
}
```

### 5. CSS (style.css) – Mobile-first, beautiful, dark neon vibe

(Too long to paste here, but I’ll give you the full file in the next message if you want – or just say “send CSS”)

### Deployment in 2 commands

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/bresleveloper/pivot-or-die.git
git push -u origin main
```

Then enable GitHub Pages on `main` branch → instant live URL.

### Your job now
Just fill the 13 eras in `data/eras.json` using the template above (I already wrote 2 examples).

Tell me: “Give me the full eras.json with all 13 eras completed” or “Send the full CSS file” or “Build the repo for me”.

I’ll deliver the complete, ready-to-upload package in one message. You just push and go live.