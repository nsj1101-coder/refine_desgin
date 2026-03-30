import { motion, useScroll, useTransform } from "motion/react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import doctorImg from "figma:asset/7089c80e30bae2644d080a58087471bf07198b8d.png";

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

export default function DoctorPage() {
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
              src="https://images.unsplash.com/photo-1755540736316-64f7a26421c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNvZnQlMjBtaW5pbWFsJTIwb3JnYW5pYyUyMGZvcm0lMjBiZWlnZSUyMHRleHR1cmV8ZW58MXx8fHwxNzczNjM4MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Doctor Hero"
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
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Doctor
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                정확한 진단과 섬세한 시술로 신뢰를 드립니다.
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

        {/* ===== Greeting Section ===== */}
        <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[180px]">
            <div className="flex flex-col md:flex-row gap-[60px] md:gap-[120px] items-start">
              
              {/* Doctor Image Area */}
              <div className="md:w-[45%] w-full">
                <FadeInUp>
                  <div className="w-full aspect-[3/4] overflow-hidden bg-[#e8e4de] relative group">
                    <ImageWithFallback 
                      src={doctorImg} 
                      alt="리파인의원 박상선 대표원장" 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-['Montserrat',sans-serif] text-white/80 text-[14px] uppercase tracking-[2px] mb-2">Chief Director</p>
                      <h3 className="font-['Pretendard',sans-serif] text-white text-[32px] font-medium">박상선</h3>
                    </div>
                  </div>
                </FadeInUp>
              </div>

              {/* Greeting Text Area */}
              <div className="md:w-[55%] flex flex-col justify-center pt-0 md:pt-[40px]">
                <FadeInUp delay={0.2}>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Greeting
                  </p>
                  
                  <div className="flex flex-col gap-[32px]">
                    <div className="text-[26px] md:text-[36px] text-[#1c1614] leading-[1.4] font-medium tracking-[-1px] break-keep">
                      안녕하세요.<br />
                      리파인의원 대표원장 <span className="text-[#8c7a6b] font-semibold">박상선</span>입니다.
                    </div>

                    <div className="flex flex-col gap-[24px] text-[16px] md:text-[18px] text-[#3a322e] leading-[1.8] font-normal tracking-[-0.5px] break-keep">
                      <p>
                        아름다움의 기준에는 정답이 없습니다.<br className="hidden md:block" />
                        중요한 것은 나다운 얼굴의 조화로움을 찾는 일이라고 생각합니다.
                      </p>
                      
                      <p className="pl-[20px] md:pl-[24px] border-l-[2px] border-[#b8a99a] my-2 py-2 text-[#2d2420] font-medium leading-[1.7] bg-[#f5efe9]/50">
                        리파인(Refine)은 세심하고 정교하게 다듬고, 균형을 맞추어<br className="hidden md:block" />
                        본연의 매력을 더욱 또렷하게 만들고자 하는 뜻을 담았습니다.
                      </p>

                      <p>
                        개개인이 가지고 있는 본연의 자연스러운 아름다움을 만들어내는 것,<br className="hidden md:block" />
                        그것이 리파인의 가치입니다.
                      </p>

                      <p>
                        데이터를 기반으로 피부 상태와 얼굴 구조를 정확히 진단하고,<br className="hidden md:block" />
                        그 위에 풍부한 의료 경험과 심미안을 더해,<br className="hidden md:block" />
                        가장 자연스럽고 조화로운 결과를 완성하기 위해 노력하고 있습니다.<br className="hidden md:block" />
                        불필요한 시술은 권하지 않으며, 필요한 만큼만 정직하게 제안합니다.
                      </p>

                      <p className="pt-6 text-[#2d2420] font-medium">
                        리파인에서의 시간이<br className="hidden md:block" />
                        스스로를 향한 자부심을 되찾고,<br className="hidden md:block" />
                        일상이 리프레시 되는 경험이 되시길 바랍니다.
                      </p>

                      <p className="mt-2 text-[#1c1614] font-medium">
                        감사합니다.
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              </div>

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