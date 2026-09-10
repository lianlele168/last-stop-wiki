import React from 'react';
import Link from 'next/link';
import { Bus, ShieldAlert, Heart, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { GAME_INFO } from '@/data/gameData';

export const metadata = {
  title: 'About Last Stop Wiki & Mission',
  description: 'Learn about the mission, data accuracy policies, and editorial guidelines behind the Last Stop community survival wiki.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          About Last Stop Wiki
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          The player-first interactive wiki and database dedicated to the survival experience <span className="text-amber-400 font-bold">{GAME_INFO.name}</span> on Roblox.
        </p>
      </div>

      {/* Mission Card */}
      <div className="glass-card p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Bus className="w-5 h-5 text-amber-500" />
          <span>Our Editorial Mission</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          Too many Roblox guides on the web are filled with auto-generated clickbait, outdated expired codes, and fabricated admin cheats. Our mission with <strong className="text-white">Last Stop Wiki</strong> is to build high-performance, real-time mathematical tools (like our Bus Fuel Simulator) and verified databases that respect players&apos; time.
        </p>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          Every fuel burn rate, class passive bonus, code status, and enemy stat on this site is manually verified in-game and cross-checked against developer patch notes from <strong className="text-white">{GAME_INFO.developer}</strong>.
        </p>
      </div>

      {/* Quality Standards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-wasteland-900 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>0% FAKE CODES</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            We test all promo codes weekly. Codes are tagged as Active or Expired with verified timestamps.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-wasteland-900 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>EXACT MATHEMATICS</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Our fuel and distance simulator uses verified in-game kinematics algorithms so you never stall unexpectedly.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-wasteland-900 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>COMMUNITY DRIVEN</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Built by dedicated Roblox fans for survival squads traversing the 95,000m wasteland route together.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3 text-xs text-gray-400">
        <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>FAIR USE & TRADEMARK DISCLAIMER</span>
        </div>
        <p className="leading-relaxed">
          Last Stop Wiki is an independent fan-created encyclopedia and is not affiliated with, authorized, maintained, sponsored or endorsed by Roblox Corporation or The Hidden Route. &quot;Last Stop&quot; and all associated names, images, and brand assets are the registered trademarks of their respective owners.
        </p>
        <p className="leading-relaxed">
          Content on this site is published under Fair Use for educational, review, and community strategy purposes.
        </p>
      </div>

    </div>
  );
}
