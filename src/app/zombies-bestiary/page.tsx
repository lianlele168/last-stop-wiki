'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Skull, AlertTriangle, ShieldAlert, Heart, Crosshair, ArrowRight, Sparkles } from 'lucide-react';
import { ENEMIES_DATA, EnemyData } from '@/data/gameData';

export default function ZombiesBestiaryPage() {
  const [threatFilter, setThreatFilter] = useState<string>('ALL');

  const threatLevels = ['ALL', 'Boss', 'Extreme', 'High', 'Low'];

  const filteredEnemies = ENEMIES_DATA.filter((e) => {
    if (threatFilter === 'ALL') return true;
    return e.threatLevel === threatFilter;
  });

  const getThreatBadge = (threat: string) => {
    switch (threat) {
      case 'Boss': return 'threat-boss';
      case 'Extreme': return 'threat-extreme';
      case 'High': return 'threat-high';
      case 'Medium': return 'threat-medium';
      case 'Low': return 'threat-low';
      default: return 'bg-gray-800 text-white';
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Last Stop Roblox Infected Threats & Boss Bestiary',
    itemListElement: ENEMIES_DATA.map((e, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${e.name} (Threat: ${e.threatLevel})`,
      description: `HP: ${e.health}, Speed: ${e.speed} - Counter: ${e.counterStrategy}`,
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold">
          <Skull className="w-3.5 h-3.5 text-red-400" />
          <span>BIO-HAZARD ENCYCLOPEDIA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Infected Threats & Boss Bestiary
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          From shambling suburban walkers to the colossal 28,000 HP Final Overlord blocking the 95,000m bunker, memorize attack patterns, spawn ranges, and counter strategies.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {threatLevels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setThreatFilter(lvl)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
              threatFilter === lvl
                ? 'bg-red-600 text-white shadow-glow-red font-extrabold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lvl === 'ALL' ? `ALL THREATS (${ENEMIES_DATA.length})` : `${lvl.toUpperCase()} THREAT (${ENEMIES_DATA.filter(e => e.threatLevel === lvl).length})`}
          </button>
        ))}
      </div>

      {/* Bestiary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEnemies.map((enemy) => (
          <div key={enemy.id} className="glass-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={getThreatBadge(enemy.threatLevel)}>
                  {enemy.threatLevel === 'Boss' ? '★ BOSS THREAT' : `${enemy.threatLevel.toUpperCase()} THREAT`}
                </span>
                <span className="text-xs font-mono text-gray-400">{enemy.milestoneSpawn}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{enemy.name}</h3>
                <div className="flex items-center gap-4 text-xs font-mono mt-1 text-gray-400">
                  <span>HP: <strong className="text-red-400 font-bold">{enemy.health.toLocaleString()}</strong></span>
                  <span>Speed: <strong className="text-amber-400 font-bold">{enemy.speed}</strong></span>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg">
                {enemy.dangerDescription}
              </p>

              {/* Counter Strategy */}
              <div className="p-3 rounded-xl bg-wasteland-950 border border-white/5 space-y-1 text-xs">
                <div className="text-amber-400 font-mono font-bold text-[10px] uppercase flex items-center gap-1.5">
                  <Crosshair className="w-3 h-3 text-amber-500" />
                  <span>Tactical Counter:</span>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed">{enemy.counterStrategy}</p>
              </div>

              {/* Loot Drop */}
              <div className="text-[11px] text-gray-400 font-mono flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-gray-500">Loot Drop:</span>
                <span className="text-emerald-400 font-bold">{enemy.lootDrop}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boss Raid Protocol */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-red-500/30 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <span>Boss Encounter Protocols: 30k, 60k & 95k Checkpoints</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="text-amber-400 font-bold font-mono">30,000m: Highway Goliath</div>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Do not leave the bus! He throws wreckage at ground survivors. Station gunners on the roof with Hunting Rifles and focus fire on his cranium.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="text-purple-400 font-bold font-mono">60,000m: Industrial Abomination</div>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Summons continuous sprinters from the train cars. Use Tommy Guns and roof flame turrets to keep the perimeter clear while chipping his 14,000 HP.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="text-red-400 font-bold font-mono">95,000m: The Final Overlord</div>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Throw all accumulated pipe bombs at once, engage engine overdrive, and ram the final gate while firing point-blank shotguns.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
