import React from 'react';
import Link from 'next/link';
import { Wrench, Shield, Gauge, Zap, Flame, CheckCircle, ArrowRight, Milestone } from 'lucide-react';
import { MILESTONES_DATA } from '@/data/gameData';

export const metadata = {
  alternates: { canonical: 'https://laststop.robloxwikihub.com/bus-upgrades/' },
  title: 'Bus Upgrades Tech Tree & 95,000m Milestones',
  description: 'Complete guide to vehicle upgrades in Last Stop Roblox. Recommended upgrade priorities for Engine Turbos, Cowcatcher Armor, UV Searchlights, and Roof Turrets.',
};

export default function BusUpgradesPage() {
  const upgradesList = [
    {
      category: "Engine & Powertrain",
      icon: Gauge,
      color: "text-amber-400",
      description: "Directly improves fuel-to-distance conversion ratio and bus top speed.",
      levels: [
        { level: "Level 1 (Stock)", cost: "Free", effect: "1.0x baseline fuel burn and travel velocity." },
        { level: "Level 2 (Tuned Carburetor)", cost: "800 Tickets", effect: "+15% distance per fuel item, faster acceleration." },
        { level: "Level 3 (Turbo Diesel)", cost: "2,200 Tickets", effect: "+30% distance efficiency, reduced engine overheat rate." },
        { level: "Level 4 (Twin Supercharger)", cost: "4,500 Tickets", effect: "+45% distance efficiency, ploughs through small zombie piles without slowing." },
        { level: "Level 5 (V8 Apocalypse Overhaul)", cost: "8,000 Tickets", effect: "+65% maximum efficiency, horn stuns zombies in road path." },
      ]
    },
    {
      category: "Armor Plating & Ramming Cowcatcher",
      icon: Shield,
      color: "text-blue-400",
      description: "Protects the vehicle hull, windshields, and doors from horde breach attacks.",
      levels: [
        { level: "Level 1 (Stock Windows)", cost: "Free", effect: "Fragile glass, zombies shatter windows after 3 hits." },
        { level: "Level 2 (Welded Steel Bars)", cost: "600 Tickets", effect: "Prevents zombies from leaping through passenger windows." },
        { level: "Level 3 (Spiked Front Cowcatcher)", cost: "1,800 Tickets", effect: "Instantly kills standard Walkers upon impact; -15% ramming deceleration." },
        { level: "Level 4 (Reinforced Hull Sheeting)", cost: "3,500 Tickets", effect: "Acid Spitter corrosive vomit deals 60% reduced damage to bus body." },
        { level: "Level 5 (Titanium Ramming Battering-Ram)", cost: "7,000 Tickets", effect: "Can smash through Highway Goliath roadblock cars with zero hull damage." },
      ]
    },
    {
      category: "Roof Mounted Auto-Turrets",
      icon: Zap,
      color: "text-purple-400",
      description: "Autonomous roof weaponry that covers the rear and flanks during scavenging halts.",
      levels: [
        { level: "Turret Hardpoint 1 (Roof LMG)", cost: "1,500 Tickets", effect: "Mounts 360-degree light machine gun with 500 RPM auto-target fire." },
        { level: "Turret Hardpoint 2 (Flame Projector)", cost: "3,200 Tickets", effect: "Ignites rear area in continuous napalm stream, roasting pursuing sprinters." },
        { level: "Turret Hardpoint 3 (Heavy Auto-Cannon)", cost: "6,000 Tickets", effect: "Heavy anti-materiel cannon that staggers Brutes and Bosses." },
      ]
    },
    {
      category: "Auxiliary Utilities & Lighting",
      icon: Flame,
      color: "text-emerald-400",
      description: "Nighttime defense, furnace expansion, and squad convenience upgrades.",
      levels: [
        { level: "High-Beam Halogen Lights", cost: "500 Tickets", effect: "Doubles headlight cone distance for earlier obstacle warning." },
        { level: "Roof UV Searchlight Rig", cost: "2,000 Tickets", effect: "UV radiation stuns Night Stalkers and removes their shadow invulnerability." },
        { level: "Extended Fuel Hopper", cost: "2,500 Tickets", effect: "Allows stacking up to 10 fuel items in furnace buffer queue." },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold">
          <Wrench className="w-3.5 h-3.5 text-purple-400" />
          <span>VEHICLE ENGINEERING & TECH TREE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Bus Upgrades Tech Tree & Milestones
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          The bus is your squad&apos;s moving lifeline. Upgrade its engine to squeeze maximum mileage out of every coal chunk, and fortify its hull with heavy spiked cowcatchers to survive 95,000 meters.
        </p>
      </div>

      {/* Upgrades Tech Tree Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upgradesList.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="glass-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className={`p-2.5 rounded-xl bg-white/5 ${cat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{cat.category}</h2>
                  <p className="text-xs text-gray-400">{cat.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {cat.levels.map((lvl, lIdx) => (
                  <div key={lIdx} className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-1.5 hover:border-amber-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        {lvl.level}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">{lvl.cost}</span>
                    </div>
                    <p className="text-[11px] text-gray-300 pl-5.5 leading-relaxed">{lvl.effect}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommended Priority Blueprint */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-amber-500/30 space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Milestone className="w-5 h-5 text-amber-400" />
          <span>Optimal Upgrade Order for 95,000m Extraction</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-wasteland-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase">Phase 1 (0 - 15,000m)</div>
            <h3 className="text-base font-bold text-white">Engine Lv 2 + Window Bars</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prioritize fuel efficiency first to stretch early coal supplies. Barricade side windows to stop fast sprinters from ambushing survivors while refueling.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-wasteland-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Phase 2 (15,000 - 45,000m)</div>
            <h3 className="text-base font-bold text-white">Spiked Cowcatcher + Roof LMG</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Before facing the Highway Goliath at 30,000m, you must have the spiked cowcatcher to ram abandoned roadblock cars and the roof LMG for automated crowd control.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-wasteland-950 border border-white/10 space-y-3">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase">Phase 3 (45,000 - 95,000m)</div>
            <h3 className="text-base font-bold text-white">UV Rig + Engine Lv 4-5</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              The Dead Zone fog spawns lethal Night Stalkers that can only be stunned by UV light. Max out your engine to sprint through the final 10,000m boss gauntlet.
            </p>
          </div>
        </div>
      </section>

      {/* 95,000m Milestones Roadmap */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-white">95,000m Environmental Route Checkpoints</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Hazard breakdowns, recommended engine levels, and key rewards as you push through each segment of the route.
          </p>
        </div>

        <div className="space-y-4">
          {MILESTONES_DATA.map((ms, i) => (
            <div key={i} className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded">
                    {ms.distance}
                  </span>
                  <h3 className="text-lg font-bold text-white">{ms.name}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{ms.environment}</p>
                <div className="text-xs text-red-400">
                  <span className="font-bold font-mono uppercase text-[10px] text-gray-500 mr-2">Hazards:</span>
                  {ms.hazards.join(" • ")}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-1.5 md:w-64 shrink-0 text-xs font-mono">
                <div className="text-gray-400 text-[10px] uppercase font-bold">Recommended Spec:</div>
                <div className="text-emerald-400 font-bold">{ms.recommendedEngine}</div>
                <div className="text-gray-400 text-[10px] uppercase font-bold pt-1">Key Rewards:</div>
                <div className="text-gray-300 text-[11px] truncate">{ms.keyRewards.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
