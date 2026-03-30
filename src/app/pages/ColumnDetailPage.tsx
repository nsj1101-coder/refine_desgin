import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ScaledPageWrapper } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";

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

export default function ColumnDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const columns = [
    {
      id: 1,
      title: "계절이 바뀌는 환절기, 당신의 피부 장벽은 안전한가요?",
      content: `건조한 바람과 큰 일교차는 피부 장벽을 무너뜨리는 주범입니다. 환절기에도 흔들림 없는 건강한 피부를 유지하기 위한 3단계 코어 보습 솔루션을 원장이 직접 소개합니다.\n\n피부 장벽은 우리 몸을 보호하는 가장 1차적인 방어선입니다. 이 장벽이 무너지면 수분이 쉽게 증발하고, 외부 자극에 민감하게 반응하여 트러블이 발생하기 쉽습니다. 특히 가을에서 겨울로 넘어가는 시기에는 대기가 건조해지면서 피부 속 수분까지 함께 마르게 됩니다.\n\n이에 따라 집에서 할 수 있는 간단하지만 효과적인 홈케어 방법과, 병원에서 받을 수 있는 전문적인 장벽 강화 시술에 대해 자세히 알아보겠습니다.`,
      category: "Skin Care",
      date: "2024.03.12",
      image: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "리프팅 시술, 내 피부 두께에 맞춘 '깊이'가 결정합니다",
      content: `모두에게 똑같은 리프팅은 정답이 될 수 없습니다. 표피, 진피, SMAS층까지 피부의 여러 층을 복합적으로 타겟팅하는 올뎁스(All-depth) 리프팅의 원리와 중요성에 대해 알아봅니다.\n\n피부의 노화는 단일 층에서만 일어나는 것이 아닙니다. 표피의 탄력 저하, 진피층의 콜라겐 감소, 그리고 가장 깊은 근막층(SMAS)의 처짐이 복합적으로 발생합니다. 따라서 성공적인 리프팅을 위해서는 환자 개인의 피부 두께와 노화 정도를 정확히 진단하고, 각 층에 알맞은 에너지를 전달해야 합니다.`,
      category: "Anti-Aging",
      date: "2024.02.28",
      image: "https://images.unsplash.com/photo-1666980347648-23bb1e49c1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    }
  ];

  // Fallback to first item if ID not found, just for preview purposes
  const column = columns.find(c => c.id === Number(id)) || columns[0];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-white font-['Pretendard',sans-serif] font-light">
        {/* ===== Cinematic Minimal Hero Section ===== */}
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

        {/* ===== Detail View Section ===== */}
        <section className="w-full bg-white min-h-[50vh]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[60px] md:py-[100px]">
            <div className="max-w-[1000px] mx-auto">
              <FadeInUp>
                <div className="mb-12">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] mb-4 uppercase text-[#b8a99a]">
                    {column.category}
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium tracking-[-1px] leading-[1.3] mb-6">
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
                    onClick={() => navigate('/community/column')}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] hover:bg-[#1c1614] hover:text-white transition-colors duration-300 font-['Montserrat',sans-serif] text-[14px] tracking-[3px] uppercase"
                  >
                    List
                  </button>
                </div>
              </FadeInUp>
            </div>
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