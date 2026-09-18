import type { Metadata } from "next";
import { CODES_LIST, CODES_FAQS } from "@/data/gameData";

export const metadata: Metadata = {
  title: "Last Stop Codes (September 2026) - 5 Working Codes for 1,500 Tickets",
  description:
    "All 5 working Last Stop Roblox codes as of September 18, 2026, worth 1,500 Tickets plus 30 Alien Tokens. Includes the Level 5 redemption requirement most guides skip.",
  alternates: { canonical: "https://laststop.robloxwikihub.com/codes/" },
  keywords: [
    "last stop codes",
    "last stop roblox codes",
    "last stop codes september 2026",
    "last stop update2 code",
    "last stop free tickets",
    "last stop alien tokens",
    "the hidden route codes",
  ],
  openGraph: {
    type: "article",
    title: "Last Stop Codes (September 2026) - 5 Working Codes for 1,500 Tickets",
    description:
      "All 5 working Last Stop codes worth 1,500 Tickets, plus the Level 5 level gate and new-server caveat.",
    url: "https://laststop.robloxwikihub.com/codes/",
  },
};

const activeCodes = CODES_LIST.filter((c) => c.status === "active");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-09-18",
  mainEntity: CODES_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const codeListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Working Last Stop Roblox Codes (September 2026)",
  numberOfItems: activeCodes.length,
  itemListElement: activeCodes.map((c, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `Last Stop Code: ${c.code}`,
    description: `${c.reward} - Status: ${c.status} - Verified ${c.verifiedDate}`,
  })),
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(codeListSchema) }}
      />
      {children}
    </>
  );
}
