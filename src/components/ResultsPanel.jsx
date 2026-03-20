import React from 'react';
import { DOMAIN_SHORT, DOMAIN_COLORS } from '../data/index';

export default function ResultsPanel({ questions, results, onRetake, onReview, onHome }) {
  let correct = 0;
  const domainStats = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 4: { c: 0, t: 0 }, 5: { c: 0, t: 0 } };

  questions.forEach(q => {
    const d = q.domain;
    if (domainStats[d]) domainStats[d].t++;
    if (results[q.id]) {
      correct++;
      if (domainStats[d]) domainStats[d].c++;
    }
  });

  const total  = questions.length;
  const pct    = Math.round((correct / total) * 100);
  const scaled = Math.round(100 + (pct / 100) * 900);
  const pass   = scaled >= 700;
  const wrong  = total - correct;

  return (
    <div className="results">
      <div className="results__label">Your Score</div>
      <div className="results__score">{correct}/{total}</div>
      <div className="results__scaled">
        Scaled Score: <strong>{scaled}</strong> / 1000 &nbsp;|&nbsp; Passing: 700
      </div>

      <div className={`results__verdict results__verdict--${pass ? 'pass' : 'fail'}`}>
        {pass ? 'PASS' : 'FAIL'}
      </div>

      {/* Quick wrong/correct summary */}
      <div className="results__summary">
        <div className="results__summary-item results__summary-item--correct">
          <span className="results__summary-num">{correct}</span>
          <span className="results__summary-lbl">Correct</span>
        </div>
        <div className="results__summary-divider" />
        <div className="results__summary-item results__summary-item--wrong">
          <span className="results__summary-num">{wrong}</span>
          <span className="results__summary-lbl">Incorrect</span>
        </div>
      </div>

      <div className="results__breakdown">
        {Object.entries(domainStats).map(([d, s]) => {
          const dp = s.t > 0 ? Math.round((s.c / s.t) * 100) : 0;
          return (
            <div key={d} className="results__domain-card">
              <div className="results__domain-name">{DOMAIN_SHORT[d]}</div>
              <div className="results__domain-score">{s.c}/{s.t}</div>
              <div className="results__domain-bar">
                <div
                  className="results__domain-fill"
                  style={{ width: `${dp}%`, background: DOMAIN_COLORS[d] }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="results__message">
        {pass
          ? 'Excellent work! You are well-prepared for the AIF-C01 exam.'
          : 'Review the domains where you scored below 70% and try again.'}
      </p>

      <div className="results__actions">
        {/* Primary: Review answers */}
        <button className="results__review-btn" onClick={onReview}>
          📋 Review Answers
        </button>
        <button className="results__retake-btn" onClick={onRetake}>
          ↺ Retake Test
        </button>
        <button className="results__home-btn" onClick={onHome}>
          ⌂ All Tests
        </button>
      </div>
    </div>
  );
}
