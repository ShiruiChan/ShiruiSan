// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/shared/profile";

const siteUrl = new URL(profile.contacts.website);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "ShiruiSan",
  authors: [{ name: profile.name, url: profile.contacts.website }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
