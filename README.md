# AWS AI Practitioner – Practice Test Suite

A React + Vite application with 15 practice tests (450 questions) for the **AWS Certified AI Practitioner (AIF-C01)** exam.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

## Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Framework  | React 18           |
| Build tool | Vite 5             |
| Styles     | SCSS (Sass)        |
| Fonts      | IBM Plex Sans/Mono |

## Project Structure

```
aws-quiz-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root — hamburger nav + routing
    ├── data/
    │   ├── index.js          # Test registry & domain constants
    │   ├── test01.js         # Test 1 questions (30 Qs)
    │   ├── test02.js         # Test 2 questions
    │   │   …
    │   └── test15.js         # Test 15 questions
    ├── components/
    │   ├── NavDrawer.jsx     # Slide-out navigation
    │   ├── TestList.jsx      # Home screen grid
    │   ├── TestRunner.jsx    # Orchestrates a single test
    │   ├── QuestionCard.jsx  # Renders any question type
    │   ├── MatchQuestion.jsx # Matching/dropdown questions
    │   ├── OrderQuestion.jsx # Ordering/ranking questions
    │   ├── Explanation.jsx   # Post-answer explanation block
    │   ├── ResultsPanel.jsx  # Score screen with domain breakdown
    │   ├── ProgressBar.jsx   # Header progress bar
    │   └── DomainTag.jsx     # Colored domain label
    └── scss/
        ├── main.scss         # Imports all partials
        ├── _variables.scss   # Colors, spacing, fonts
        ├── _base.scss        # CSS reset & base typography
        ├── _layout.scss      # App shell, header, home grid
        ├── _nav.scss         # Navigation drawer
        ├── _question.scss    # Question cards & answer types
        └── _results.scss     # Results screen
```

## Exam Details

| Property        | Value                        |
|-----------------|------------------------------|
| Exam code       | AIF-C01                      |
| Questions       | 50 scored + 15 unscored      |
| Passing score   | 700 / 1000 (scaled)          |
| Domain 1        | Fundamentals of AI & ML (20%)|
| Domain 2        | Fundamentals of GenAI (24%)  |
| Domain 3        | Applications of FMs (28%)    |
| Domain 4        | Responsible AI (14%)         |
| Domain 5        | Security & Governance (14%)  |

## Question Types

- **Multiple Choice** – single correct answer
- **Select TWO** – multi-select, all must be chosen
- **Matching** – dropdown selects for each row
- **Ordering** – rank items from first to last
- **Case Study** – 4-question blocks sharing a scenario

## Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder.
