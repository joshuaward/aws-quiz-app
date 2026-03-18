import React from 'react';

export default function Explanation({ isCorrect, correctLabels, answerList, text }) {
  const cls = `explanation explanation--${isCorrect ? 'correct' : 'incorrect'}`;

  return (
    <div className={cls}>
      <div className="explanation__header">
        {isCorrect
          ? '✓ Correct'
          : `✗ Incorrect${correctLabels ? ` — Correct answer: ${correctLabels}` : ''}`}
      </div>

      {answerList && answerList.length > 0 && (
        <div className="explanation__answers">
          <ul>
            {answerList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
