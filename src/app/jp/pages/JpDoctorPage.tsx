import { motion, useScroll, useTransform } from "motion/react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
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

export default function JpDoctorPage() {
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
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
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
                正確な診断と繊細な施術で信頼をお届けします。
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

              <div className="md:w-[45%] w-full">
                <FadeInUp>
                  <div className="w-full aspect-[3/4] overflow-hidden bg-[#e8e4de] relative group">
                    <ImageWithFallback
                      src={doctorImg}
                      alt="REFINE代表院長 朴相善"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-['Montserrat',sans-serif] text-white/80 text-[14px] uppercase tracking-[2px] mb-2">Chief Director</p>
                      <h3 className="font-['Pretendard',sans-serif] text-white text-[32px] font-light">朴相善</h3>
                    </div>
                  </div>
                </FadeInUp>
              </div>

              <div className="md:w-[55%] flex flex-col justify-center pt-0 md:pt-[40px]">
                <FadeInUp delay={0.2}>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Greeting
                  </p>

                  <div className="flex flex-col gap-[32px]">
                    <div className="text-[28px] md:text-[42px] text-[#222] leading-[1.4] font-light tracking-[-1px] break-keep">
                      はじめまして。<br />
                      REFINE代表院長 <span className="text-[#8c7a6b] font-light">朴相善</span>です。
                    </div>

                    <div className="flex flex-col gap-[24px] text-[16px] md:text-[18px] text-[#3a322e] leading-[1.8] font-normal tracking-[-0.5px] break-keep">
                      <p>
                        美しさの基準に正解はありません。<br />
                        大切なのは、自分らしい顔の調和を見つけることだと思っています。
                      </p>

                      <p className="pl-[20px] md:pl-[24px] border-l-[2px] border-[#b8a99a] my-2 py-2 text-[#2d2420] font-medium leading-[1.7] bg-[#f5efe9]/50">
                        Refine（リファイン）とは、繊細かつ精巧に磨き上げ、バランスを整えて<br />
                        本来の魅力をより鮮明に引き出したいという思いを込めています。
                      </p>

                      <p>
                        個々が持つ本来の自然な美しさを生み出すこと、<br />
                        それがREFINEの価値です。
                      </p>

                      <p>
                        データを基に肌の状態と顔の構造を正確に診断し、<br />
                        その上に豊富な医療経験と審美眼を加えて、<br />
                        最も自然で調和のとれた結果を完成させるために努力しています。<br />
                        不要な施術はお勧めせず、必要な分だけ正直にご提案します。
                      </p>

                      <p className="pt-6 text-[#2d2420] font-medium">
                        REFINEでの時間が<br />
                        自分自身への誇りを取り戻し、<br />
                        日常がリフレッシュされる体験になれますように。
                      </p>

                      <p className="mt-2 text-[#1c1614] font-medium">
                        ありがとうございます。
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
