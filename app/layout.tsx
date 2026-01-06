import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaan Javed",
  description:
    "Computer science student passionate about pursuing a career in tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-grid ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
