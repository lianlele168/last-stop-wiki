import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Trust Center | Last Stop Wiki',
  description: 'Privacy policy, COPPA child safety disclosures, and data protection guidelines for Last Stop fans.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-200">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-mono">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Privacy Policy</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ROBLOX FAN NETWORK TRUST CENTER</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Privacy Policy &amp; Trust Disclosures
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Last Updated: 2026 • Compliant with COPPA, GDPR, and Google AdSense
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="glass-card p-3 flex items-center gap-3 text-xs">
          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <p className="font-bold text-white">COPPA Compliant</p>
            <p className="text-gray-400 text-[11px]">Safe for under 13</p>
          </div>
        </div>
        <div className="glass-card p-3 flex items-center gap-3 text-xs">
          <Lock className="h-5 w-5 shrink-0 text-amber-400" />
          <div>
            <p className="font-bold text-white">Zero Account Needed</p>
            <p className="text-gray-400 text-[11px]">No passwords or Robux</p>
          </div>
        </div>
        <div className="glass-card p-3 flex items-center gap-3 text-xs">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
          <div>
            <p className="font-bold text-white">100% Client-Side</p>
            <p className="text-gray-400 text-[11px]">Calculators run in browser</p>
          </div>
        </div>
        <div className="glass-card p-3 flex items-center gap-3 text-xs">
          <Mail className="h-5 w-5 shrink-0 text-blue-400" />
          <div>
            <p className="font-bold text-white">Verified Contact</p>
            <p className="text-gray-400 text-[11px]">48h response SLA</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            <span>1. Zero Personal Data &amp; No Roblox Credentials</span>
          </h2>
          <p>
            Last Stop Wiki does not require user registration or account creation. We will <strong className="text-white">NEVER</strong> request your Roblox username, password, session cookies, or billing information. All bus upgrade calculations, weapons DPS stats, and code tools run client-side in your local browser.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>2. COPPA &amp; Children&apos;s Online Privacy Compliance</span>
          </h2>
          <p>
            In strict compliance with the Children&apos;s Online Privacy Protection Act (COPPA), this website does not knowingly collect personal data from children under the age of 13.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            <span>3. Cookies &amp; Advertising Disclosures (Google AdSense)</span>
          </h2>
          <p className="bg-wasteland-950 p-4 rounded-xl border border-white/10 text-amber-300 font-mono text-xs">
            &quot;Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.&quot;
          </p>
          <p>
            Users may opt out of personalized advertising by visiting Google&apos;s{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">
              Ads Settings
            </a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-500" />
            <span>4. External Hyperlinks &amp; Disclaimer</span>
          </h2>
          <p>
            Our site contains links to third-party gaming platforms, including Roblox.com and Discord. We have no control over and assume no responsibility for the content or privacy policies of any third-party sites or services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-500" />
            <span>5. Intellectual Property &amp; Fair Use</span>
          </h2>
          <p>
            Roblox is a registered trademark of Roblox Corporation. Last Stop, bus models, and zombie assets belong to their respective developers. All content is used under Fair Use for educational purposes.
          </p>
        </section>

        <section className="space-y-2 border-t border-white/10 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>6. Contact Information</span>
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to submit corrections to our wiki guides, please contact the editorial staff at:
          </p>
          <div className="inline-block rounded-xl border border-blue-500/30 bg-blue-950/40 p-3 font-mono text-sm font-bold text-blue-300">
            lianlele168@gmail.com
          </div>
          <p className="text-xs text-gray-400 font-mono">
            Inquiries are acknowledged and resolved within 48 business hours.
          </p>
        </section>
      </div>
    </div>
  );
}
