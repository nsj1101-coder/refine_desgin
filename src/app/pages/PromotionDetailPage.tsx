import React from "react";
import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PromotionDetailPage() {
  const heroHeight = useScaledViewportHeight();
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data matching PromotionPage
  const allEvents = [
    {
      id: 2,
      branch: "REFINE 압구정",
      monthText: "February",
      period: "2026.02.01 - 2026.02.28",
      statusText: "진행중인 이벤트",
      title: "2월 시그니처 안티에이징 패키지",
      isEnded: false,
      content: `
REFINE 피부과 압구정점 단독 진행!

다가오는 봄을 위한 2월 시그니처 안티에이징 패키지로
떨어진 탄력을 되찾고 생기 있는 피부로 거듭나세요.

[ 패키지 상세 안내 ]
1. 울쎄라 300샷 + 써마지 FLX 300샷 : 콜라겐 생성 및 강력한 리프팅
2. 쥬베룩 볼륨 3cc : 꺼진 부위 자연스러운 볼륨 개선
3. 크라이오셀 진정관리 : 시술 후 빠른 피부 회복 및 진정

* 선착순 50명 한정으로 스킨부스터 1회 무료 체험권을 증정합니다.
자세한 비용 및 예약 문의는 병원으로 연락 주시면 친절히 안내해 드리겠습니다.
      `
    },
    {
      id: 1,
      branch: "REFINE 압구정",
      monthText: "January",
      period: "2026.01.01 - 2026.01.31",
      statusText: "종료된 이벤트",
      title: "REFINE 1월 리프팅 스페셜",
      isEnded: true,
      content: `
새해 맞이 1월 한정 리프팅 스페셜 혜택이 성황리에 종료되었습니다.
많은 성원 감사드리며, 앞으로도 더 좋은 이벤트로 찾아뵙겠습니다.
      `
    },
    {
      id: 3,
      branch: "REFINE 전지점",
      monthText: "Spring",
      period: "2026.03.01 - 2026.03.15",
      statusText: "진행중인 이벤트",
      title: "봄맞이 화이트닝 4주 완성",
      isEnded: false,
      content: `
환절기 칙칙해진 피부 톤을 밝혀줄 봄맞이 화이트닝 프로그램!
REFINE 전지점에서 동시 진행하는 단 2주간의 특별한 혜택입니다.

[ 4주 완성 화이트닝 솔루션 ]
1주차: 피코토닝 + 비타민 관리
2주차: 실펌X + 재생크림 도포
3주차: 피코토닝 + 크라이오셀
4주차: 엑소좀 스킨부스터 + LDM 물방울 리프팅

맑고 투명한 피부를 원하신다면 지금 바로 상담 예약하세요.
      `
    }
  ];

  // Fallback to first item if ID not found
  const event = allEvents.find(e => e.id === Number(id)) || allEvents[0];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-white font-['Pretendard',sans-serif] font-light">
        {/* ===== Cinematic Minimal Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center bg-[#201814] pt-[200px] md:pt-[240px] pb-[80px] md:pb-[120px]">
          <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">
            <FadeInUp delay={0.1}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Promotion
              </motion.p>
              <motion.h1
                className="text-[36px] md:text-[56px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Event Detail
              </motion.h1>
            </FadeInUp>
          </div>
        </section>

        {/* ===== Detail View Section ===== */}
        <section className="w-full bg-white min-h-[50vh]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[60px] md:py-[100px]">
            <div className="max-w-[1000px] mx-auto">
              <FadeInUp>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[13px] tracking-[1px] font-['Pretendard',sans-serif] px-3 py-1 border ${event.isEnded ? 'border-[#e8e5e0] text-[#a09a96]' : 'border-[#1c1614] text-[#1c1614]'}`}>
                      {event.statusText}
                    </span>
                    <span className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[1px] uppercase text-[#a09a96]">
                      {event.branch}
                    </span>
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] font-['Pretendard',sans-serif] font-light tracking-[-1px] leading-[1.3] mb-4">
                    {event.title}
                  </h2>
                  <p className="text-[16px] text-[#a09a96] font-['Montserrat',sans-serif] tracking-[1px]">
                    {event.period}
                  </p>
                </div>
                
                <div className="w-full h-[1px] bg-[#e8e5e0] mb-12"></div>
                
                <div className="prose prose-lg max-w-none text-[#1c1614] whitespace-pre-line leading-[1.8] font-['Pretendard',sans-serif] text-[16px] md:text-[18px]">
                  {event.content}
                </div>
                
                <div className="mt-16 pt-8 border-t border-[#e8e5e0] flex justify-center">
                  <button 
                    onClick={() => navigate('/promotion')}
                    className="flex items-center gap-2 group border border-[#1c1614] px-8 py-4 transition-all duration-300 hover:bg-[#1c1614] hover:text-white"
                  >
                    <span className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] uppercase">
                      List
                    </span>
                  </button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}