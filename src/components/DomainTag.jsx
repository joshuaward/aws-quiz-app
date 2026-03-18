import React from 'react';
import { DOMAIN_LABELS } from '../data/index';

export default function DomainTag({ domain }) {
  return (
    <span className={`domain-tag domain-tag--${domain}`}>
      {DOMAIN_LABELS[domain]}
    </span>
  );
}
