import React from 'react';

export default function MatchQuestion({ question, answer, submitted, onChange }) {
  const { items, choices } = question;

  function handleChange(idx, val) {
    if (submitted) return;
    const next = Array.isArray(answer) ? [...answer] : new Array(items.length).fill('');
    next[idx] = val;
    onChange(next);
  }

  return (
    <div className="match-grid">
      <div className="match-header">
        <span className="match-col-label">Description</span>
        <span className="match-col-label">Select Answer</span>
      </div>

      {items.map((item, i) => {
        const selected = Array.isArray(answer) ? (answer[i] || '') : '';
        let selClass = '';
        if (submitted) {
          const correct = choices[question.correct[i]];
          selClass = selected === correct ? 'match-select--correct' : 'match-select--wrong';
        }

        return (
          <div className="match-row" key={i}>
            <div className="match-description">{item}</div>
            <select
              className={`match-select ${selClass}`}
              value={selected}
              onChange={e => handleChange(i, e.target.value)}
              disabled={submitted}
            >
              <option value="">— Select —</option>
              {choices.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}
