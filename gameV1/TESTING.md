# Testing Checklist for Pivot or Die

## Pre-Launch Testing

### File Integrity
- [x] All HTML files created (index.html, play.html, about.html)
- [x] CSS file created and complete (style.css)
- [x] JavaScript file created (script.js)
- [x] JSON data file created with 13 eras (eras.json)
- [x] Assets created (icons and og-image)
- [x] Total size under 100KB (97KB confirmed)

### JSON Data Validation
- [x] Valid JSON syntax
- [x] 13 eras present (1780-2030)
- [x] Each era has required fields:
  - id, year, eraName
  - description, disruption
  - question, answers (4 choices), correct (index)
  - fact
  - pivots (3 options with name, wealth, jobsCreated, jobsLost)

### Game Flow Testing

#### Homepage (index.html)
- [ ] Page loads correctly
- [ ] Title and tagline display
- [ ] Hero stats show (13 Eras, 1780-2030, 100% Educational)
- [ ] "Start Your Journey" button links to play.html
- [ ] "Learn More" button links to about.html
- [ ] Footer links work

#### About Page (about.html)
- [ ] Page loads correctly
- [ ] All 13 eras listed
- [ ] Navigation links work (Home, Play)
- [ ] Content is readable on mobile

#### Game Page (play.html)
- [ ] Progress bar shows "Era 1 of 13"
- [ ] First era (1780) loads automatically
- [ ] Era description displays correctly
- [ ] "Continue" button advances to quiz

#### Quiz Flow
- [ ] Question displays
- [ ] 4 answer buttons appear
- [ ] Clicking answer shows correct/incorrect
- [ ] Correct answer highlighted in green
- [ ] Incorrect selection highlighted in red
- [ ] Historical fact displays after answer
- [ ] "Choose Your Pivot" button appears

#### Pivot Selection
- [ ] 3 pivot cards display
- [ ] Each card shows:
  - Pivot name
  - Wealth gain
  - Jobs created
  - Jobs lost
- [ ] Clicking "Select This Pivot" advances to summary

#### Era Summary
- [ ] Wealth gained displays
- [ ] Jobs created displays (positive)
- [ ] Jobs lost displays (negative)
- [ ] Historical fact shows
- [ ] "Continue to Next Era" button works

#### Era Progression
- [ ] Progress bar updates after each era
- [ ] Era 2, 3, 4... load in sequence
- [ ] Wealth accumulates correctly
- [ ] All 13 eras play through

#### Final Summary
- [ ] Displays after Era 13 complete
- [ ] Shows final wealth
- [ ] Shows total jobs created
- [ ] Shows total jobs lost
- [ ] Shows correct answers count
- [ ] Timeline visualizes all 13 eras with choices
- [ ] Share text generates
- [ ] "Share on Twitter" opens Twitter with pre-filled text
- [ ] "Copy Results" copies to clipboard
- [ ] "Play Again" restarts game
- [ ] "Back to Home" returns to index

### Visual/UX Testing

#### Desktop (1920x1080)
- [ ] Layout looks clean and centered
- [ ] Neon colors (#00ff9d, #ff006e, #00d4ff) display
- [ ] Dark background (#0a0e27) renders
- [ ] Button hover effects work
- [ ] Glow effects visible on primary elements
- [ ] No horizontal scrolling

#### Tablet (768px)
- [ ] Responsive layout adapts
- [ ] Text remains readable
- [ ] Buttons stay clickable
- [ ] Cards stack properly
- [ ] No layout breaking

#### Mobile (375px)
- [ ] Mobile-first design works
- [ ] Single column layout
- [ ] Text size appropriate
- [ ] Touch targets large enough (min 44px)
- [ ] No zoom required
- [ ] Timeline readable

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Focus states visible
- [ ] Semantic HTML used
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Works without JavaScript (shows error message)

### Performance Testing
- [ ] Page loads in < 1 second on broadband
- [ ] No console errors in Chrome DevTools
- [ ] No console errors in Firefox
- [ ] No console errors in Safari
- [ ] Smooth animations (no jank)
- [ ] Quiz answer response is instant

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

### Data Accuracy Testing

#### Sample Checks
- [ ] Era 1 (1780): Handloom weavers fact is accurate
- [ ] Era 6 (1995): Travel agents decline numbers check out
- [ ] Era 7 (2007): iPhone launch year correct
- [ ] Era 11 (2020): ChatGPT/AI facts reasonable
- [ ] Era 13 (2030): Clearly marked as "projected"

#### Wealth Progression
- [ ] Starts at $1,000 (1780)
- [ ] Grows realistically through eras
- [ ] Can reach hundreds of millions by 2030
- [ ] No negative wealth bugs

#### Jobs Impact
- [ ] Net jobs can be positive or negative
- [ ] Numbers scale realistically with era
- [ ] Early eras: hundreds of jobs
- [ ] Later eras: thousands of jobs
- [ ] Totals calculate correctly

### Edge Cases
- [ ] Clicking same answer twice doesn't break quiz
- [ ] Fast clicking doesn't create race conditions
- [ ] Refresh during game doesn't cause errors
- [ ] Going back in browser doesn't break state
- [ ] Works with adblockers enabled

### Share Functionality
- [ ] Twitter share includes:
  - Game title
  - Final wealth
  - Accuracy percentage
  - Net jobs impact
  - URL to game
- [ ] Copy to clipboard works in:
  - Chrome
  - Firefox
  - Safari
  - Mobile browsers

### Polish & Details
- [ ] No typos in text content
- [ ] Grammar is correct
- [ ] Numbers formatted with commas (1,000 not 1000)
- [ ] Currency formatted correctly ($1.5M not $1500000)
- [ ] Years display without commas (2030 not 2,030)
- [ ] Era names capitalized consistently

## Known Issues to Fix

List any issues found during testing:

1. _None yet - complete testing first_

## Launch Readiness

- [ ] All critical tests pass
- [ ] All major browsers work
- [ ] Mobile experience is good
- [ ] No console errors
- [ ] Educational content is accurate
- [ ] Game is fun and engaging

## Post-Launch Monitoring

- [ ] Collect user feedback
- [ ] Monitor for bug reports
- [ ] Track completion rates
- [ ] Gather suggestions for improvements

---

**Testing completed by:** _[Name]_
**Date:** _[Date]_
**Ready for launch:** _[Yes/No]_
