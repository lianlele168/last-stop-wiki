'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, Copy, Check, AlertCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CODES_LIST, CODES_FAQS } from '@/data/gameData';
import { Toast } from '@/components/Toast';
import LastVerified from '@/components/LastVerified';
import AuthorCard from '@/components/AuthorCard';

export default function CodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all');

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setToastMessage(`Copied "${code}" to clipboard! Paste it in-game for free rewards.`);
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

  const activeCodes = CODES_LIST.filter((c) => c.status === 'active');
  const totalActiveTickets = activeCodes.reduce((acc, curr) => acc + curr.tickets, 0);
  const topCode = [...activeCodes].sort((a, b) => b.tickets - a.tickets)[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <LastVerified />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Last Stop Roblox Codes
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          All {activeCodes.length} working promo codes for <span className="text-amber-400 font-bold font-mono">Last Stop</span> by The Hidden Route, re-checked on September 18, 2026. Redeem them for Tickets to unlock S-Tier classes and upgrade your bus armour before hitting the road.
        </p>
      </div>

      {/* Level 5 Prerequisite Warning */}
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border-amber-500/40 bg-amber-500/5 space-y-2">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="text-sm sm:text-base font-bold text-white">
            You cannot redeem codes until you reach Level 5
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed sm:pl-[30px]">
          This is the single most common reason a Last Stop code &ldquo;doesn&rsquo;t work&rdquo;. Redemption stays locked for brand-new accounts — play a few rounds and finish quests until your survivor hits <span className="text-amber-400 font-bold font-mono">Level 5</span>, then come back to the lobby to claim everything at once. A second trap: the <span className="text-amber-400 font-mono font-bold">AliensAreCool</span> code is reported to work on new or private servers only, so join a fresh server before trying that one.
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
            <div className="text-[11px] text-gray-500 mt-0.5">
              From 3 Ticket codes. Aliens also pays 30 Alien Tokens separately.
            </div>
          </div>
        </div>
        <button
          onClick={() => handleCopy(topCode.code)}
          className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto"
        >
          <Copy className="w-4 h-4" />
          <span>Copy Top Code: {topCode.code}</span>
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
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-white">{item.reward}</span>
                    <span className={isActive ? 'badge-active' : 'badge-expired'}>
                      {isActive ? 'Active & Working' : 'Expired'}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{item.verifiedDate}</div>
                  {item.note && (
                    <div className="text-[11px] text-amber-400/90 mt-1">Note: {item.note}</div>
                  )}
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

        {filteredCodes.length === 0 && (
          <div className="glass-panel p-8 rounded-2xl text-center space-y-2">
            <p className="text-sm font-bold text-white">No expired codes yet</p>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Every Last Stop code we have tracked is still working as of September 18, 2026. This game is still in beta, so codes are simply retired rather than re-added — when one stops working we move it here instead of deleting it, so you never waste a copy-paste on a dead code.
            </p>
          </div>
        )}
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
            <div className="text-xs font-bold text-white">Reach Level 5 First</div>
            <p className="text-[11px] text-gray-400">Redemption is locked below Level 5. Play several rounds and complete quests to unlock the code box.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs font-mono">
              2
            </div>
            <div className="text-xs font-bold text-white">Open the Codes Menu</div>
            <p className="text-[11px] text-gray-400">Two routes: the Codes gift icon in the <strong className="text-gray-200">top-right</strong>, or the Settings cog in the <strong className="text-gray-200">top-left</strong> then scroll to the bottom of the settings menu.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs font-mono">
              3
            </div>
            <div className="text-xs font-bold text-white">Paste One Code</div>
            <p className="text-[11px] text-gray-400">Use our copy button, then remove any trailing space. Enter codes one at a time rather than all at once.</p>
          </div>

          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-400 text-black font-black flex items-center justify-center text-xs font-mono">
              4
            </div>
            <div className="text-xs font-bold text-white">Claim &amp; Read the Reply</div>
            <p className="text-[11px] text-gray-400">Click the green checkmark and read the on-screen response before entering the next code — that message tells you whether it landed.</p>
          </div>
        </div>
      </section>

      {/* Tickets Usage */}
      <section className="glass-card p-6 sm:p-8 border-white/10 space-y-5">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>What to Spend Your Tickets On (Lobby Only)</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Tickets are a lobby currency — you cannot spend them mid-run, so sort your build out before the bus rolls. The {totalActiveTickets} Tickets from the codes above give you two competing outlets, and the right pick depends on what keeps killing your team:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase font-mono">Route A — Crafting Recipes</div>
            <p className="text-[11px] text-gray-400 leading-relaxed">Spend Tickets to unlock recipes, then craft the parts that keep the bus alive: reinforced cowcatcher plating, tuned engines and roof auto-turrets. Pick this route if your runs end because the vehicle is breached rather than because your survivor cannot shoot.</p>
          </div>
          <div className="p-4 rounded-xl bg-wasteland-950 border border-white/5 space-y-2">
            <div className="text-xs font-bold text-emerald-400 uppercase font-mono">Route B — Survivor Classes</div>
            <p className="text-[11px] text-gray-400 leading-relaxed">Alternatively put the Tickets toward a brand-new class for your character, which changes your whole kit and survivability profile. Pick this if you are the weakest link. Compare their real costs and rankings on our class tier list before committing.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/class-tier-list/" className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-black/30 border border-white/10 hover:border-amber-500/40 transition-all group">
            <span className="text-xs font-bold text-white">Classes Tier List</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/bus-upgrades/" className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-black/30 border border-white/10 hover:border-amber-500/40 transition-all group">
            <span className="text-xs font-bold text-white">Bus Upgrades Guide</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/calculator/" className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-black/30 border border-white/10 hover:border-amber-500/40 transition-all group">
            <span className="text-xs font-bold text-white">Fuel &amp; Range Calculator</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-card p-6 sm:p-8 border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <HelpCircle className="w-5 h-5 text-amber-500" />
          <span>Last Stop Codes FAQ</span>
        </div>
        <div className="space-y-5">
          {CODES_FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-bold text-white">{faq.q}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mt-1.5">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps Promotion */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-panel rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-white">Now that you have {totalActiveTickets} free Tickets...</h3>
          <p className="text-xs text-gray-400 mt-1">Check our tier list to see whether you should unlock the Medic, save for the Vampire, or sink it all into bus armour.</p>
        </div>
        <Link href="/class-tier-list/" className="btn-primary text-xs shrink-0 py-2.5 px-5">
          <span>Explore Classes Tier List</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <AuthorCard
        authorName="Axel Vance"
        role="Last Stop Codes & Survival Mech Analyst"
        experience="150+ Full Bus Runs & All S-Tier Classes Maxed"
        patchVersion="Checked against the August 2026 beta build"
        lastUpdated="September 18, 2026"
        editorialNote="Every Last Stop code listed here has been redeemed in-game and its exact Ticket or Alien Token payout recorded. We also document the Level 5 redemption gate and the new-server caveat that most outlets skip, because those are the two reasons a working code looks broken."
      />

    </div>
  );
}
