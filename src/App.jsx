import React, { useState, useCallback } from 'react';
import NavDrawer    from './components/NavDrawer';
import TestList     from './components/TestList';
import TestRunner   from './components/TestRunner';
import HistoryPanel from './components/HistoryPanel';
import ReviewPanel  from './components/ReviewPanel';
import ProgressBar  from './components/ProgressBar';
import { TESTS }    from './data/index';
import { tagCaseStudy } from './components/TestRunner';

const VIEW_HOME    = 'home';
const VIEW_TEST    = 'test';
const VIEW_HISTORY = 'history';
const VIEW_REVIEW_ATTEMPT = 'review_attempt'; // reviewing a historical attempt

export default function App() {
  const [view,           setView]          = useState(VIEW_HOME);
  const [activeTestId,   setActiveTestId]  = useState(null);
  const [answered,       setAnswered]      = useState(0);
  const [navOpen,        setNavOpen]       = useState(false);
  // For reviewing a historical attempt from the history panel
  const [reviewRecord,   setReviewRecord]  = useState(null);

  const activeTest = activeTestId ? TESTS.find(t => t.id === activeTestId) : null;
  const total      = activeTest ? activeTest.questions.length : 0;

  const handleSelectTest = useCallback((id) => {
    setActiveTestId(id);
    setAnswered(0);
    setView(VIEW_TEST);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleHome = useCallback(() => {
    setView(VIEW_HOME);
    setActiveTestId(null);
    setAnswered(0);
    setReviewRecord(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleHistory = useCallback(() => {
    setView(VIEW_HISTORY);
    setActiveTestId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Called from HistoryPanel when user clicks "Review Answers" on a past attempt
  function handleReviewAttempt(record) {
    setReviewRecord(record);
    setView(VIEW_REVIEW_ATTEMPT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Build tagged questions for a historical review
  const reviewQuestions = reviewRecord
    ? tagCaseStudy(TESTS.find(t => t.id === reviewRecord.testId)?.questions || [])
    : [];

  const showProgress = view === VIEW_TEST && activeTest;

  return (
    <div className="app">
      <header className="app-header">
        <button
          className={`app-header__hamburger${navOpen ? ' open' : ''}`}
          onClick={() => setNavOpen(o => !o)}
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
        >
          <span /><span /><span />
        </button>

        <div className="app-header__logo">
          <span className="app-header__badge">AIF-C01</span>
          <h1 className="app-header__title">
            AWS Certified <span>AI Practitioner</span>
          </h1>
        </div>

        {showProgress && <ProgressBar answered={answered} total={total} />}
      </header>

      <div className="app-body">
        <NavDrawer
          isOpen={navOpen}
          activeTestId={activeTestId}
          currentView={view}
          onSelectTest={(id) => { handleSelectTest(id); setNavOpen(false); }}
          onHome={() => { handleHome(); setNavOpen(false); }}
          onHistory={() => { handleHistory(); setNavOpen(false); }}
          onClose={() => setNavOpen(false)}
        />

        <main className="app-main">
          <div className="app-main__inner">
            {view === VIEW_HOME && (
              <TestList onSelectTest={handleSelectTest} onHistory={handleHistory} />
            )}
            {view === VIEW_TEST && activeTest && (
              <TestRunner
                key={activeTestId}
                test={activeTest}
                onHome={handleHome}
                onAnswered={setAnswered}
              />
            )}
            {view === VIEW_HISTORY && (
              <HistoryPanel
                onReviewAttempt={handleReviewAttempt}
                onHome={handleHome}
              />
            )}
            {view === VIEW_REVIEW_ATTEMPT && reviewRecord && (
              <ReviewPanel
                questions={reviewQuestions}
                answers={reviewRecord.answers}
                results={reviewRecord.results}
                onBack={() => setView(VIEW_HISTORY)}
                onRetake={() => handleSelectTest(reviewRecord.testId)}
                onHome={handleHome}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
