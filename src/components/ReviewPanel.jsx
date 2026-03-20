import React, { useState } from 'react';
import DomainTag from './DomainTag';
import MatchQuestion from './MatchQuestion';
import OrderQuestion from './OrderQuestion';
import Explanation from './Explanation';
import { buildExplanation } from './QuestionCard';

function getTypeBadge(q) {
  if (q.caseLabel) return { label: 'Case Study', cls: 'type-badge--case' };
  if (q.caseStudy === null && q._isCaseCont) return { label: 'Case Study (cont.)', cls: 'type-badge--case' };
  if (q.type === 'multi')  return { label: 'Select TWO', cls: 'type-badge--multi' };
  if (q.type === 'match')  return { label: 'Matching',   cls: 'type-badge--match' };
  if (q.type === 'order')  return { label: 'Ordering',   cls: 'type-badge--order' };
  return { label: 'Multiple Choice', cls: '' };
}

// ── Single read-only question card for review mode ──────────
function ReviewCard({ question: q, index, total, userAnswer, isCorrect }) {
  const { label, cls } = getTypeBadge(q);
  const { correctLabels, answerList } = buildExplanation(q, userAnswer, isCorrect);

  let cardClass = 'question-card';
  cardClass += isCorrect ? ' question-card--correct' : ' question-card--incorrect';

  return (
    <div className={cardClass} id={`review-q-${q.id}`}>
      {/* Meta */}
      <div className="question-card__meta">
        <span className="question-card__number">Question {index + 1} of {total}</span>
        <div className="review-card__badges">
          <span className={`type-badge ${cls}`}>{label}</span>
          <span className={`review-status-badge review-status-badge--${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
          </span>
        </div>
      </div>

      <DomainTag domain={q.domain} />

      {q.caseStudy && (
        <div className="case-box">
          <strong className="case-box__label">{q.caseLabel || 'Case Study'}</strong>
          {q.caseStudy}
        </div>
      )}

      <p className="question-card__text">{q.text}</p>

      {/* Read-only answer display */}
      {(q.type === 'single' || q.type === 'multi') && (
        <>
          {q.type === 'multi' && <p className="multi-hint">▸ Select all correct answers</p>}
          <div className="options">
            {q.options.map((opt, i) => {
              let btnClass = 'option-btn';
              const wasSelected = Array.isArray(userAnswer) && userAnswer.includes(i);
              if (q.correct.includes(i)) btnClass += ' option-btn--correct';
              else if (wasSelected)      btnClass += ' option-btn--wrong';
              return (
                <button key={i} className={btnClass} disabled>
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {q.type === 'match' && (
        <MatchQuestion
          question={q}
          answer={Array.isArray(userAnswer) ? userAnswer : []}
          submitted={true}
          onChange={() => {}}
        />
      )}

      {q.type === 'order' && (
        <OrderQuestion
          question={q}
          answer={Array.isArray(userAnswer) ? userAnswer : []}
          submitted={true}
          onChange={() => {}}
        />
      )}

      <Explanation
        isCorrect={isCorrect}
        correctLabels={correctLabels}
        answerList={answerList}
        text={q.explanation}
      />
    </div>
  );
}

// ── Filter tabs ─────────────────────────────────────────────
const FILTERS = [
  { key: 'all',       label: 'All Questions' },
  { key: 'incorrect', label: '✗ Wrong Only'  },
  { key: 'correct',   label: '✓ Correct Only' },
];

// ── Main ReviewPanel ────────────────────────────────────────
export default function ReviewPanel({ questions, answers, results, onBack, onRetake, onHome }) {
  const [filter,      setFilter]      = useState('all');
  const [jumpTarget,  setJumpTarget]  = useState('');

  const total   = questions.length;
  const correct = questions.filter(q => results[q.id]).length;

  const filtered = questions.filter(q => {
    if (filter === 'incorrect') return !results[q.id];
    if (filter === 'correct')   return  results[q.id];
    return true;
  });

  function handleJump(e) {
    const val = e.target.value;
    setJumpTarget(val);
    const num = parseInt(val, 10);
    if (num >= 1 && num <= total) {
      const el = document.getElementById(`review-q-${questions[num - 1]?.id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="review-panel">

      {/* ── Sticky review header ── */}
      <div className="review-header">
        <div className="review-header__left">
          <button className="review-header__back-btn" onClick={onBack}>
            ← Back to Results
          </button>
          <span className="review-header__title">Review Answers</span>
          <span className="review-header__score">
            {correct}/{total} correct
          </span>
        </div>

        <div className="review-header__right">
          {/* Jump to question */}
          <div className="review-header__jump">
            <label htmlFor="jumpInput">Go to Q</label>
            <input
              id="jumpInput"
              type="number"
              min={1}
              max={total}
              value={jumpTarget}
              onChange={handleJump}
              placeholder="—"
            />
          </div>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <div className="review-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`review-filter-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => { setFilter(f.key); window.scrollTo({ top: 120, behavior: 'smooth' }); }}
          >
            {f.label}
            <span className="review-filter-btn__count">
              {f.key === 'all'       ? total :
               f.key === 'incorrect' ? total - correct :
               correct}
            </span>
          </button>
        ))}
      </div>

      {/* ── Question cards ── */}
      {filtered.length === 0 ? (
        <div className="review-empty">
          {filter === 'incorrect' ? '🎉 You got every question correct!' : 'No questions to show.'}
        </div>
      ) : (
        filtered.map((q, i) => (
          <ReviewCard
            key={q.id}
            question={q}
            index={questions.indexOf(q)}
            total={total}
            userAnswer={answers[q.id] || []}
            isCorrect={!!results[q.id]}
          />
        ))
      )}

      {/* ── Bottom action bar ── */}
      <div className="review-actions">
        <button className="review-actions__back"  onClick={onBack}>← Back to Results</button>
        <button className="review-actions__retake" onClick={onRetake}>↺ Retake Test</button>
        <button className="review-actions__home"  onClick={onHome}>⌂ All Tests</button>
      </div>

    </div>
  );
}
