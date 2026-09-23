'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Star, Check, X, Shield, ArrowRight, GitCompare, Sparkles, Zap, Heart } from 'lucide-react';
import { CLASSES_DATA, ClassData } from '@/data/gameData';

export default function ClassTierListClient() {
  const [selectedClassA, setSelectedClassA] = useState<string>('vampire');
  const [selectedClassB, setSelectedClassB] = useState<string>('necromancer');
  const [activeTierFilter, setActiveTierFilter] = useState<string>('ALL');

  const classA = CLASSES_DATA.find(c => c.id === selectedClassA) || CLASSES_DATA[0];
  const classB = CLASSES_DATA.find(c => c.id === selectedClassB) || CLASSES_DATA[1];

  const tiers: ('S' | 'A' | 'B' | 'C' | 'D')[] = ['S', 'A', 'B', 'C', 'D'];

  const getTierBadgeClass = (tier: string) => {
    switch (tier) {
      case 'S': return 'tier-s';
      case 'A': return 'tier-a';
      case 'B': return 'tier-b';
      case 'C': return 'tier-c';
      case 'D': return 'tier-d';
      default: return 'bg-gray-800 text-white';
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Last Stop Roblox Survivor Classes Tier List',
    itemListElement: CLASSES_DATA.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${c.name} - Tier ${c.tier}`,
      description: `${c.cost} - ${c.passive}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span> META RANKINGS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Last Stop Classes Tier List & Comparison
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Survivor classes rotate in the in-game shop every few hours. Use our tier list to evaluate which archetypes are worth spending your hard-earned <span className="text-amber-400 font-bold font-mono">Tickets</span> on, and compare any two classes head-to-head.
        </p>
        <p className="text-[11px] text-gray-500 font-mono leading-relaxed border-l-2 border-emerald-500/40 pl-3">
          Data verification (Sept 2026): class costs, star ratings and level bonuses cross-checked against the Sportskeeda Classes guide and the GameZebo tier list. Entries carry a source note where verified.
        </p>
      </div>

      {/* Interactive Dual Class Comparison Panel */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-amber-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Dual Class Side-by-Side Comparison</h2>
          </div>
          <span className="text-xs font-mono text-gray-400">Select any two classes below</span>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-amber-400 font-bold mb-1.5 uppercase">Class A:</label>
            <select
              value={selectedClassA}
              onChange={(e) => setSelectedClassA(e.target.value)}
              className="w-full bg-wasteland-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {CLASSES_DATA.map(c => (
                <option key={c.id} value={c.id}>{c.name} (Tier {c.tier} - {c.cost})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-cyan-400 font-bold mb-1.5 uppercase">Class B:</label>
            <select
              value={selectedClassB}
              onChange={(e) => setSelectedClassB(e.target.value)}
              className="w-full bg-wasteland-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              {CLASSES_DATA.map(c => (
                <option key={c.id} value={c.id}>{c.name} (Tier {c.tier} - {c.cost})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Head-to-Head Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Card A */}
          <div className="p-5 rounded-xl bg-wasteland-950/80 border border-amber-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`${getTierBadgeClass(classA.tier)} px-3 py-0.5 rounded text-xs font-extrabold`}>
                {classA.tier} TIER
              </span>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: classA.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{classA.name}</h3>
              <div className="text-xs font-mono text-amber-400 font-bold mt-0.5">Cost: {classA.cost} • Role: {classA.role}</div>
            </div>
            <div className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg">
              <div className="font-bold text-amber-300 mb-1">Passive Ability:</div>
              {classA.passive}
            </div>
            <div className="space-y-2 text-xs">
              <div className="font-mono text-gray-400 font-bold uppercase text-[10px]">Pros & Cons:</div>
              <ul className="space-y-1 text-[11px]">
                {classA.pros.map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" /> <span>{p}</span>
                  </li>
                ))}
                {classA.cons.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-red-400">
                    <X className="w-3.5 h-3.5 shrink-0" /> <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card B */}
          <div className="p-5 rounded-xl bg-wasteland-950/80 border border-cyan-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`${getTierBadgeClass(classB.tier)} px-3 py-0.5 rounded text-xs font-extrabold`}>
                {classB.tier} TIER
              </span>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: classB.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{classB.name}</h3>
              <div className="text-xs font-mono text-cyan-400 font-bold mt-0.5">Cost: {classB.cost} • Role: {classB.role}</div>
            </div>
            <div className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg">
              <div className="font-bold text-cyan-300 mb-1">Passive Ability:</div>
              {classB.passive}
            </div>
            <div className="space-y-2 text-xs">
              <div className="font-mono text-gray-400 font-bold uppercase text-[10px]">Pros & Cons:</div>
              <ul className="space-y-1 text-[11px]">
                {classB.pros.map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5 shrink-0" /> <span>{p}</span>
                  </li>
                ))}
                {classB.cons.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-red-400">
                    <X className="w-3.5 h-3.5 shrink-0" /> <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Tier Filter Buttons */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTierFilter('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
            activeTierFilter === 'ALL' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
          }`}
        >
            ALL ({CLASSES_DATA.length})
          </button>
        {tiers.map(t => (
          <button
            key={t}
            onClick={() => setActiveTierFilter(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              activeTierFilter === t ? `${getTierBadgeClass(t)} shadow-sm` : 'text-gray-400 hover:text-white'
            }`}
          >
            Tier {t} ({CLASSES_DATA.filter(c => c.tier === t).length})
          </button>
        ))}
      </div>

      {/* All Classes By Tier */}
      <div className="space-y-10">
        {tiers.map((tierLevel) => {
          const classesInTier = CLASSES_DATA.filter(c => activeTierFilter === 'ALL' ? c.tier === tierLevel : c.tier === activeTierFilter && c.tier === tierLevel);
          if (classesInTier.length === 0) return null;

          return (
            <div key={tierLevel} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`${getTierBadgeClass(tierLevel)} px-4 py-1 rounded-xl text-sm font-black`}>
                  TIER {tierLevel}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {tierLevel === 'S' && 'Game-breaking survivability and top-tier scaling'}
                  {tierLevel === 'A' && 'Strong core combat and vehicle efficiency choices'}
                  {tierLevel === 'B' && 'Solid situational utility and fire support'}
                  {tierLevel === 'C' && 'Niche utility that requires team coordination'}
                  {tierLevel === 'D' && 'Early-game only starter classes'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classesInTier.map((cls) => (
                  <div key={cls.id} className="glass-card p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: cls.stars }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs font-mono text-amber-400 font-bold">{cls.cost}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{cls.name}</h3>
                        <div className="text-xs text-gray-400 font-mono">Role: {cls.role}</div>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{cls.description}</p>
                      
                      {/* Passive Highlight */}
                      <div className="p-3 rounded-lg bg-wasteland-950 border border-white/5 space-y-1 text-xs">
                        <div className="text-amber-400 font-mono font-bold text-[10px] uppercase">Passive:</div>
                        <div className="text-gray-300 text-[11px]">{cls.passive}</div>
                      </div>

                      {/* Leveling Progression */}
                      <div className="space-y-1">
                        <div className="text-gray-400 font-mono text-[10px] uppercase font-bold">Level 1-3 Scaling:</div>
                        <ul className="text-[11px] text-gray-400 space-y-0.5">
                          {cls.levelBonuses.map((b, idx) => (
                            <li key={idx} className="truncate">• {b}</li>
                          ))}
                        </ul>
                        {cls.source && (
                          <div className="text-[9px] text-emerald-500/80 font-mono pt-1 border-t border-white/5 mt-1">✓ {cls.source}</div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedClassA(cls.id);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="btn-secondary text-xs py-2 w-full justify-center"
                    >
                      <span>Compare in Dual Tool ↑</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
