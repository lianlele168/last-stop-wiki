'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, Copy, Check, Sparkles, AlertCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CODES_LIST } from '@/data/gameData';
import { Toast } from '@/components/Toast';

export default function CodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all');

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setToastMessage(`Copied "${code}" to clipboard! Paste it in-game for free Tickets.`);
    setToastVisible(true);

    setTimeout(() => {
      setCopiedCode(null);
      setToastVisible(false);
    }, 3000);
  };

  const filteredCodes = CODES_LIST.filter((c) => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

  const totalActiveTickets = CODES_LIST.filter(c => c.status === 'active').reduce((acc, curr) => acc + curr.tickets, 0);

  const codesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Active Last Stop Roblox Codes',
    itemListElement: CODES_LIST.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Last Stop Code: ${c.code}`,
      description: `${c.reward} - Status: ${c.status}`,
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(codesSchema) }}
      />

      <Toast message={toastMessage} visible={toastVisible} />

      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>VERIFIED ACTIVE — SEPTEMBER 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Last Stop Roblox Codes
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Claim all working promo codes for <span className="text-amber-400 font-bold font-mono">Last Stop</span>. Redeem for free Tickets to unlock S-Tier classes like the Medic, Vampire, and upgrade your bus armor before hitting the road.
        </p>
      </div>

      {/* Reward Value Stat Card */}
      <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-black font-black shadow-glow-emerald">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-gray-400 uppercase">Total Free Tickets Available</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              +{totalActiveTickets} Free Tickets
            </div>
          </div>
        </div>
        <button
          onClick={() => handleCopy('FRED')}
          className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto"
        >
          <Copy className="w-4 h-4" />
          <span>Copy Top Code: FRED</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          {(['all', 'active', 'expired'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase font-mono transition-all ${
                filter === tab
                  ? 'bg-amber-500 text-black shadow-glow'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab} ({CODES_LIST.filter(c => tab === 'all' ? true : c.status === tab).length})
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-500 font-mono hidden sm:inline">
          Click any code card to 1-click copy
        </span>
      </div>

      {/* Codes List */}
      <div className="space-y-3">
        {filteredCodes.map((item) => {
          const isCopied = copiedCode === item.code;
          const isActive = item.status === 'active';

          return (
            <div
              key={item.code}
              className={`glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                isActive ? 'hover:border-amber-500/50' : 'opacity-60 bg-black/40'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div
                  onClick={() => isActive && handleCopy(item.code)}
                  className={`px-4 py-2 rounded-xl font-mono text-base font-black tracking-wider border cursor-pointer select-all transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-white/5 text-gray-500 border-white/10 line-through'
                  }`}
                  title="Click to copy"
                >
                  {item.code}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{item.reward}</span>
                    <span className={isActive ? 'badge-active' : 'badge-expired'}>
                      {isActive ? 'Active & Working' : 'Expired'}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{item.verifiedDate}</div>
                </div>
              </div>

              {/* Action Button */}
              {isActive ? (
                <button
                  onClick={() => handleCopy(item.code)}
                  className={`btn-copy w-full sm:w-auto justify-center ${
                    isCopied ? 'bg-emerald-500 text-black' : ''
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="text-xs font-mono text-gray-500">No longer valid</span>
              )}
            </div>
          );
        })}
      </div>

      {/* How to Redeem In-Game Guide */}
      <section className="glass-card p-6 sm:p-8 border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <HelpCircle className="w-5 h-5 text-amber-500" />
          <span>How to Redeem Codes in Last Stop (Step-by-Step)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs font-mono">
              1
            </div>
            <div className="text-xs font-bold text-white">Launch the Experience</div>
            <p className="text-[11px] text-gray-400">Open Last Stop in the Roblox app on PC, Mobile, or Console.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs font-mono">
              2
            </div>
            <div className="text-xs font-bold text-white">Open Settings Menu</div>
            <p className="text-[11px] text-gray-400">Click the silver Gear icon (Settings) in the top-left or the Codes Gift icon.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs font-mono">
              3
            </div>
            <div className="text-xs font-bold text-white">Enter Working Code</div>
            <p className="text-[11px] text-gray-400">Type or paste <span className="text-amber-400 font-mono">FRED</span> into the text box.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-400 text-black font-black flex items-center justify-center text-xs font-mono">
              4
            </div>
            <div className="text-xs font-bold text-white">Claim Free Tickets</div>
            <p className="text-[11px] text-gray-400">Click the Checkmark/Redeem button to receive your currency immediately.</p>
          </div>
        </div>
      </section>

      {/* Next Steps Promotion */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-panel rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-white">Now that you have 750 free Tickets...</h3>
          <p className="text-xs text-gray-400 mt-1">Check our tier list to see whether you should unlock the Medic (1,000 Tickets) or save for the Vampire.</p>
        </div>
        <Link href="/class-tier-list/" className="btn-primary text-xs shrink-0 py-2.5 px-5">
          <span>Explore Classes Tier List</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
