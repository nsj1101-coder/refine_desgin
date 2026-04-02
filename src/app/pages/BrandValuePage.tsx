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

export default function BrandValuePage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614] break-keep">
        {/* ===== Hero ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJhbmQlMjBwaGlsb3NvcGh5JTIwZWRpdG9yaWFsJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM2MzY3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Brand Value Hero"
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
              >About</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Brand Value
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                가장 나다운 것, 당신만의 고유한 아름다움
              </motion.p>
            </FadeInUp>
          </motion.div>

          <motion.div
            className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[16px] z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
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

        {/* ===== Brand Story ===== */}
        <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="flex flex-col md:flex-row gap-[60px] md:gap-[100px] items-start">
              <div className="md:w-[40%] md:sticky top-[160px]">
                <FadeInUp>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Brand Value
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light mb-8 leading-[1.3]">
                    브랜드 가치
                  </h2>
                </FadeInUp>
              </div>
              <div className="md:w-[60%] flex flex-col gap-[48px] md:gap-[72px]">
                <FadeInUp>
                  <div className="flex flex-col gap-[28px] break-keep">
                    <p className="text-[20px] md:text-[24px] text-[#3a322e] leading-[1.8] font-medium tracking-[-0.5px]">
                      아름다움에 대한 기준이 획일화될수록,<br className="hidden md:block" /> 우리는 오히려 '가장 나다운 것'이 무엇인지 잊곤 합니다.
                    </p>
                    <p className="text-[17px] md:text-[19px] text-[#4a3f3a] leading-[1.9] font-normal tracking-[-0.3px] pl-[20px] md:pl-[24px] border-l-[2px] border-[#b8a99a]">
                      리파인은 단순히 얼굴을 바꾸는 곳이 아닙니다.<br className="hidden md:block" /> 당신이 지닌 고유한 아름다움을 발견하고, 불필요한 과함은 덜어내어<br className="hidden md:block" /> 가장 세련된 조화를 완성하는 미학 연구소입니다.
                    </p>
                  </div>
                </FadeInUp>
                <FadeInUp>
                  <div className="w-full aspect-[16/9] overflow-hidden bg-[#f5f5f0] shadow-sm">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1758055660837-6889c3cb3898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYWJzdHJhY3QlMjBuYXR1cmFsJTIwc3RvbmUlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MzYzNzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Clinic Minimal Texture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                </FadeInUp>
                <FadeInUp>
                  <div className="text-[17px] md:text-[19px] text-[#4a3f3a] leading-[1.9] font-normal tracking-[-0.3px] break-keep">
                    <p>
                      리파인은 단순히 시술을 제공하는 곳을 넘어, 리프레시 할 수 있는 공간이 되겠습니다. 이곳을 다니는 것만으로도 자신감을 얻고 에너지를 채워 일상이 행복해지는 진정한 리프레시를 경험하시길 바랍니다. 리파인에서 시간이 흐를수록 더 깊어지는 나만의 품격 있는 아름다움을 완성해 보시길 바랍니다.
                    </p>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Three Core Values ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[80px] md:py-[140px]">
            <FadeInUp>
              <div className="flex flex-col items-start mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Core Values
                </p>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Montserrat',sans-serif] font-light leading-[1.2]">
                  REFINE ESSENCE
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-[60px]">
              {/* Essence */}
              <FadeInUp delay={0.1}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    01
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-medium text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Essence</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#1c1614] font-medium mb-6">"본연의 아름다움"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      획일적인 미의 기준이 아닌, 당신만이 가진 본연의 아름다움을 발견하여 가장 자연스럽게 빛나도록 이끄는 것이 리파인 미학의 출발점입니다.
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Balance */}
              <FadeInUp delay={0.2}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    02
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-medium text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Balance</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#1c1614] font-medium mb-6">"조화로운 아름다움"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      진정한 아름다움은 어느 한 곳의 도드라짐이 아닌, 전체가 이루는 균형에서 옵니다. 피부 상태, 얼굴 구조 등 핵심을 정밀하게 진단하여 균형있는 입체감과 조화의 아름다움을 선사합니다.
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Refine */}
              <FadeInUp delay={0.3}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    03
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-medium text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Refine</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#1c1614] font-medium mb-6">"정제된 아름다움"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      풍부한 경험으로 쌓인 숙련된 테크닉으로 시술하여 정제되고 품격있는 우아함을 완성합니다. 리파인을 통해 얻은 자신감이 일상의 리프레시로 이어져, 나의 삶이 더욱 가치 있게 느껴지도록 완성합니다.
                    </p>
                  </div>
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