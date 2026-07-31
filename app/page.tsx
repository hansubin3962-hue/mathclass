"use client";

import { useState, useEffect } from "react";
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
  FolderOpen,
  ArrowUp,
  ArrowDown,
  Plane,
  Play,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";

// Rational Number Item Structure
interface RationalNumber {
  display: string; // e.g. "-3.5", "+2/3", "-7"
  value: number;   // numeric value for comparison
}

export default function Home() {
  // Grapher Slider States
  const [paramA, setParamA] = useState<number>(1);
  const [paramB, setParamB] = useState<number>(0);
  const [paramC, setParamC] = useState<number>(0);

  // Resource Filter State
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // ==========================================
  // AIRPLANE GAME STATE (중1 정수와 유리수 대소비교)
  // ==========================================
  const [gameState, setGameState] = useState<"READY" | "PLAYING" | "GAMEOVER">("READY");
  const [planeLane, setPlaneLane] = useState<"TOP" | "BOTTOM">("TOP"); // 비행기 위치 (위 / 아래)
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [feedback, setFeedback] = useState<{ text: string; type: "correct" | "wrong" | "" }>({ text: "", type: "" });

  const [topNumber, setTopNumber] = useState<RationalNumber>({ display: "+3", value: 3 });
  const [bottomNumber, setBottomNumber] = useState<RationalNumber>({ display: "-5", value: -5 });

  // Helper: Generate random Integer or Rational Number
  const generateRationalNumber = (): RationalNumber => {
    const type = Math.random();
    if (type < 0.4) {
      // Integer (-15 to 15)
      const val = Math.floor(Math.random() * 30) - 15;
      return { display: val > 0 ? `+${val}` : `${val}`, value: val };
    } else if (type < 0.7) {
      // Decimal (-9.9 to 9.9)
      const val = parseFloat((Math.random() * 20 - 10).toFixed(1));
      return { display: val > 0 ? `+${val}` : `${val}`, value: val };
    } else {
      // Fraction (denominator 2, 3, 4, 5)
      const den = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
      const num = Math.floor(Math.random() * 12) - 6;
      if (num === 0) return { display: "0", value: 0 };
      const val = num / den;
      const display = num > 0 ? `+${num}/${den}` : `${num}/${den}`;
      return { display, value: val };
    }
  };

  // Generate new pair of numbers guaranteed not equal
  const nextQuestion = () => {
    let num1 = generateRationalNumber();
    let num2 = generateRationalNumber();

    while (Math.abs(num1.value - num2.value) < 0.05) {
      num2 = generateRationalNumber();
    }

    setTopNumber(num1);
    setBottomNumber(num2);
  };

  const startGame = () => {
    setScore(0);
    setCombo(0);
    setLives(3);
    setPlaneLane("TOP");
    setFeedback({ text: "", type: "" });
    setGameState("PLAYING");
    nextQuestion();
  };

  // Player action: Fly & Select Lane
  const handleFlyAndCheck = (chosenLane: "TOP" | "BOTTOM") => {
    if (gameState !== "PLAYING") return;

    setPlaneLane(chosenLane);
    const chosenNum = chosenLane === "TOP" ? topNumber : bottomNumber;
    const otherNum = chosenLane === "TOP" ? bottomNumber : topNumber;

    if (chosenNum.value > otherNum.value) {
      // Correct! Chosen number is GREATER
      const addedScore = 100 + combo * 20;
      setScore(prev => prev + addedScore);
      setCombo(prev => prev + 1);
      setFeedback({ 
        text: `🎉 정답입니다! (${chosenNum.display} > ${otherNum.display}) +${addedScore}점`, 
        type: "correct" 
      });
      setTimeout(() => {
        setFeedback({ text: "", type: "" });
        nextQuestion();
      }, 1000);
    } else {
      // Wrong!
      const newLives = lives - 1;
      setLives(newLives);
      setCombo(0);
      setFeedback({ 
        text: `❌ 아쉽네요! (${otherNum.display}가 ${chosenNum.display}보다 더 큽니다)`, 
        type: "wrong" 
      });

      if (newLives <= 0) {
        setTimeout(() => setGameState("GAMEOVER"), 1200);
      } else {
        setTimeout(() => {
          setFeedback({ text: "", type: "" });
          nextQuestion();
        }, 1200);
      }
    }
  };

  // Keyboard Up / Down Arrow Control listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "PLAYING") return;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handleFlyAndCheck("TOP");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleFlyAndCheck("BOTTOM");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, topNumber, bottomNumber, lives, combo]);


  // Worksheets Data
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
            실시간 비행기 수학 게임부터 단원별 학습지, 디지털 교구까지 — <br className="hidden sm:inline" />
            선생님과 학생들이 수업 시간에 재미있게 활용할 수 있는 수학교실 뱅크입니다.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto relative pt-2">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="필요한 단원이나 학습지 제목을 검색해보세요 (예: 이차함수, 정수와 유리수)..."
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

        {/* Interactive Grapher Applet */}
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
                발견할 수 있도록 돕는 것이 저의 교육 철학입니다. 디지털 비행기 게임과 탐구 교구로 수업을 풍성하게 만듭니다.
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


      {/* 4. 게임 (GAME) SECTION: 중1 수학 정수와 유리수 비행기 게임 */}
      <section id="game" className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <Gamepad2 className="w-4 h-4 text-indigo-600" />
            <span>중1 수학 1학기 • 정수와 유리수의 대소 관계</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            ✈️ 정수와 유리수 대소비교 비행기 비행 게임
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            위/아래 방향키나 조종 버튼으로 비행기를 움직여 <strong>더 큰 수가 적힌 경로</strong>로 조종하세요!
          </p>
        </div>

        {/* AIRPLANE GAME ARENA CONTAINER */}
        <div className="card-light p-6 sm:p-8 rounded-3xl space-y-6 relative overflow-hidden border-2 border-indigo-100 shadow-xl">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-[11px] text-slate-400 block font-mono">SCORE</span>
                <span className="text-2xl font-black text-amber-400 font-mono">{score}</span>
              </div>
              <div className="border-l border-slate-700 pl-6">
                <span className="text-[11px] text-slate-400 block font-mono">COMBO</span>
                <span className="text-lg font-bold text-indigo-300 font-mono">x{combo}</span>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <span className="text-xs text-slate-400 mr-2 font-mono">LIVES:</span>
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  className={`w-5 h-5 ${i < lives ? "text-rose-500 fill-rose-500 animate-pulse" : "text-slate-700"}`} 
                />
              ))}
            </div>
          </div>

          {/* GAME SCREENS */}
          {gameState === "READY" && (
            <div className="py-12 text-center space-y-6 bg-slate-900 rounded-2xl text-white p-8 relative overflow-hidden">
              <div className="w-20 h-20 bg-indigo-600/30 border border-indigo-500 rounded-full flex items-center justify-center mx-auto text-indigo-400">
                <Plane className="w-10 h-10 animate-bounce" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-black text-white">비행 준비 완료!</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  화면의 위쪽과 아래쪽에 정수와 유리수가 나타납니다. <br />
                  비행기를 조종하여 <strong>[더 큰 수]</strong>가 있는 길로 통과하세요!
                </p>
              </div>
              <button
                onClick={startGame}
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-base rounded-xl shadow-lg shadow-indigo-600/40 transition-all inline-flex items-center space-x-2"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>비행 게임 시작하기</span>
              </button>
            </div>
          )}

          {gameState === "PLAYING" && (
            <div className="space-y-6">
              {/* Sky Flight Arena */}
              <div className="relative bg-gradient-to-b from-sky-400 via-sky-300 to-indigo-400 rounded-2xl p-6 h-72 flex flex-col justify-between overflow-hidden shadow-inner border border-sky-300">
                
                {/* Cloud Accents */}
                <div className="absolute top-4 left-10 text-white/30 font-bold text-4xl select-none pointer-events-none">☁️</div>
                <div className="absolute bottom-6 right-16 text-white/30 font-bold text-5xl select-none pointer-events-none">☁️</div>

                {/* TOP LANE GATE */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur text-slate-800 font-bold text-xs rounded-lg shadow-sm">
                      위쪽 경로 [⬆️]
                    </span>
                    {planeLane === "TOP" && (
                      <div className="flex items-center space-x-2 bg-indigo-900 text-white px-3 py-1.5 rounded-full shadow-lg animate-pulse border border-indigo-400">
                        <Plane className="w-5 h-5 text-amber-300" />
                        <span className="text-xs font-bold">내 비행기 위치</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Top Target Number Badge */}
                  <button
                    onClick={() => handleFlyAndCheck("TOP")}
                    className={`px-6 py-3 rounded-2xl font-black text-2xl font-mono transition-all shadow-lg border-2 ${
                      planeLane === "TOP" 
                        ? "bg-white text-indigo-700 border-amber-400 scale-105 shadow-xl" 
                        : "bg-slate-900/90 text-white border-white/40 hover:bg-white hover:text-indigo-900"
                    }`}
                  >
                    {topNumber.display}
                  </button>
                </div>


                {/* MIDDLE DIVIDER TRACK */}
                <div className="w-full border-b-2 border-dashed border-white/50 relative my-2">
                  <span className="absolute left-1/2 -top-3 -translate-x-1/2 text-[10px] font-bold text-white/80 bg-sky-600/60 px-3 py-0.5 rounded-full">
                    더 큰 수가 있는 쪽으로 비행하세요!
                  </span>
                </div>


                {/* BOTTOM LANE GATE */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur text-slate-800 font-bold text-xs rounded-lg shadow-sm">
                      아래쪽 경로 [⬇️]
                    </span>
                    {planeLane === "BOTTOM" && (
                      <div className="flex items-center space-x-2 bg-indigo-900 text-white px-3 py-1.5 rounded-full shadow-lg animate-pulse border border-indigo-400">
                        <Plane className="w-5 h-5 text-amber-300" />
                        <span className="text-xs font-bold">내 비행기 위치</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Target Number Badge */}
                  <button
                    onClick={() => handleFlyAndCheck("BOTTOM")}
                    className={`px-6 py-3 rounded-2xl font-black text-2xl font-mono transition-all shadow-lg border-2 ${
                      planeLane === "BOTTOM" 
                        ? "bg-white text-indigo-700 border-amber-400 scale-105 shadow-xl" 
                        : "bg-slate-900/90 text-white border-white/40 hover:bg-white hover:text-indigo-900"
                    }`}
                  >
                    {bottomNumber.display}
                  </button>
                </div>

              </div>

              {/* Feedback Alert Banner */}
              {feedback.text && (
                <div className={`p-3.5 rounded-xl font-bold text-center text-xs sm:text-sm shadow-sm ${
                  feedback.type === "correct" 
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300" 
                    : "bg-rose-100 text-rose-800 border border-rose-300"
                }`}>
                  {feedback.text}
                </div>
              )}

              {/* FLIGHT CONTROL BUTTONS */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleFlyAndCheck("TOP")}
                  className="py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-md flex items-center justify-center space-x-2 transition-all"
                >
                  <ArrowUp className="w-5 h-5" />
                  <span>[위쪽 경로] {topNumber.display} 선택하기</span>
                </button>

                <button
                  onClick={() => handleFlyAndCheck("BOTTOM")}
                  className="py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-md flex items-center justify-center space-x-2 transition-all"
                >
                  <ArrowDown className="w-5 h-5" />
                  <span>[아래쪽 경로] {bottomNumber.display} 선택하기</span>
                </button>
              </div>
              <p className="text-[11px] text-center text-slate-400">
                💡 팁: 키보드 상/하(↑/↓) 방향키를 눌러도 비행기를 조종할 수 있습니다!
              </p>
            </div>
          )}

          {gameState === "GAMEOVER" && (
            <div className="py-10 text-center space-y-6 bg-slate-900 rounded-2xl text-white p-8">
              <div className="w-16 h-16 bg-rose-500/20 border border-rose-500 rounded-full flex items-center justify-center mx-auto text-rose-400">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">비행 완료! 게임 종료</h3>
                <p className="text-slate-300 text-sm">
                  최종 점수: <span className="text-amber-400 font-extrabold text-2xl font-mono">{score}</span> 점
                </p>
              </div>
              <button
                onClick={startGame}
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all inline-flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>다시 비행 도전하기</span>
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
