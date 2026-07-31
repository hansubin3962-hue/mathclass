"use client";

import { useState } from "react";
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Star, 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Send,
  Zap
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="space-y-24 pb-20 bg-radial-gradient">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 px-4 sm:px-6 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>2026학년도 수능 및 내신 대비 맞춤 클래스 개강</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              수학이 즐거워지는 순간 <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                수빈쌤의 행복한 수학교실
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              막히는 개념 추적부터 킬러 문항 구조 분석까지! 
              학생 한 명 한 명의 눈높이에 맞춘 1:1 맞춤형 가이드로 수학의 자신감을 완성해 드립니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 text-base"
              >
                <span>무료 진단 컨설팅 신청</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold rounded-xl transition-all text-center text-base"
              >
                강의 커리큘럼 보기
              </a>
            </div>

            {/* Quick Benefits */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-white">99.4%</div>
                <div className="text-xs text-slate-400 mt-0.5">수강생 만족도</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400">1,300+</div>
                <div className="text-xs text-slate-400 mt-0.5">누적 성적 향상 수강생</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">+24점</div>
                <div className="text-xs text-slate-400 mt-0.5">평균 성적 상승폭</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold">
                    수빈
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">수빈쌤의 약속</h3>
                    <p className="text-xs text-slate-400">1:1 밀착 관리 케어 시스템</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                  신규 수강생 모집중
                </span>
              </div>

              <div className="space-y-3 text-sm">
                {[
                  "개념을 원리부터 취약점까지 정밀 분석",
                  "매주 진행되는 1:1 오답 클리닉 리포트",
                  "학교별 최신 내신 기출 & 수능 킬러 분석",
                  "실시간 Q&A 피드백 케어"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/20">
                <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold mb-1">
                  <span>🎯 이번 달 수강 신청 현황</span>
                  <span>85% 마감</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY SUBIN MATH CLASS (특장점) */}
      <section id="about" className="px-4 sm:px-6 container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl font-extrabold text-white">왜 수빈쌤의 수학교실일까요?</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            단순 암기식 풀이가 아닌 수학적 사고력을 키워주는 차별화된 수학 학습 패러다임을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "1:1 정밀 약점 진단",
              desc: "학생마다 다른 약점을 데이터 기반으로 정밀 분석하여 맞춤 복습 보충 과제를 제공합니다."
            },
            {
              icon: TrendingUp,
              title: "성적 상향 도달 시스템",
              desc: "기초 개념 체계화부터 시작하여 3단계 계단식 오답 클리닉으로 상위권 진입을 완성합니다."
            },
            {
              icon: ShieldCheck,
              title: "철저한 밀착 서포트",
              desc: "수업 시간 외에도 24시간 1:1 질의응답 피드백으로 궁금한 문제를 즉시 해결해 드립니다."
            }
          ].map((feature, idx) => (
            <div key={idx} className="card-glass p-8 rounded-2xl space-y-4 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COURSES & CURRICULUM (강의 안내) */}
      <section id="courses" className="px-4 sm:px-6 container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Curriculum</span>
          <h2 className="text-3xl font-extrabold text-white">수학 성적 상승 대표 과정</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            목표 점수와 학년에 따른 전문 수강 커리큘럼 라인업입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "미적분 개념 & 킬러 마스터",
              badge: "고3 / N수 전문",
              desc: "수열의 극한부터 미분법, 적분법까지 킬러 문항 구조 파악 및 풀이 시간 단축 특강",
              duration: "주 2회 (회당 3시간)",
              tag: "수능 필수"
            },
            {
              title: "확률과 통계 완벽 정리",
              badge: "고2 / 고3",
              desc: "빈출 유형 패턴화 학습과 실전 모의고사로 만점을 목표로 하는 스피드 완강 반",
              duration: "주 2회 (회당 2.5시간)",
              tag: "내신/수능"
            },
            {
              title: "기하 공간도형 & 벡터 시각화",
              badge: "고2 / 고3",
              desc: "어려운 공간도형과 평면벡터를 직관적으로 이해하고 확실하게 답을 도출하는 훈련",
              duration: "주 1회 (회당 3시간)",
              tag: "개념 완성"
            },
            {
              title: "공통수학 I & II 기틀 완성",
              badge: "고1 / 예비고",
              desc: "고등 수학의 탄탄한 기본기를 쌓고 내신 상위권 등급 유지를 위한 맞춤형 집중반",
              duration: "주 2회 (회당 3시간)",
              tag: "내신 집중"
            },
            {
              title: "중등 수학 심화 & 고등 연계",
              badge: "중2 / 중3",
              desc: "중등 과정의 완벽한 이수와 고등학교 수학 진학을 위한 선행 다지기 과정",
              duration: "주 2회 (회당 2시간)",
              tag: "심화 선행"
            },
            {
              title: "1:1 파이널 타임어택 모의고사",
              badge: "전 학년",
              desc: "시험 직전 최신 기출 변형 문제 기반 실전 심리 훈련 및 개인별 약점 보완 특강",
              duration: "시험 직전 단기 특강",
              tag: "실전 대비"
            }
          ].map((course, idx) => (
            <div key={idx} className="card-glass p-6 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold rounded-full">
                    {course.badge}
                  </span>
                  <span className="text-xs text-purple-400 font-semibold">{course.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{course.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-1.5"><Clock className="w-3.5 h-3.5 text-indigo-400" /> <span>수업 시간</span></span>
                  <span className="text-slate-200 font-medium">{course.duration}</span>
                </div>
                <a
                  href="#contact"
                  className="w-full py-2.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold rounded-lg transition-all text-center block"
                >
                  수강 문의하기
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDENT REVIEWS (수강 후기) */}
      <section id="reviews" className="px-4 sm:px-6 container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl font-extrabold text-white">생생한 수강생 성적 향상 후기</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            수빈쌤과 함께 수학의 재미를 찾고 원하던 성적을 거둔 실제 학생들의 이야기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "김OO 학생",
              tag: "수능 수학 4등급 ➔ 1등급 달성",
              text: "항상 수학 시간이 두려웠는데 수빈쌤께서 개념의 원리부터 쉽게 풀어 설명해 주셔서 킬러 문제도 겁 없이 풀 수 있게 되었습니다!"
            },
            {
              name: "박OO 학생",
              tag: "내신 수학 72점 ➔ 98점 상승",
              text: "매주 주어지는 1:1 오답 리포트 덕분에 제가 반복해서 틀리던 습관을 정확히 고칠 수 있었습니다. 수빈쌤 정말 감사합니다!"
            },
            {
              name: "이OO 학생",
              tag: "모의고사 100점 만점 수강생",
              text: "문제 접근 방식을 다각도로 보여주셔서 어떤 생소한 문제가 나와도 당황하지 않고 원리를 떠올려 해결할 수 있었습니다."
            }
          ].map((review, idx) => (
            <div key={idx} className="card-glass p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">"{review.text}"</p>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">{review.name}</div>
                <div className="text-xs text-indigo-400 font-semibold mt-0.5">{review.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ SECTION (자주 묻는 질문) */}
      <section id="faq" className="px-4 sm:px-6 container mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl font-extrabold text-white">자주 묻는 질문</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "수학 기초가 많이 부족한 학생도 수강할 수 있나요?",
              a: "네, 물론입니다! 수빈쌤의 수학교실은 학생의 현재 진단 테스트 결과를 바탕으로 기초 개념 복습부터 차근차근 레벨업하는 1:1 맞춤형 가이드를 제공합니다."
            },
            {
              q: "수업 방식은 어떻게 진행되나요?",
              a: "핵심 개념 원리 강의 후 개별 문제 풀이 지도 및 1:1 클리닉 케어로 진행되며, 매주 개인별 오답 노트와 성취도 리포트가 함께 제공됩니다."
            },
            {
              q: "상담 및 무료 체험 수업은 어떻게 신청하나요?",
              a: "아래 상담 신청 폼에 이름과 연락처를 남겨주시면 24시간 이내에 진단 상담 및 무료 체험 수업 일정을 안내해 드립니다."
            }
          ].map((item, idx) => (
            <div key={idx} className="card-glass rounded-xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between text-white font-semibold text-base"
              >
                <span className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>{item.q}</span>
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT FORM SECTION (상담 및 무료 체험 신청) */}
      <section id="contact" className="px-4 sm:px-6 container mx-auto max-w-4xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">무료 상담 & 체험 수업 신청</h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              학생의 수학 고민을 나누어 주세요. 수빈쌤이 명쾌한 솔루션을 찾아드립니다.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">상담 신청이 완료되었습니다!</h3>
              <p className="text-xs text-slate-300">입력하신 연락처로 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">학생 이름</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">학년</label>
                  <select className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-sm">
                    <option>고등학교 3학년 / N수</option>
                    <option>고등학교 2학년</option>
                    <option>고등학교 1학년</option>
                    <option>중학교 과정</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">연락처</label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">상담 내용 및 문의 사항</label>
                <textarea
                  rows={3}
                  placeholder="현재 취약한 과목이나 고민을 간단히 남겨주세요."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-indigo-500 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 text-base"
              >
                <Send className="w-4 h-4" />
                <span>무료 상담 신청 완료하기</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
