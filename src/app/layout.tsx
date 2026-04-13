import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charan Tej Mandali — AI Automation Engineer",
  description: "AI Automation & Backend Engineer building intelligent systems at scale. MCP servers, AI agents, distributed systems for 6 restaurant brands and 50+ enterprise clients.",
  keywords: ["AI Engineer", "AI Automation", "MCP Servers", "AI Agents", "Backend Engineer", "Charan Tej Mandali"],
  authors: [{ name: "Charan Tej Mandali" }],
  openGraph: {
    title: "Charan Tej Mandali — AI Automation Engineer",
    description: "AI Automation & Backend Engineer. MCP servers, AI agents, enterprise systems at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
