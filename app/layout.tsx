import type { Metadata } from "next";
import "./globals.css";
import { BookOpen, GraduationCap, PhoneCall, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "수빈쌤의 행복한 수학교실 | 1:1 맞춤 수학 전문 학원",
  description: "개념부터 킬러 문제 정복까지! 수학 1등급을 만드는 수빈쌤의 행복한 수학교실",
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
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block">Happy Math Lab</span>
                <span className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  수빈쌤의 행복한 수학교실
                </span>
              </div>
            </a>

            {/* Menu Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-indigo-400 transition-colors">수학교실 소개</a>
              <a href="#courses" className="hover:text-indigo-400 transition-colors">강의 안내</a>
              <a href="#reviews" className="hover:text-indigo-400 transition-colors">수강후기</a>
              <a href="#faq" className="hover:text-indigo-400 transition-colors">자주 묻는 질문</a>
            </nav>

            {/* Header Right Action */}
            <div className="flex items-center space-x-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-indigo-400" />
                <span>상담 문의</span>
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all flex items-center space-x-1.5"
              >
                <span>무료 체험 신청</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 text-sm">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center space-x-2 text-white font-bold text-lg">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>수빈쌤의 행복한 수학교실</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                초등·중등·고등 수학 개념 완성과 수능 1등급 대비를 위한 1:1 맞춤 학습 시스템. 
                수학이 어려웠던 학생도 원리와 재미를 깨우치도록 수빈쌤이 함께합니다.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">빠른 링크</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">선생님 소개</a></li>
                <li><a href="#courses" className="hover:text-indigo-400 transition-colors">수능/내신 커리큘럼</a></li>
                <li><a href="#reviews" className="hover:text-indigo-400 transition-colors">성적 향상 후기</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition-colors">상담 예약 신청</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">상담 센터</h4>
              <p className="text-xs text-slate-300 font-semibold mb-1">📞 010-XXXX-XXXX</p>
              <p className="text-xs text-slate-400">평일 14:00 ~ 22:00 / 토요일 10:00 ~ 18:00</p>
              <p className="text-xs text-slate-500 mt-2">서울특별시 강남구 수학로 104 행복빌딩 3층</p>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} 수빈쌤의 행복한 수학교실. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
