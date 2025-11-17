# Pivot or Die

**250 years of technological disruption. Can you adapt fast enough?**

An educational game exploring how entrepreneurs must constantly pivot as technology destroys industries — from steam looms (1780) to autonomous AI (2030).

## Quick Start

1. Open `index.html` in any modern web browser
2. Click "Start Your Journey"
3. Experience 13 eras of disruption
4. Make strategic pivots to survive

## Features

- **Zero Dependencies**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Ultra-Lightweight**: Under 100 KB total size
- **Mobile-First**: Responsive design works on all devices
- **Educational**: Real historical data and economic insights
- **Engaging**: Quiz questions, strategic choices, timeline visualization

## Game Structure

### 13 Historical Eras

1. **1780** - Pre-Industrial Village (Steam looms)
2. **1890** - Electrification Begins (Electric lights)
3. **1900** - Age of the Automobile (Cars replace horses)
4. **1980** - Personal Computers (PCs eliminate typing pools)
5. **1985** - Office Software Revolution (Excel automates bookkeeping)
6. **1995** - The Internet Arrives (Online booking)
7. **2007** - Smartphone Revolution (iPhone convergence)
8. **2010** - Cloud Computing (AWS disrupts datacenters)
9. **2012** - Social Media Dominance (Facebook Ads)
10. **2016** - Gig Economy Explosion (Uber/DoorDash)
11. **2020** - Generative AI Explosion (ChatGPT/Midjourney)
12. **2025** - Autonomous Everything (Self-improving AI)
13. **2030** - AI-Native World (Autonomous companies)

### Gameplay Loop

Each era follows the same pattern:

1. **Scenario**: Learn about your current business and the disruption
2. **Quiz**: Answer a knowledge question about the technological change
3. **Pivot**: Choose from 3 strategic business pivots
4. **Impact**: See wealth gained, jobs created, and jobs lost
5. **Progress**: Move to the next era

### Game Mechanics

- **Starting Wealth**: $1,000 (1780)
- **Wealth Progression**: Compounds realistically over 250 years
- **Jobs Impact**: Track both jobs created and destroyed
- **Historical Facts**: Learn real economic data after each quiz
- **Final Summary**: Timeline of your journey, shareable results

## File Structure

```
gameV1/
├── index.html          # Home page
├── play.html           # Game interface
├── about.html          # About/educational content
├── css/
│   └── style.css       # Dark neon theme, mobile-first
├── js/
│   └── script.js       # Complete game logic
├── data/
│   └── eras.json       # All 13 eras with historical data
├── assets/
│   ├── icon.png        # Favicon
│   ├── icon.svg        # SVG icon
│   └── og-image.png    # Social sharing image
└── README.md           # This file
```

## Technical Details

### Technologies

- **HTML5**: Semantic markup, modern features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES2015+, async/await, Fetch API

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

### Size Budget

- **Total**: < 100 KB
- HTML: ~15 KB
- CSS: ~25 KB
- JavaScript: ~10 KB
- JSON Data: ~15 KB
- Assets: ~35 KB

### Performance

- Zero external dependencies
- Instant loading (< 100 KB)
- No build step required
- Works offline after first load

## Educational Use

**Pivot or Die** is designed for:

- Economics and business classes
- History courses (Industrial Revolution to AI)
- Entrepreneurship programs
- Future of work discussions
- Self-directed learning

**Recommended Ages**: 14+

**Average Playtime**: 15-20 minutes

## Key Learning Objectives

1. **Historical Literacy**: Understand major technological disruptions
2. **Pattern Recognition**: Identify common themes across eras
3. **Economic Awareness**: Learn about job creation/destruction
4. **Strategic Thinking**: Make business pivot decisions
5. **Future Preparedness**: Apply lessons to coming disruptions

## Data Sources

All historical scenarios are based on real economic data:

- Job market statistics from labor departments
- Industry transition timelines
- Wealth accumulation patterns
- Technological adoption rates

Future eras (2025-2030) are clearly marked as projections based on current trends and expert analysis.

## Customization

### Modify Eras

Edit `data/eras.json` to change scenarios, add eras, or update facts.

### Change Theme

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --color-primary: #00ff9d;    /* Neon green */
  --color-secondary: #ff006e;  /* Neon pink */
  --color-accent: #00d4ff;     /* Neon cyan */
}
```

### Adjust Difficulty

Modify starting wealth, wealth multipliers, or quiz difficulty in `js/script.js`.

## License

This is an educational project. Free to use in classrooms and educational settings.

For commercial use or redistribution, please contact the creator.

## Credits

Created in 2025 as an educational exploration of technological disruption and economic adaptation.

Built with patience, minimalism, and respect for historical complexity.

## Contributing

Suggestions for improving historical accuracy or educational value are welcome.

## Support

For questions or feedback, open an issue on the GitHub repository.

---

**Can you survive 250 years of disruption?**

Play now and find out.
