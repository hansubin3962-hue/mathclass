import type { Metadata } from "next";
import "./globals.css";
import { BookOpen, Home, User, FolderOpen, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "수빈쌤의 행복한 수학교실 | 수업 자료 & 수학 게임 툴킷",
  description: "수학 수업시간에 바로 활용하는 개념 자료, 실시간 시각화 교구, 수학 게임, 단원별 학습지 라이브러리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">Math Classroom Hub</span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  수빈쌤의 행복한 수학교실
                </span>
              </div>
            </a>

            {/* Menu Links: 홈, 선생님 소개, 자료실, 게임 */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
              <a href="#home" className="hover:text-indigo-600 flex items-center space-x-1.5 transition-colors">
                <Home className="w-4 h-4 text-indigo-600" />
                <span>홈</span>
              </a>
              <a href="#teacher" className="hover:text-indigo-600 flex items-center space-x-1.5 transition-colors">
                <User className="w-4 h-4 text-indigo-600" />
                <span>선생님 소개</span>
              </a>
              <a href="#resources" className="hover:text-indigo-600 flex items-center space-x-1.5 transition-colors">
                <FolderOpen className="w-4 h-4 text-indigo-600" />
                <span>자료실</span>
              </a>
              <a href="#game" className="hover:text-indigo-600 flex items-center space-x-1.5 transition-colors">
                <Gamepad2 className="w-4 h-4 text-indigo-600" />
                <span>게임</span>
              </a>
            </nav>

            {/* Quick Action Button */}
            <div className="flex items-center space-x-3">
              <a
                href="#resources"
                className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all"
              >
                자료실 바로가기
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 text-slate-600 py-10 text-xs mt-16">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-slate-900">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-sm">수빈쌤의 행복한 수학교실</span>
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
