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

export default function NavDrawer({ isOpen, activeTestId, currentView, onSelectTest, onHome, onHistory, onClose }) {
  return (
    <>
      <div
        className={`nav-overlay${isOpen ? ' visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav className={`nav-drawer${isOpen ? ' open' : ''}`} aria-label="Test navigation">
        <div className="nav-drawer__header">
          <div className="nav-drawer__heading">AIF-C01 Practice Tests</div>
          <button className="nav-drawer__home-btn" onClick={onHome}>
            ⌂ All Tests
          </button>
        </div>

        <div className="nav-drawer__scroll">
          {/* History link */}
          <button
            className={`nav-drawer__item nav-drawer__item--history${currentView === 'history' ? ' active' : ''}`}
            onClick={onHistory}
          >
            <span className="nav-drawer__item-number">📊</span>
            <span className="nav-drawer__item-label">Exam History</span>
          </button>

          <div className="nav-drawer__divider" />

          <div className="nav-drawer__section-label">Tests 1–9 · Standard</div>
          {TESTS.slice(0, 9).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => onSelectTest(t.id)}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className={`nav-drawer__item-diff difficulty-badge--${diffSlug(t.difficulty)}`}>
                {t.difficulty}
              </span>
            </button>
          ))}

          <div className="nav-drawer__section-label" style={{ marginTop: '0.75rem' }}>
            Tests 10–15 · Exam Format
          </div>
          {TESTS.slice(9, 15).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => onSelectTest(t.id)}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className="nav-drawer__item-diff difficulty-badge--moderate">Mod–Diff</span>
            </button>
          ))}

          <div className="nav-drawer__section-label" style={{ marginTop: '0.75rem' }}>
            Tests 16–18 · Difficult
          </div>
          {TESTS.slice(15, 18).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => onSelectTest(t.id)}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className="nav-drawer__item-diff difficulty-badge--difficult">Difficult</span>
            </button>
          ))}

          <div className="nav-drawer__section-label" style={{ marginTop: '0.75rem' }}>
            Tests 19–20 · Remediation
          </div>
          {TESTS.slice(18).map(t => (
            <button
              key={t.id}
              className={`nav-drawer__item${activeTestId === t.id ? ' active' : ''}`}
              onClick={() => onSelectTest(t.id)}
            >
              <span className="nav-drawer__item-number">T{t.id}</span>
              <span className="nav-drawer__item-label">{t.subtitle}</span>
              <span className="nav-drawer__item-diff difficulty-badge--remediation">Focus</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
