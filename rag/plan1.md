# Implementation Plan for "Pivot or Die" Game
**AI Code Assistant Guide**

---

## Project Overview
**Name:** Pivot or Die – Survive 250 Years of Technological Disruption
**Tech Stack:** Pure HTML5 + CSS3 + Vanilla JavaScript (zero dependencies)
**Deploy:** GitHub Pages
**Goal:** < 100 KB total, mobile-first, instantly playable

---

## Step 1: Create Project Folder Structure

Set up the complete directory structure as specified:

```
/pivot-or-die/
│
├── index.html              → Homepage / Landing
├── play.html               → The actual game
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
    └── eras.json           ← THE BIG JSON (all 13 eras)
```

**Action:** Create all folders and prepare for file creation.

---

## Step 2: Complete the Game Data

**Current Status:** 10 of 13 eras completed in `data/eras1.json`

**Task:** Add 3 missing eras (IDs 11-13) to complete the timeline:
- Era 11: A disruption between 2010-2020 (suggestions: social media, gig economy, or blockchain)
- Era 12: A disruption between 2020-2030 (suggestions: remote work, metaverse, or quantum computing)
- Era 13: Already exists (2030 AI-Native World)

**Each era must include:**
- `id`: Sequential number
- `year`: Historical year
- `eraName`: Short descriptive name
- `description`: Player's current business context (2-3 sentences)
- `disruption`: The technological threat (1 sentence)
- `question`: Why is the business failing? (question format)
- `answers`: Array of 4 options (index 0-3)
- `correct`: Index of correct answer (0-3)
- `fact`: Historical fact with data
- `pivots`: Array of 3 business pivot options, each with:
  - `name`: New business type
  - `wealth`: Annual wealth increase
  - `jobsCreated`: Jobs created by pivot
  - `jobsLost`: Jobs destroyed by disruption

**Rename** `data/eras1.json` → `data/eras.json` when complete.

---

## Step 3: Create Core HTML Files

### 3.1 Build `index.html` (Landing Page)
**Components:**
- Meta tags (charset, viewport, OG tags for social sharing)
- Hero section with title "Pivot or Die"
- Tagline explaining the game concept
- "Play Now" CTA button linking to `play.html`
- Features section (4 cards: 13 eras, jobs data, 5-min gameplay, share results)
- Footer with About link and GitHub link
- Link to `css/style.css`

### 3.2 Build `play.html` (Game Engine)
**Components:**
- Game container div (`#game-container`) - populated by JavaScript
- Summary div (`#summary`) - hidden initially, shows final results
  - Timeline of player's journey
  - Final wealth score
  - "Play Again" button
  - "Share Result" button
- Link to `css/style.css`
- Script tag for `js/script.js`

### 3.3 Build `about.html` (About & Contact)
**Components:**
- About section explaining the game's educational purpose
- Creator info (bresleveloper)
- Contact information or links
- Link back to homepage
- Link to `css/style.css`

---

## Step 4: Implement Game Logic (`js/script.js`)

**Core Variables:**
- `eras` - array loaded from JSON
- `currentEra` - index tracker (starts at 0)
- `wealth` - player's accumulated wealth (starts at 100)
- `history` - array of player's pivot decisions
- `currentBusiness` - string tracking current business name

**Functions to Implement:**

### 4.1 Data Loading
```javascript
fetch('data/eras.json')
  .then(r => r.json())
  .then(data => {
    eras = data;
    showEra(0);
  });
```

### 4.2 `showEra(index)` Function
**Purpose:** Display current era and handle interactions

**Logic:**
1. If `index >= eras.length`, call `showSummary()` and return
2. Get current era object
3. Build HTML dynamically:
   - Era header (year + eraName)
   - Disruption description
   - Current dying business display
   - Question
   - 4 answer buttons (data-index attribute)
   - Hidden pivots section (revealed when correct answer chosen)
4. Attach event listeners:
   - Answer buttons: Check if correct, reveal pivots or show error
   - Pivot cards: Update wealth, currentBusiness, history array
   - Next Era button: Call `showEra(index + 1)`

### 4.3 `showSummary()` Function
**Purpose:** Display final results

**Logic:**
1. Hide game container
2. Show summary section
3. Build timeline HTML from history array
4. Display final wealth with formatting
5. Setup share button with Web Share API (fallback to alert)

**Share Text Format:**
"I just turned a 1700s village business into a [currentBusiness] worth £[wealth] by surviving every tech revolution! Can you beat me?"

---

## Step 5: Design & Style (`css/style.css`)

**Design Requirements:**
- Dark neon aesthetic (dark background, neon accents)
- Mobile-first responsive design
- Clean, readable typography
- Smooth transitions and hover effects

**Key Components to Style:**

### 5.1 Global Styles
- Reset/normalize
- Dark background (#1a1a2e or similar)
- Neon accent colors (#00ff9d, #ff006e)
- Font stack (system fonts for performance)
- Responsive typography

### 5.2 Landing Page (`index.html`)
- Hero section: centered, large title with highlight
- CTA button: neon border, hover glow effect
- Feature cards: grid layout (2x2 on mobile, 4 columns on desktop)
- Footer: centered, small text

### 5.3 Game Screen (`play.html`)
- Era container: max-width for readability
- Disruption text: highlighted box
- Answer buttons: grid layout, hover states, disabled states
- Pivot cards: clickable cards with hover effects
- Business display: "dying" class with red warning style
- Timeline: vertical list with year markers

### 5.4 Utility Classes
- `.hidden` - display: none
- `.btn-primary` - main CTA button style
- Responsive breakpoints (mobile: 320px, tablet: 768px, desktop: 1024px)

---

## Step 6: Test & Deploy

### 6.1 Local Testing
**Test Cases:**
1. Load landing page - verify all links work
2. Play through all 13 eras - verify:
   - Questions display correctly
   - Wrong answers show feedback
   - Correct answers reveal pivots
   - Pivot selection updates wealth and business
   - All 13 eras flow correctly
3. Summary screen displays:
   - Complete timeline
   - Correct final wealth calculation
4. Share button works (or shows alert fallback)
5. Mobile responsive (test at 375px, 768px, 1024px widths)
6. Verify total bundle size < 100 KB

### 6.2 GitHub Deployment
**Commands:**
```bash
git init
git add .
git commit -m "Initial commit: Pivot or Die game"
git branch -M main
git remote add origin https://github.com/bresleveloper/pivot-or-die.git
git push -u origin main
```

**Enable GitHub Pages:**
1. Go to repository Settings
2. Navigate to Pages section
3. Select "main" branch as source
4. Save and wait for deployment
5. Visit the generated URL

### 6.3 Final Verification
- Game loads at GitHub Pages URL
- All assets load correctly (no 404s)
- Game is playable end-to-end
- Share functionality works
- Mobile responsive on real devices

---

## Success Criteria

✅ All 13 eras are playable
✅ Total bundle size < 100 KB
✅ Zero external dependencies
✅ Mobile-first responsive design
✅ Works offline (after first load)
✅ Smooth user experience with no bugs
✅ Deployed and accessible via GitHub Pages
✅ Share functionality works on mobile and desktop

---

## Notes for AI Code Assistant

- Follow the exact structure from `rag/project.md`
- Use the existing 10 eras in `data/eras1.json` as reference
- Keep code simple and readable (no over-engineering)
- Prioritize performance (vanilla JS, minimal DOM manipulation)
- Test each component before moving to next step
- Use semantic HTML5 elements
- Ensure accessibility (ARIA labels, keyboard navigation)
- Keep file sizes minimal (inline critical CSS if needed)

---

**Total Estimated Development Time:** 4-6 hours
**Difficulty Level:** Intermediate
**Perfect for:** Learning vanilla JavaScript, game development basics, GitHub Pages deployment
