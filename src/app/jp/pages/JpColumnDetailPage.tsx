import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ScaledPageWrapper } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";

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

export default function JpColumnDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const columns = [
    {
      id: 1,
      title: "季節の変わり目、あなたの肌バリアは守られていますか？",
      content: `乾燥した風と大きな寒暖差は肌のバリアを壊す主な原因です。季節の変わり目でも揺るぎない健康な肌を保つための3ステップ コア保湿ソリューションを院長が直接ご紹介します。\n\n肌のバリアは私たちの身体を守る最初の防衛線です。このバリアが崩れると水分が蒸発しやすくなり、外部刺激に敏感に反応してトラブルが起きやすくなります。特に秋から冬へ移る時期は空気が乾燥し、肌の水分も一緒に失われていきます。\n\nご自宅でできる簡単かつ効果的なホームケア方法と、クリニックで受けられる専門的なバリア強化施術について詳しくご紹介します。`,
      category: "Skin Care",
      date: "2024.03.12",
      image: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "リフティング施術、あなたの肌の厚さに合わせた「深さ」が決め手",
      content: `誰にでも同じリフティングが正解になることはありません。表皮・真皮・SMAS層まで肌の複数の層を複合的にターゲットにするオールデプス（All-depth）リフティングの原理と重要性について解説します。\n\n肌の老化は単一の層だけで起きるものではありません。表皮の弾力低下、真皮層のコラーゲン減少、そして最も深い筋膜層（SMAS）のたるみが複合的に発生します。そのため、成功するリフティングのためには患者個人の肌の厚さと老化度を正確に診断し、各層に適したエネルギーを届けることが必要です。`,
      category: "Anti-Aging",
      date: "2024.02.28",
      image: "https://images.unsplash.com/photo-1666980347648-23bb1e49c1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    }
  ];

  const column = columns.find(c => c.id === Number(id)) || columns[0];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-white font-['Pretendard',sans-serif] font-light">
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
                Director's Column
              </motion.h1>
            </FadeInUp>
          </div>
        </section>

        <section className="w-full bg-white min-h-[50vh]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[60px] md:py-[100px]">
            <div className="max-w-[1000px] mx-auto">
              <FadeInUp>
                <div className="mb-12">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] mb-4 uppercase text-[#b8a99a]">
                    {column.category}
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] font-['Pretendard',sans-serif] font-light tracking-[-1px] leading-[1.3] mb-6">
                    {column.title}
                  </h2>
                  <div className="w-full h-[1px] bg-[#1c1614] mb-6"></div>
                  <div className="flex justify-between items-center text-[#6b5f58] font-['Montserrat',sans-serif] text-[15px] tracking-[1px]">
                    <span>{column.date}</span>
                    <span className="uppercase text-[13px] tracking-[2px]">Director</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#e8e5e0] mt-6"></div>
                </div>

                <div className="mb-12">
                  <img src={column.image} alt={column.title} className="w-full aspect-[21/9] object-cover" />
                </div>

                <div className="py-8 min-h-[200px]">
                  <p className="text-[18px] md:text-[20px] text-[#332e2c] font-['Pretendard',sans-serif] font-light leading-[1.8] whitespace-pre-wrap">
                    {column.content}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#1c1614] mb-12 mt-12"></div>

                <div className="flex justify-center">
                  <button
                    onClick={() => navigate('/jp/community/column')}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] hover:bg-[#1c1614] hover:text-white transition-colors duration-300 font-['Montserrat',sans-serif] text-[14px] tracking-[3px] uppercase"
                  >
                    List
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
