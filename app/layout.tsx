import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Cpu, ShieldCheck, Activity, Terminal as TerminalIcon } from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "수빈쌤의 행복한 수학교실 | MATH_OS v2.0",
  description: "사이버펑크 해커 스타일의 미래지향적 수학 학습 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-green-500 min-h-screen flex flex-col bg-grid-pattern selection:bg-green-500 selection:text-black`}
      >
        {/* Top Hacker Nav Bar */}
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/40 neon-border-green">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-2 bg-green-500/10 rounded border border-green-500/50 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all">
                <TerminalIcon className="w-5 h-5 text-green-400 neon-text-green" />
              </div>
              <div>
                <div className="text-xs text-green-500/70 tracking-widest font-mono">SYS_ID: MATH_SUBIN_01</div>
                <h1 className="text-base md:text-lg font-bold neon-text-green tracking-wider group-hover:neon-text-magenta transition-all">
                  &gt; 수빈쌤의_행복한_수학교실
                </h1>
              </div>
            </div>

            {/* Status & Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider">
              <a href="#curriculum" className="flex items-center space-x-1.5 text-green-400 hover:neon-text-cyan transition-all">
                <span>[01_커리큘럼]</span>
              </a>
              <a href="#terminal" className="flex items-center space-x-1.5 text-green-400 hover:neon-text-magenta transition-all">
                <span>[02_해커_터미널]</span>
              </a>
              <a href="#stats" className="flex items-center space-x-1.5 text-green-400 hover:neon-text-green transition-all">
                <span>[03_학습_현황]</span>
              </a>
            </nav>

            {/* Live System Indicator */}
            <div className="flex items-center space-x-3 text-xs border border-green-500/40 rounded px-3 py-1.5 bg-black/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 hidden sm:inline">Vercel Edge Active</span>
              <span className="text-green-500/50">|</span>
              <span className="neon-text-cyan font-bold">100% ONLINE</span>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-green-500/30 bg-black/90 py-8 text-xs text-green-500/70 mt-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1"><Cpu className="w-4 h-4 text-green-400" /> <span>Core: Next.js App Router</span></span>
              <span>•</span>
              <span className="flex items-center space-x-1"><ShieldCheck className="w-4 h-4 text-green-400" /> <span>Security: Encrypted</span></span>
              <span>•</span>
              <span className="flex items-center space-x-1"><Activity className="w-4 h-4 text-green-400" /> <span>Latency: 12ms</span></span>
            </div>
            <div>
              <p>&copy; {new Date().getFullYear()} 수빈쌤 (Subin Math Lab). All Cybernetic Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
