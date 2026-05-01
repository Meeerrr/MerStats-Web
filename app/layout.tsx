// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MerStats Web Platform",
  description: "Enterprise-grade VEX Robotics Telemetry and Scouting",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 overflow-hidden`}>
      {/* Desktop Container: Forces a full-screen, non-scrolling shell */}
      <div className="flex h-screen w-screen">

        {/* Static Sidebar Navigation */}
        <Navigation />

        {/* Main Content Area: Handles its own internal scrolling */}
        <main className="flex-1 bg-gray-50 overflow-y-auto bg-gray-900/50">
          {/*
              This inner container ensures the content doesn't stretch infinitely 
              on ultra-wide monitors, maintaining readability.
            */}
          <div className="max-w-7xl mx-auto p-8">
            {children}
          </div>
        </main>

      </div>
      </body>
      </html>
  );
}