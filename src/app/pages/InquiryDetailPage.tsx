import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { mockInquiries } from "./InquiryPage";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const mockContents: Record<number, { question: string; answer?: string }> = {
  12: {
    question: "안녕하세요. 지난주에 리프팅 시술을 받았는데, 아직 붓기가 남아있습니다. 보통 붓기가 완전히 빠지기까지 얼마나 걸리나요? 그리고 붓기를 빨리 빼는 데 도움이 되는 방법이 있을까요?",
    answer: "안녕하세요. 리프팅 시술 후 붓기는 개인차가 있으나 보통 3~7일 이내에 대부분 가라앉습니다. 시술 부위를 차갑게 해주시고, 수면 시 머리를 약간 높게 하시면 도움이 됩니다. 2주 이상 지속될 경우 내원하시어 경과를 확인하시는 것을 권해드립니다.",
  },
  10: {
    question: "스킨부스터 시술에 관심이 있는데요, 보통 어느 정도 주기로 받아야 효과가 유지되나요? 그리고 시술 직후 일상생활에 지장이 있는지도 궁금합니다.",
    answer: "스킨부스터는 초기 3~4회를 2~3주 간격으로 받으시는 것을 권장드리며, 이후 유지를 위해 2~3개월 간격으로 시술하시면 됩니다. 시술 후 가벼운 붉어짐이 있을 수 있으나 당일 세안 및 메이크업이 가능합니다.",
  },
  8: {
    question: "여드름 흉터가 꽤 깊은 편인데, 어떤 치료를 받으면 좋을지 상담받고 싶습니다. 대략적인 치료 비용과 기간도 알려주시면 감사하겠습니다.",
    answer: "여드름 흉터의 유형(아이스픽, 박스카, 롤링)에 따라 치료 방법이 달라집니다. 내원하시면 정밀 진단 후 레이저, 서브시전, 필러 등 복합 치료 계획을 세워드리겠습니다. 정확한 비용은 상태에 따라 상이하오니 무료 상담을 예약해 주세요.",
  },
  7: {
    question: "환절기마다 피부가 많이 건조해지고 각질이 심해지는데, 병원에서 받을 수 있는 관리가 있을까요? 홈케어 방법도 함께 알려주시면 좋겠습니다.",
    answer: "환절기 피부 장벽 강화를 위해 수분 부스터 시술이나 진정 레이저를 추천드립니다. 홈케어로는 세라마이드 성분의 보습제를 사용하시고, 세안 시 미온수를 사용하시는 것이 좋습니다. 스크럽이나 필링 제품은 자극을 줄 수 있으니 환절기에는 자제해 주세요.",
  },
  5: {
    question: "코와 볼 주변 모공이 넓어져서 고민입니다. 모공 축소에 효과적인 시술이 어떤 것들이 있는지, 그리고 시술 후 관리법도 알려주세요.",
    answer: "모공 축소에는 프락셀 레이저, 피코 토닝, 스킨부스터 복합 치료가 효과적입니다. 시술 후에는 직사광선을 피하시고, 피지 관리를 위한 저자극 클렌저 사용을 권해드립니다. 내원 상담 시 피부 상태에 맞는 맞춤 프로그램을 안내해 드리겠습니다.",
  },
  4: {
    question: "올뎁스 리프팅이 일반 리프팅과 어떻게 다른지 궁금합니다. 효과나 지속 기간, 통증 정도도 비교해서 알려주시면 좋겠습니다.",
    answer: "올뎁스 리프팅은 표피, 진피, SMAS층까지 각 피부 층을 복합적으로 타겟팅하여 보다 자연스럽고 깊은 리프팅 효과를 제공합니다. 일반 리프팅 대비 지속 기간이 길며(약 12~18개월), 시술 중 국소마취로 통증을 최소화합니다. 자세한 상담은 내원 시 안내해 드리겠습니다.",
  },
  2: {
    question: "콜라겐 부스터 시술을 받으면 효과가 어느 정도 지속되나요? 그리고 다른 시술과 병행해도 괜찮은지 궁금합니다.",
    answer: "콜라겐 부스터는 시술 후 콜라겐 생성이 촉진되어 약 6~12개월 효과가 지속됩니다. 스킨부스터, 리프팅 등 다른 시술과 병행 시 시너지 효과를 기대할 수 있습니다. 병행 시술의 적절한 간격은 개인 피부 상태에 따라 다르므로 상담을 통해 안내해 드리겠습니다.",
  },
  1: {
    question: "처음 방문하려고 하는데요, 상담 절차가 어떻게 되는지 궁금합니다. 예약 없이 방문해도 되나요?",
    answer: "첫 방문 시에는 접수 후 전문 상담사와 1:1 상담을 진행하며, 이후 원장님과의 정밀 진단 상담이 이어집니다. 원활한 상담을 위해 사전 예약을 권해드리며, 전화(02-544-1005) 또는 온라인 예약이 가능합니다. 상담만 받으셔도 부담 없으시니 편하게 방문해 주세요.",
  },
};

export default function InquiryDetailPage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { id } = useParams();
  const inquiryId = Number(id);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const inquiry = mockInquiries.find(item => item.id === inquiryId);
  const content = mockContents[inquiryId];

  if (!inquiry) {
    return (
      <ScaledPageWrapper>
        <div className="w-full min-h-screen bg-white flex items-center justify-center">
          <p className="text-[#6b5f58]">존재하지 않는 게시글입니다.</p>
        </div>
      </ScaledPageWrapper>
    );
  }

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
        {/* ===== Cinematic Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600947871775-082dd97e2d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Consultation Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="absolute inset-0 bg-black/40 z-0" style={{ opacity: heroOpacity }} />

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeInUp delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >Community</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Online Inquiry
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                궁금한 점을 남겨주시면 전문 의료진이 빠르고 정확하게 답변드립니다.
              </motion.p>
            </FadeInUp>
          </motion.div>

          <motion.div 
            className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[16px] z-10 pointer-events-none"
            style={{ opacity: heroOpacity }}
          >
            <span className="text-white text-[14px] font-['Montserrat',sans-serif] font-medium tracking-[3px] uppercase opacity-70">Scroll</span>
            <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
              <motion.div 
                className="w-full h-1/2 bg-white absolute left-0"
                animate={{ top: ['-50%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ===== Detail Content ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="max-w-[1000px] mx-auto">
              
              {/* Title Area */}
              <FadeInUp>
                <div className="border-t-2 border-[#1c1614] pt-10 pb-8 border-b border-b-[#e8e5e0]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[13px] text-[#b8a99a] border border-[#e8e5e0] px-3 py-1">
                      {inquiry.category}
                    </span>
                    {inquiry.hasAnswer ? (
                      <span className="text-[12px] font-medium text-white bg-[#1c1614] px-3 py-1">답변완료</span>
                    ) : (
                      <span className="text-[12px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-3 py-1">답변대기</span>
                    )}
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] font-light tracking-[-1px] leading-[1.3] mb-6">
                    {inquiry.title}
                  </h2>
                  <div className="flex items-center gap-4 text-[14px] text-[#b8a99a]">
                    <span>{inquiry.author}</span>
                    <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                    <span className="font-['Montserrat',sans-serif] tracking-[0.5px]">{inquiry.date}</span>
                    <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                    <span className="font-['Montserrat',sans-serif]">Views {inquiry.views}</span>
                  </div>
                </div>
              </FadeInUp>

              {/* Question Content */}
              <FadeInUp delay={0.1}>
                <div className="py-12 md:py-16 border-b border-[#e8e5e0]">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="shrink-0 w-8 h-8 bg-[#1c1614] text-white flex items-center justify-center font-['Montserrat',sans-serif] text-[14px] font-medium">
                      Q
                    </span>
                    <span className="text-[14px] text-[#b8a99a] font-medium mt-1.5">문의 내용</span>
                  </div>
                  <div className="pl-12">
                    <p className="text-[16px] md:text-[17px] text-[#1c1614] leading-[2] tracking-[-0.3px]">
                      {content?.question || "문의 내용이 없습니다."}
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Answer Content */}
              {inquiry.hasAnswer && content?.answer && (
                <FadeInUp delay={0.2}>
                  <div className="py-12 md:py-16 border-b border-[#e8e5e0] bg-[#faf6f1]/50">
                    <div className="flex items-start gap-4 mb-6 px-6 md:px-10">
                      <span className="shrink-0 w-8 h-8 bg-[#b8a99a] text-white flex items-center justify-center font-['Montserrat',sans-serif] text-[14px] font-medium">
                        A
                      </span>
                      <span className="text-[14px] text-[#b8a99a] font-medium mt-1.5">답변</span>
                    </div>
                    <div className="pl-12 md:pl-[76px] pr-6 md:pr-10">
                      <p className="text-[16px] md:text-[17px] text-[#6b5f58] leading-[2] tracking-[-0.3px]">
                        {content.answer}
                      </p>
                      <p className="mt-8 text-[14px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[1px]">
                        — Medical Team
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              )}

              {/* Action Buttons */}
              <FadeInUp delay={0.3}>
                <div className="flex items-center justify-center gap-4 mt-16">
                  <button
                    onClick={() => navigate("/community/inquiry")}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#1c1614] hover:text-white transition-colors duration-300"
                  >
                    List
                  </button>
                  <button
                    onClick={() => navigate("/community/inquiry/write")}
                    className="px-12 py-4 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                  >
                    글쓰기
                  </button>
                </div>
              </FadeInUp>

            </div>
          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}