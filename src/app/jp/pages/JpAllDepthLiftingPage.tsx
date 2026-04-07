import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { ChevronDown, MessageCircle, ScanLine, Sparkles, HeartPulse } from "lucide-react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import skinLayerEpidermis from "../../../assets/skin-layer-epidermis.png";
import skinLayerFat from "../../../assets/skin-layer-fat.png";
import skinLayerFascia from "../../../assets/skin-layer-fascia.png";
import skinLayerMuscle from "../../../assets/skin-layer-muscle.png";

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

const SKIN_LAYERS = [
  {
    id: "epidermis",
    labelEn: "Epidermis & Dermis",
    labelKr: "表皮 & 真皮",
    color: "#D4B896",
    colorLight: "#F5EDE2",
    colorDark: "#b8a080",
    img: skinLayerEpidermis,
    target: "粗い肌質、失われた弾力",
    effect: "高周波エネルギーが真皮層のコラーゲンを活性化し、肌質と弾力を改善します。",
    depth: "0 – 2mm",
  },
  {
    id: "fat",
    labelEn: "Fat",
    labelKr: "脂肪層",
    color: "#C4A67A",
    colorLight: "#EDE0CD",
    colorDark: "#a38a5e",
    img: skinLayerFat,
    target: "こめかみ・二重顎などの重くたるんだ脂肪",
    effect: "マイクロ波・超音波エネルギーで不要な脂肪を減らし、顔の重さを取り除いてラインをすっきりさせます。",
    depth: "2 – 6mm",
  },
  {
    id: "fascia",
    labelEn: "Fascia",
    labelKr: "筋膜層",
    color: "#9E7C5A",
    colorLight: "#DDD0C0",
    colorDark: "#7d6040",
    img: skinLayerFascia,
    target: "重力で崩れたフェイスライン",
    effect: "超音波エネルギーが肌の支持構造であるSMAS（筋膜）層に強力に届き、肌の弾力を引き上げます。",
    depth: "4.5mm",
  },
  {
    id: "muscle",
    labelEn: "Muscle",
    labelKr: "筋肉層",
    color: "#7A5C3E",
    colorLight: "#CFC0AE",
    colorDark: "#5a4028",
    img: skinLayerMuscle,
    target: "肌を下に引っ張る筋肉の力",
    effect: "過度に下方向へ引っ張る筋肉（下制筋）と表情筋の動きをコントロールし、自然なリフティング効果を持続させます。",
    depth: "Deep",
  },
];

export default function JpAllDepthLiftingPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [activeLayer, setActiveLayer] = useState(0);
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const diagramRef = useRef<HTMLDivElement>(null);
  const diagramInView = useInView(diagramRef, { once: true, margin: "-100px" });

  const treatments = [
    {
      id: "density", num: "01", title: "デンサティ", subtitle: "High-Intensity Focused Ultrasound",
      img: "https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "肌に密なボリュームを与えて弾力を高める施術です。高周波（RF）エネルギーを使用して真皮層のコラーゲン生成を誘導し、崩れたフェイスラインをすっきりと整えます。",
      points: ["真皮層のコラーゲン生成促進", "崩れたフェイスラインの回復", "非侵襲的な施術で安心"],
      duration: "30分〜40分", anesthesia: "クリーム麻酔", recovery: "施術直後から日常生活可能", maintenance: "6ヶ月〜1年",
      layers: ["epidermis"],
    },
    {
      id: "onda", num: "02", title: "オンダ", subtitle: "Microwave RF Technology",
      img: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "特殊なマイクロ波を使用して肌の真皮層から皮下脂肪層までエネルギーを届けます。不要な脂肪を減らし、コラーゲン生成を強力に促進する革新的な施術です。",
      points: ["二重顎・こめかみの集中ケア", "マイクロ波で脂肪細胞を減少", "ほとんど痛みのない快適な施術"],
      duration: "20分〜30分", anesthesia: "不要", recovery: "施術直後から日常生活可能", maintenance: "6ヶ月〜1年",
      layers: ["epidermis", "fat"],
    },
    {
      id: "shurink", num: "03", title: "シュリンク", subtitle: "Focused Ultrasound",
      img: "https://images.unsplash.com/photo-1547626279-671ad06bbb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "高強度集束超音波（HIFU）エネルギーを非侵襲的に筋膜（SMAS）に届け、たるんだ肌を内側から引き上げる強力な超音波リフティング施術です。",
      points: ["SMAS筋膜層まで深いリフティング", "フェイスライン・目元の弾力改善", "短い施術時間、素早い日常復帰"],
      duration: "15分〜20分", anesthesia: "クリーム麻酔", recovery: "施術直後から日常生活可能", maintenance: "3ヶ月〜6ヶ月",
      layers: ["fascia"],
    },
    {
      id: "potenza", num: "04", title: "ポテンザ", subtitle: "Microneedling RF",
      img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "微細な針（マイクロニードル）を通じて高周波エネルギーを真皮層に直接届けます。コラーゲン生成を誘導し、肌質・毛穴・小じわを複合的に改善する施術です。",
      points: ["毛穴・跡の同時改善", "肌質とトーンの改善効果", "複合的な肌悩みを一度に解決"],
      duration: "30分〜40分", anesthesia: "クリーム麻酔", recovery: "1〜2日", maintenance: "6ヶ月〜1年",
      layers: ["epidermis"],
    },
  ];

  const processSteps = [
    { step: "01", title: "1対1カスタム相談", desc: "肌の状態とお悩みを把握し\n最適な施術を設計します", icon: MessageCircle },
    { step: "02", title: "精密診断", desc: "肌の各層の状態を分析して\n施術の深さと強度を決定します", icon: ScanLine },
    { step: "03", title: "カスタム施術", desc: "個人別カスタムプロトコルで\n精密に施術を進めます", icon: Sparkles },
    { step: "04", title: "アフターケア", desc: "施術後の経過を確認し\n最適なケア方法をご案内します", icon: HeartPulse },
  ];

  const recommends = [
    "頬やフェイスラインがたるんで疲れた印象に見える方",
    "実年齢より老けて見えると言われる方",
    "弾力が落ちてシワが深くなり気になっている方",
    "手術なしで自然なリフティング効果をご希望の方",
    "結婚式やイベントなど大切な予定の前にケアが必要な方",
  ];

  const faqs = [
    { q: "リフティング施術後すぐに日常生活は可能ですか？", a: "はい、ほとんどのリフティング施術は非侵襲的のため、施術直後から日常生活が可能です。軽い赤みやむくみが出ることがありますが、通常数時間以内に自然に落ち着きます。" },
    { q: "効果はいつから現れて、どのくらい続きますか？", a: "施術直後でも即時のタイトニング効果を感じていただけます。コラーゲンのリモデリングが進むにつれ2〜4週かけて徐々に改善されます。施術の種類によって6ヶ月から1年間効果が持続します。" },
    { q: "施術中の痛みはどの程度ですか？", a: "クリーム麻酔を使用するためほとんどの方は快適に施術を受けられます。オンダの場合は麻酔なしで施術できるほど痛みがほとんどありません。" },
    { q: "施術後に注意すべきことはありますか？", a: "施術後3日間はぬるま湯で洗顔し、日焼け止めを必ずお使いください。2〜3日間は飲酒・喫煙・サウナ・岩盤浴はお控えください。" },
    { q: "どのリフティング施術が自分に合っているかどうやって分かりますか？", a: "肌の状態・老化の程度・改善したい部位によって最適な施術が異なります。REFINEでは1対1カスタム相談を通じて最も適した施術をご提案します。" },
  ];

  const activeT = treatments[activeTreatment];
  const activeLayerData = SKIN_LAYERS[activeLayer];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614] break-keep">

        {/* HERO */}
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
                肌の表面から筋肉層まで、最適な組み合わせで設計されるオールデプスリフティング
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

        {/* INTRO */}
        <section className="w-full bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.025]">
            <span className="font-['Montserrat',sans-serif] text-[18vw] font-bold text-[#1c1614] whitespace-nowrap leading-none tracking-[-8px]">ALL-DEPTH</span>
          </div>

          <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[120px] md:py-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] md:gap-[100px] items-center">
              <div className="md:col-span-5 flex flex-col gap-[40px]">
                <FadeInUp>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-[40px] h-[1px] bg-[#b8a99a]" />
                    <span className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[13px] tracking-[3px] uppercase">Philosophy</span>
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35] mb-6">
                    肌の表面から筋肉層まで、<br />
                    <span className="text-[#b8a99a]">最適な組み合わせ</span>で<br className="hidden md:block" /> 設計されるリフティング
                  </h2>
                </FadeInUp>

                <FadeInUp delay={0.15}>
                  <p className="text-[16px] md:text-[18px] text-[#4a3f3a] leading-[1.9] font-light">
                    お肌は個人の状態に応じて、老化の原因を各層ごとに正確にターゲットにする必要があります。リファイン オールデプスリフティングは、表皮から真皮・脂肪・筋膜を超え、筋肉の動きまで複合的に設計するリフティングプログラムです。
                  </p>
                </FadeInUp>

                <FadeInUp delay={0.25}>
                  <div className="border-l-[2px] border-[#1c1614] pl-6 py-2">
                    <p className="text-[15px] md:text-[17px] text-[#1c1614] font-medium leading-[1.8]">
                      単に一つの層を刺激するだけでなく、<br />
                      肌のすべての深さを網羅する<br />
                      <span className="font-['Montserrat',sans-serif] italic font-semibold">All-depth</span> アプローチが必要です。
                    </p>
                  </div>
                </FadeInUp>
              </div>

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

        {/* SKIN LAYER DIAGRAM */}
        <section className="w-full bg-[#201814] text-[#faf6f1] overflow-hidden" ref={diagramRef}>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[160px]">
            <FadeInUp>
              <div className="flex flex-col items-center text-center mb-[60px] md:mb-[100px]">
                <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Skin Structure
                </span>
                <h2 className="text-[28px] md:text-[42px] text-[#ffffff] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35]">
                  オールデプスリフティングがターゲットにする<br />肌の<span className="text-[#b8a99a]">4つの層</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[80px] items-start">
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
                          animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1.02 : 1 }}
                          whileHover={{ opacity: 0.8 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img src={layer.img} alt={layer.labelEn} className="w-full h-auto block" />
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
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex flex-col gap-4 mb-10">
                  {SKIN_LAYERS.map((layer, idx) => (
                    <motion.button
                      key={layer.id}
                      onClick={() => setActiveLayer(idx)}
                      className="flex items-center gap-4 text-left group w-full"
                      animate={{ opacity: activeLayer === idx ? 1 : 0.4 }}
                      whileHover={{ opacity: 0.85 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="w-3 h-3 rounded-full shrink-0 transition-transform duration-300"
                        style={{
                          backgroundColor: layer.color,
                          transform: activeLayer === idx ? "scale(1.5)" : "scale(1)",
                        }}
                      />
                      <span className={`font-['Montserrat',sans-serif] text-[13px] md:text-[14px] tracking-[2px] uppercase transition-colors ${activeLayer === idx ? "text-white font-semibold" : "text-[#b8a99a]"}`}>
                        {layer.labelEn}
                      </span>
                      <span className={`font-['Pretendard',sans-serif] text-[13px] md:text-[14px] ${activeLayer === idx ? "text-white/80" : "text-[#b8a99a]/60"}`}>
                        {layer.labelKr}
                      </span>
                      <span className={`ml-auto font-['Montserrat',sans-serif] text-[12px] tracking-[1px] ${activeLayer === idx ? "text-[#b8a99a]" : "text-[#b8a99a]/30"}`}>
                        {layer.depth}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayerData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 md:p-10 border border-white/10 bg-white/5"
                  >
                    <div className="mb-6">
                      <p className="font-['Montserrat',sans-serif] text-[11px] tracking-[3px] uppercase mb-3" style={{ color: activeLayerData.color }}>
                        Target Area
                      </p>
                      <p className="text-[18px] md:text-[22px] text-white font-['Pretendard',sans-serif] font-light leading-[1.5]">
                        {activeLayerData.target}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-white/10 mb-6" />
                    <div>
                      <p className="font-['Montserrat',sans-serif] text-[11px] tracking-[3px] uppercase mb-3 text-[#b8a99a]">
                        Effect
                      </p>
                      <p className="text-[16px] md:text-[18px] text-[#faf6f1]/80 font-['Pretendard',sans-serif] font-light leading-[1.8]">
                        {activeLayerData.effect}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className="w-full bg-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[160px]">
            <FadeInUp>
              <div className="flex flex-col items-center text-center mb-[60px] md:mb-[100px]">
                <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Treatment
                </span>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.35]">
                  オールデプスリフティングを構成する<br /><span className="text-[#b8a99a]">4つの施術</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="flex gap-3 md:gap-6 mb-10 overflow-x-auto pb-2">
              {treatments.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTreatment(idx)}
                  className={`shrink-0 flex items-center gap-3 px-6 py-4 border transition-all duration-300 ${
                    activeTreatment === idx
                      ? "bg-[#1c1614] border-[#1c1614] text-white"
                      : "bg-white border-[#e8e5e0] text-[#6b5f58] hover:border-[#1c1614]"
                  }`}
                >
                  <span className="font-['Montserrat',sans-serif] text-[11px] tracking-[2px] opacity-60">{t.num}</span>
                  <span className="font-['Pretendard',sans-serif] text-[15px] font-medium">{t.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeT.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white"
              >
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <ImageWithFallback
                    src={activeT.img}
                    alt={activeT.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <p className="font-['Montserrat',sans-serif] text-[11px] tracking-[3px] text-[#b8a99a] uppercase mb-2">{activeT.num}</p>
                  <h3 className="text-[32px] md:text-[42px] text-[#1c1614] font-['Pretendard',sans-serif] font-light tracking-[-1px] mb-2">{activeT.title}</h3>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-[#b8a99a] tracking-[1px] mb-8">{activeT.subtitle}</p>
                  <p className="text-[16px] md:text-[18px] text-[#4a3f3a] leading-[1.9] mb-8 font-light">{activeT.desc}</p>
                  <ul className="flex flex-col gap-3 mb-10">
                    {activeT.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 w-[6px] h-[6px] rounded-full bg-[#b8a99a] mt-2" />
                        <span className="text-[15px] md:text-[16px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4 border-t border-[#e8e5e0] pt-8">
                    {[
                      { label: "施術時間", val: activeT.duration },
                      { label: "麻酔", val: activeT.anesthesia },
                      { label: "回復期間", val: activeT.recovery },
                      { label: "推奨/持続", val: activeT.maintenance },
                    ].map(info => (
                      <div key={info.label}>
                        <p className="text-[12px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[1px] uppercase mb-1">{info.label}</p>
                        <p className="text-[14px] md:text-[15px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium">{info.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full bg-[#201814] text-[#faf6f1]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="text-center mb-[60px] md:mb-[80px]">
                <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Process
                </span>
                <h2 className="text-[28px] md:text-[42px] text-white tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                  施術の流れ
                </h2>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-white/10">
              {processSteps.map((step, idx) => (
                <FadeInUp key={step.step} delay={idx * 0.1}>
                  <div className="bg-[#201814] p-8 md:p-10 flex flex-col gap-6 h-full">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20">
                      <step.icon className="w-5 h-5 text-[#b8a99a] stroke-[1]" />
                    </div>
                    <div>
                      <p className="font-['Montserrat',sans-serif] text-[11px] tracking-[3px] text-[#b8a99a] mb-3">{step.step}</p>
                      <h3 className="text-[20px] md:text-[24px] text-white font-['Pretendard',sans-serif] font-light mb-4">{step.title}</h3>
                      <p className="text-[15px] text-white/60 leading-[1.8] whitespace-pre-line">{step.desc}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* RECOMMEND */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="max-w-[900px] mx-auto">
                <div className="mb-[60px] md:mb-[80px]">
                  <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                    Recommendation
                  </span>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    こんな方にお勧めです
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {recommends.map((r, i) => (
                    <FadeInUp key={i} delay={i * 0.07}>
                      <div className="flex items-start gap-6 py-6 border-b border-[#e8e5e0]">
                        <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[2px] text-[#b8a99a] shrink-0 mt-0.5">0{i + 1}</span>
                        <p className="text-[18px] md:text-[22px] text-[#1c1614] font-['Pretendard',sans-serif] font-light leading-[1.5]">{r}</p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="mb-[60px] md:mb-[80px]">
                <span className="inline-block border border-[#b8a99a]/40 text-[#b8a99a] font-['Montserrat',sans-serif] font-medium text-[11px] tracking-[3px] uppercase px-5 py-[6px] mb-6">
                  Q&A
                </span>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                  よくある質問
                </h2>
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
                        <span className="font-['Montserrat',sans-serif] text-[18px] md:text-[20px] text-[#b8a99a] shrink-0 font-medium">Q.</span>
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
                        <ChevronDown className={`w-[24px] h-[24px] stroke-[1] transition-colors duration-300 ${openFaq === idx ? 'text-[#1c1614]' : 'text-[#b8a99a]'}`} />
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

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}
