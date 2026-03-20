import React from 'react';
import { TESTS } from '../data/index';

function diffSlug(d) {
  if (d === 'Foundational')  return 'foundational';
  if (d === 'Intermediate')  return 'intermediate';
  if (d === 'Advanced')      return 'advanced';
  if (d === 'Difficult')     return 'difficult';
  if (d === 'Remediation')   return 'remediation';
  return 'moderate';
}

function diffLabel(d) {
  return d === 'Moderate–Difficult' ? 'Mod–Diff' : d;
}

export default function TestList({ onSelectTest, onHistory }) {
  const totalQuestions = TESTS.reduce((sum, t) => sum + t.questions.length, 0);

  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">
          AWS Certified <span>AI Practitioner</span>
        </h1>
        <p className="home__subtitle">AIF-C01 Practice Test Suite</p>

        <div className="home__stats">
          <div className="home__stat">
            <strong>{TESTS.length}</strong>
            <span>Practice Tests</span>
          </div>
          <div className="home__stat">
            <strong>{totalQuestions}</strong>
            <span>Questions</span>
          </div>
          <div className="home__stat">
            <strong>5</strong>
            <span>Exam Domains</span>
          </div>
          <div className="home__stat">
            <strong>700</strong>
            <span>Passing Score</span>
          </div>
        </div>

        <button className="home__history-btn" onClick={onHistory}>
          📊 View Exam History
        </button>
      </div>

      <div className="home__grid">
        {TESTS.map(t => (
          <button
            key={t.id}
            className="test-card"
            onClick={() => onSelectTest(t.id)}
          >
            <div className="test-card__number">Test {t.id}</div>
            <div className="test-card__title">{t.label}</div>
            <div className="test-card__subtitle">{t.subtitle}</div>
            <div className="test-card__meta">
              <span className="test-card__q-count">{t.questions.length} questions</span>
              <span className={`difficulty-badge difficulty-badge--${diffSlug(t.difficulty)}`}>
                {diffLabel(t.difficulty)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
