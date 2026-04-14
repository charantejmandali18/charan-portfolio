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
  title: "Charan Tej Mandali — GTM & Workflow Automation Engineer",
  description: "Automation engineer building scalable data pipelines, API integrations, and workflow orchestration. Make.com, n8n, Clay, Airflow, Python. 50+ enterprise clients. 6 brands at scale.",
  keywords: ["GTM Automation Engineer", "Workflow Automation", "Make.com", "n8n", "API Integration", "Clay", "Charan Tej Mandali"],
  authors: [{ name: "Charan Tej Mandali" }],
  openGraph: {
    title: "Charan Tej Mandali — GTM & Workflow Automation Engineer",
    description: "Automation engineer specializing in workflow orchestration, API integrations, and data pipelines at enterprise scale.",
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
