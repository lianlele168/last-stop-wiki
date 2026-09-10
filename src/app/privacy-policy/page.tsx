import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Terms of Service',
  description: 'Privacy policy, cookie usage, Google AdSense disclosures, and terms of service for Last Stop Wiki.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>LEGAL COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Last Updated: September 2026 • Compliant with Google AdSense, GDPR & CCPA
        </p>
      </div>

      <div className="glass-card p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            <span>1. Information We Collect</span>
          </h2>
          <p>
            Last Stop Wiki does not require user registration or personal account creation. Like most websites, we automatically collect basic non-personally identifiable log information when you browse our pages, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-400 text-xs">
            <li>Internet Protocol (IP) addresses and browser user-agent strings.</li>
            <li>Referring / exit pages and date / timestamp records.</li>
            <li>Aggregated page interaction and usage metrics (such as calculating distance in our simulator).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            <span>2. Cookies & Advertising Disclosures (Google AdSense)</span>
          </h2>
          <p className="bg-wasteland-950 p-4 rounded-xl border border-white/10 text-amber-300 font-mono text-xs">
            &quot;Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.&quot;
          </p>
          <p>
            Users may opt out of personalized advertising by visiting Google&apos;s{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline hover:text-amber-300"
            >
              Ads Settings
            </a>
            . Alternatively, you can opt out of third-party vendor cookies by visiting{' '}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline hover:text-amber-300"
            >
              www.aboutads.info
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-500" />
            <span>3. External Hyperlinks & Disclaimer</span>
          </h2>
          <p>
            Our site contains links to third-party gaming platforms, including Roblox.com and Discord. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>4. Contact Information</span>
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to submit corrections to our wiki guides, please contact the editorial staff at{' '}
            <span className="text-amber-400 font-mono font-bold">contact@robloxwikihub.com</span>.
          </p>
        </section>

      </div>

    </div>
  );
}
