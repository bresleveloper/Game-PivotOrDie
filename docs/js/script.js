/**
 * Pivot or Die - Game Logic
 * Educational game exploring 250 years of technological disruption
 */

class PivotOrDieGame {
  constructor() {
    // Game state
    this.eras = [];
    this.currentEraIndex = 0;
    this.wealth = 1000; // Starting wealth in 1780
    this.totalJobsCreated = 0;
    this.totalJobsLost = 0;
    this.correctAnswersCount = 0;
    this.history = []; // Track player choices
    this.quizAnswered = false;

    // Initialize game
    this.init();
  }

  /**
   * Initialize game by loading era data
   */
  async init() {
    try {
      const response = await fetch('./data/eras.json');
      if (!response.ok) throw new Error('Failed to load game data');

      this.eras = await response.json();
      this.startGame();
    } catch (error) {
      console.error('Error loading game:', error);
      alert('Failed to load game data. Please refresh the page.');
    }
  }

  /**
   * Start the game with first era
   */
  startGame() {
    this.currentEraIndex = 0;
    this.wealth = 1000;
    this.totalJobsCreated = 0;
    this.totalJobsLost = 0;
    this.correctAnswersCount = 0;
    this.history = [];

    this.showEraIntro();
    this.updateProgress();
  }

  /**
   * Display current era introduction
   */
  showEraIntro() {
    const era = this.eras[this.currentEraIndex];
    this.quizAnswered = false;

    // Update content
    document.getElementById('eraYear').textContent = era.year;
    document.getElementById('eraName').textContent = era.eraName;
    document.getElementById('eraDescription').textContent = era.description;
    document.getElementById('eraDisruption').textContent = era.disruption;
    document.getElementById('currentWealth').textContent = this.formatCurrency(this.wealth);

    // Show era intro screen
    this.showScreen('eraIntro');
  }

  /**
   * Show quiz section
   */
  showQuiz() {
    const era = this.eras[this.currentEraIndex];

    // Set question
    document.getElementById('quizQuestion').textContent = era.question;

    // Create answer buttons
    const answersContainer = document.getElementById('quizAnswers');
    answersContainer.innerHTML = '';

    era.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.className = 'quiz-answer';
      button.textContent = answer;
      button.onclick = () => this.checkAnswer(index);
      answersContainer.appendChild(button);
    });

    // Clear feedback
    document.getElementById('quizFeedback').innerHTML = '';

    this.showScreen('quizSection');
  }

  /**
   * Check quiz answer
   */
  checkAnswer(selectedIndex) {
    if (this.quizAnswered) return;

    const era = this.eras[this.currentEraIndex];
    const isCorrect = selectedIndex === era.correct;
    const feedback = document.getElementById('quizFeedback');
    const answers = document.querySelectorAll('.quiz-answer');

    // Mark answer as selected
    answers[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');

    // Show correct answer if wrong
    if (!isCorrect) {
      answers[era.correct].classList.add('correct');
    } else {
      this.correctAnswersCount++;
    }

    // Disable all buttons
    answers.forEach(btn => btn.disabled = true);

    // Show feedback
    feedback.innerHTML = `
      <div class="feedback-content ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
        <p class="feedback-title">${isCorrect ? 'Correct!' : 'Not quite.'}</p>
        <p class="feedback-fact">${era.fact}</p>
        <button class="btn btn-primary" onclick="game.showPivots()">Choose Your Pivot</button>
      </div>
    `;

    this.quizAnswered = true;
  }

  /**
   * Show pivot selection screen
   */
  showPivots() {
    const era = this.eras[this.currentEraIndex];
    const pivotsContainer = document.getElementById('pivotOptions');

    pivotsContainer.innerHTML = '';

    era.pivots.forEach((pivot, index) => {
      const card = document.createElement('div');
      card.className = 'pivot-card';
      card.innerHTML = `
        <h3 class="pivot-name">${pivot.name}</h3>
        <div class="pivot-stats">
          <div class="pivot-stat">
            <span class="pivot-stat-label">Wealth Gain</span>
            <span class="pivot-stat-value wealth">${this.formatCurrency(pivot.wealth)}</span>
          </div>
          <div class="pivot-stat">
            <span class="pivot-stat-label">Jobs Created</span>
            <span class="pivot-stat-value positive">+${pivot.jobsCreated.toLocaleString()}</span>
          </div>
          <div class="pivot-stat">
            <span class="pivot-stat-label">Jobs Lost</span>
            <span class="pivot-stat-value negative">-${pivot.jobsLost.toLocaleString()}</span>
          </div>
        </div>
        <button class="btn btn-primary btn-select" onclick="game.selectPivot(${index})">
          Select This Pivot
        </button>
      `;
      pivotsContainer.appendChild(card);
    });

    this.showScreen('pivotSection');
  }

  /**
   * Select a pivot option
   */
  selectPivot(pivotIndex) {
    const era = this.eras[this.currentEraIndex];
    const selectedPivot = era.pivots[pivotIndex];

    // Update game state
    const previousWealth = this.wealth;
    this.wealth += selectedPivot.wealth;
    this.totalJobsCreated += selectedPivot.jobsCreated;
    this.totalJobsLost += selectedPivot.jobsLost;

    // Record history
    this.history.push({
      era: era.eraName,
      year: era.year,
      pivot: selectedPivot.name,
      wealthGained: selectedPivot.wealth,
      jobsCreated: selectedPivot.jobsCreated,
      jobsLost: selectedPivot.jobsLost,
      totalWealth: this.wealth
    });

    // Show summary
    this.showEraSummary(selectedPivot);
  }

  /**
   * Show era summary after pivot selection
   */
  showEraSummary(pivot) {
    const era = this.eras[this.currentEraIndex];

    document.getElementById('wealthGained').textContent = '+' + this.formatCurrency(pivot.wealth);
    document.getElementById('jobsCreated').textContent = '+' + pivot.jobsCreated.toLocaleString();
    document.getElementById('jobsLost').textContent = '-' + pivot.jobsLost.toLocaleString();
    document.getElementById('historicalFact').textContent = era.fact;

    this.showScreen('eraSummary');
  }

  /**
   * Move to next era or show final summary
   */
  nextEra() {
    this.currentEraIndex++;

    if (this.currentEraIndex < this.eras.length) {
      this.updateProgress();
      this.showEraIntro();
    } else {
      this.showFinalSummary();
    }
  }

  /**
   * Show final game summary
   */
  showFinalSummary() {
    document.getElementById('finalWealth').textContent = this.formatCurrency(this.wealth);
    document.getElementById('totalJobsCreated').textContent = this.totalJobsCreated.toLocaleString();
    document.getElementById('totalJobsLost').textContent = this.totalJobsLost.toLocaleString();
    document.getElementById('correctAnswers').textContent = `${this.correctAnswersCount}/${this.eras.length}`;

    // Generate timeline
    this.generateTimeline();

    // Generate share text
    this.generateShareText();

    this.showScreen('finalSummary');
  }

  /**
   * Generate visual timeline of player's journey
   */
  generateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    this.history.forEach((record, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';

      const netJobs = record.jobsCreated - record.jobsLost;
      const jobsClass = netJobs >= 0 ? 'positive' : 'negative';

      item.innerHTML = `
        <div class="timeline-year">${record.year}</div>
        <div class="timeline-content">
          <div class="timeline-era">${record.era}</div>
          <div class="timeline-pivot">${record.pivot}</div>
          <div class="timeline-stats">
            <span class="timeline-wealth">Wealth: ${this.formatCurrency(record.totalWealth)}</span>
            <span class="timeline-jobs ${jobsClass}">
              Net Jobs: ${netJobs >= 0 ? '+' : ''}${netJobs.toLocaleString()}
            </span>
          </div>
        </div>
      `;

      timeline.appendChild(item);
    });
  }

  /**
   * Generate shareable text summary
   */
  generateShareText() {
    const netJobs = this.totalJobsCreated - this.totalJobsLost;
    const accuracy = Math.round((this.correctAnswersCount / this.eras.length) * 100);

    let grade;
    if (this.wealth >= 500000000) grade = 'Master Entrepreneur';
    else if (this.wealth >= 100000000) grade = 'Pivot Expert';
    else if (this.wealth >= 10000000) grade = 'Quick Adapter';
    else if (this.wealth >= 1000000) grade = 'Survivor';
    else grade = 'Struggling';

    const shareText = `I survived 250 years of disruption in Pivot or Die!\n\n` +
      `Final Wealth: ${this.formatCurrency(this.wealth)}\n` +
      `Quiz Accuracy: ${accuracy}%\n` +
      `Grade: ${grade}\n` +
      `Net Jobs Impact: ${netJobs >= 0 ? '+' : ''}${netJobs.toLocaleString()}\n\n` +
      `Can you adapt faster than technology?`;

    document.getElementById('shareText').textContent = shareText;
  }

  /**
   * Share results on Twitter
   */
  shareTwitter() {
    const netJobs = this.totalJobsCreated - this.totalJobsLost;
    const accuracy = Math.round((this.correctAnswersCount / this.eras.length) * 100);

    const tweetText = `I survived 250 years of disruption in Pivot or Die! 🚀\n\n` +
      `💰 Final Wealth: ${this.formatCurrency(this.wealth)}\n` +
      `🎯 Accuracy: ${accuracy}%\n` +
      `📊 Net Jobs: ${netJobs >= 0 ? '+' : ''}${netJobs.toLocaleString()}\n\n` +
      `Can you adapt faster? Play now!`;

    const url = encodeURIComponent(window.location.origin + window.location.pathname);
    const tweet = encodeURIComponent(tweetText);

    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=${url}`, '_blank');
  }

  /**
   * Copy results to clipboard
   */
  async copyResults() {
    const shareText = document.getElementById('shareText').textContent;

    try {
      await navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    } catch (error) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Results copied to clipboard!');
    }
  }

  /**
   * Restart game
   */
  restart() {
    this.startGame();
  }

  /**
   * Update progress bar
   */
  updateProgress() {
    const progress = ((this.currentEraIndex + 1) / this.eras.length) * 100;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (progressBar) {
      progressBar.style.width = progress + '%';
    }

    if (progressText) {
      progressText.textContent = `Era ${this.currentEraIndex + 1} of ${this.eras.length}`;
    }
  }

  /**
   * Show specific game screen
   */
  showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      // Scroll to top of screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Format currency with appropriate suffix
   */
  formatCurrency(amount) {
    if (amount >= 1000000000) {
      return '$' + (amount / 1000000000).toFixed(2) + 'B';
    } else if (amount >= 1000000) {
      return '$' + (amount / 1000000).toFixed(2) + 'M';
    } else if (amount >= 1000) {
      return '$' + (amount / 1000).toFixed(1) + 'K';
    } else {
      return '$' + amount.toLocaleString();
    }
  }
}

// Initialize game when DOM is ready
let game;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    game = new PivotOrDieGame();
  });
} else {
  game = new PivotOrDieGame();
}
