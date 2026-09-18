import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://laststop.robloxwikihub.com/calculator/" },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
