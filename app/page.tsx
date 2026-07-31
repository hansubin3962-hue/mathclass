"use client";

import { useState } from "react";
import { 
  Search, 
  Download, 
  Eye, 
  Laptop, 
  FileText, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Sliders, 
  RotateCcw, 
  BookOpen, 
  Layers, 
  FileCode, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function Home() {
  // Grapher Interactive State
  const [paramA, setParamA] = useState<number>(1);
  const [paramB, setParamB] = useState<number>(0);
  const [paramC, setParamC] = useState<number>(0);

  // Resource Filter State
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Worksheets Data
  const resources = [
    {
      id: 1,
      category: "공통수학",
      type: "개념활동지",
      format: "PDF",
      title: "이차함수의 그래프와 직선의 위치 관계 탐구 활동지",
      desc: "판별식 D의 부호에 따른 교점의 개수를 학생들이 직접 좌표평면에 그려보며 시각화하는 수업용 교재",
      downloads: 342,
      date: "2026.03.12"
    },
    {
      id: 2,
      category: "미적분",
      type: "핵심요약집",
      format: "PDF",
      title: "삼각함수의 극한 & 도함수 3초 공식 요약집",
      desc: "lim (x->0) sin(x)/x = 1 증명 과정 및 주요 극한 공식 10선 한눈에 보기 정리본",
      downloads: 512,
      date: "2026.03.10"
    },
    {
      id: 3,
      category: "확통",
      type: "형성평가",
      format: "HWP",
      title: "조건부확률과 베이즈 정리 대표 10문항 퀴즈지",
      desc: "수업 마무리 15분 형성평가용 라이트한 문제지 (정답 및 해설 포함)",
      downloads: 289,
      date: "2026.03.08"
    },
    {
      id: 4,
      category: "기하",
      type: "탐구과제",
      format: "HTML",
      title: "삼수선 정리 3D 공간 시각화 탐구 교구",
      desc: "수직 조건에 따라 변화하는 공간 평면과 직선의 관계를 마우스로 회전하며 관찰하는 교구",
      downloads: 410,
      date: "2026.03.05"
    },
    {
      id: 5,
      category: "공통수학",
      type: "수능기출",
      format: "PDF",
      title: "다항식의 연산 & 인수분해 모의고사 빈출 50제",
      desc: "최근 3개년 고1 모의고사 기출문제 중 오답률 60% 이상 고난도 집중 분석집",
      downloads: 620,
      date: "2026.03.01"
    },
    {
      id: 6,
      category: "미적분",
      type: "수업활동지",
      format: "PDF",
      title: "치환적분법과 부분적분법 구분 훈련 활동지",
      desc: "적분 적합성을 신속하게 판단할 수 있도록 돕는 연쇄법칙 역추적 유형 분류 학습지",
      downloads: 445,
      date: "2026.02.25"
    }
  ];

  // Quiz Data
  const quizzes = [
    {
      id: 1,
      q: "1. 이차함수 f(x) = ax² + bx + c 에서 a > 0 일 때, 그래프의 모양은?",
      options: ["아래로 볼록", "위로 볼록", "직선 형태", "원 모양"],
      answer: 0
    },
    {
      id: 2,
      q: "2. lim (x ➔ 0) [sin(x) / x] 의 값은?",
      options: ["0", "1", "∞", "undefined"],
      answer: 1
    },
    {
      id: 3,
      q: "3. 서로 다른 n개 중 r개를 순서 없이 택하는 조합의 기호는?",
      options: ["nPr", "nCr", "nHr", "n!"],
      answer: 1
    }
  ];

  const handleQuizSelect = (qId: number, optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizzes.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) score += 1;
    });
    setQuizScore(score);
  };

  const filteredResources = resources.filter(res => {
    const matchesCategory = activeCategory === "전체" || res.category === activeCategory;
    const matchesSearch = res.title.includes(searchQuery) || res.desc.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-20 container mx-auto px-4 sm:px-6 max-w-6xl">
      
      {/* HERO SECTION */}
      <section className="pt-10 md:pt-16 pb-10 text-center space-y-6 relative">
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>수업 시간에 바로 꺼내 쓰는 디지털 수학 교실</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          수학 수업이 새로워지는 공간 <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400">
            수빈쌤의 수학 수업 자료실 & 디지털 교구
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          실시간 그래프 탐구 교구부터 단원별 핵심 활동지, 공식 요약집, 복습 퀴즈까지 — 
          선생님과 학생들이 수학 수업을 풍성하게 만들 수 있는 자료를 자유롭게 활용하세요.
        </p>

        {/* Global Search Bar */}
        <div className="max-w-xl mx-auto relative pt-2">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="필요한 단원이나 학습지 제목을 검색해보세요 (예: 이차함수, 삼각함수, 확률)..."
              className="w-full pl-12 pr-28 py-3.5 bg-slate-900/90 border border-slate-700 focus:border-indigo-500 rounded-xl text-slate-100 placeholder-slate-500 text-sm outline-none shadow-lg"
            />
            <button className="absolute right-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors">
              검색
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 1: INTERACTIVE CLASSROOM TOOLKIT (디지털 교구 시뮬레이터) */}
      <section id="applets" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <Laptop className="w-4 h-4" />
              <span>Interactive Applet</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">📐 실시간 함수 그래프 탐구 교구</h2>
          </div>
          <p className="text-xs text-slate-400">수업 중 슬라이더를 조절하며 계수에 따른 그래프의 변화를 직관적으로 관찰하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 math-card p-6 sm:p-8 rounded-2xl">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-indigo-400 uppercase">이차함수 표준형</span>
              <h3 className="text-xl font-bold text-white font-mono">f(x) = {paramA}x² + {paramB}x + {paramC}</h3>
              <p className="text-xs text-slate-400">계수 a, b, c를 조절하여 정점의 위치와 폭 변화를 탐구합니다.</p>
            </div>

            {/* Sliders */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">계수 a (볼록 방향 및 폭):</span>
                  <span className="text-indigo-400 font-mono">{paramA}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.5"
                  value={paramA}
                  onChange={(e) => setParamA(parseFloat(e.target.value) || 1)}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">계수 b (축의 위치):</span>
                  <span className="text-indigo-400 font-mono">{paramB}</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="1"
                  value={paramB}
                  onChange={(e) => setParamB(parseFloat(e.target.value) || 0)}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">계수 c (y절편):</span>
                  <span className="text-indigo-400 font-mono">{paramC}</span>
                </div>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={paramC}
                  onChange={(e) => setParamC(parseFloat(e.target.value) || 0)}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => { setParamA(1); setParamB(0); setParamC(0); }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>초기화</span>
            </button>
          </div>

          {/* Simulated Canvas Graph Display */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between items-center relative overflow-hidden min-h-[260px]">
            <div className="absolute top-3 left-3 text-[11px] font-mono text-slate-500">
              [Canvas Viewport: -10 to +10]
            </div>

            {/* Simulated Axis Lines */}
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-slate-800"></div>
              <div className="absolute h-full w-[1px] bg-slate-800"></div>
              
              {/* Dynamic Visualized Curve representation */}
              <div className="text-center space-y-3 z-10 my-auto">
                <div className="text-indigo-400 font-bold text-lg font-mono">
                  {paramA > 0 ? "∪ 아래로 볼록한 포물선" : paramA < 0 ? "∩ 위로 볼록한 포물선" : "― 평평한 직선"}
                </div>
                <div className="text-xs text-slate-400 font-mono bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                  꼭짓점 좌표: ({-paramB / (2 * (paramA || 1))}, {paramC - (paramB * paramB) / (4 * (paramA || 1))})
                </div>
              </div>
            </div>

            <div className="text-[11px] text-indigo-400 font-semibold">
              ✨ 전자칠판 및 학생 태블릿에 바로 띄워 수업에 활용할 수 있습니다.
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: WORKSHEETS & MATERIALS LIBRARY (학습지 라이브러리) */}
      <section id="worksheets" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Resource Bank</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">📄 단원별 수업 학습지 & 활동지</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {["전체", "공통수학", "미적분", "확통", "기하"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div key={res.id} className="math-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 font-semibold rounded border border-indigo-500/20">
                    {res.category}
                  </span>
                  <span className="font-mono text-slate-500 text-[11px]">{res.format} • {res.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{res.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{res.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">다운로드 {res.downloads}회</span>
                <button
                  onClick={() => alert(`'${res.title}' 학습지 다운로드가 시작되었습니다.`)}
                  className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-semibold rounded-lg transition-all flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>다운로드</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 3: FORMULAS & CONCEPT SUMMARY (3초 핵심 공식 요약집) */}
      <section id="formulas" className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            <span>Formula Hub</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">💡 단원별 핵심 공식 & 개념 카드</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "이차방정식 판별식 D",
              formula: "D = b² - 4ac",
              desc: "D > 0 (서로 다른 두 실근), D = 0 (중근), D < 0 (서로 다른 두 허근)"
            },
            {
              title: "삼각함수 기본 성질",
              formula: "sin²θ + cos²θ = 1",
              desc: "tanθ = sinθ / cosθ 및 양변을 cos²θ로 나누면 1 + tan²θ = sec²θ"
            },
            {
              title: "미분가능성과 연속성",
              formula: "미분가능 ⟹ 연속",
              desc: "좌미분계수 = 우미분계수 일 때 미분가능. (역은 성립하지 않음, 예: 첨점)"
            }
          ].map((item, idx) => (
            <div key={idx} className="math-card p-6 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-center text-indigo-400 font-bold text-sm border border-slate-800">
                {item.formula}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 4: CLASSROOM RECAP QUIZ (수업 마무리 3분 퀴즈) */}
      <section id="quiz" className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Interactive Quiz</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">🎮 수업 마무리 복습 퀴즈</h2>
        </div>

        <div className="math-card p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="space-y-6">
            {quizzes.map((q) => (
              <div key={q.id} className="space-y-3 pb-4 border-b border-slate-800/80 last:border-none">
                <h4 className="font-semibold text-slate-200 text-sm">{q.q}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleQuizSelect(q.id, oIdx)}
                      className={`p-2.5 text-xs rounded-xl font-medium border text-left transition-all ${
                        selectedAnswers[q.id] === oIdx
                          ? "bg-indigo-600 text-white border-indigo-500"
                          : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={calculateScore}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/30"
            >
              정답 채점하기
            </button>

            {quizScore !== null && (
              <div className="text-sm font-bold text-indigo-300">
                🎉 총 {quizzes.length}문항 중 <span className="text-white text-base">{quizScore}</span>문항 맞췄습니다!
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
