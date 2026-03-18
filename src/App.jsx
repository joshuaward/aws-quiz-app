import React, { useState, useCallback } from 'react';
import NavDrawer from './components/NavDrawer';
import TestList from './components/TestList';
import TestRunner from './components/TestRunner';
import ProgressBar from './components/ProgressBar';
import { TESTS } from './data/index';

export default function App() {
  const [navOpen,      setNavOpen]      = useState(false);
  const [activeTestId, setActiveTestId] = useState(null);  // null = home
  const [answered,     setAnswered]     = useState(0);

  const activeTest = activeTestId ? TESTS.find(t => t.id === activeTestId) : null;
  const total      = activeTest ? activeTest.questions.length : 0;

  const handleSelectTest = useCallback((id) => {
    setActiveTestId(id);
    setAnswered(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleHome = useCallback(() => {
    setActiveTestId(null);
    setAnswered(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <button
          className={`app-header__hamburger${navOpen ? ' open' : ''}`}
          onClick={() => setNavOpen(o => !o)}
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="app-header__logo">
          <span className="app-header__badge">AIF-C01</span>
          <h1 className="app-header__title">
            AWS Certified <span>AI Practitioner</span>
          </h1>
        </div>

        {activeTest && (
          <ProgressBar answered={answered} total={total} />
        )}
      </header>

      {/* ── Body ── */}
      <div className="app-body">
        <NavDrawer
          isOpen={navOpen}
          activeTestId={activeTestId}
          onSelectTest={handleSelectTest}
          onHome={handleHome}
          onClose={() => setNavOpen(false)}
        />

        <main className="app-main">
          <div className="app-main__inner">
            {!activeTest ? (
              <TestList onSelectTest={handleSelectTest} />
            ) : (
              <TestRunner
                key={activeTestId}
                test={activeTest}
                onHome={handleHome}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
