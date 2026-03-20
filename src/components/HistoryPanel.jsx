import React, { useState, useEffect, useRef } from 'react';
import {
  loadHistory, deleteAttempt, clearHistory,
  exportHistory, importHistory,
  getFocusDomains, formatTimestamp, scaledLabel,
  DOMAIN_LABELS,
} from '../utils/history';

// ── Small domain pill ──────────────────────────────────────
function DomainPill({ label, pct }) {
  const slug =
    pct >= 0.9 ? 'excellent' :
    pct >= 0.7 ? 'good' :
    pct >= 0.5 ? 'warn' : 'poor';
  return (
    <span className={`domain-pill domain-pill--${slug}`} title={`${Math.round(pct * 100)}%`}>
      {label.split(' ')[0]}
    </span>
  );
}

// ── Expandable row detail ──────────────────────────────────
function ExpandedRow({ record, onReview, onDelete }) {
  const focusDomains = getFocusDomains(record.domainScores);

  return (
    <tr className="history-table__expanded">
      <td colSpan={6}>
        <div className="history-expand">
          {/* Domain breakdown grid */}
          <div className="history-expand__domains">
            {Object.entries(record.domainScores).map(([d, s]) => {
              const pct = s.total > 0 ? s.correct / s.total : 0;
              const pctPct = Math.round(pct * 100);
              const needsFocus = pct < 0.7 && s.total > 0;
              return (
                <div key={d} className={`history-domain-card${needsFocus ? ' history-domain-card--focus' : ''}`}>
                  <div className="history-domain-card__name">{DOMAIN_LABELS[d]}</div>
                  <div className="history-domain-card__score">{s.correct}/{s.total}</div>
                  <div className="history-domain-card__bar">
                    <div
                      className="history-domain-card__fill"
                      style={{ width: `${pctPct}%` }}
                      data-pct={pctPct}
                    />
                  </div>
                  {needsFocus && (
                    <div className="history-domain-card__flag">⚠ Needs Focus</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="history-expand__actions">
            {record.answers && record.results && (
              <button className="history-expand__btn history-expand__btn--review" onClick={() => onReview(record)}>
                📋 Review Answers
              </button>
            )}
            <button className="history-expand__btn history-expand__btn--delete" onClick={() => onDelete(record.id)}>
              🗑 Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

// ── Main HistoryPanel ──────────────────────────────────────
export default function HistoryPanel({ onReviewAttempt, onHome }) {
  const [records,    setRecords]    = useState([]);
  const [expanded,   setExpanded]   = useState(null);  // record id
  const [sortCol,    setSortCol]    = useState('timestamp');
  const [sortDir,    setSortDir]    = useState('desc');
  const [filterTest, setFilterTest] = useState('all');
  const [confirmClear, setConfirmClear] = useState(false);
  const importRef = useRef(null);

  useEffect(() => {
    setRecords(loadHistory());
  }, []);

  // ── Derived data ───────────────────────────────────────
  const testOptions = [...new Set(records.map(r => r.testLabel))].sort();

  const filtered = records.filter(r =>
    filterTest === 'all' || r.testLabel === filterTest
  );

  const sorted = [...filtered].sort((a, b) => {
    let av, bv;
    if (sortCol === 'timestamp') { av = new Date(a.timestamp); bv = new Date(b.timestamp); }
    else if (sortCol === 'scaled') { av = a.scaled; bv = b.scaled; }
    else if (sortCol === 'score') { av = a.correct / a.total; bv = b.correct / b.total; }
    else if (sortCol === 'test') { av = a.testId; bv = b.testId; }
    else { av = a[sortCol]; bv = b[sortCol]; }
    return sortDir === 'asc' ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1);
  });

  // ── Aggregate stats ────────────────────────────────────
  const avgScaled = records.length
    ? Math.round(records.reduce((s, r) => s + r.scaled, 0) / records.length)
    : 0;
  const passCount = records.filter(r => r.passed).length;
  const bestScaled = records.length ? Math.max(...records.map(r => r.scaled)) : 0;

  // ── Domain focus aggregation across all records ────────
  const domainTotals = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 4: { c: 0, t: 0 }, 5: { c: 0, t: 0 } };
  records.forEach(r => {
    Object.entries(r.domainScores).forEach(([d, s]) => {
      if (domainTotals[d]) { domainTotals[d].c += s.correct; domainTotals[d].t += s.total; }
    });
  });

  // ── Handlers ───────────────────────────────────────────
  function handleSort(col) {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('desc'); }
  }

  function handleDelete(id) {
    deleteAttempt(id);
    setRecords(loadHistory());
    if (expanded === id) setExpanded(null);
  }

  function handleClear() {
    if (confirmClear) {
      clearHistory();
      setRecords([]);
      setExpanded(null);
      setConfirmClear(false);
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
    }
  }

  function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    importHistory(file).then(count => {
      setRecords(loadHistory());
      alert(`Imported ${count} total records.`);
    }).catch(() => alert('Import failed — invalid file format.'));
    e.target.value = '';
  }

  function SortIcon({ col }) {
    if (sortCol !== col) return <span className="sort-icon">↕</span>;
    return <span className="sort-icon sort-icon--active">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  }

  // ── Empty state ────────────────────────────────────────
  if (records.length === 0) {
    return (
      <div className="history-panel">
        <div className="history-panel__header">
          <h2 className="history-panel__title">Exam History</h2>
          <button className="history-panel__home" onClick={onHome}>⌂ All Tests</button>
        </div>
        <div className="history-empty">
          <div className="history-empty__icon">↺</div>
          <p>No exam attempts yet.</p>
          <p>Complete a practice test to see your results here.</p>
          <div className="history-empty__actions">
            <button className="history-panel__import-btn" onClick={() => importRef.current?.click()}>
              ⬆ Import History
            </button>
            <input ref={importRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
          </div>
          <button className="history-empty__cta" onClick={onHome}>Start a Test →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="history-panel">

      {/* ── Header ── */}
      <div className="history-panel__header">
        <h2 className="history-panel__title">Exam History</h2>
        <div className="history-panel__header-actions">
          <button className="history-panel__export-btn" onClick={exportHistory} title="Export history as JSON">
            ⬇ Export
          </button>
          <button className="history-panel__import-btn" onClick={() => importRef.current?.click()} title="Import history from JSON">
            ⬆ Import
          </button>
          <input ref={importRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
          <button
            className={`history-panel__clear-btn${confirmClear ? ' confirm' : ''}`}
            onClick={handleClear}
            title="Clear all history"
          >
            {confirmClear ? '⚠ Confirm Clear' : '🗑 Clear All'}
          </button>
          <button className="history-panel__home" onClick={onHome}>⌂ All Tests</button>
        </div>
      </div>

      {/* ── Summary stats ── */}
      <div className="history-stats">
        <div className="history-stat">
          <span className="history-stat__val">{records.length}</span>
          <span className="history-stat__lbl">Attempts</span>
        </div>
        <div className="history-stat">
          <span className="history-stat__val">{avgScaled}</span>
          <span className="history-stat__lbl">Avg Score</span>
        </div>
        <div className="history-stat">
          <span className="history-stat__val">{bestScaled}</span>
          <span className="history-stat__lbl">Best Score</span>
        </div>
        <div className="history-stat">
          <span className="history-stat__val">{passCount}/{records.length}</span>
          <span className="history-stat__lbl">Passes</span>
        </div>
      </div>

      {/* ── Overall domain health ── */}
      <div className="history-domain-health">
        <div className="history-domain-health__label">Overall Domain Performance</div>
        <div className="history-domain-health__bars">
          {Object.entries(domainTotals).map(([d, s]) => {
            const pct = s.t > 0 ? s.c / s.t : 0;
            const pctPct = Math.round(pct * 100);
            const needsFocus = pct < 0.7 && s.t > 0;
            return (
              <div key={d} className="history-domain-bar">
                <div className="history-domain-bar__name">
                  {DOMAIN_LABELS[d].split(':')[0]}
                  {needsFocus && <span className="focus-flag">⚠</span>}
                </div>
                <div className="history-domain-bar__track">
                  <div
                    className={`history-domain-bar__fill${needsFocus ? ' history-domain-bar__fill--warn' : ''}`}
                    style={{ width: `${pctPct}%` }}
                  />
                </div>
                <div className="history-domain-bar__pct">{pctPct}%</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Filter ── */}
      <div className="history-filter">
        <label htmlFor="testFilter">Filter by test:</label>
        <select
          id="testFilter"
          value={filterTest}
          onChange={e => { setFilterTest(e.target.value); setExpanded(null); }}
        >
          <option value="all">All Tests ({records.length})</option>
          {testOptions.map(label => (
            <option key={label} value={label}>
              {label} ({records.filter(r => r.testLabel === label).length})
            </option>
          ))}
        </select>
        <span className="history-filter__count">{sorted.length} record{sorted.length !== 1 ? 's' : ''}</span>
      </div>

      {/* ── Table ── */}
      <div className="history-table-wrap">
        <table className="history-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('timestamp')} className="sortable">
                Date &amp; Time <SortIcon col="timestamp" />
              </th>
              <th onClick={() => handleSort('test')} className="sortable">
                Test <SortIcon col="test" />
              </th>
              <th onClick={() => handleSort('score')} className="sortable">
                Score <SortIcon col="score" />
              </th>
              <th onClick={() => handleSort('scaled')} className="sortable">
                Scaled <SortIcon col="scaled" />
              </th>
              <th>Pass/Fail</th>
              <th>Needs Focus</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(record => {
              const focusDomains = getFocusDomains(record.domainScores);
              const isExpanded   = expanded === record.id;
              const pct          = record.correct / record.total;

              return (
                <React.Fragment key={record.id}>
                  <tr
                    className={`history-table__row${isExpanded ? ' history-table__row--expanded' : ''}`}
                    onClick={() => setExpanded(isExpanded ? null : record.id)}
                    title="Click to expand"
                  >
                    {/* Date */}
                    <td className="history-table__date">
                      <span className="history-table__chevron">{isExpanded ? '▾' : '▸'}</span>
                      {formatTimestamp(record.timestamp)}
                    </td>

                    {/* Test */}
                    <td className="history-table__test">
                      <span className="history-table__test-label">{record.testLabel}</span>
                      <span className="history-table__test-sub">{record.testSubtitle}</span>
                    </td>

                    {/* Score */}
                    <td className="history-table__score">
                      <span className="history-table__fraction">{record.correct}/{record.total}</span>
                      <span className="history-table__pct">{Math.round(pct * 100)}%</span>
                    </td>

                    {/* Scaled */}
                    <td className="history-table__scaled">
                      <span className={`scaled-chip scaled-chip--${record.passed ? 'pass' : 'fail'}`}>
                        {record.scaled}
                      </span>
                      <span className="history-table__grade">{scaledLabel(record.scaled)}</span>
                    </td>

                    {/* Pass/Fail */}
                    <td>
                      <span className={`verdict-badge verdict-badge--${record.passed ? 'pass' : 'fail'}`}>
                        {record.passed ? '✓ PASS' : '✗ FAIL'}
                      </span>
                    </td>

                    {/* Focus domains */}
                    <td className="history-table__focus">
                      {focusDomains.length === 0 ? (
                        <span className="focus-none">—</span>
                      ) : (
                        <div className="focus-tags">
                          {focusDomains.map(fd => (
                            <span key={fd.domain} className="focus-tag" title={fd.label}>
                              D{fd.domain}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>

                  {isExpanded && (
                    <ExpandedRow
                      record={record}
                      onReview={onReviewAttempt}
                      onDelete={handleDelete}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
