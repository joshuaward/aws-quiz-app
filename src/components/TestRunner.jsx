import React, { useState, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import ResultsPanel from './ResultsPanel';

// Tag case-study continuation questions so QuestionCard can badge them correctly
function tagCaseStudy(questions) {
  let inCase = false;
  let caseEndId = null;

  return questions.map((q, i) => {
    const tagged = { ...q };
    if (q.caseLabel) {
      inCase = true;
      // Find how many continuation questions follow (caseStudy === null)
      let j = i + 1;
      while (j < questions.length && questions[j].caseStudy === null && !questions[j].caseLabel) {
        j++;
      }
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

export default function TestRunner({ test, onHome }) {
  const questions = tagCaseStudy(test.questions);
  const [results,    setResults]    = useState({});   // { [qId]: bool }
  const [showResults, setShowResults] = useState(false);
  const [runKey,  setRunKey]  = useState(0); // increment to force remount on retake

  const answered    = Object.keys(results).length;
  const allAnswered = answered === questions.length;

  const handleSubmitQ = useCallback((qId, ok) => {
    setResults(prev => ({ ...prev, [qId]: ok }));
  }, []);

  function handleFinish() {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRetake() {
    setResults({});
    setShowResults(false);
    setRunKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (showResults) {
    return (
      <ResultsPanel
        questions={questions}
        results={results}
        onRetake={handleRetake}
        onHome={onHome}
      />
    );
  }

  return (
    <>
      {/* Question list */}
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

      {/* Finish bar */}
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
