'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bus, Search, Menu, X, Flame, Gift, Award, Shield, Wrench, Skull, BookOpen, ExternalLink } from 'lucide-react';
import { CLASSES_DATA, WEAPONS_DATA, ENEMIES_DATA, CODES_LIST } from '@/data/gameData';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { href: '/', label: 'Hub', icon: Bus },
    { href: '/calculator/', label: 'Fuel Simulator', icon: Flame, badge: 'Tool' },
    { href: '/codes/', label: 'Codes', icon: Gift, badge: '500 Tickets' },
    { href: '/class-tier-list/', label: 'Tier List', icon: Award },
    { href: '/weapons-guide/', label: 'Weapons', icon: Shield },
    { href: '/bus-upgrades/', label: 'Bus Upgrades', icon: Wrench },
    { href: '/zombies-bestiary/', label: 'Zombies', icon: Skull },
    { href: '/beginner-guide/', label: '95k Guide', icon: BookOpen },
  ];

  // Shortcut key listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search results
  const searchResults = searchQuery.trim() === '' ? [] : [
    ...CLASSES_DATA.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.role.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(c => ({ title: `${c.name} (${c.tier}-Tier Class)`, link: '/class-tier-list/', type: 'Class', desc: c.passive })),
    ...WEAPONS_DATA.filter(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.category.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(w => ({ title: `${w.name} (${w.category})`, link: '/weapons-guide/', type: 'Weapon', desc: w.description })),
    ...ENEMIES_DATA.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase()) || e.threatLevel.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(e => ({ title: `${e.name} (Threat: ${e.threatLevel})`, link: '/zombies-bestiary/', type: 'Zombie', desc: e.counterStrategy })),
    ...CODES_LIST.filter(c => c.code.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(c => ({ title: `Code: ${c.code} (${c.reward})`, link: '/codes/', type: 'Code', desc: c.status === 'active' ? 'Active & working — tap to copy' : 'Expired code (kept for reference)' })),
  ].slice(0, 8);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-wasteland-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-diesel-500 to-orange-600 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <Bus className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-wider font-mono">LAST STOP</span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30">WIKI</span>
              </div>
              <p className="text-[11px] text-gray-400 hidden sm:block">Roblox 95,000m Survival Database</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-amber-500" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 text-[9px] font-extrabold bg-diesel-500 text-black px-1.5 py-0.2 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-wasteland-900 border border-white/10 text-gray-400 hover:text-white hover:border-amber-500/50 text-xs transition-colors"
              title="Search Last Stop Wiki (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Quick Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-black/40 text-gray-400 rounded border border-white/10">
                Ctrl K
              </kbd>
            </button>

            {/* Play on Roblox link */}
            <a
              href="https://www.roblox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-bold transition-all"
            >
              <span>Play Roblox</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-white/10 bg-wasteland-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-extrabold bg-diesel-500 text-black px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Search Modal (Ctrl+K) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-wasteland-900 border border-amber-500/40 rounded-2xl shadow-glow-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-wasteland-950">
              <Search className="w-5 h-5 text-amber-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search classes, weapons, fuel items, zombies, or codes..."
                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-medium"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Container */}
            <div className="max-h-96 overflow-y-auto p-3 space-y-1">
              {searchQuery.trim() === '' ? (
                <div className="py-8 text-center text-gray-500 text-xs">
                  Type to search across all 10 Last Stop pages (e.g. &quot;Necromancer&quot;, &quot;Canister&quot;, &quot;FRED&quot;, &quot;Shotgun&quot;)...
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-8 text-center text-gray-500 text-xs">
                  No matching results found for &quot;{searchQuery}&quot;.
                </div>
              ) : (
                searchResults.map((res, i) => (
                  <Link
                    key={i}
                    href={res.link}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-amber-500/20 transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                          {res.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-400">
                          {res.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{res.desc}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="px-4 py-2 bg-wasteland-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>Press ESC to close</span>
              <span>10 Pages Indexed</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
