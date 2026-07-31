import type { Metadata } from "next";
import "./globals.css";
import { Compass, FileText, Bookmark, HelpCircle, Search, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "수빈쌤의 행복한 수학교실 | 수업 활용 라이브러리 & 디지털 교구",
  description: "수학 수업시간에 바로 활용하는 개념 자료, 실시간 시각화 교구, 단원별 학습지 라이브러리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="p-2 bg-indigo-600/20 border border-indigo-500/40 rounded-xl group-hover:bg-indigo-600/30 transition-all">
                <Compass className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">Math Classroom Hub</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  수빈쌤의 행복한 수학교실
                </span>
              </div>
            </a>

            {/* Menu Links */}
            <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-300">
              <a href="#applets" className="hover:text-indigo-400 flex items-center space-x-1.5 transition-colors">
                <Laptop className="w-4 h-4 text-indigo-400" />
                <span>디지털 교구</span>
              </a>
              <a href="#worksheets" className="hover:text-indigo-400 flex items-center space-x-1.5 transition-colors">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>학습지·활동지</span>
              </a>
              <a href="#formulas" className="hover:text-indigo-400 flex items-center space-x-1.5 transition-colors">
                <Bookmark className="w-4 h-4 text-indigo-400" />
                <span>공식·개념집</span>
              </a>
              <a href="#quiz" className="hover:text-indigo-400 flex items-center space-x-1.5 transition-colors">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>수업 복습 퀴즈</span>
              </a>
            </nav>

            {/* Quick Action Button */}
            <div className="flex items-center space-x-3">
              <a
                href="#worksheets"
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all flex items-center space-x-1.5"
              >
                <span>자료 전체보기</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 text-xs">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-slate-300">
              <Compass className="w-5 h-5 text-indigo-400" />
              <span className="font-bold text-sm text-white">수빈쌤의 행복한 수학교실 (수업 활용 뱅크)</span>
            </div>
            <div className="text-center md:text-right text-slate-500 space-y-1">
              <p>본 사이트의 교구 및 학습지 자료는 수업 목적 활용이 가능합니다.</p>
              <p>&copy; {new Date().getFullYear()} Subin Math Classroom Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
