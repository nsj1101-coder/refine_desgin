import TreatmentTemplate from "../../components/TreatmentTemplate";
import { Leaf, ScanFace, Sparkles, HeartPulse } from "lucide-react";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import subHeroImg from "figma:asset/4f34b6a82ff29bde3522fba076b7670ae8399354.png";

const jpLabels = {
  processTitle: "施術プロセス",
  recommendTitle: "こんな方にお勧め",
  faqTitle: "よくある質問",
  duration: "施術時間",
  anesthesia: "麻酔",
  recovery: "回復期間",
  maintenance: "持続期間",
};

export default function JpPigmentationPage() {
  const treatments = [
    {
      id: "hollywood",
      num: "01",
      title: "ハリウッドスペクトラ",
      titleEn: "HOLLYWOOD SPECTRA",
      subtitle: "Nd:YAG Dual Wavelength Laser",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "532nmと1064nmのデュアル波長Nd:YAGレーザーで表皮から真皮まで深さ別に色素を精密にターゲティングし、肝斑・そばかす・シミはもちろん肌トーンと肌質まで複合的に改善するプレミアム色素レーザーです。",
      desc: "",
      points: ["デュアル波長深さ別色素ターゲティング", "肝斑・そばかす・シミ複合改善", "肌トーン・肌質同時改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肝斑・そばかす・シミなど様々な色素が複合的にある方",
        "繰り返しの色素治療でも効果が不十分だった方",
        "肌トーンを全体的に明るく均一に改善したい方",
        "色素治療と肌質改善を同時にご希望の方",
      ],
      tags: ["Melasma", "Freckles", "Skin Brightening"],
      duration: "15分〜20分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "1〜2週間隔10回以上推奨",
    },
    {
      id: "clarity",
      num: "02",
      title: "クラリティ",
      titleEn: "CLARITY",
      subtitle: "Long-Pulsed Alexandrite & Nd:YAG Laser",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "755nmアレキサンドライトと1064nm Nd:YAGデュアル波長を搭載し、メラニン色素と拡張した血管を同時に治療、顔面紅潮・毛細血管拡張症から色素疾患まで幅広く対応する複合皮膚レーザーです。",
      desc: "",
      points: ["色素と血管疾患の同時治療", "顔面紅潮・毛細血管拡張症改善", "広いスポットで素早く均一な施術"],
      headline2: "こんな方にお勧めです。",
      details: [
        "温度変化や感情変化で顔が赤くなりやすい方",
        "鼻やほほ周辺に毛細血管が透けている方",
        "色素と紅潮が同時に現れ複合治療が必要な方",
        "ダウンタイムなしで快適なレーザー治療をご希望の方",
      ],
      tags: ["Redness", "Vascular Lesion", "Dual Wavelength"],
      duration: "15分〜20分",
      anesthesia: "不要（冷却システム搭載）",
      recovery: "即日日常生活可能",
      maintenance: "2〜4週間隔3〜5回推奨",
    },
  ];

  const recommends = [
    "顔全体に広がった肝斑・そばかす・シミが気になる方",
    "温度変化や感情変化で顔が赤くなりやすい方（紅潮）",
    "ニキビ跡が赤くくすんだシミとして残っている方",
    "全体的な肌トーンがくすんで暗く、明るくしたい方",
    "複数回レーザー治療を受けても肝斑が再発した方",
  ];

  const processSteps = [
    { step: "01", title: "肌精密診断", desc: "マークビュー皮膚診断機で表皮と\n真皮の奥に隠れた色素まで分析します。", icon: ScanFace },
    { step: "02", title: "治療プラン策定", desc: "色素の種類と深さに応じて\n最適なレーザー機器を組み合わせます。", icon: Sparkles },
    { step: "03", title: "カスタムレーザー治療", desc: "周辺の正常組織を傷つけずに\nターゲット色素のみを精巧に破壊します。", icon: HeartPulse },
    { step: "04", title: "ホワイトニングケア", desc: "レーザー後のビタミン投与など\n鎮静と美白をサポートするアフターケアを行います。", icon: Leaf },
  ];

  const faqs = [
    {
      q: "レーザートーニングは1回だけで明るくなりますか？",
      a: "色素治療は短期間に強いエネルギーで治療すると、かえって色素が濃くなる副作用が生じることがあります。弱いエネルギーで色素を少しずつ細かく砕いて排出させるプロセスが必要なため、週1〜2回のペースで10回以上継続的に治療されることをお勧めします。",
    },
    {
      q: "肝斑治療を受ければ肝斑は完治しますか？",
      a: "肝斑は女性ホルモン・紫外線・ストレスなど様々な要因で発生するため、「完治」よりも「管理」という概念でアプローチする必要があります。レーザー治療で薄くした後、日焼け止めとスキンケアで継続的に維持することが重要です。",
    },
    {
      q: "レーザー治療後に洗顔やメイクはできますか？",
      a: "トーニングレーザーなどは皮膚表面に傷をつけないため、施術直後から洗顔とメイクが可能です。ただし特定のシミ除去レーザーでは微細なかさぶたが生じることがありますが、メイクでカバー可能です。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Brightening & Redness"
      pageDesc="くすんだ肌色や斑点のある色素、透明で明るい肌へと蘇らせます。"
      heroImg={subHeroImg}
      coreTitle="色素・紅潮治療の核心原理"
      coreDesc={[
        "色素疾患は肝斑・そばかす・シミ・黒子など種類が多様で、メラニン色素が分布する深さも表皮から真皮まで様々です。",
        "そのため単一のレーザーだけでは完璧な治療が難しいです。REFINEは波長と透過深度が異なる複数のプレミアムレーザーを複合的に使用し、皮膚表面の浅い色素から深部に根付いた難治性の肝斑、そして紅潮を引き起こす拡張した血管まで正確にターゲティングして破壊します。",
      ]}
      coreHighlight="単に見える色素を消すだけでなく、皮膚の真皮層の環境を健康に改善し、色素が再生するのを予防します。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="色素・紅潮施術の種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>隠れた本来の明るい肌を<br className="md:hidden" /> 取り戻しましょう</>}
      ctaDesc="正確な診断と複合レーザー治療で透明な肌をお届けします。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
