'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Flame, Gauge, AlertTriangle, CheckCircle, Info, Sparkles, Fuel, RefreshCw, Zap, Shield, ArrowRight } from 'lucide-react';
import { FUEL_ITEMS, MILESTONES_DATA } from '@/data/gameData';

export default function CalculatorPage() {
  // Input states
  const [canisters, setCanisters] = useState<number>(4);
  const [coal, setCoal] = useState<number>(12);
  const [wood, setWood] = useState<number>(15);
  const [food, setFood] = useState<number>(5);
  const [engineLevel, setEngineLevel] = useState<number>(2);
  const [armorType, setArmorType] = useState<string>('medium');
  const [hasBusDriver, setHasBusDriver] = useState<boolean>(false);

  // Engine multiplier table
  const engineMultipliers: Record<number, number> = {
    1: 1.0,
    2: 1.15,
    3: 1.30,
    4: 1.45,
    5: 1.65,
  };

  // Armor drag penalty
  const armorMultipliers: Record<string, number> = {
    light: 1.0,
    medium: 0.92,
    heavy: 0.85,
  };

  // Memoized Calculation
  const results = useMemo(() => {
    const rawCanisterDist = canisters * 800;
    const rawCoalDist = coal * 400;
    const rawWoodDist = wood * 150;
    const rawFoodDist = food * 50;
    const totalRawDistance = rawCanisterDist + rawCoalDist + rawWoodDist + rawFoodDist;

    const totalRawBurnSec = (canisters * 120) + (coal * 60) + (wood * 25) + (food * 10);

    const engineMod = engineMultipliers[engineLevel] || 1.0;
    const armorMod = armorMultipliers[armorType] || 1.0;
    const driverMod = hasBusDriver ? 1.20 : 1.0;

    const totalMultiplier = engineMod * armorMod * driverMod;
    const finalDistanceMeters = Math.round(totalRawDistance * totalMultiplier);

    const percentOfFinalStop = Math.min(100, Math.round((finalDistanceMeters / 95000) * 100));
    const distanceRemaining = Math.max(0, 95000 - finalDistanceMeters);

    // Shortfall estimations
    const canistersNeeded = Math.ceil(distanceRemaining / (800 * totalMultiplier));
    const coalNeeded = Math.ceil(distanceRemaining / (400 * totalMultiplier));

    // Milestone calculation
    let currentMilestone = MILESTONES_DATA[0];
    if (finalDistanceMeters >= 95000) {
      currentMilestone = MILESTONES_DATA[4];
    } else if (finalDistanceMeters >= 60000) {
      currentMilestone = MILESTONES_DATA[3];
    } else if (finalDistanceMeters >= 30000) {
      currentMilestone = MILESTONES_DATA[2];
    } else if (finalDistanceMeters >= 10000) {
      currentMilestone = MILESTONES_DATA[1];
    }

    return {
      finalDistanceMeters,
      totalMultiplier,
      totalRawBurnSec,
      percentOfFinalStop,
      distanceRemaining,
      canistersNeeded,
      coalNeeded,
      currentMilestone,
    };
  }, [canisters, coal, wood, food, engineLevel, armorType, hasBusDriver]);

  // Presets
  const applyPreset = (preset: 'scout' | 'mid' | 'endgame') => {
    if (preset === 'scout') {
      setCanisters(1);
      setCoal(6);
      setWood(15);
      setFood(4);
      setEngineLevel(1);
      setArmorType('light');
      setHasBusDriver(false);
    } else if (preset === 'mid') {
      setCanisters(8);
      setCoal(25);
      setWood(20);
      setFood(10);
      setEngineLevel(3);
      setArmorType('medium');
      setHasBusDriver(true);
    } else if (preset === 'endgame') {
      setCanisters(35);
      setCoal(80);
      setWood(40);
      setFood(20);
      setEngineLevel(5);
      setArmorType('heavy');
      setHasBusDriver(true);
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Last Stop Bus Fuel & Range Simulator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    url: 'https://laststop.robloxwikihub.com/calculator/',
    description: 'Interactive fuel and distance simulator for Roblox Last Stop. Calculate coal, fuel canisters, and engine upgrades towards 95,000m.',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span>REAL-TIME KINEMATICS ENGINE v2.4</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Bus Fuel & Range Simulator
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
          Refueling the bus furnace is the difference between reaching safety and getting swarmed in the dark. Input your squad&apos;s current stockpile to calculate projected range towards the <span className="text-amber-400 font-bold font-mono">95,000-meter</span> Final Stop.
        </p>
      </div>

      {/* Quick Presets Bar */}
      <div className="flex flex-wrap items-center gap-2.5 p-3 rounded-xl bg-wasteland-900 border border-white/10 text-xs">
        <span className="font-mono text-gray-400 font-bold uppercase mr-1">Quick Loadouts:</span>
        <button
          onClick={() => applyPreset('scout')}
          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 border border-white/5 transition-all"
        >
          Day 1 Scout Run (Suburbs)
        </button>
        <button
          onClick={() => applyPreset('mid')}
          className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all font-bold"
        >
          Mid-Game Highway Convoy
        </button>
        <button
          onClick={() => applyPreset('endgame')}
          className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all font-bold"
        >
          95,000m Extraction Overload
        </button>
      </div>

      {/* Main Grid: Inputs on Left, Real-Time Telemetry on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Sliders & Settings */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card 1: Fuel Supplies */}
          <div className="glass-card p-6 border-amber-500/20 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Fuel className="w-5 h-5 text-amber-500" />
                <span>Furnace Fuel Reserves</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Items inside Cabin</span>
            </div>

            {/* Fuel Canister Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Military Fuel Canisters (+800m each)
                </span>
                <span className="font-mono text-amber-400 text-sm">{canisters} Canisters</span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                value={canisters}
                onChange={(e) => setCanisters(Number(e.target.value))}
                className="w-full accent-amber-500 bg-wasteland-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>0</span>
                <span>Sub-total: {canisters * 800}m</span>
                <span>50 max</span>
              </div>
            </div>

            {/* Coal Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Refined Coal Chunks (+400m each)
                </span>
                <span className="font-mono text-amber-400 text-sm">{coal} Chunks</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={coal}
                onChange={(e) => setCoal(Number(e.target.value))}
                className="w-full accent-amber-500 bg-wasteland-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>0</span>
                <span>Sub-total: {coal * 400}m</span>
                <span>100 max</span>
              </div>
            </div>

            {/* Wood Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Wood Planks (+150m each)
                </span>
                <span className="font-mono text-amber-400 text-sm">{wood} Planks</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={wood}
                onChange={(e) => setWood(Number(e.target.value))}
                className="w-full accent-amber-500 bg-wasteland-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>0</span>
                <span>Sub-total: {wood * 150}m</span>
                <span>100 max</span>
              </div>
            </div>

            {/* Bio Food Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  Emergency Food Scraps (+50m each)
                </span>
                <span className="font-mono text-amber-400 text-sm">{food} Scraps</span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                value={food}
                onChange={(e) => setFood(Number(e.target.value))}
                className="w-full accent-amber-500 bg-wasteland-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>0</span>
                <span>Sub-total: {food * 50}m</span>
                <span>50 max</span>
              </div>
            </div>

          </div>

          {/* Card 2: Bus Modifications & Squad Boosts */}
          <div className="glass-card p-6 border-white/10 space-y-5">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-white/10 pb-3">
              <Gauge className="w-5 h-5 text-emerald-400" />
              <span>Vehicle Specs & Engine Tuning</span>
            </div>

            {/* Engine Level Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-200">
                <span>Engine Turbo Level:</span>
                <span className="font-mono text-emerald-400">Level {engineLevel} ({engineMultipliers[engineLevel]}x Efficiency)</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setEngineLevel(lvl)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      engineLevel === lvl
                        ? 'bg-emerald-500 text-black shadow-glow-emerald'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    Lv {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Armor Weight Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-200">
                <span>Bus Armor Plating Drag:</span>
                <span className="font-mono text-amber-400 uppercase">{armorType} ({armorMultipliers[armorType]}x)</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'light', label: 'Light Stock', desc: 'No weight penalty' },
                  { id: 'medium', label: 'Reinforced', desc: '-8% distance drag' },
                  { id: 'heavy', label: 'Heavy Plated', desc: '-15% distance drag' },
                ].map((arm) => (
                  <button
                    key={arm.id}
                    onClick={() => setArmorType(arm.id)}
                    className={`p-2.5 rounded-xl text-left transition-all ${
                      armorType === arm.id
                        ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                        : 'bg-white/5 border border-transparent text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{arm.label}</div>
                    <div className="text-[10px] text-gray-400">{arm.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Class Perk Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-wasteland-950 border border-white/5 cursor-pointer hover:border-amber-500/30 transition-colors">
                <input
                  type="checkbox"
                  checked={hasBusDriver}
                  onChange={(e) => setHasBusDriver(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Bus Driver Class Bonus Active</span>
                    <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded">+20% Efficiency</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Adds +20% distance multiplier and reduces zombie door grab chance.</div>
                </div>
              </label>
            </div>

          </div>

        </div>

        {/* Right Column: Real-Time Telemetry Dashboard */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          
          <div className="glass-card p-6 border-amber-500/40 shadow-glow-lg space-y-6 relative overflow-hidden">
            
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="font-mono font-bold text-sm text-white">ESTIMATED RANGE OUTPUT</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {results.totalMultiplier.toFixed(2)}x Boost
              </span>
            </div>

            {/* Big Mileage Display */}
            <div className="text-center py-4 bg-wasteland-950/80 rounded-2xl border border-white/5 space-y-1">
              <div className="text-xs uppercase font-mono tracking-widest text-gray-400">Projected Travel Distance</div>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 font-mono">
                {results.finalDistanceMeters.toLocaleString()}m
              </div>
              <div className="text-xs font-mono text-gray-400">
                Burn Time: ~{Math.floor(results.totalRawBurnSec / 60)} min {results.totalRawBurnSec % 60} sec
              </div>
            </div>

            {/* Progress Bar towards 95,000m */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Extraction Completion</span>
                <span className="text-amber-400 font-bold">{results.percentOfFinalStop}% of 95,000m</span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-wasteland-950 border border-white/10 overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${results.percentOfFinalStop}%` }}
                />
              </div>
              <div className="text-[11px] text-gray-400 font-mono text-right">
                {results.distanceRemaining === 0 ? (
                  <span className="text-emerald-400 font-bold flex items-center justify-end gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> You have reached Bunker Alpha!
                  </span>
                ) : (
                  <span>Remaining to Final Stop: {results.distanceRemaining.toLocaleString()}m</span>
                )}
              </div>
            </div>

            {/* Projected Milestone Checkpoint */}
            <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
              <div className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                Projected Checkpoint Reached
              </div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>{results.currentMilestone.name} ({results.currentMilestone.distance})</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {results.currentMilestone.environment}
              </p>
            </div>

            {/* Shortfall Guidance */}
            {results.distanceRemaining > 0 && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Supplies Needed for 95,000m:</span>
                </div>
                <ul className="text-gray-300 space-y-1 font-mono text-[11px] pl-6 list-disc">
                  <li>Need <span className="text-emerald-400 font-bold">{results.canistersNeeded} more Canisters</span> OR</li>
                  <li>Need <span className="text-amber-400 font-bold">{results.coalNeeded} more Coal Chunks</span></li>
                  <li>Upgrade Engine to reduce fuel demand significantly!</li>
                </ul>
              </div>
            )}

            {/* Action Links */}
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/codes/" className="btn-primary text-xs w-full py-2.5">
                <span>Claim Free Tickets from Codes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/bus-upgrades/" className="btn-secondary text-xs w-full py-2.5">
                <span>Explore Bus Tech Tree Upgrades</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Fuel Reference Table */}
      <section className="space-y-6 pt-8 border-t border-white/10">
        <div>
          <h2 className="text-2xl font-black text-white">Fuel Types & Combustion Hierarchy</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Standard baseline distance and burn duration metrics across all combustible items found in Last Stop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUEL_ITEMS.map((item) => (
            <div key={item.id} className="glass-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                  item.efficiencyTier === 'High' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  item.efficiencyTier === 'Medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-white/10 text-gray-300'
                }`}>
                  {item.efficiencyTier} Priority
                </span>
                <span className="text-xs font-mono text-gray-400">{item.burnDurationSec}s Burn</span>
              </div>
              <h3 className="text-sm font-bold text-white">{item.name}</h3>
              <div className="text-2xl font-black text-amber-400 font-mono">
                +{item.distanceBoostMeters}m
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Found in: {item.howToObtain}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
