import React, { useState, useCallback, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ResultsPanel from './ResultsPanel';
import ReviewPanel  from './ReviewPanel';
import { saveAttempt } from '../utils/history';

function tagCaseStudy(questions) {
  let inCase = false;
  let caseEndId = null;
  return questions.map((q, i) => {
    const tagged = { ...q };
    if (q.caseLabel) {
      inCase = true;
      let j = i + 1;
      while (j < questions.length && questions[j].caseStudy === null && !questions[j].caseLabel) j++;
      caseEndId = questions[j - 1]?.id;
    } else if (inCase && q.caseStudy === null && !q.caseLabel) {
      tagged._isCaseCont = true;
      if (q.id === caseEndId) inCase = false;
    } else {
      inCase = false;
    }
    return tagged;
  });
}

const VIEW_TEST    = 'test';
const VIEW_RESULTS = 'results';
const VIEW_REVIEW  = 'review';

export default function TestRunner({ test, onHome, onAnswered }) {
  const questions = tagCaseStudy(test.questions);

  const [answers,  setAnswers]  = useState({});
  const [results,  setResults]  = useState({});
  const [view,     setView]     = useState(VIEW_TEST);
  const [runKey,   setRunKey]   = useState(0);

  const answered    = Object.keys(results).length;
  const allAnswered = answered === questions.length;

  // Keep parent progress bar in sync
  useEffect(() => {
    onAnswered?.(answered);
  }, [answered, onAnswered]);

  const handleSubmitQ = useCallback((qId, userAnswer, ok) => {
    setAnswers(prev => ({ ...prev, [qId]: userAnswer }));
    setResults(prev => ({ ...prev, [qId]: ok }));
  }, []);

  function handleFinish() {
    // Save attempt to history before showing results
    saveAttempt({ test, questions, answers, results });
    setView(VIEW_RESULTS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleReview() {
    setView(VIEW_REVIEW);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBackToResults() {
    setView(VIEW_RESULTS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRetake() {
    setAnswers({});
    setResults({});
    setView(VIEW_TEST);
    setRunKey(k => k + 1);
    onAnswered?.(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (view === VIEW_RESULTS) {
    return (
      <ResultsPanel
        questions={questions}
        results={results}
        onRetake={handleRetake}
        onReview={handleReview}
        onHome={onHome}
      />
    );
  }

  if (view === VIEW_REVIEW) {
    return (
      <ReviewPanel
        questions={questions}
        answers={answers}
        results={results}
        onBack={handleBackToResults}
        onRetake={handleRetake}
        onHome={onHome}
      />
    );
  }

  return (
    <>
      <div key={runKey}>
        {questions.map((q, i) => (
          <QuestionCard
            key={`${runKey}-${q.id}`}
            question={q}
            index={i}
            total={questions.length}
            onSubmit={handleSubmitQ}
          />
        ))}
      </div>

      <div className="finish-bar">
        <div className="finish-bar__info">
          Answered: <strong>{answered}</strong> / {questions.length}
        </div>
        <button
          className="finish-bar__btn"
          disabled={!allAnswered}
          onClick={handleFinish}
        >
          Submit Test
        </button>
      </div>
    </>
  );
}

export { tagCaseStudy };
