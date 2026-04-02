import { motion, useScroll, useTransform } from "motion/react";
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

export default function ReservationPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

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
              src="https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Reservation Hero"
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
              >Reservation</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Reservation
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                빠르고 편리한 예약으로 고객님의 소중한 시간을 지켜드립니다.
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

        {/* ===== Minimalist Contact Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="text-center mb-[80px] md:mb-[120px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Book Now
                </p>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light mb-8">
                  상담 및 예약 안내
                </h2>
                <p className="text-[18px] md:text-[22px] text-[#4a3f3a] leading-[1.8] font-light">
                  전화 또는 카카오톡으로 예약해 주시면, 전문 상담사가 친절하게 안내해 드립니다.<br className="hidden md:block" />
                  당일 예약은 대기 시간이 발생할 수 있으니 사전 예약을 권장합니다.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col md:flex-row border border-[#1c1614] max-w-[1400px] mx-auto">
                <div className="flex-1 md:basis-1/3 flex flex-col justify-center items-center p-[60px] md:p-[80px] border-b md:border-b-0 md:border-r border-[#1c1614] group hover:bg-[#1c1614] transition-colors duration-500 cursor-pointer text-center min-w-0">
                  <p className="font-['Montserrat',sans-serif] text-[16px] tracking-[0px] text-[#b8a99a] uppercase mb-8 group-hover:text-white/60 transition-colors">
                    Phone Call
                  </p>
                  <h3 className="text-[28px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-light mb-6 group-hover:text-white transition-colors">
                    전화 상담 및 예약
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#6b5f58] mb-12 group-hover:text-white/80 transition-colors">
                    진료 시간 내 전화를 주시면<br />친절하게 예약을 도와드립니다.
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[32px] font-light text-[#1c1614] tracking-[2px] whitespace-nowrap group-hover:text-white transition-colors">
                    02-1234-5678
                  </p>
                </div>

                <div className="flex-1 md:basis-1/3 flex flex-col justify-center items-center p-[60px] md:p-[80px] border-b md:border-b-0 md:border-r border-[#1c1614] group hover:bg-[#fee500] transition-colors duration-500 cursor-pointer text-center min-w-0">
                  <p className="font-['Montserrat',sans-serif] text-[16px] tracking-[0px] text-[#b8a99a] uppercase mb-8 group-hover:text-[#1c1614]/60 transition-colors">
                    Kakao Talk
                  </p>
                  <h3 className="text-[28px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-light mb-6">
                    카카오톡 상담 예약
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#6b5f58] mb-12 group-hover:text-[#1c1614]/80 transition-colors">
                    카카오톡 채널을 추가하시면<br />언제든 편하게 문의가 가능합니다.
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[32px] font-light text-[#1c1614] tracking-[2px] whitespace-nowrap">
                    @refine_clinic
                  </p>
                </div>

                <div className="flex-1 md:basis-1/3 flex flex-col justify-center items-center p-[60px] md:p-[80px] group hover:bg-[#03C75A] transition-colors duration-500 cursor-pointer text-center min-w-0">
                  <p className="font-['Montserrat',sans-serif] text-[16px] tracking-[0px] text-[#b8a99a] uppercase mb-8 group-hover:text-white/60 transition-colors">
                    Naver
                  </p>
                  <h3 className="text-[28px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-light mb-6 group-hover:text-white transition-colors">
                    네이버 상담 예약
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#6b5f58] mb-12 group-hover:text-white/80 transition-colors">
                    네이버 예약을 통해<br />간편하게 상담을 신청하세요.
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[32px] font-light text-[#1c1614] tracking-[2px] whitespace-nowrap group-hover:text-white transition-colors">
                    네이버 예약
                  </p>
                </div>
              </div>
            </FadeInUp>
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