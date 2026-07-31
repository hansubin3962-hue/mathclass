"use client";

import { useState } from "react";
import { 
  Search, 
  Download, 
  Laptop, 
  FileText, 
  Bookmark, 
  Sparkles, 
  RotateCcw, 
  User, 
  Gamepad2, 
  Trophy, 
  Award, 
  Heart, 
  Smile,
  CheckCircle2,
  Zap,
  ArrowRight,
  RefreshCw,
  FolderOpen
} from "lucide-react";

export default function Home() {
  // Grapher Slider States
  const [paramA, setParamA] = useState<number>(1);
  const [paramB, setParamB] = useState<number>(0);
  const [paramC, setParamC] = useState<number>(0);

  // Resource Filter State
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Math Game State (스피드 수학 게임)
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameQuestion, setGameQuestion] = useState<{ num1: number; num2: number; op: string; answer: number }>({ num1: 7, num2: 8, op: "×", answer: 56 });
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [gameFeedback, setGameFeedback] = useState<string>("");

  const generateNewQuestion = () => {
    const ops = ["+", "-", "×"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let n1 = Math.floor(Math.random() * 20) + 1;
    let n2 = Math.floor(Math.random() * 20) + 1;
    if (op === "-" && n1 < n2) {
      const temp = n1;
      n1 = n2;
      n2 = temp;
    }
    let ans = 0;
    if (op === "+") ans = n1 + n2;
    if (op === "-") ans = n1 - n2;
    if (op === "×") ans = n1 * n2;

    setGameQuestion({ num1: n1, num2: n2, op, answer: ans });
    setUserAnswer("");
    setGameFeedback("");
  };

  const handleGameCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(userAnswer, 10);
    if (val === gameQuestion.answer) {
      setGameScore(prev => prev + 10);
      setGameFeedback("🎉 정답입니다! +10점");
      setTimeout(() => generateNewQuestion(), 1200);
    } else {
      setGameFeedback("❌ 아쉬워요! 다시 계산해보세요.");
    }
  };

  // Resources Data
  const resources = [
    {
      id: 1,
      category: "공통수학",
      type: "개념활동지",
      format: "PDF",
      title: "이차함수의 그래프와 직선의 위치 관계 탐구 활동지",
      desc: "판별식 D의 부호에 따른 교점의 개수를 좌표평면에 그리며 탐구하는 수업 활동지",
      downloads: 342,
      date: "2026.03.12"
    },
    {
      id: 2,
      category: "미적분",
      type: "핵심요약집",
      format: "PDF",
      title: "삼각함수의 극한 & 도함수 3초 공식 요약집",
      desc: "lim (x->0) sin(x)/x = 1 증명 과정 및 주요 극한 공식 한눈에 보기 정리본",
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
      desc: "수직 조건에 따라 변화하는 공간 평면과 직선의 관계를 회전하며 관찰하는 교구",
      downloads: 410,
      date: "2026.03.05"
    },
    {
      id: 5,
      category: "공통수학",
      type: "수능기출",
      format: "PDF",
      title: "다항식의 연산 & 인수분해 모의고사 빈출 50제",
      desc: "최근 3개년 고1 모의고사 기출문제 중 오답률 60% 이상 고난도 분석집",
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

  const filteredResources = resources.filter(res => {
    const matchesCategory = activeCategory === "전체" || res.category === activeCategory;
    const matchesSearch = res.title.includes(searchQuery) || res.desc.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-24 pb-20 bg-light-radial">
      
      {/* 1. 홈 (HOME) SECTION */}
      <section id="home" className="pt-10 md:pt-16 pb-10 container mx-auto px-4 sm:px-6 max-w-6xl space-y-12">
        {/* Welcome Hero */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-xs text-indigo-700 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>2026학년도 수학 수업 활용 라이브러리</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            수학 수업이 즐거워지는 시간 <br />
            <span className="text-indigo-600">수빈쌤의 행복한 수학교실</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            실시간 그래프 시각화 교구부터 단원별 핵심 활동지, 탐구 자료, 재미있는 수학 게임까지 — <br className="hidden sm:inline" />
            수학 수업 시간에 선생님과 학생이 함께 활용하는 스마트 교실 뱅크입니다.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto relative pt-2">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="필요한 단원이나 학습지 제목을 검색해보세요 (예: 이차함수, 삼각함수)..."
                className="w-full pl-12 pr-28 py-3.5 bg-white border border-slate-300 focus:border-indigo-500 rounded-xl text-slate-900 placeholder-slate-400 text-sm outline-none shadow-sm"
              />
              <a 
                href="#resources"
                className="absolute right-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors"
              >
                검색하기
              </a>
            </div>
          </div>
        </div>

        {/* Home Highlight: Interactive Grapher Applet */}
        <div className="card-light p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <Laptop className="w-4 h-4" />
                <span>Classroom Interactive Tool</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">📐 수업 활용 함수 그래프 시각화 교구</h2>
            </div>
            <span className="text-xs text-slate-500">슬라이더를 조절하여 그래프 변화를 관찰하세요.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-indigo-600 uppercase">이차함수 표준형</span>
                <div className="text-lg font-extrabold text-slate-900 font-mono">f(x) = {paramA}x² + {paramB}x + {paramC}</div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-700">
                    <span>계수 a (볼록 방향/폭):</span>
                    <span className="text-indigo-600 font-mono">{paramA}</span>
                  </div>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={paramA}
                    onChange={(e) => setParamA(parseFloat(e.target.value) || 1)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-700">
                    <span>계수 b (축의 위치):</span>
                    <span className="text-indigo-600 font-mono">{paramB}</span>
                  </div>
                  <input
                    type="range"
                    min="-4"
                    max="4"
                    step="1"
                    value={paramB}
                    onChange={(e) => setParamB(parseFloat(e.target.value) || 0)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-700">
                    <span>계수 c (y절편):</span>
                    <span className="text-indigo-600 font-mono">{paramC}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    step="1"
                    value={paramC}
                    onChange={(e) => setParamC(parseFloat(e.target.value) || 0)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>

              <button
                onClick={() => { setParamA(1); setParamB(0); setParamC(0); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center space-x-1.5 transition-colors border border-slate-300"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>그래프 초기화</span>
              </button>
            </div>

            {/* Display Canvas Simulation */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between items-center min-h-[240px] shadow-inner relative overflow-hidden">
              <div className="text-[11px] font-mono text-slate-400 self-start">
                [전자칠판 / 태블릿 실시간 시각화 화면]
              </div>

              <div className="text-center space-y-2 my-auto">
                <div className="text-2xl font-black text-indigo-400 font-mono">
                  {paramA > 0 ? "∪ 아래로 볼록" : paramA < 0 ? "∩ 위로 볼록" : "― 직선"}
                </div>
                <div className="text-xs text-slate-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                  꼭짓점 위치: ({-paramB / (2 * (paramA || 1))}, {paramC - (paramB * paramB) / (4 * (paramA || 1))})
                </div>
              </div>

              <div className="text-xs text-indigo-300 font-bold">
                💡 전자칠판에 띄워 계수 변화에 따른 그래프 개형을 직접 시연해 보세요.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. 선생님 소개 (TEACHER) SECTION */}
      <section id="teacher" className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Teacher Profile</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">선생님 소개</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            수학을 어려워하는 학생들에게 명쾌한 원리와 발견의 기쁨을 선물하는 수빈쌤입니다.
          </p>
        </div>

        <div className="card-light p-8 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-extrabold shadow-lg shadow-indigo-500/30 border-4 border-white">
              수빈
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">한수빈 선생님</h3>
              <p className="text-xs text-indigo-600 font-semibold mt-0.5">수학 교육 전문가 & 수업 교구 개발자</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Heart className="w-5 h-5 text-indigo-600 fill-indigo-100" />
                <span>"수학은 암기가 아닌 발견의 즐거움입니다."</span>
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                공식만 외워서 푸는 지루한 수학에서 벗어나, 개념이 시각적으로 이해되고 스스로 문제 해결의 힌트를 
                발견할 수 있도록 돕는 것이 저의 교육 철학입니다. 디지털 교구와 친근한 설명으로 수업을 풍성하게 만듭니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <Award className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800">수학교육 전공 & 교원 자격</div>
                  <div className="text-slate-500 text-[11px]">개정 교육과정 완벽 분석 교재 집필</div>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                <Smile className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800">1:1 맞춤형 수업 시각화</div>
                  <div className="text-slate-500 text-[11px]">학생 눈높이에 맞춘 다각도 개념 설명</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. 자료실 (RESOURCES) SECTION */}
      <section id="resources" className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
              <FolderOpen className="w-4 h-4" />
              <span>Math Resource Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">수학 수업 자료실</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {["전체", "공통수학", "미적분", "확통", "기하"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
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
            <div key={res.id} className="card-light p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 font-bold rounded border border-indigo-200">
                    {res.category}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">{res.format} • {res.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{res.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{res.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">다운로드 {res.downloads}회</span>
                <button
                  onClick={() => alert(`'${res.title}' 학습지 다운로드가 시작되었습니다.`)}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all flex items-center space-x-1 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>다운로드</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. 게임 (GAME) SECTION */}
      <section id="game" className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
            <Gamepad2 className="w-4 h-4" />
            <span>Math Game Zone</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">수업 활용 수학 스피드 게임</h2>
          <p className="text-slate-600 text-sm">
            수업 시작 전 뇌풀기용 연산 스피드 퀴즈! 빠르고 정확하게 정답을 계산해 점수를 올려보세요.
          </p>
        </div>

        <div className="card-light p-8 rounded-2xl space-y-6 text-center">
          {/* Game Header Stats */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-sm">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>현재 누적 점수</span>
            </div>
            <div className="text-2xl font-black text-indigo-600 font-mono">{gameScore} 점</div>
          </div>

          {/* Math Problem Question Box */}
          <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-4 max-w-md mx-auto shadow-inner">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">스피드 퀴즈</span>
            <div className="text-4xl font-black text-slate-900 font-mono tracking-wider">
              {gameQuestion.num1} {gameQuestion.op} {gameQuestion.num2} = ?
            </div>

            <form onSubmit={handleGameCheck} className="flex items-center justify-center space-x-2 pt-2">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="정답 입력"
                className="w-32 px-4 py-2.5 bg-white border border-indigo-300 focus:border-indigo-600 rounded-xl text-slate-900 font-bold text-center text-lg outline-none shadow-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-600/20 transition-all"
              >
                제출
              </button>
            </form>

            {gameFeedback && (
              <div className={`text-xs font-bold ${gameFeedback.includes("정답") ? "text-emerald-600" : "text-rose-600"}`}>
                {gameFeedback}
              </div>
            )}
          </div>

          {/* Reset / Next Problem */}
          <div className="flex justify-center">
            <button
              onClick={generateNewQuestion}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center space-x-1 border border-slate-300 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>다른 문제 불러오기</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
