"use client";

import { useState } from "react";
import { 
  Terminal, 
  Code2, 
  Zap, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Play, 
  BarChart3, 
  BookOpen, 
  Target, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

export default function Home() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[SYSTEM_INIT] MATH_OS v2.0 Kernel Loaded.",
    "[AUTH_CHECK] User access granted. Welcome Student_#4092.",
    "[STATUS] All 42 Cyber Math Modules online and verified.",
    "Type 'help' or click quick actions below to execute modules."
  ]);

  const handleCommandSubmit = (cmd?: string) => {
    const command = (cmd || terminalInput).trim().toLowerCase();
    if (!command) return;

    let response = "";
    if (command === "help") {
      response = "Available Commands: 'calc' (수식 계산), 'courses' (강의 목록), 'clear' (화면 정돈), 'status' (시스템 현황)";
    } else if (command === "calc") {
      response = "[CALC_ENGINE] f(x) = ∫ (3x² + 2x - 5) dx ➔ x³ + x² - 5x + C [Solved in 0.002s]";
    } else if (command === "courses") {
      response = "[COURSES] 1. 미적분학 MATRIX | 2. 확률통계 PROTOCOL | 3. 기하학 CYBERSPACE";
    } else if (command === "status") {
      response = "[STATUS_REPORT] CPU: 4.2GHz | RAM: 16GB | Math Accuracy Rate: 99.8% | Vercel Deployment: Active";
    } else if (command === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `[EXEC_ERROR] Unknown command: '${command}'. Type 'help' for available commands.`;
    }

    setTerminalLogs(prev => [...prev, `> ${command}`, response]);
    setTerminalInput("");
  };

  return (
    <div className="space-y-24 py-12 px-4 container mx-auto max-w-6xl">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center text-center space-y-8 pt-8">
        {/* Glow backdrop */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Hacker Badge */}
        <div className="inline-flex items-center space-x-2 border border-green-500/50 bg-black/60 rounded-full px-4 py-1.5 text-xs text-green-400 neon-border-green">
          <Zap className="w-3.5 h-3.5 text-magenta-400 animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">수학 성적 수직 상승 매트릭스 가동 중</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight neon-text-green uppercase">
            어서와, <span className="neon-text-magenta">수학교실</span>은 처음이지?
          </h1>
          <p className="text-base sm:text-xl text-green-400/80 max-w-2xl mx-auto leading-relaxed">
            개념부터 실전 모의고사까지, 수빈쌤의 시크릿 해킹 알고리즘으로 수학 1등급을 전송합니다.
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#terminal"
            className="px-8 py-3.5 bg-green-500 text-black font-bold rounded flex items-center space-x-2 hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.6)] uppercase tracking-wider text-sm"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>수학 챌린지 실행 [START]</span>
          </a>
          <a
            href="#curriculum"
            className="px-8 py-3.5 bg-black border border-green-500/60 text-green-400 font-bold rounded flex items-center space-x-2 hover:neon-border-magenta hover:text-magenta-400 transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4" />
            <span>모듈 커리큘럼 탐색</span>
          </a>
        </div>
      </section>


      {/* SYSTEM STATS DIAGNOSTIC GRID */}
      <section id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "SUBSCRIBERS", value: "1,337 명", sub: "수강생 성적 향상중", icon: Sparkles, color: "neon-border-green" },
          { label: "ACCURACY", value: "98.4 %", sub: "킬러문항 정답률", icon: Target, color: "neon-border-cyan" },
          { label: "MODULES", value: "42 개", sub: "보강 콘텐츠 수량", icon: Layers, color: "neon-border-magenta" },
          { label: "DEPLOYMENT", value: "100 %", sub: "Vercel 서버 가동률", icon: Cpu, color: "neon-border-green" },
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className={`p-5 bg-black/70 rounded border ${stat.color} flex flex-col justify-between space-y-3 relative overflow-hidden group hover:scale-[1.02] transition-all`}
          >
            <div className="flex items-center justify-between text-xs opacity-70">
              <span className="font-mono tracking-widest">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black neon-text-green font-mono">{stat.value}</div>
              <div className="text-[11px] text-green-500/70 mt-1">{stat.sub}</div>
            </div>
          </div>
        ))}
      </section>


      {/* INTERACTIVE HACKER MATH TERMINAL */}
      <section id="terminal" className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-green-400 neon-text-green" />
            <h2 className="text-lg font-bold uppercase tracking-wider neon-text-green">
              [SYSTEM_TERMINAL] 실시간 콘솔 인터랙션
            </h2>
          </div>
          <span className="text-xs text-green-500/60 font-mono">STATUS: INTERACTIVE</span>
        </div>

        <div className="border border-green-500/50 rounded-lg bg-black/90 p-5 font-mono text-sm space-y-4 shadow-[0_0_25px_rgba(34,197,94,0.15)] relative scanline">
          {/* Terminal Controls Header */}
          <div className="flex items-center justify-between border-b border-green-500/30 pb-3 text-xs opacity-70">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span>bash - math_subin@system:~</span>
          </div>

          {/* Logs */}
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {terminalLogs.map((log, index) => (
              <div 
                key={index} 
                className={`${log.startsWith(">") ? "text-cyan-400 font-bold" : log.includes("ERROR") ? "text-red-400" : "text-green-400/90"}`}
              >
                {log}
              </div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-green-500/20 text-xs">
            <span className="text-green-500/60 self-center">빠른 명령어:</span>
            {["help", "calc", "courses", "status", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandSubmit(cmd)}
                className="px-2.5 py-1 bg-green-500/10 border border-green-500/40 rounded hover:bg-green-500/30 text-green-300 transition-all"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleCommandSubmit(); }} 
            className="flex items-center space-x-2 pt-2"
          >
            <span className="text-magenta-400 font-bold">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="명령어를 입력하세요 (예: help, calc)..."
              className="flex-1 bg-transparent border-none outline-none text-green-300 placeholder-green-700/60 text-sm"
            />
            <button 
              type="submit"
              className="px-4 py-1 bg-green-500 text-black font-bold text-xs rounded hover:bg-green-400 transition-all"
            >
              EXECUTE
            </button>
          </form>
        </div>
      </section>


      {/* CURRICULUM MODULES GRID */}
      <section id="curriculum" className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest neon-text-magenta">
            [CURRICULUM_MODULES] 수빈쌤 코어 파이프라인
          </h2>
          <p className="text-xs sm:text-sm text-green-500/70">
            수학적 지능을 최고 단계로 업그레이드하는 최적화 모듈입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              code: "MOD_01",
              title: "미적분학 MATRIX",
              desc: "함수와 극한의 경계를 허무는 인공지능형 개념 정리 및 킬러 문항 정복",
              tags: ["수열의 극한", "미분법", "적분법"],
              color: "neon-border-green",
              tagColor: "bg-green-500/10 text-green-400 border-green-500/30"
            },
            {
              code: "MOD_02",
              title: "확률과 통계 PROTOCOL",
              desc: "불확실성을 완전히 통제하는 알고리즘 문제풀이 및 빈출 유형 완전 정복",
              tags: ["순열과 조합", "확률", "통계적 추정"],
              color: "neon-border-magenta",
              tagColor: "bg-magenta-500/10 text-magenta-400 border-magenta-500/30"
            },
            {
              code: "MOD_03",
              title: "기하학 CYBERSPACE",
              desc: "3차원 공간 도형과 벡터의 직관적 해석을 위한 시각화 훈련 파이프라인",
              tags: ["이차곡선", "평면벡터", "공간도형"],
              color: "neon-border-cyan",
              tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
            },
            {
              code: "MOD_04",
              title: "실전 모의고사 OVERDRIVE",
              desc: "수능 및 내신 완벽 대비 타임어택 시뮬레이션 및 실시간 정답 분석 모듈",
              tags: ["타임어택", "오답노트", "1등급 컷 분석"],
              color: "neon-border-green",
              tagColor: "bg-green-500/10 text-green-400 border-green-500/30"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-black/80 rounded-lg border ${item.color} flex flex-col justify-between space-y-4 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all group`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-green-500/60">
                  <span>{item.code}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:text-magenta-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-green-400 group-hover:neon-text-green transition-all">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-green-300/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className={`text-[11px] px-2.5 py-1 rounded border font-mono ${item.tagColor}`}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="p-8 sm:p-12 border border-green-500/60 rounded-xl bg-black/90 text-center space-y-6 relative overflow-hidden neon-border-green">
        <div className="space-y-3 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase neon-text-green tracking-wider">
            준비되었는가? 수학 1등급 메인프레임 접속
          </h2>
          <p className="text-xs sm:text-base text-green-400/80 max-w-xl mx-auto">
            지금 수빈쌤의 수학교실에 등록하고 나만의 학습 파이프라인을 구축하세요.
          </p>
        </div>

        <div className="flex justify-center pt-2 relative z-10">
          <button 
            onClick={() => alert("수빈쌤의 수학교실 모듈 등록 신청이 승인되었습니다!")}
            className="px-10 py-4 bg-green-500 text-black font-black rounded-md hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(34,197,94,0.8)] uppercase tracking-widest text-sm flex items-center space-x-2 group"
          >
            <span>[REGISTER] 무료 수강 신청하기</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
