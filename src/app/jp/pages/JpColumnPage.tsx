import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
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

export default function JpColumnPage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allColumns = [
    {
      id: 1,
      title: "季節の変わり目、あなたの肌バリアは守られていますか？",
      summary: "乾燥した風と大きな寒暖差は肌のバリアを壊す主な原因です。季節の変わり目でも揺るぎない健康な肌を保つための3ステップ コア保湿ソリューションを院長が直接ご紹介します。",
      category: "Skin Care",
      date: "2024.03.12",
      image: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "リフティング施術、あなたの肌の厚さに合わせた「深さ」が決め手",
      summary: "誰にでも同じリフティングが正解になることはありません。表皮・真皮・SMAS層まで肌の複数の層を複合的にターゲットにするオールデプス（All-depth）リフティングの原理と重要性について解説します。",
      category: "Anti-Aging",
      date: "2024.02.28",
      image: "https://images.unsplash.com/photo-1666980347648-23bb1e49c1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "アンチエイジングの核心、コラーゲン自己生成能力を目覚めさせる",
      summary: "外部から注入するだけでは不十分です。真皮層が自らコラーゲンを生み出すよう誘導する最新スキンブースター施術のトレンドとその劇的な効果に迫ります。",
      category: "Skin Booster",
      date: "2024.02.10",
      image: "https://images.unsplash.com/photo-1532642431870-2cd545b1c86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 4,
      title: "間違ったホームケアが招く色素沈着の罠",
      summary: "自宅でのスクラブや過度なビタミンC塗布がかえってシミや雑色を濃くしてしまうことがあるのをご存知ですか？正しいホームケアと専門的な色素治療の併用法をご紹介します。",
      category: "Pigmentation",
      date: "2024.01.25",
      image: "https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 5,
      title: "ニキビ跡、ゴールデンタイムを逃さないで",
      summary: "ニキビが消えた後に残る赤みや凹んだ跡。時間が経てば解決すると思い込まず、早期に集中的に治療すべき理由を解説します。",
      category: "Acne & Pore",
      date: "2024.01.05",
      image: "https://images.unsplash.com/photo-1763969360888-e34ea56432da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    }
  ];

  const totalPages = Math.ceil(allColumns.length / itemsPerPage);
  const columns = allColumns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
              src="https://images.unsplash.com/photo-1598440947619-2ce1fcbd0a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Column Hero"
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
                Director's Column
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                肌への深い洞察、院長が直接お届けするエディトリアルコラム。
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
            <div className="max-w-[1400px] mx-auto">
              <FadeInUp>
                <div className="mb-[80px] md:mb-[120px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Expertise
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    院長コラム
                  </h2>
                </div>
              </FadeInUp>

              <div className="flex flex-col gap-[60px] md:gap-[100px]">
                {columns.map((column, idx) => (
                  <FadeInUp key={column.id} delay={idx * 0.1}>
                    <div
                      onClick={() => navigate(`/jp/community/column/${column.id}`)}
                      className="group flex flex-col md:flex-row gap-8 md:gap-[60px] items-center cursor-pointer"
                    >
                      <div className="w-full md:w-[50%] aspect-[4/3] overflow-hidden bg-[#f5f5f5] relative">
                        <ImageWithFallback
                          src={column.image}
                          alt={column.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                          <span className="font-['Montserrat',sans-serif] text-[12px] tracking-[2px] text-[#1c1614] font-medium uppercase">
                            {column.category}
                          </span>
                        </div>
                      </div>

                      <div className="w-full md:w-[50%] flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-4">
                          <span className="font-['Montserrat',sans-serif] text-[14px] text-[#b8a99a] tracking-[1px]">
                            {column.date}
                          </span>
                        </div>
                        <h3 className="text-[28px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium tracking-[-1px] leading-[1.3] mb-6 group-hover:text-[#b8a99a] transition-colors duration-300">
                          {column.title}
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-[#6b5f58] font-['Pretendard',sans-serif] font-light leading-[1.8] mb-10 line-clamp-3">
                          {column.summary}
                        </p>

                        <div>
                          <button className="relative inline-flex items-center gap-4 font-['Montserrat',sans-serif] text-[14px] tracking-[2px] text-[#1c1614] uppercase group/btn">
                            <span className="relative z-10 group-hover/btn:text-[#b8a99a] transition-colors duration-300">Read More</span>
                            <span className="w-12 h-[1px] bg-[#1c1614] group-hover/btn:bg-[#b8a99a] transition-colors duration-300"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              <FadeInUp delay={0.3}>
                <div className="flex items-center justify-center gap-6 mt-[100px] md:mt-[140px] pt-[40px] border-t border-[#e8e5e0]">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase transition-colors ${currentPage === 1 ? 'text-[#e8e5e0] cursor-not-allowed' : 'text-[#b8a99a] hover:text-[#1c1614]'}`}
                  >
                    Prev
                  </button>
                  <div className="flex items-center gap-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`text-[16px] font-['Montserrat',sans-serif] transition-colors pb-1 ${
                          currentPage === page
                            ? "text-[#1c1614] font-medium border-b border-[#1c1614]"
                            : "text-[#b8a99a] hover:text-[#1c1614]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase transition-colors ${currentPage === totalPages ? 'text-[#e8e5e0] cursor-not-allowed' : 'text-[#b8a99a] hover:text-[#1c1614]'}`}
                  >
                    Next
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
