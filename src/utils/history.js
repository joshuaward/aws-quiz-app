// ─────────────────────────────────────────────────────────────
// src/utils/history.js
//
// Persists exam attempt records to localStorage as a JSON array.
// Each record is self-contained — no external database needed.
//
// Record shape:
// {
//   id:          string,          // uuid-style unique id
//   timestamp:   ISO string,      // when the test was submitted
//   testId:      number,          // which test (1-20)
//   testLabel:   string,          // "Practice Test 4"
//   testSubtitle:string,          // "Exam Format"
//   total:       number,          // total questions
//   correct:     number,          // correct answers
//   scaled:      number,          // scaled score 100-1000
//   passed:      boolean,         // >= 700
//   domainScores:{                // per-domain breakdown
//     1: { correct: n, total: n },
//     ...5
//   },
//   answers:     { [qId]: any },  // user's actual selections
//   results:     { [qId]: bool }, // correct/incorrect per question
// }
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'aif_c01_exam_history';
const DOMAIN_LABELS = {
  1: 'AI & ML Fundamentals',
  2: 'GenAI Fundamentals',
  3: 'Foundation Models',
  4: 'Responsible AI',
  5: 'Security & Governance',
};

// Threshold below which a domain is flagged as needing focus
const FOCUS_THRESHOLD = 0.70;

/** Load all records, newest first */
export function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Save a new exam attempt record */
export function saveAttempt({ test, questions, answers, results }) {
  const total   = questions.length;
  const correct = Object.values(results).filter(Boolean).length;
  const pct     = total > 0 ? correct / total : 0;
  const scaled  = Math.round(100 + pct * 900);
  const passed  = scaled >= 700;

  // Domain breakdown
  const domainScores = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 },
                          3: { correct: 0, total: 0 }, 4: { correct: 0, total: 0 },
                          5: { correct: 0, total: 0 } };
  questions.forEach(q => {
    const d = q.domain;
    if (!domainScores[d]) return;
    domainScores[d].total++;
    if (results[q.id]) domainScores[d].correct++;
  });

  const record = {
    id:           `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp:    new Date().toISOString(),
    testId:       test.id,
    testLabel:    test.label,
    testSubtitle: test.subtitle,
    total,
    correct,
    scaled,
    passed,
    domainScores,
    answers,
    results,
  };

  try {
    const existing = loadHistory();
    // Newest first; keep up to 200 records max
    const updated = [record, ...existing].slice(0, 200);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Could not save exam history:', e);
  }

  return record;
}

/** Delete a single record by id */
export function deleteAttempt(id) {
  const updated = loadHistory().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/** Clear all history */
export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}

/** Export all history as a downloadable JSON file */
export function exportHistory() {
  const data    = loadHistory();
  const blob    = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url     = URL.createObjectURL(blob);
  const anchor  = document.createElement('a');
  anchor.href   = url;
  anchor.download = `aif-c01-history-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

/** Import history from a previously exported JSON file */
export function importHistory(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) throw new Error('Invalid format');
        const existing = loadHistory();
        // Merge, deduplicate by id, newest first
        const merged = [...imported, ...existing]
          .filter((r, i, arr) => arr.findIndex(x => x.id === r.id) === i)
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .slice(0, 200);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        resolve(merged.length);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('File read failed'));
    reader.readAsText(file);
  });
}

/** Returns domains that scored below the focus threshold */
export function getFocusDomains(domainScores) {
  return Object.entries(domainScores)
    .filter(([, s]) => s.total > 0 && s.correct / s.total < FOCUS_THRESHOLD)
    .map(([d]) => ({ domain: Number(d), label: DOMAIN_LABELS[d] }));
}

/** Format ISO timestamp to readable string */
export function formatTimestamp(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month:  'short',
    day:    'numeric',
    year:   'numeric',
    hour:   'numeric',
    minute: '2-digit',
  });
}

/** Compute scaled score label */
export function scaledLabel(scaled) {
  if (scaled >= 900) return 'Excellent';
  if (scaled >= 800) return 'Strong';
  if (scaled >= 700) return 'Pass';
  if (scaled >= 600) return 'Near Pass';
  return 'Needs Work';
}

export { DOMAIN_LABELS, FOCUS_THRESHOLD };
