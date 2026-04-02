import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { ChevronDown, MessageCircle, ScanLine, Sparkles, HeartPulse } from "lucide-react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import skinLayerEpidermis from "../../assets/skin-layer-epidermis.png";
import skinLayerFat from "../../assets/skin-layer-fat.png";
import skinLayerFascia from "../../assets/skin-layer-fascia.png";
import skinLayerMuscle from "../../assets/skin-layer-muscle.png";

/* ───── animation helpers ───── */
function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───── skin-layer data ───── */
const SKIN_LAYER_IMAGES = [skinLayerEpidermis, skinLayerFat, skinLayerFascia, skinLayerMuscle];

const SKIN_LAYERS = [
  {
    id: "epidermis",
    labelEn: "Epidermis & Dermis",
    labelKr: "표피 & 진피",
    color: "#D4B896",
    colorLight: "#F5EDE2",
    colorDark: "#b8a080",
    img: skinLayerEpidermis,
    target: "거친 피부결, 헐거워진 탄력",
    effect: "고주파 에너지가 진피층 콜라겐을 활성화시켜 피부결과 탄력을 개선합니다.",
    depth: "0 – 2mm",
  },
  {
    id: "fat",
    labelEn: "Fat",
    labelKr: "지방층",
    color: "#C4A67A",
    colorLight: "#EDE0CD",
    colorDark: "#a38a5e",
    img: skinLayerFat,
    target: "심부볼, 이중턱 등 무겁게 처진 지방",
    effect: "마이크로파&초음파 에너지를 통해 불필요한 지방 부피를 줄여 얼굴의 무게감을 덜어내고 라인을 탄탄하게 만듭니다.",
    depth: "2 – 6mm",
  },
  {
    id: "fascia",
    labelEn: "Fascia",
    labelKr: "근막층",
    color: "#9E7C5A",
    colorLight: "#DDD0C0",
    colorDark: "#7d6040",
    img: skinLayerFascia,
    target: "중력으로 인해 무너진 얼굴 윤곽",
    effect: "초음파 에너지가 피부 지지 구조인 SMAS(근막)층에 강력하게 전달하여 피부의 탄력을 끌어올립니다.",
    depth: "4.5mm",
  },
  {
    id: "muscle",
    labelEn: "Muscle",
    labelKr: "근육층",
    color: "#7A5C3E",
    colorLight: "#CFC0AE",
    colorDark: "#5a4028",
    img: skinLayerMuscle,
    target: "피부를 아래로 끌어당기는 근육의 힘",
    effect: "과도하게 아래로 당기는 근육(내림근)과 표정 근육의 움직임을 조절하여 자연스러운 리프팅 효과가 지속되도록 합니다.",
    depth: "Deep",
  },
];

/* ───── main component ───── */
export default function AllDepthLiftingPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [activeLayer, setActiveLayer] = useState(0);
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const diagramRef = useRef<HTMLDivElement>(null);
  const diagramInView = useInView(diagramRef, { once: true, margin: "-100px" });

  /* treatments */
  const treatments = [
    {
      id: "density", num: "01", title: "덴서티", subtitle: "High-Intensity Focused Ultrasound",
      img: "https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "피부에 촘촘한 볼륨을 채워주어 탄력을 높여주는 시술이에요. 고주파(RF) 에너지를 이용하여 진피층의 콜라겐 생성을 유도하고, 무너진 페이스 라인을 매끄럽게 정리해 드립니다.",
      points: ["진피층 콜라겐 생성 촉진", "무너진 페이스 라인 복원", "비침습적 시술로 부담 없이"],
      duration: "30분 ~ 40분", anesthesia: "크림 마취", recovery: "즉시 일상생활 가능", maintenance: "6개월 ~ 1년",
      layers: ["epidermis"],
    },
    {
      id: "onda", num: "02", title: "온다", subtitle: "Microwave RF Technology",
      img: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "특수 극초음파(Microwave)를 이용해 피부 진피층부터 피하지방층까지 에너지를 전달해요. 불필요한 지방은 줄이고, 콜라겐 생성을 강력하게 촉진하는 혁신적인 시술입니다.",
      points: ["이중턱·심부볼 집중 케어", "극초음파로 지방세포 감소", "통증이 거의 없는 편안한 시술"],
      duration: "20분 ~ 30분", anesthesia: "불필요", recovery: "즉시 일상생활 가능", maintenance: "6개월 ~ 1년",
      layers: ["epidermis", "fat"],
    },
    {
      id: "shurink", num: "03", title: "슈링크", subtitle: "Focused Ultrasound",
      img: "https://images.unsplash.com/photo-1547626279-671ad06bbb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "고강도 집속 초음파(HIFU) 에너지를 비침습적으로 근막(SMAS)에 전달하여, 늘어진 피부를 속부터 당겨 올려주는 강력한 초음파 리프팅 시술이에요.",
      points: ["SMAS 근막층까지 깊은 리프팅", "턱선·눈가 탄력 개선", "짧은 시술 시간, 빠른 일상 복귀"],
      duration: "15분 ~ 20분", anesthesia: "크림 마취", recovery: "즉시 일상생활 가능", maintenance: "3개월 ~ 6개월",
      layers: ["fascia"],
    },
    {
      id: "potenza", num: "04", title: "포텐자", subtitle: "Microneedling RF",
      img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "미세 바늘(마이크로 니들)을 통해 고주파 에너지를 진피층에 직접 전달해요. 콜라겐 생성을 유도하고 피부결, 모공, 잔주름을 복합적으로 개선하는 시술입니다.",
      points: ["모공·흉터 동시 개선", "피부결과 톤 개선 효과", "복합적 피부 고민 한 번에 해결"],
      duration: "30분 ~ 40분", anesthesia: "크림 마취", recovery: "1~2일", maintenance: "6개월 ~ 1년",
      layers: ["epidermis"],
    },
  ];

  const processSteps = [
    { step: "01", title: "1:1 맞춤 상담", desc: "피부 상태와 고민을 파악하고\n최적의 시술을 설계합니다", icon: MessageCircle },
    { step: "02", title: "정밀 진단", desc: "피부 층별 상태를 분석하여\n시술 깊이와 강도를 결정합니다", icon: ScanLine },
    { step: "03", title: "맞춤 시술", desc: "개인별 맞춤 프로토콜로\n정교하게 시술을 진행합니다", icon: Sparkles },
    { step: "04", title: "사후 관리", desc: "시술 후 경과를 체크하고\n최적의 유지 관리법을 안내합니다", icon: HeartPulse },
  ];

  const recommends = [
    "볼과 턱선이 처져서 인상이 피곤해 보이는 분",
    "나이보다 더 들어 보인다는 이야기를 들으시는 분",
    "탄력이 떨어지고 주름이 깊어져 고민이신 분",
    "수술 없이 자연스러운 리프팅 효과를 원하시는 분",
    "결혼식, 행사 등 중요한 일정 전 관리가 필요하신 분",
  ];

  const faqs = [
    { q: "리프팅 시술 후 바로 일상생활이 가능한가요?", a: "네, 대부분의 리프팅 시술은 비침습적이기 때문에 시술 직후 바로 일상생활이 가능합니다. 약간의 붉은기나 부기가 있을 수 있지만, 보통 수 시간 이내에 자연스럽게 가라앉습니다." },
    { q: "효과는 언제부터 나타나고, 얼마나 유지되나요?", a: "시술 직후에도 즉각적인 타이트닝 효과를 느끼실 수 있고, 콜라겐 리모델링이 진행되면서 2~4주에 걸쳐 점차 개선됩니다. 시술 종류에 따라 6개월에서 1년까지 효과가 유지됩니다." },
    { q: "시술 시 통증은 어느 정도인가요?", a: "크림 마취를 적용하기 때문에 대부분 편안하게 시술받으실 수 있습니다. 온다의 경우 마취 없이도 시술이 가능할 정도로 통증이 거의 없습니다." },
    { q: "시술 후 주의해야 할 사항이 있나요?", a: "시술 후 3일간은 미온수로 세안하시고, 자외선 차단제를 꼭 발라주세요. 2~3일간 음주, 흡연, 사우나, 찜질방은 피하시는 것이 좋습니다." },
    { q: "어떤 리프팅 시술이 저에게 맞는지 어떻게 알 수 있나요?", a: "피부 상태, 노화 정도, 원하시는 개선 부위에 따라 최적의 시술이 달라집니다. REFINE에서는 1:1 맞춤 상담을 통해 고객님께 가장 적합한 시술을 설계해 드립니다." },
  ];

  const activeT = treatments[activeTreatment];
  const activeLayerData = SKIN_LAYERS[activeLayer];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614] break-keep">

        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#201814]" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback src={subHeroImg} alt="All-depth Lifting" className="w-full h-full object-cover" />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#201814]/60 via-transparent to-[#201814]/80" />

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeInUp delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[14px] md:text-[16px] tracking-[6px] text-[#b8a99a] uppercase mb-8"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                All-depth Lifting
              </motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-[#faf6f1] font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                All-depth Lifting
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[18px] md:text-[24px] text-[#faf6f1]/80 font-['Pretendard',sans-serif] font-light tracking-[-0.5px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                피부의 겉부터 근육층까지, 최적의 조합으로 설계되는 올뎁스 리프팅
              </motion.p>
            </FadeInUp>
          </motion.div>

          {/* Scroll indicator */}
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

        {/* ═══════════════════════════════════════════
            INTRO / PHILOSOPHY
        ═══════════════════════════════════════════ */}
        <section className="w-full bg-white relative overflow-hidden">
          {/* Giant watermark */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.025]">
            <span className="font-['Montserrat',sans-serif] text-[18vw] font-bold text-[#1c1614] whitespace-nowrap leading-none tracking-[-8px]">ALL-DEPTH</span>
          </div>

          <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[120px] md:py-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] md:gap-[100px] items-center">
              {/* Left: Text */}
              <div className="md:col-span-5 flex flex-col gap-[40px]">
                <FadeInUp>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-[40px] h-[1px] bg-[#b8a99a]" />
                    <span className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[13px] tracking-[3px] uppercase">Philosophy</span>
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35] mb-6">
                    피부의 겉부터 근육층까지,<br />
                    <span className="text-[#b8a99a]">최적의 조합</span>으로<br className="hidden md:block" /> 설계되는 리프팅
                  </h2>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-[16px] md:text-[18px] text-[#4a3f3a] leading-[1.9] font-light">
                    피부는 개인의 상태에 따라 노화의 원인을 층 별로 정확히 타겟해야 합니다. 리파인 올뎁스 리프팅은 표피부터 진피, 지방, 근막을 넘어 근육의 흐름까지 복합적으로 설계하는 리프팅 프로그램입니다.
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.25}>
                  <div className="border-l-[2px] border-[#1c1614] pl-6 py-2">
                    <p className="text-[15px] md:text-[17px] text-[#1c1614] font-medium leading-[1.8]">
                      단순히 한 층만 자극하는 것이 아닌,<br />
                      피부의 모든 깊이를 아우르는<br />
                      <span className="font-['Montserrat',sans-serif] italic font-semibold">All-depth</span> 접근이 필요합니다.
                    </p>
                  </div>
                </FadeInUp>
              </div>

              {/* Right: Image */}
              <div className="md:col-span-7">
                <FadeInUp delay={0.3}>
                  <div className="relative">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1648967711484-c08ed128dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        alt="Facial contour"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[#1c1614] text-[#faf6f1] px-8 py-6 md:px-10 md:py-8 flex flex-col items-center">
                      <p className="font-['Montserrat',sans-serif] font-light text-[32px] md:text-[48px] leading-none mb-1">4</p>
                      <p className="text-[13px] md:text-[14px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[2px] uppercase">Layers</p>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SKIN LAYER DIAGRAM — Interactive
        ═══════════════════════════════════════════ */}
        <section className="w-full bg-[#201814] text-[#faf6f1] overflow-hidden" ref={diagramRef}>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[160px]">

            <FadeInUp>
              <div className="flex flex-col items-center text-center mb-[60px] md:mb-[100px]">
                <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Skin Structure
                </span>
                <h2 className="text-[28px] md:text-[42px] text-[#ffffff] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35]">
                  올뎁스 리프팅이 타겟하는<br />피부의 <span className="text-[#b8a99a]">4가지 층</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[80px] items-start">

              {/* LEFT — Interactive Cross-Section Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[420px]">
                  <div className="relative w-full flex flex-col">
                    {SKIN_LAYERS.map((layer, idx) => {
                      const isActive = activeLayer === idx;
                      return (
                        <motion.div
                          key={layer.id}
                          onClick={() => setActiveLayer(idx)}
                          className="relative w-full cursor-pointer overflow-hidden"
                          animate={{
                            opacity: isActive ? 1 : 0.4,
                            scale: isActive ? 1.02 : 1,
                          }}
                          whileHover={{ opacity: 0.8 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img src={layer.img} alt={layer.labelEn} className="w-full h-auto block" />

                          {/* Layer label overlay */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-between px-6 md:px-8"
                            animate={{ opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="font-['Montserrat',sans-serif] font-semibold text-[13px] md:text-[14px] tracking-[1px] uppercase text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>
                              {layer.labelEn}
                            </span>
                            <span className="font-['Pretendard',sans-serif] font-medium text-[13px] md:text-[14px] text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>
                              {layer.labelKr}
                            </span>
                          </motion.div>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="layerIndicator"
                              className="absolute right-0 top-0 bottom-0 w-[4px] bg-white"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 pt-4 border-t border-white/10 text-center">
                    <p className="font-['Montserrat',sans-serif] text-[11px] text-[#b8a99a]/50 tracking-[2px] uppercase">
                      Click each layer to explore
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT — Layer Detail */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayerData.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-[40px]"
                  >
                    {/* Layer header */}
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 mt-[4px]" style={{ backgroundColor: activeLayerData.color }}>
                          <span className="font-['Montserrat',sans-serif] font-light text-[16px] text-white">
                            {String(activeLayer + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-['Montserrat',sans-serif] font-light text-[24px] md:text-[32px] tracking-[-0.5px] text-white leading-none">
                            {activeLayerData.labelEn}
                          </h3>
                          <p className="font-['Pretendard',sans-serif] text-[16px] md:text-[18px] text-[#b8a99a] mt-2">
                            {activeLayerData.labelKr}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Target & Effect cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: activeLayerData.color }} />
                          <span className="font-['Montserrat',sans-serif] font-medium text-[12px] tracking-[2px] uppercase text-[#b8a99a]">Target</span>
                        </div>
                        <p className="text-[17px] md:text-[20px] text-white font-light leading-[1.5]">
                          {activeLayerData.target}
                        </p>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: activeLayerData.color }} />
                          <span className="font-['Montserrat',sans-serif] font-medium text-[12px] tracking-[2px] uppercase text-[#b8a99a]">Effect</span>
                        </div>
                        <p className="text-[15px] md:text-[16px] text-white/80 leading-[1.8] font-light">
                          {activeLayerData.effect}
                        </p>
                      </div>
                    </div>

                    {/* Depth info */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      <div>
                        <span className="font-['Montserrat',sans-serif] text-[11px] tracking-[2px] uppercase text-[#b8a99a]/60">Depth</span>
                        <p className="font-['Montserrat',sans-serif] font-light text-[28px] text-white mt-1">{activeLayerData.depth}</p>
                      </div>
                      <div className="flex-1 h-[3px] bg-white/10 relative overflow-hidden rounded-full">
                        <motion.div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{ backgroundColor: activeLayerData.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${(activeLayer + 1) * 25}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Layer navigation dots */}
                    <div className="flex items-center gap-3 pt-2">
                      {SKIN_LAYERS.map((l, idx) => (
                        <button
                          key={l.id}
                          onClick={() => setActiveLayer(idx)}
                          className="flex items-center gap-2 group/dot"
                        >
                          <div
                            className="w-[10px] h-[10px] rounded-full border-2 transition-all duration-300"
                            style={{
                              borderColor: activeLayer === idx ? l.color : 'rgba(255,255,255,0.2)',
                              backgroundColor: activeLayer === idx ? l.color : 'transparent',
                            }}
                          />
                          <span className={`font-['Montserrat',sans-serif] text-[11px] tracking-[1px] uppercase transition-colors duration-300 hidden md:inline ${activeLayer === idx ? 'text-white' : 'text-white/30 group-hover/dot:text-white/60'}`}>
                            {l.labelKr}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TREATMENT PROGRAMS
        ═══════════════════════════════════════════ */}
        {false && <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[160px]">
            <FadeInUp>
              <div className="flex flex-col items-center text-center mb-[60px] md:mb-[100px]">
                <span className="inline-block border border-[#1c1614]/20 text-[#1c1614] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Programs
                </span>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35]">
                  리프팅 프로그램
                </h2>
              </div>
            </FadeInUp>

            {/* Treatment tabs — horizontal scroll on mobile */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-[#1c1614]/10 mb-[60px] md:mb-[80px] md:justify-center">
              {treatments.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTreatment(idx)}
                  className={`shrink-0 px-8 py-5 text-[16px] font-medium transition-all duration-500 relative whitespace-nowrap ${
                    activeTreatment === idx ? 'text-[#1c1614]' : 'text-[#b8a99a] hover:text-[#1c1614]'
                  }`}
                >
                  <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[1px] mr-2 opacity-50">{t.num}</span>
                  {t.title}
                  {activeTreatment === idx && (
                    <motion.div
                      layoutId="treatmentTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1c1614]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Treatment detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeT.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[40px] md:gap-[80px] items-start">
                  {/* Image */}
                  <div className="md:col-span-6">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#e8e5e0]">
                      <ImageWithFallback
                        src={activeT.img}
                        alt={activeT.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      />
                    </div>

                    {/* Layer badges */}
                    <div className="flex gap-2 mt-4">
                      {activeT.layers.map(layerId => {
                        const layer = SKIN_LAYERS.find(l => l.id === layerId);
                        if (!layer) return null;
                        return (
                          <span
                            key={layerId}
                            className="inline-flex items-center gap-2 px-3 py-1 text-[12px] font-['Montserrat',sans-serif] tracking-[1px] uppercase border"
                            style={{ borderColor: layer.color, color: layer.colorDark }}
                          >
                            <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: layer.color }} />
                            {layer.labelEn}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6 flex flex-col gap-[32px]">
                    <div>
                      <p className="font-['Montserrat',sans-serif] text-[14px] text-[#b8a99a] tracking-[1px] uppercase mb-2">{activeT.subtitle}</p>
                      <h3 className="text-[28px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-bold tracking-[-1px]">
                        {activeT.title}
                      </h3>
                    </div>

                    <p className="text-[16px] md:text-[18px] text-[#4a3f3a] leading-[1.9] font-light">
                      {activeT.desc}
                    </p>

                    <div className="space-y-3">
                      {activeT.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-[5px] h-[5px] bg-[#b8a99a] rounded-full shrink-0 mt-[9px]" />
                          <p className="text-[15px] md:text-[16px] text-[#1c1614] font-medium leading-[1.6]">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-2 gap-[1px] bg-[#1c1614]/10 mt-4">
                      {[
                        { label: "시술 시간", value: activeT.duration },
                        { label: "마취 방법", value: activeT.anesthesia },
                        { label: "회복 기간", value: activeT.recovery },
                        { label: "유지 기간", value: activeT.maintenance },
                      ].map((info, i) => (
                        <div key={i} className="bg-[#faf6f1] p-5 flex flex-col gap-2">
                          <span className="font-['Montserrat',sans-serif] text-[11px] tracking-[2px] uppercase text-[#b8a99a]">{info.label}</span>
                          <span className="text-[15px] text-[#1c1614] font-medium">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>}

        {/* ═══════════════════════════════════════════
            RECOMMEND SECTION
        ═══════════════════════════════════════════ */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[160px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[100px]">
              <div className="lg:col-span-4">
                <FadeInUp>
                  <div className="lg:sticky lg:top-[200px]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[40px] h-[1px] bg-[#b8a99a]" />
                      <span className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[13px] tracking-[3px] uppercase">Recommend</span>
                    </div>
                    <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35]">
                      이런 분께<br />추천드려요
                    </h2>
                  </div>
                </FadeInUp>
              </div>
              <div className="lg:col-span-8">
                <div className="flex flex-col">
                  {recommends.map((rec, idx) => (
                    <FadeInUp key={idx} delay={idx * 0.08}>
                      <div className="flex items-start gap-6 py-[28px] md:py-[36px] border-b border-[#1c1614]/10 group">
                        <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-[#b8a99a] shrink-0 group-hover:bg-[#1c1614] group-hover:border-[#1c1614] transition-colors duration-500">
                          <span className="font-['Montserrat',sans-serif] font-medium text-[13px] text-[#b8a99a] group-hover:text-white transition-colors duration-500">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-[17px] md:text-[20px] text-[#1c1614] font-medium leading-[1.5] pt-[5px] group-hover:translate-x-2 transition-transform duration-500">
                          {rec}
                        </p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROCESS SECTION
        ═══════════════════════════════════════════ */}
        <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Process
                </p>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                  시술 과정
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[60px] gap-y-[60px]">
              {processSteps.map((step, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="border-t border-[#1c1614] pt-[40px] relative">
                    <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      {step.icon && <step.icon className="w-[32px] h-[32px] text-[#1c1614] stroke-[1] mb-8" />}
                      <h4 className="text-[20px] md:text-[24px] text-[#1c1614] font-['Pretendard',sans-serif] font-light mb-4 tracking-[-0.5px]">
                        {step.title}
                      </h4>
                      <p className="text-[16px] md:text-[16px] text-[#6b5f58] leading-[1.8] whitespace-pre-line break-keep">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ SECTION
        ═══════════════════════════════════════════ */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[60px] md:mb-[80px]">
                <div>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Q&A
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
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

        {/* ═══════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════ */}
        <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] pb-[100px] md:pb-[160px]">
            <FadeInUp>
              <div className="relative overflow-hidden bg-[#1c1614]">
                {/* background image */}
                <div className="absolute inset-0 opacity-20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1766299892549-b56b257d1ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-[50px] md:p-[80px] gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-[26px] md:text-[36px] text-[#faf6f1] font-['Pretendard',sans-serif] font-light tracking-[-1px] mb-4 leading-[1.35]">
                      1:1 맞춤 상담으로<br className="md:hidden" /> 최적의 리프팅을 찾아보세요
                    </h3>
                    <p className="text-[15px] md:text-[17px] text-[#faf6f1]/50 font-light">
                      정밀 진단을 통해 피부 상태에 가장 알맞은 리프팅 프로토콜을 설계해 드립니다.
                    </p>
                  </div>
                  <a
                    href="/reservation"
                    className="px-[48px] py-[18px] border border-[#faf6f1] text-[#faf6f1] font-['Montserrat',sans-serif] font-medium text-[13px] tracking-[3px] uppercase hover:bg-[#faf6f1] hover:text-[#1c1614] transition-colors duration-500 shrink-0"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}