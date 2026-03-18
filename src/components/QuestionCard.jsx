import React, { useState } from 'react';
import DomainTag from './DomainTag';
import MatchQuestion from './MatchQuestion';
import OrderQuestion from './OrderQuestion';
import Explanation from './Explanation';

function getTypeBadge(q) {
  if (q.caseLabel) return { label: 'Case Study', cls: 'type-badge--case' };
  if (q.caseStudy === null && q._isCaseCont) return { label: 'Case Study (cont.)', cls: 'type-badge--case' };
  if (q.type === 'multi')  return { label: 'Select TWO', cls: 'type-badge--multi' };
  if (q.type === 'match')  return { label: 'Matching',   cls: 'type-badge--match' };
  if (q.type === 'order')  return { label: 'Ordering',   cls: 'type-badge--order' };
  return { label: 'Multiple Choice', cls: '' };
}

function evalAnswer(q, answer) {
  if (!answer) return false;
  if (q.type === 'single' || q.type === 'multi') {
    const sel = Array.isArray(answer) ? answer : [];
    return sel.length === q.correct.length && sel.every(i => q.correct.includes(i));
  }
  if (q.type === 'match') {
    return (answer || []).every((v, i) => v === q.choices[q.correct[i]]);
  }
  if (q.type === 'order') {
    const vals = (answer || []).map(v => parseInt(v, 10));
    return vals.every((v, i) => v === q.correctOrder[i]);
  }
  return false;
}

function isAnswerReady(q, answer) {
  if (!answer || answer.length === 0) return false;
  if (q.type === 'single') return answer.length === 1;
  if (q.type === 'multi')  return answer.length >= 1;
  if (q.type === 'match')  return answer.length === q.items.length && answer.every(v => v !== '');
  if (q.type === 'order')  return answer.length === q.items.length && answer.every(v => v !== '');
  return false;
}

export default function QuestionCard({ question: q, index, total, onSubmit }) {
  const [answer, setAnswer]       = useState(q.type === 'single' || q.type === 'multi' ? [] : []);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { label, cls } = getTypeBadge(q);
  const ready = isAnswerReady(q, answer);

  function handleSubmit() {
    const ok = evalAnswer(q, answer);
    setIsCorrect(ok);
    setSubmitted(true);
    onSubmit(q.id, ok);
  }

  function toggleOption(idx) {
    if (submitted) return;
    if (q.type === 'single') {
      setAnswer([idx]);
    } else {
      setAnswer(prev =>
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    }
  }

  // Build explanation data
  function buildExplanation() {
    let correctLabels = null;
    let answerList    = null;

    if (q.type === 'single' || q.type === 'multi') {
      correctLabels = q.correct.map(i => String.fromCharCode(65 + i)).join(', ');
    }
    if (q.type === 'match') {
      answerList = q.items.map(
        (item, i) => `<em>${item}</em> → <strong>${q.choices[q.correct[i]]}</strong>`
      );
      const numCorrect = (answer || []).filter((v, i) => v === q.choices[q.correct[i]]).length;
      if (!isCorrect) correctLabels = `${numCorrect}/${q.items.length} correct`;
    }
    if (q.type === 'order') {
      const POS = ['1st (FIRST)', '2nd', '3rd', '4th (LAST)', '5th'];
      answerList = q.correctOrder.map(
        (pos, i) => `<strong>${POS[pos]}</strong> — ${q.items[i]}`
      );
    }
    return { correctLabels, answerList };
  }

  const { correctLabels, answerList } = submitted ? buildExplanation() : {};

  let cardClass = 'question-card';
  if (submitted) cardClass += isCorrect ? ' question-card--correct' : ' question-card--incorrect';

  return (
    <div className={cardClass} id={`q-${q.id}`}>
      {/* Meta row */}
      <div className="question-card__meta">
        <span className="question-card__number">Question {index + 1} of {total}</span>
        <span className={`type-badge ${cls}`}>{label}</span>
      </div>

      <DomainTag domain={q.domain} />

      {/* Case study box */}
      {q.caseStudy && (
        <div className="case-box">
          <strong className="case-box__label">{q.caseLabel || 'Case Study'}</strong>
          {q.caseStudy}
        </div>
      )}

      {/* Question text */}
      <p className="question-card__text">{q.text}</p>

      {/* Body by type */}
      {(q.type === 'single' || q.type === 'multi') && (
        <>
          {q.type === 'multi' && <p className="multi-hint">▸ Select all correct answers</p>}
          <div className="options">
            {q.options.map((opt, i) => {
              let btnClass = 'option-btn';
              if (submitted) {
                if (q.correct.includes(i)) btnClass += ' option-btn--correct';
                else if (answer.includes(i)) btnClass += ' option-btn--wrong';
              } else if (answer.includes(i)) {
                btnClass += ' option-btn--selected';
              }
              return (
                <button
                  key={i}
                  className={btnClass}
                  onClick={() => toggleOption(i)}
                  disabled={submitted}
                >
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
          answer={answer}
          submitted={submitted}
          onChange={setAnswer}
        />
      )}

      {q.type === 'order' && (
        <OrderQuestion
          question={q}
          answer={answer}
          submitted={submitted}
          onChange={setAnswer}
        />
      )}

      {/* Check answer button */}
      {!submitted && (
        <button className="check-btn" onClick={handleSubmit} disabled={!ready}>
          Check Answer
        </button>
      )}

      {/* Explanation */}
      {submitted && (
        <Explanation
          isCorrect={isCorrect}
          correctLabels={correctLabels}
          answerList={answerList}
          text={q.explanation}
        />
      )}
    </div>
  );
}
