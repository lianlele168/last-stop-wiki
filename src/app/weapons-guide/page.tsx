'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Crosshair, Zap, ArrowRight, Sparkles, Flame, Target } from 'lucide-react';
import { WEAPONS_DATA, WeaponData } from '@/data/gameData';

export default function WeaponsGuidePage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Firearms', 'Melee', 'Throwable', 'Bus Turret'];

  const filteredWeapons = WEAPONS_DATA.filter((w) => {
    if (activeCategory === 'ALL') return true;
    return w.category === activeCategory;
  });

  const getTierClass = (tier: string) => {
    switch (tier) {
      case 'S': return 'tier-s';
      case 'A': return 'tier-a';
      case 'B': return 'tier-b';
      case 'C': return 'tier-c';
      default: return 'bg-gray-800 text-white';
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Last Stop Roblox Weapons & Armory Database',
    itemListElement: WEAPONS_DATA.map((w, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${w.name} (${w.category})`,
      description: `Damage: ${w.damage ?? 'not documented'}, Range: ${w.range}, Tier: ${w.tier}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
          <Crosshair className="w-3.5 h-3.5 text-blue-400" />
          <span>BALLISTICS & COMBAT ARSENAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Weapons & Defense Database
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Surviving 95,000 meters requires balancing firepower with ammo conservation. Explore weapon archetypes, fire rates, optimal engagement ranges, and mounted turret upgrades.
        </p>
        <p className="text-[11px] text-gray-500 font-mono leading-relaxed border-l-2 border-emerald-500/40 pl-3">
          Data verification (Sept 2026): The Hidden Route has not published official per-hit damage numbers for any weapon, so damage shows &quot;Not documented&quot; rather than invented figures. Weapon archetypes and ammo types are community-reported.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
              activeCategory === cat
                ? 'bg-amber-500 text-black shadow-glow font-extrabold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat} {cat === 'ALL' ? `(${WEAPONS_DATA.length})` : `(${WEAPONS_DATA.filter(w => w.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Weapons Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeapons.map((wpn) => (
          <div key={wpn.id} className="glass-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`${getTierClass(wpn.tier)} px-2.5 py-0.5 rounded text-xs`}>
                  {wpn.tier} TIER
                </span>
                <span className="text-xs font-mono text-gray-400">{wpn.category}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{wpn.name}</h3>
                <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                  {wpn.damage !== null ? wpn.damage : 'N/A'} <span className="text-xs text-gray-400 font-normal">{wpn.damage !== null ? 'DMG per hit' : '(not documented)'}</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">{wpn.description}</p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-wasteland-950 border border-white/5 text-xs font-mono">
                <div>
                  <span className="text-gray-500 block text-[10px]">RATE OF FIRE</span>
                  <span className="text-gray-300 font-bold text-[11px]">{wpn.fireRate}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">EFFECTIVE RANGE</span>
                  <span className="text-gray-300 font-bold text-[11px]">{wpn.range}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">AMMO TYPE</span>
                  <span className="text-amber-400 font-bold text-[11px]">{wpn.ammoType}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">TARGET ROLE</span>
                  <span className="text-emerald-400 font-bold text-[11px]">{wpn.tier === 'S' ? 'Boss / Horde' : 'Scavenge'}</span>
                </div>
              </div>

              {/* Best Tactical Use */}
              <div className="text-xs text-gray-400 bg-white/5 p-3 rounded-lg">
                <span className="font-bold text-amber-300 font-mono text-[10px] block uppercase mb-0.5">Tactical Application:</span>
                {wpn.bestUse}
                {wpn.source && (
                  <div className="text-[9px] text-emerald-500/80 font-mono mt-1.5 border-t border-white/5 pt-1.5">✓ {wpn.source}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ammo Economy Guide Box */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-amber-500/30 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          <span>Ammo Conservation Rules in the Wasteland</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-1.5">
            <div className="text-amber-400 font-bold font-mono">1. Melee First for Walkers</div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Never waste shotgun shells or rifle rounds on lone crawling or shambling walkers. Use Crowbars, Sledges, or Berserker cleaves.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-1.5">
            <div className="text-amber-400 font-bold font-mono">2. Roof Sniping Spitters</div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Acid spitters will melt your bus armor from 30 meters away. Have a Marksman stationed on the roof with a Hunting Rifle.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-1.5">
            <div className="text-amber-400 font-bold font-mono">3. Reserve Shotguns for Doors</div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              When the bus door is breached by sprinting infected, point-blank shotgun blasts clear the whole doorway cluster in one trigger pull, saving precious shells.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
