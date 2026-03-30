import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function RedefineDiagnosisPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "RE:DEFINE 진단은 일반 피부 상담과 어떻게 다른가요?", a: "일반 피부 상담은 육안 관찰에 의존하지만, RE:DEFINE은 3D AI 정밀 스캔 데이터를 기반으로 눈에 보이지 않는 미세 굴곡, 비대칭, 색소 분포까지 객관적으로 분석합니다. 이 데이터 위에 대표원장의 해부학적 통찰을 더해 오직 당신만을 위한 맞춤 치료 로드맵을 설계합니다." },
    { q: "진단에는 얼마나 시간이 소요되나요?", a: "3D AI 스캔은 약 5분 이내로 완료되며, 대표원장과의 1:1 맞춤 상담까지 포함하여 총 20~30분 정도 소요됩니다. 충분한 시간을 들여 피부의 현재 상태와 개선 방향을 함께 논의합니다." },
    { q: "진단 결과를 바탕으로 바로 시술을 받을 수 있나요?", a: "네, 진단 당일 바로 시술을 진행하실 수 있습니다. 다만, 고객님의 피부 상태와 시술 종류에 따라 최적의 시기를 제안해 드리는 경우도 있습니다. 가장 좋은 결과를 위해 원장님과 충분히 상의하신 후 결정하시면 됩니다." },
    { q: "진단 비용은 별도로 발생하나요?", a: "RE:DEFINE 진단은 리파인의 모든 시술 상담에 기본 포함되어 있습니다. 별도의 추가 비용 없이 3D AI 스캔과 대표원장 1:1 맞춤 상담을 받으실 수 있습니다." },
    { q: "진단 데이터는 어떻게 활용되나요?", a: "진단 데이터는 시술 전후 비교 분석, 맞춤 치료 계획 수립, 그리고 장기적인 피부 변화 추적에 활용됩니다. 재방문 시 이전 데이터와 비교하여 개선 경과를 객관적으로 확인하실 수 있습니다." },
  ];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614] break-keep selection:bg-[#1c1614] selection:text-[#faf6f1]">
        
        {/* ===== HERO (Dark Theme) ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#201814]" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src={subHeroImg}
              alt="RE:DEFINE 맞춤진단"
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
          </motion.div>

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeInUp delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Signature Diagnosis
              </motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                RE:DEFINE
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-[rgba(255,255,255,0.9)] font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                당신이 몰랐던 본연의 아름다움을 새롭게 정의합니다.
              </motion.p>
            </FadeInUp>
          </motion.div>

          {/* Scroll Indicator */}
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

        {/* ===== INTRO STATEMENT (Light Theme) ===== */}
        <section className="relative w-full bg-[#faf6f1] border-b border-[#1c1614]/10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02] overflow-hidden">
            <h2 className="font-['Montserrat',sans-serif] text-[25vw] font-bold text-[#1c1614] whitespace-nowrap leading-none tracking-[-5px]">
              RE:DEFINE
            </h2>
          </div>
          <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px] flex flex-col items-center text-center">
            <FadeInUp>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] md:text-[16px] tracking-[0px] uppercase mb-4">
                  Core Philosophy
                </p>
                <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold leading-[1.3]">
                  당신이 몰랐던 본연의 아름다움,<br className="hidden md:block" />
                  리파인의 맞춤 진단으로 새롭게 정의합니다.
                </h2>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="max-w-[800px] mx-auto">
                <p className="text-[#4a3f3a] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  <span className="font-['Montserrat',sans-serif] font-bold text-[#1c1614]">RE:DEFINE</span>은 단순히 얼굴을 확인하는 것을 넘어, '피부 구조의 본질을 찾고 치료의 방향성을 새롭게 정의하는 것'을 의미합니다. 3D AI 정밀 분석 시스템을 토대로 얼굴을 입체적으로 스캔하고, 대표원장이 피부의 구조적 관점에서 가장 필요한 맞춤 시술을 진단합니다.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ===== TECHNOLOGY (Dark Theme - Editorial Split) ===== */}
        <section className="w-full bg-[#201814] text-[#faf6f1] border-b border-[#1c1614]/10">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-[140px] py-[100px] md:py-[140px] order-2 md:order-1 border-t md:border-t-0 border-white/10 md:border-r">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] md:text-[16px] tracking-[0px] uppercase mb-4">
                    Technology
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-white tracking-[-1px] font-['Montserrat',sans-serif] font-bold leading-[1.3]">
                    <span className="italic pr-1">EVE</span> V <span className="italic pl-1">MUSE</span><br />
                    3D AI Scanning
                  </h2>
                </div>
                <div className="bg-[#1c1614] p-6 md:p-8 border-l border-white mb-6">
                  <p className="text-white text-[16px] md:text-[18px] font-['Pretendard',sans-serif] font-medium leading-[1.8] whitespace-pre-line break-keep">
                    AI 데이터가 보여주는 디테일,<br />
                    눈에 보이지 않는 굴곡까지 포착하다
                  </p>
                </div>
                <p className="text-[rgba(255,255,255,0.7)] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  얼굴 전체를 입체적으로 스캔하여 육안으로 보이지 않는 미세한 굴곡과 비대칭, 주름의 깊이, 색소, 홍조 등을 다각도로 포착합니다. 첨단 광학 기술과 AI 데이터 분석을 결합하여 오차 없는 피부 지도를 완성합니다.
                </p>
              </FadeInUp>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[500px] md:h-auto min-h-[600px] relative order-1 md:order-2 bg-[#13100E]">
              <motion.div
                className="absolute inset-0 p-6 md:p-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1665963287479-105466e03324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZhY2UlMjB0b3BvZ3JhcGh5JTIwbGlnaHQlMjBiZWFtJTIwZGFya3xlbnwxfHx8fDE3NzM4MDA3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="3D AI scanning EVE V MUSE"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  {/* 프레임 효과 선을 더 명확하게 화이트 톤으로 표시 */}
                  <div className="absolute inset-0 border border-white/20 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY (Light Theme - Editorial Split) ===== */}
        <section className="w-full bg-[#faf6f1] border-b border-[#1c1614]/10">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row">
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[500px] md:h-auto min-h-[600px] relative border-b md:border-b-0 border-[#1c1614]/10 md:border-r bg-[#fcfbf9]">
              <motion.div
                className="absolute inset-0 p-6 md:p-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768979121229-392fce4957ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBwcmVtaXVtJTIwbWluaW1hbCUyMHRleHR1cmV8ZW58MXx8fHwxNzczODAwNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Philosophy Beyond the data"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-[#1c1614]/10 pointer-events-none" />
                </div>
              </motion.div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-[140px] py-[100px] md:py-[140px]">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] md:text-[16px] tracking-[0px] uppercase mb-4">
                    Philosophy
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold leading-[1.3]">
                    Beyond The Data
                  </h2>
                </div>
                <div className="bg-white p-6 md:p-8 border-l border-[#1c1614] mb-6 shadow-sm">
                  <p className="text-[#1c1614] text-[16px] md:text-[18px] font-['Pretendard',sans-serif] font-medium leading-[1.8] whitespace-pre-line break-keep">
                    진단의 통찰력이<br />
                    결과의 깊이를 결정합니다
                  </p>
                </div>
                <p className="text-[#4a3f3a] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  AI가 제공하는 정밀한 데이터 위에, 대표원장의 숙련된 해부학적 통찰력을 더합니다. 리파인은 당신의 피부 상태, 조직의 밀도, 골격의 구조까지 입체적으로 융합 분석하여 오직 당신만을 위한 가장 안전하고 정교한 치료 로드맵을 설계합니다.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[60px] md:mb-[80px]">
                <div>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Q&A
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold">
                    자주 묻는 질문
                  </h2>
                </div>
              </div>
            </FadeInUp>

            <div className="flex flex-col border-t-[2px] border-[#1c1614]">
              {faqs.map((faq, idx) => (
                <FadeInUp key={idx} delay={idx * 0.05}>
                  <div className="border-b border-[#e8e5e0]">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start md:items-center justify-between py-[32px] md:py-[40px] text-left gap-6 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1 min-w-0">
                        <span className="font-['Montserrat',sans-serif] text-[18px] md:text-[20px] text-[#b8a99a] shrink-0 font-medium">
                          Q.
                        </span>
                        <span className={`text-[18px] md:text-[22px] leading-[1.5] transition-colors duration-300 break-keep ${
                          openFaq === idx ? 'text-[#1c1614] font-bold' : 'text-[#4a3f3a] font-medium group-hover:text-[#1c1614]'
                        }`}>
                          {faq.q}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaq === idx ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="shrink-0 mt-1 md:mt-0"
                      >
                        <ChevronDown className={`w-[24px] h-[24px] stroke-[1] transition-colors duration-300 ${
                          openFaq === idx ? 'text-[#1c1614]' : 'text-[#b8a99a]'
                        }`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="md:pl-[64px] pb-[40px] pt-0">
                            <p className="text-[16px] md:text-[18px] text-[#6b5f58] leading-[2] break-keep">
                              A. {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Location Section (Original Component Restored) ===== */}
        <SubpageDirectionsSection />

        {/* ===== Footer (Original Component Restored) ===== */}
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}