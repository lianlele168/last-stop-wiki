import type { Metadata } from 'next';
import WeaponsGuideClient from './WeaponsGuideClient';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Weapons & Defense Database' },
  description: 'Every weapon and defense tool in Roblox Last Stop: costs, stats where published, and when each earns its slot.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com/weapons-guide' },
};

export default function WeaponsGuidePage() {
  return <WeaponsGuideClient />;
}
