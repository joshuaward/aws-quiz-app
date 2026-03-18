import React from 'react';
import { TESTS } from '../data/index';

function diffSlug(d) {
  if (d === 'Foundational')       return 'foundational';
  if (d === 'Intermediate')       return 'intermediate';
  if (d === 'Advanced')           return 'advanced';
  return 'moderate';
}

function diffLabel(d) {
  return d === 'Moderate–Difficult' ? 'Mod–Diff' : d;
}

export default function TestList({ onSelectTest }) {
  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">
          AWS Certified <span>AI Practitioner</span>
        </h1>
        <p className="home__subtitle">AIF-C01 Practice Test Suite</p>

        <div className="home__stats">
          <div className="home__stat">
            <strong>15</strong>
            <span>Practice Tests</span>
          </div>
          <div className="home__stat">
            <strong>450</strong>
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
              <span className="test-card__q-count">30 questions</span>
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
