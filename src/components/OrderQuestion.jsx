import React from 'react';

const POS_LABELS = ['1st (FIRST)', '2nd', '3rd', '4th (LAST)', '5th'];

export default function OrderQuestion({ question, answer, submitted, onChange }) {
  const { items } = question;

  function handleChange(idx, val) {
    if (submitted) return;
    const next = Array.isArray(answer) ? [...answer] : new Array(items.length).fill('');
    next[idx] = val;
    onChange(next);
  }

  return (
    <>
      <p className="order-hint">▸ Assign a position to each step</p>
      <div className="order-pool">
        {items.map((item, i) => {
          const val = Array.isArray(answer) ? (answer[i] ?? '') : '';
          let rowClass = 'order-item';
          if (submitted) {
            const correct = String(question.correctOrder[i]);
            rowClass += val === correct ? ' order-item--correct' : ' order-item--wrong';
          }

          return (
            <div className={rowClass} key={i}>
              <select
                className="order-select"
                value={val}
                onChange={e => handleChange(i, e.target.value)}
                disabled={submitted}
              >
                <option value="">—</option>
                {items.map((_, k) => (
                  <option key={k} value={String(k)}>{POS_LABELS[k]}</option>
                ))}
              </select>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
