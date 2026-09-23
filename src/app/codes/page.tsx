import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Codes — Verified Rewards List' },
  description: 'Working Last Stop codes with verified rewards plus the expired archive. No invented code strings.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com/codes' },
};

export default function CodesPage() {
  return <CodesClient />;
}
