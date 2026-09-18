import React from 'react';
import { Clock } from 'lucide-react';

/**
 * Single source of truth for the "last verified" stamp on the codes page.
 *
 * `label`  — what visitors read (date + time + timezone, per the house standard
 *            for code pages: precise enough that a stale page is obvious).
 * `iso`    — the same moment as an ISO date, fed into JSON-LD `dateModified`
 *            so the structured data and the visible text never drift apart.
 *
 * When re-checking the code list, update BOTH fields in one edit.
 */
export const CODES_LAST_VERIFIED = {
  label: 'September 18, 2026, 22:00 (GMT+8)',
  iso: '2026-09-18',
};

interface LastVerifiedProps {
  /** Override the displayed moment. Defaults to CODES_LAST_VERIFIED.label. */
  label?: string;
  className?: string;
}

export default function LastVerified({
  label = CODES_LAST_VERIFIED.label,
  className = '',
}: LastVerifiedProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold ${className}`}
    >
      <Clock className="w-3.5 h-3.5 shrink-0" />
      <span>Last verified: {label}</span>
    </div>
  );
}
