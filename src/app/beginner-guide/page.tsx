import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, Flame, Gift, ArrowRight, Zap, Lightbulb } from 'lucide-react';
import { GAME_INFO } from '@/data/gameData';

export const metadata = {
  alternates: { canonical: 'https://laststop.robloxwikihub.com/beginner-guide/' },
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
      title: "Board Up Windows Early",
      desc: "Fast infected begin ambushing the bus once you leave the safe opening stretch. If side windows are unboarded, they will leap through the glass directly into the passenger cabin — always carry wood and use the Z key to barricade."
    },
    {
      num: "05",
      title: "Never Scavenge Far From the Bus at Night",
      desc: "Nighttime empowers the horde and shrinks your visibility to almost nothing. Unless you are playing the Vampire class, stay inside the bus cabin behind barricaded doors when the sun goes down."
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
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase">Phase 2: Checkpoint Gates (Key, Rescue, Loot)</div>
          <h3 className="text-lg font-bold text-white">Master the Checkpoint Gate Loop</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            The route features three checkpoint gates with a Key/rescue/loot loop between them. Send your fastest runner for keys while gunners hold the bus; never leave the engine unattended. Around Checkpoint III, watch the road near the Graveyard — Dracula grabs survivors straight off the road and forces a &quot;Fight Back&quot; struggle before his two-phase fight.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-3 border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-purple-500" />
          <div className="text-xs font-mono text-purple-400 font-bold uppercase">Phase 3: Terminals & Resupply</div>
          <h3 className="text-lg font-bold text-white">Sell Loot, Buy Recipes, Hoard Fuel</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            The first Terminal appears around 12,000m (the first Gas Station is around 3,000m). Sell everything that is not fuel, then reinvest in crafting recipes and class unlocks. Keep every Gas Can for the burner and drop fuel straight into the furnace — exact per-item meter values are not officially published, but community guides consistently rank Gas Cans first.
          </p>
        </div>

        {/* Step 4 */}
        <div className="space-y-3 border-l-2 border-red-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-red-500 shadow-glow-red" />
          <div className="text-xs font-mono text-red-400 font-bold uppercase">Phase 4: The Final Stop (95,000m) — Cure or Kill Fred</div>
          <h3 className="text-lg font-bold text-white">Decide Your Ending Before You Arrive</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            At the 95,000m Last Stop you face Fred, the game&apos;s final encounter. Preserve the cure potion through the whole run to unlock the peaceful Cure Fred ending, or go in armed to the teeth and defeat him for the kill ending. Either way, keep one full fuel buffer for the final approach so the bus is still moving when you get there.
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
