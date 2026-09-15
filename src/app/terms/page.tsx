import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use & Community Guidelines | Last Stop Wiki',
  description: 'Terms of use, gameplay accuracy disclaimers, and fair use guidelines for Last Stop fans.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/terms/',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-200">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-mono">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Terms of Use</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>COMMUNITY &amp; LEGAL TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Terms of Use &amp; Service Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Last Updated: 2026 • Unofficial strategy companion for Last Stop on Roblox
        </p>
      </div>

      <div className="glass-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <span>1. Unofficial Fan Companion</span>
          </h2>
          <p>
            Last Stop Wiki is an independent community resource. We are not affiliated with, sponsored by, or endorsed by Roblox Corporation or official developers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
          </h2>
          <p>
            Bus armor upgrades, weapon DPS, scrap costs, zombie threat levels, and redeem codes change frequently. All guides and calculator predictions are provided &quot;as is&quot;. Always verify current game mechanics inside the Roblox experience.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>3. Anti-Phishing &amp; Account Security Pledge</span>
          </h2>
          <p>
            We will <strong className="text-white">never</strong> ask for your Roblox credentials, passwords, or Robux. Never share account credentials with third-party fan sites. Redeem codes exclusively inside the official Roblox game.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>4. Acceptable Community Use</span>
          </h2>
          <p>
            Visitors are welcome to freely access and share our calculators and guides. You agree not to engage in malicious attacks, automated scraping, or misrepresenting this fan site as official game documentation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-400" />
            <span>5. Intellectual Property &amp; Fair Use</span>
          </h2>
          <p>
            Roblox is a registered trademark of Roblox Corporation. Last Stop and related assets belong to their respective developers. All media and text are used under Fair Use principles for educational commentary.
          </p>
        </section>

        <section className="space-y-2 border-t border-white/10 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>6. DMCA &amp; Contact Inquiries</span>
          </h2>
          <p>
            For rights holders, content attribution, or takedown requests, contact our editorial team directly at:
          </p>
          <div className="inline-block rounded-xl border border-blue-500/30 bg-blue-950/40 p-3 font-mono text-sm font-bold text-blue-300">
            contact@robloxwikihub.com
          </div>
          <p className="text-xs text-gray-400 font-mono">
            We respond promptly within 48 business hours.
          </p>
        </section>
      </div>
    </div>
  );
}
