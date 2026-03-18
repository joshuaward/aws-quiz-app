import React from 'react';
import { TESTS } from '../data/index';

function diffSlug(d) {
  if (d === 'Foundational')       return 'foundational';
  if (d === 'Intermediate')       return 'intermediate';
  if (d === 'Advanced')           return 'advanced';
  return 'moderate';
}

export default function NavDrawer({ isOpen, activeTestId, onSelectTest, onHome, onClose }) {
  return (
    <>
      {/* Backdrop (mobile) */}
      <div
        className={`nav-overlay${isOpen ? ' visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav className={`nav-drawer${isOpen ? ' open' : ''}`} aria-label="Test navigation">
        <div className="nav-drawer__header">
          <div className="nav-drawer__heading">AIF-C01 Practice Tests</div>
          <button className="nav-drawer__home-btn" onClick={() => { onHome(); onClose(); }}>
            ⌂ All Tests
          </button>
        </div>

        <div className="nav-drawer__scroll">
          <div className="nav-drawer__section-label">Tests 1 – 9 · Standard</div>
          {TESTS.slice(0, 9).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => { onSelectTest(t.id); onClose(); }}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className={`nav-drawer__item-diff difficulty-badge--${diffSlug(t.difficulty)}`}>
                {t.difficulty}
              </span>
            </button>
          ))}

          <div className="nav-drawer__section-label" style={{ marginTop: '0.75rem' }}>
            Tests 10 – 15 · Exam Format
          </div>
          {TESTS.slice(9).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => { onSelectTest(t.id); onClose(); }}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className="nav-drawer__item-diff difficulty-badge--moderate">
                Mod–Diff
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
