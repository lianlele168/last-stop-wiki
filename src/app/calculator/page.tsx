import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Bus Fuel & Range Simulator' },
  description: 'Plan how far the bus can go in Roblox Last Stop: fuel capacity, consumption per segment and checkpoint distances.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com/calculator' },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
