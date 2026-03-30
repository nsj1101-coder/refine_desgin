import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";

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

export default function NoticeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data to match CommunityPage
  const notices = [
    {
      id: 1,
      title: "2024년 3월 진료 일정 안내 (삼일절 휴진)",
      date: "2024.02.25",
      isNotice: true,
      content: `
안녕하세요. REFINE 피부과입니다.
항상 저희 병원을 찾아주시고 사랑해주시는 고객 여러분께 감사드립니다.

2024년 3월 진료 일정을 다음과 같이 안내해 드립니다.

[ 3월 진료 일정 ]
- 3월 1일 (금, 삼일절): 휴진
- 그 외 평일 및 토요일: 정상 진료

내원에 차질 없으시길 바라며, 휴진일에는 카카오톡 채널 및 전화 상담이 어려우니 양해 부탁드립니다.
문의 사항은 진료일 내에 연락 주시면 친절히 안내해 드리겠습니다.

감사합니다.
      `
    },
    {
      id: 2,
      title: "새로운 리프팅 장비 '덴서티' 도입 안내",
      date: "2024.02.10",
      isNotice: true,
      content: `
안녕하세요. REFINE 피부과입니다.
고객 여러분께 더 나은 결과를 제공하기 위해 새로운 리프팅 장비 '덴서티(Density)'를 도입하였습니다.

덴서티는 두 가지 고주파(RF) 에너지를 교차 조사하여 피부 진피층과 피하지방층까지 강력하고 깊숙이 열 에너지를 전달하는 장비입니다. 
피부 타이트닝, 주름 개선, 탄력 증진에 탁월한 효과를 기대하실 수 있습니다.

새로운 덴서티 리프팅 프로그램에 많은 관심 부탁드립니다.

감사합니다.
      `
    },
    {
      id: 3,
      title: "REFINE 겨울철 스킨케어 팁: 속보습 채우기",
      date: "2024.01.15",
      isNotice: false,
      content: `
안녕하세요. REFINE 피부과입니다.
건조한 겨울철, 가장 중요한 것은 바로 '속보습'입니다.

피부 겉만 번지르르하게 만드는 스킨케어는 그만!
근본적인 수분 장벽을 세우기 위한 REFINE만의 스킨케어 팁을 알려드립니다.

1. 세안 직후 3초 보습: 세안 후 수분이 날아가기 전에 즉각적으로 토너나 미스트로 피부 결을 정돈하세요.
2. 스킨부스터 추천: 깊은 곳부터 수분을 채워주는 리쥬란 힐러, 물광주사 등이 효과적입니다.
3. 실내 습도 조절: 가습기를 사용하여 적절한 실내 습도를 유지하는 것이 피부 건강에 매우 중요합니다.

자세한 상담은 병원으로 문의해 주시기 바랍니다.
      `
    }
  ];

  // Fallback to first item if ID not found, just for preview purposes
  const notice = notices.find(n => n.id === Number(id)) || notices[0];

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
              >Community</motion.p>
              <motion.h1
                className="text-[36px] md:text-[56px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Notice
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
                  <p className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] mb-4 uppercase">
                    {notice.isNotice ? (
                      <span className="text-[#1c1614]">Notice</span>
                    ) : (
                      <span className="text-[#b8a99a]">News</span>
                    )}
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium tracking-[-1px] leading-[1.3] mb-6">
                    {notice.title}
                  </h2>
                  <div className="w-full h-[1px] bg-[#1c1614] mb-6"></div>
                  <div className="flex justify-between items-center text-[#6b5f58] font-['Montserrat',sans-serif] text-[15px] tracking-[1px]">
                    <span>{notice.date}</span>
                    <span className="uppercase text-[13px] tracking-[2px]">Admin</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#e8e5e0] mt-6"></div>
                </div>

                <div className="py-12 min-h-[300px]">
                  <p className="text-[18px] md:text-[20px] text-[#332e2c] font-['Pretendard',sans-serif] font-light leading-[1.8] whitespace-pre-wrap">
                    {notice.content}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#1c1614] mb-12"></div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => navigate('/community')}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] hover:bg-[#1c1614] hover:text-white transition-colors duration-300 font-['Montserrat',sans-serif] text-[14px] tracking-[3px] uppercase"
                  >
                    List
                  </button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ===== Location Section ===== */}
        <SubpageDirectionsSection />

        {/* ===== Footer ===== */}
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}