import { motion, useScroll, useTransform } from "motion/react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

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

export default function JpBrandValuePage() {
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
                最も自分らしく、あなただけの固有の美しさ
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
                    ブランド価値
                  </h2>
                </FadeInUp>
              </div>
              <div className="md:w-[60%] flex flex-col gap-[48px] md:gap-[72px]">
                <FadeInUp>
                  <div className="flex flex-col gap-[28px] break-keep">
                    <p className="text-[20px] md:text-[24px] text-[#3a322e] leading-[1.8] font-medium tracking-[-0.5px]">
                      美しさの基準が画一化されるほど、<br className="hidden md:block" /> 私たちはむしろ「最も自分らしいもの」が何かを忘れがちです。
                    </p>
                    <p className="text-[17px] md:text-[19px] text-[#4a3f3a] leading-[1.9] font-normal tracking-[-0.3px] pl-[20px] md:pl-[24px] border-l-[2px] border-[#b8a99a]">
                      REFINEは単に顔を変える場所ではありません。<br className="hidden md:block" /> あなたが持つ固有の美しさを発見し、不要な過剰さを取り除いて<br className="hidden md:block" /> 最も洗練された調和を完成させる美学研究所です。
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
                      REFINEは単に施術を提供する場所を超えて、リフレッシュできる空間でありたいと思います。ここに通うだけで自信を得てエネルギーを充電し、日常が幸せになる真のリフレッシュを体験していただけることを願っています。REFINEで時間が経つほど深まる自分だけの品格ある美しさを完成させていただけることを願っています。
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
              <FadeInUp delay={0.1}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    01
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-light text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Essence</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#B5B0AC] font-medium mb-6">"本来の美しさ"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      画一的な美の基準ではなく、あなただけが持つ本来の美しさを発見し、最も自然に輝けるように導くことがREFINEの美学の出発点です。
                    </p>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    02
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-light text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Balance</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#B5B0AC] font-medium mb-6">"調和ある美しさ"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      真の美しさはどこか一つが突出することではなく、全体が作り出すバランスから生まれます。肌の状態・顔の構造などを精密に診断し、バランスのとれた立体感と調和の美しさをお届けします。
                    </p>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="border-t border-[#1c1614] pt-[40px] relative">
                  <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                    03
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-['Montserrat',sans-serif] font-light text-[24px] md:text-[28px] text-[#1c1614] tracking-[-1px] uppercase leading-[1] mb-2">Refine</h3>
                    <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#B5B0AC] font-medium mb-6">"洗練された美しさ"</p>
                    <p className="text-[16px] md:text-[17px] text-[#4a3f3a] leading-[1.8] font-light break-keep">
                      豊富な経験で培われた熟練したテクニックで施術し、洗練された品格ある優雅さを完成させます。REFINEを通じて得た自信が日常のリフレッシュにつながり、自分の人生がより価値あるものに感じられるよう仕上げます。
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
