import React from 'react';

export default function ProgressBar({ answered, total }) {
  const pct = total > 0 ? (answered / total) * 100 : 0;
  return (
    <div className="app-header__progress">
      <div className="app-header__progress-bar">
        <div className="app-header__progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="app-header__progress-text">{answered} / {total}</span>
    </div>
  );
}
