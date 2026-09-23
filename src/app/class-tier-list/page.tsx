import type { Metadata } from 'next';
import ClassTierListClient from './ClassTierListClient';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Classes Tier List & Comparison' },
  description: 'Every Last Stop class compared — roles, strengths, weaknesses and which to pick for your crew.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com/class-tier-list' },
};

export default function ClassTierListPage() {
  return <ClassTierListClient />;
}
