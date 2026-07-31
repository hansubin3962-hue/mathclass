import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "수빈쌤의 행복한 수학교실",
  description: "Cyberpunk Hacker Style Next.js Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-green-500 min-h-screen flex flex-col`}
      >
        {/* Header */}
        <header className="p-6 border-b border-green-500/30 neon-border bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold neon-text tracking-wider">
              &gt; 수빈쌤의_행복한_수학교실
            </h1>
            <nav>
              <ul className="flex space-x-6 text-sm">
                <li className="hover:text-magenta-500 hover:magenta-text cursor-pointer transition-all">
                  [HOME]
                </li>
                <li className="hover:text-magenta-500 hover:magenta-text cursor-pointer transition-all">
                  [ABOUT]
                </li>
                <li className="hover:text-magenta-500 hover:magenta-text cursor-pointer transition-all">
                  [CONTACT]
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6 flex flex-col justify-center items-center">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-4 border-t border-green-500/30 text-center text-xs opacity-70">
          <p>&copy; {new Date().getFullYear()} 수빈쌤. All rights reserved. System Online.</p>
        </footer>
      </body>
    </html>
  );
}
