import type { Metadata } from 'next';
import ZombiesBestiaryClient from './ZombiesBestiaryClient';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Infected Bestiary — Threats & Bosses' },
  description: 'Every infected type and boss in Last Stop: behavior, threat level and how to counter each one.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com/zombies-bestiary' },
};

export default function ZombiesBestiaryPage() {
  return <ZombiesBestiaryClient />;
}
