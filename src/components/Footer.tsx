import React from 'react';
import Link from 'next/link';
import { Bus, ShieldAlert, Sparkles, Heart } from 'lucide-react';
import { GAME_INFO } from '@/data/gameData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-wasteland-950/95 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-diesel-500 flex items-center justify-center text-black font-extrabold shadow-glow">
                <Bus className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-sm text-white tracking-wider font-mono">{GAME_INFO.name} WIKI</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              The high-performance interactive survival wiki for Roblox {GAME_INFO.name}. Built for squads navigating the 95,000m wasteland.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] text-amber-400/90 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target: 95,000 Meters Evacuation</span>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">Survival Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/calculator/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Fuel & Range Simulator</span>
                  <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.2 rounded">Interactive</span>
                </Link>
              </li>
              <li>
                <Link href="/codes/" className="hover:text-amber-400 transition-colors">
                  Active Tickets Codes (FRED & UPDATE1)
                </Link>
              </li>
              <li>
                <Link href="/class-tier-list/" className="hover:text-amber-400 transition-colors">
                  12 Classes Tier List & Dual Compare
                </Link>
              </li>
              <li>
                <Link href="/weapons-guide/" className="hover:text-amber-400 transition-colors">
                  Weapons & Defense Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Mechanics */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">Guides & Progression</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bus-upgrades/" className="hover:text-amber-400 transition-colors">
                  Bus Tech Tree & Upgrades
                </Link>
              </li>
              <li>
                <Link href="/zombies-bestiary/" className="hover:text-amber-400 transition-colors">
                  Infected & Boss Bestiary
                </Link>
              </li>
              <li>
                <Link href="/beginner-guide/" className="hover:text-amber-400 transition-colors">
                  0 to 95,000m Roadmap
                </Link>
              </li>
              <li>
                <a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Official Roblox Game Page ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & E-E-A-T */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">Legal & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/" className="hover:text-amber-400 transition-colors">
                  About Last Stop Wiki & Mission
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-amber-400 transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-gray-500 flex items-start gap-1.5">
                <ShieldAlert className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>Not affiliated with or endorsed by Roblox Corporation or The Hidden Route.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <div>
            © {new Date().getFullYear()} Last Stop Wiki. All rights to {GAME_INFO.name} belong to {GAME_INFO.developer}.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Engineered with Next.js 14 SSG &</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Roblox Survivors</span>
          </div>
        <div className="mt-3 text-[11px] text-gray-600 text-center">
          <p>Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail</p>
        </div>
        </div>
      </div>
    </footer>
  );
};
