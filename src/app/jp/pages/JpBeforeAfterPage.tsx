import { useState } from "react";
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

export default function JpBeforeAfterPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Lifting", "Pigmentation", "Acne & Pore", "Skin Booster"];

  const cases = [
    {
      id: 1,
      title: "オールデプスリフティング4週間経過",
      description: "崩れたフェイスラインと肌の弾力低下でお悩みだった方。高周波と超音波を組み合わせたオールデプスリフティング3回施術後、全体的なフェイスラインが引き締まり、弾力が改善されました。",
      category: "Lifting",
      image: "https://images.unsplash.com/photo-1510511293580-9d525c6d8913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beforeFilter: "contrast(85%) sepia(10%) saturate(80%)",
    },
    {
      id: 2,
      title: "プレミアムシミ・色素集中治療",
      description: "両頬に深く定着した難治性シミとくすんだ肌トーン改善。デュアルトーニングレーザーとスキンブースターの併用で8週間後に明らかに明るく澄んだ肌へと変化しました。",
      category: "Pigmentation",
      image: "https://images.unsplash.com/photo-1464892216009-6d356060e72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beforeFilter: "contrast(90%) sepia(20%) brightness(85%)",
    },
    {
      id: 3,
      title: "ニキビ跡・毛穴縮小",
      description: "長期間放置された凹んだニキビ跡と広がった毛穴の治療。フラクショナルレーザーとコラーゲンブースター施術により、肌質が一段と滑らかになり、凹凸が改善されました。",
      category: "Acne & Pore",
      image: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beforeFilter: "contrast(110%) sepia(15%) saturate(120%) blur(0.5px)",
    },
    {
      id: 4,
      title: "アンチエイジング スキンブースター",
      description: "乾燥による小じわと弾力低下のお悩み。真皮層環境を改善するスキンブースター3回施術後、内側から輝きが生まれ、健やかな肌のバリアが回復しました。",
      category: "Skin Booster",
      image: "https://images.unsplash.com/photo-1679581356089-e65ea18c7f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beforeFilter: "grayscale(15%) contrast(80%) brightness(90%)",
    }
  ];

  const filteredCases = activeCategory === "All"
    ? cases
    : cases.filter(c => c.category === activeCategory);

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1706025090635-6d1d1dd95bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Before and After Hero"
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
                Before & After
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                施術の深さが生む変化を、実際の症例でご確認ください。
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

        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">

            <div className="max-w-[1400px] mx-auto mb-[80px] md:mb-[120px] flex flex-col md:flex-row md:items-end justify-between gap-8">
              <FadeInUp>
                <div>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Case Studies
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    ビフォーアフター
                  </h2>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <div className="flex flex-wrap gap-4 md:gap-8 border-b border-[#e8e5e0] pb-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[15px] font-['Montserrat',sans-serif] tracking-[1px] uppercase transition-colors duration-300 relative ${
                        activeCategory === cat ? 'text-[#1c1614] font-medium' : 'text-[#b8a99a] hover:text-[#1c1614]'
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <motion.div
                          layoutId="category-underline"
                          className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-[#1c1614]"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </FadeInUp>
            </div>

            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 gap-[80px] md:gap-[120px]">
                {filteredCases.map((item, idx) => (
                  <FadeInUp key={item.id} delay={idx * 0.1}>
                    <div className="flex flex-col gap-6">

                      <div className="w-full flex flex-col sm:flex-row gap-[2px] sm:gap-2">
                        <div className="relative w-full sm:w-1/2 aspect-[4/3] bg-[#f5f5f5] overflow-hidden group">
                          <ImageWithFallback
                            src={item.image}
                            alt={`${item.title} Before`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            style={{ filter: item.beforeFilter }}
                          />
                          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center">
                            <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[3px] text-[#6b5f58] font-medium uppercase">
                              Before
                            </span>
                          </div>
                        </div>

                        <div className="relative w-full sm:w-1/2 aspect-[4/3] bg-[#f5f5f5] overflow-hidden group mt-1 sm:mt-0">
                          <ImageWithFallback
                            src={item.image}
                            alt={`${item.title} After`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#1c1614] px-4 py-2 flex items-center">
                            <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[3px] text-white font-medium uppercase">
                              After
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-6 w-full md:w-2/3">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 border border-[#e8e5e0] font-['Montserrat',sans-serif] text-[12px] tracking-[1px] text-[#b8a99a] uppercase">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-[28px] md:text-[32px] text-[#1c1614] font-['Pretendard',sans-serif] font-light tracking-[-1px] mb-4">
                          {item.title}
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-[#6b5f58] font-['Pretendard',sans-serif] font-light leading-[1.7]">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}
