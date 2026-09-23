import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Bus, Flame, Gift, Award, Shield, Wrench, Skull, BookOpen, ArrowRight, CheckCircle2, ChevronRight, Gauge, Radio, ShieldCheck } from 'lucide-react';
import { GAME_INFO, CLASSES_DATA, CODES_LIST, FAQS } from '@/data/gameData';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: { absolute: 'Last Stop Wiki — Bus Upgrades, Classes, Codes & Fuel Calculator' },
  description: 'Fan wiki for Roblox Last Stop: bus upgrade tree, class comparison, verified codes, weapons database and the fuel range simulator.',
  alternates: { canonical: 'https://laststop.robloxwikihub.com' },
};


export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Hlele',
      jobTitle: 'Editor',
    },
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Eyebrow & Status Ticker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>COMMUNITY WIKI — UPDATED FOR AUGUST/ BETA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                SURVIVE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500">LAST STOP</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                The armored bus does not wait. Refuel the furnace, scavenge abandoned towns, unlock S-Tier classes, and conquer the <span className="text-amber-400 font-bold font-mono">95,000-meter</span> wasteland before the infected horde breaches your defenses.
              </p>

              {/* Author Card */}
              <AuthorCard
                authorName="Hlele"
                role="Editor"
                experience="AI-assisted research, human-reviewed"
                patchVersion="Beta Update"
                editorialNote="All fuel consumption curves, zombie DPS scaling, bus armor upgrade tiers, and furnace burn times are cross-checked against multiple community sources; any figure we could not independently confirm is explicitly labeled as unverified."
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/calculator/" className="btn-primary">
                  <Flame className="w-4 h-4 text-black" />
                  <span>Launch Fuel Simulator</span>
                </Link>
                <Link href="/codes/" className="btn-secondary">
                  <Gift className="w-4 h-4 text-amber-400" />
                  <span>Get Active Codes (750+ Tickets)</span>
                </Link>
                <Link href="/class-tier-list/" className="btn-secondary">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Classes Tier List</span>
                </Link>
              </div>

              {/* 4-Stat Ticker */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-gray-400 text-[10px] uppercase">Target Distance</div>
                  <div className="text-lg font-black text-amber-400">95,000m</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-gray-400 text-[10px] uppercase">Playable Classes</div>
                  <div className="text-lg font-black text-emerald-400">12 Classes</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-gray-400 text-[10px] uppercase">Free Tickets</div>
                  <div className="text-lg font-black text-yellow-400">750 Tickets</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-gray-400 text-[10px] uppercase">Developer</div>
                  <div className="text-lg font-black text-cyan-400 truncate">The Hidden Route</div>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 border-amber-500/30 space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="font-mono font-bold text-xs text-emerald-400">BUS TELEMETRY LIVE</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">Checkpoint Status: Active</span>
                </div>

                {/* Progress Bar towards 95,000m */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-400">Wasteland Progress</span>
                    <span className="text-amber-400 font-bold">Goal: 95,000m</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-wasteland-900 border border-white/10 overflow-hidden p-0.5">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 w-3/4 animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>0m Suburbs</span>
                    <span>30k Highway</span>
                    <span>60k Trainyard</span>
                    <span>95k Bunker</span>
                  </div>
                </div>

                {/* Quick Controls Card */}
                <div className="p-4 rounded-xl bg-wasteland-950/80 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Gauge className="w-4 h-4 text-amber-500" />
                    <span>Key Survivor Controls</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-300">
                    <div><span className="text-amber-400 font-bold">Z:</span> Place / Barricade</div>
                    <div><span className="text-amber-400 font-bold">E:</span> Refuel Furnace</div>
                    <div><span className="text-amber-400 font-bold">R:</span> Reload Gun</div>
                    <div><span className="text-amber-400 font-bold">TAB:</span> Open Inventory</div>
                  </div>
                </div>

                {/* Quick Code Claim Button */}
                <Link
                  href="/codes/"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 hover:border-amber-400 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-extrabold">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Active Code: &quot;FRED&quot; (+500 Tickets)
                      </div>
                      <div className="text-[10px] text-gray-400">Click to copy all working codes</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            </div>
          </div>

          {/* Bus Convoy Screenshot Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto mt-10">
            <img
              src="/images/last-stop-hero.webp"
              alt="Roblox Last Stop Armored Survival Bus 95,000m Wasteland Journey"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                <span className="text-amber-400 font-bold">Armored Convoy</span> — The 95,000m wasteland journey & furnace refuel checkpoint
              </div>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-[11px] rounded-lg border border-amber-500/30 font-mono">
                Route Distance: 95,000m
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            EVERYTHING YOU NEED TO SURVIVE THE ROUTE
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Comprehensive interactive utilities, databases, and progression trees engineered for squads aiming for the 95,000m extraction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tool 1 */}
          <Link href="/calculator/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>Bus Fuel & Range Simulator</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">HOT</span>
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Drag sliders for coal chunks, fuel canisters, and engine upgrades. Calculate exact distance in meters before the furnace runs dry.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-amber-400 text-xs font-bold">
              <span>Calculate Distance</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool 2 */}
          <Link href="/codes/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>Active Tickets Codes Hub</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">SOURCED</span>
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  1-click clipboard copy for FRED and UPDATE1. Get 750 free Tickets to immediately unlock S-Tier classes and bus upgrades.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
              <span>Copy All Codes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool 3 */}
          <Link href="/class-tier-list/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span>12 Classes Tier List & Comparison</span>
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Rankings from S to D tier. Compare passives for Necromancer, Vampire, Medic, and Bus Driver side-by-side.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-yellow-400 text-xs font-bold">
              <span>View Tier List</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool 4 */}
          <Link href="/weapons-guide/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Weapons & Armory Stats
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Detailed DPS, fire rates, ammo types, and optimal range for Shotguns, Hunting Rifles, Tommy Guns, and Sledgehammers.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-blue-400 text-xs font-bold">
              <span>Explore Arsenal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool 5 */}
          <Link href="/bus-upgrades/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Bus Tech Tree & Upgrades
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Recommended upgrade orders for Engine Turbo, Heavy Cowcatcher Armor, UV Searchlights, and Roof Turret slots.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-purple-400 text-xs font-bold">
              <span>View Tech Tree</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool 6 */}
          <Link href="/zombies-bestiary/" className="glass-card p-6 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Skull className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  Infected Threats & Boss Guide
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Counter strategies for the infected hordes, Dracula's two-phase Graveyard fight, the Anubis dungeon, and Fred at the 95,000m Final Stop.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-red-400 text-xs font-bold">
              <span>View Bestiary</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* S-Tier Classes Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-2xl border-amber-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">META RANKINGS</div>
              <h2 className="text-2xl font-black text-white">Top S-Tier Classes Spotlight</h2>
            </div>
            <Link href="/class-tier-list/" className="btn-secondary text-xs py-2 px-4">
              <span>Compare All 12 Classes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLASSES_DATA.filter(c => c.tier === 'S').map((cls) => (
              <div key={cls.id} className="p-5 rounded-xl bg-wasteland-950/70 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="tier-s px-2.5 py-0.5 rounded text-xs">{cls.tier} TIER</span>
                  <span className="text-xs font-mono text-amber-400 font-bold">{cls.cost}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{cls.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-3">{cls.passive}</p>
                <div className="pt-2 text-[11px] font-mono text-gray-500 border-t border-white/5">
                  Role: <span className="text-gray-300 font-bold">{cls.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Everything you need to know about Last Stop mechanics and progression.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-card-static p-6 space-y-2">
              <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-7.5">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10 md:p-14 border-amber-500/30 relative overflow-hidden space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            READY TO EMBARK ON THE 95,000M RUN?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Calculate your squad&apos;s coal consumption, claim active Tickets codes, and prepare the bus engine before heading into the dead zone.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/calculator/" className="btn-primary">
              <span>Calculate Fuel Range</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/beginner-guide/" className="btn-secondary">
              <span>Read Beginner Guide</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
