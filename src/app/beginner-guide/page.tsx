import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, Flame, Gift, ArrowRight, Zap, Lightbulb } from 'lucide-react';
import { GAME_INFO } from '@/data/gameData';

export const metadata = {
  title: 'Beginner Survival Guide (0 to 95,000 Meters Walkthrough)',
  description: 'Master Roblox Last Stop with our comprehensive beginner walkthrough. Learn scavenging tactics, furnace refueling rules, and how to avoid getting locked outside the bus.',
};

export default function BeginnerGuidePage() {
  const goldenRules = [
    {
      num: "01",
      title: "The Bus Does Not Stop For Anyone",
      desc: "The bus drives forward on rails automatically. If you wander more than 30 meters into an abandoned building, you WILL be left behind in the wasteland. Always appoint a squad scout and keep an eye on the rear tail lights."
    },
    {
      num: "02",
      title: "Always Keep 3 Units in the Furnace Buffer",
      desc: "If the fuel gauge drops to zero, the engine stalls instantly. A dead bus attracts 3x more zombie aggro. Never leave the furnace with less than 2-3 pieces of coal or wood stacked."
    },
    {
      num: "03",
      title: "Redeem Free Codes on Day 1",
      desc: "Immediately input codes 'FRED' and 'UPDATE1' to secure 750 free Tickets. This is enough to unlock the Carpenter (750 Tickets) or get you 75% of the way to the Medic (1,000 Tickets) on your very first run."
    },
    {
      num: "04",
      title: "Board Up Windows Before 10,000m",
      desc: "The Suburbs only spawn slow Walkers, but after 10,000m Highway Sprinters begin spawning. If side windows are unboarded, sprinters will leap through the glass directly into the passenger cabin."
    },
    {
      num: "05",
      title: "Never Scavenge at Night Without UV Light",
      desc: "Night fog spawns Night Stalkers and empowers all infected with 2x movement speed. Unless you are playing the Vampire class, stay inside the bus cabin behind barricaded doors when the sun goes down."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>OFFICIAL SURVIVAL MANUAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          0 to 95,000m Beginner Survival Guide
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Welcome to the wasteland of <span className="text-amber-400 font-bold font-mono">Last Stop</span>. This guide outlines everything you need to know from the moment you spawn in the bus depot to the final extraction bunker at 95,000 meters.
        </p>
      </div>

      {/* 5 Golden Rules */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <span>The 5 Iron Rules of Last Stop</span>
        </div>

        <div className="space-y-4">
          {goldenRules.map((rule) => (
            <div key={rule.num} className="glass-card p-6 flex flex-col sm:flex-row items-start gap-4">
              <div className="text-2xl font-black font-mono text-amber-500 bg-amber-500/15 border border-amber-500/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                {rule.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{rule.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phase by Phase Roadmap */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-8">
        <h2 className="text-2xl font-black text-white">Milestone Step-by-Step Survival Phase Guide</h2>

        {/* Step 1 */}
        <div className="space-y-3 border-l-2 border-amber-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-500 shadow-glow" />
          <div className="text-xs font-mono text-amber-400 font-bold uppercase">Phase 1: Kilometers 0 - 10,000 (Suburban Scavenging)</div>
          <h3 className="text-lg font-bold text-white">Stockpile Coal and Barricade Side Windows</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            When you spawn, the bus moves at a slow cruising speed. Appoint one player to watch the furnace and feed it wood or coal scraps. The other 2-3 players should sprint into roadside garages to grab wood planks and crowbars. Use the key &quot;Z&quot; to affix wood planks across the passenger windows.
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-3 border-l-2 border-emerald-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-glow-emerald" />
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase">Phase 2: Kilometers 10,000 - 30,000 (The Highway Blockade)</div>
          <h3 className="text-lg font-bold text-white">Prepare Firearms for the Highway Goliath Boss</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Armored riot zombies will begin appearing on the road. Do not waste melee attacks on their riot shields; flank them or use Shotguns. At 30,000m, the Highway Goliath will block the bridge. Station your best shooters on the roof and aim for his head while keeping the bus in low-gear forward motion.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-3 border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-purple-500" />
          <div className="text-xs font-mono text-purple-400 font-bold uppercase">Phase 3: Kilometers 30,000 - 60,000 (Industrial Ruins)</div>
          <h3 className="text-lg font-bold text-white">Mount Roof Turrets & Eliminate Acid Spitters</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Industrial complexes offer military-grade fuel canisters (+800m distance each!). Grab as many as you can carry in your backpack. Install the Roof LMG Turret (1,500 Tickets) to provide automatic suppression against acid spitters.
          </p>
        </div>

        {/* Step 4 */}
        <div className="space-y-3 border-l-2 border-red-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-red-500 shadow-glow-red" />
          <div className="text-xs font-mono text-red-400 font-bold uppercase">Phase 4: Kilometers 60,000 - 95,000 (Dead Zone to Extraction)</div>
          <h3 className="text-lg font-bold text-white">Full Throttle to Bunker Alpha</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            The fog in the Dead Zone is lethal. Turn on UV searchlights to blind Night Stalkers. Feed all stored military fuel canisters into the furnace. When you arrive at the 95,000m military gate, eliminate the Final Overlord with Pipe Bombs to unlock the bunker doors and claim victory!
          </p>
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/calculator/" className="glass-card p-6 flex items-center justify-between group hover:border-amber-500/50">
          <div>
            <div className="text-xs font-mono text-amber-400 font-bold uppercase">Next Step</div>
            <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Launch Fuel Simulator</div>
            <div className="text-xs text-gray-400">Calculate coal consumption for your run</div>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link href="/codes/" className="glass-card p-6 flex items-center justify-between group hover:border-emerald-500/50">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase">Next Step</div>
            <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Redeem Active Codes</div>
            <div className="text-xs text-gray-400">Get 750 free Tickets right now</div>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
