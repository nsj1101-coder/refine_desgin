import TreatmentTemplate from "../../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

const jpLabels = {
  processTitle: "施術プロセス",
  recommendTitle: "こんな方にお勧め",
  faqTitle: "よくある質問",
  duration: "施術時間",
  anesthesia: "麻酔",
  recovery: "回復期間",
  maintenance: "持続期間",
};

export default function JpBodyContouringPage() {
  const treatments = [
    {
      id: "refine-bodycut",
      num: "01",
      title: "リファインボディカット",
      titleEn: "REFINE BODY CUT",
      subtitle: "Fat Dissolving Injection",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "REFINEオリジナルの脂肪溶解注射プロトコルで脂肪細胞膜を選択的に溶解しリンパ循環を促進して、ダイエットでは落ちない腹部・二の腕・太もも・二重あごなどの局所脂肪を効果的に分解・排出します。",
      desc: "",
      points: ["脂肪細胞の選択的分解・排出", "局所部位のボディラインの矯正", "リンパ循環の促進"],
      headline2: "こんな方にお勧めです。",
      details: [
        "ダイエットしても特定部位の肉が落ちない方",
        "腹部・二の腕・太ももなどのボディラインを整えたい方",
        "脂肪吸引なしで手軽な体型矯正をご希望の方",
        "二重あごや深部ほほで顔が大きく見える方",
      ],
      tags: ["Fat Dissolving", "Body Contouring", "Non-Surgical"],
      duration: "10分〜20分",
      anesthesia: "アイスクーリングまたはクリーム麻酔",
      recovery: "1〜3日でむくみが軽減",
      maintenance: "2〜4週間隔3回以上推奨",
    },
    {
      id: "onda",
      num: "02",
      title: "オンダ",
      titleEn: "ONDA",
      subtitle: "Microwave RF Technology",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "特許取得済みのマイクロ波（超短波）エネルギーを皮下脂肪層に集中させて不要な脂肪細胞を破壊し、同時に真皮層のコラーゲンを再生して脂肪減少と皮膚タイトニングを一度に実現します。",
      desc: "",
      points: ["脂肪細胞の選択的破壊", "コラーゲン再生による肌弾力改善", "痛みのない非侵襲的施術"],
      headline2: "こんな方にお勧めです。",
      details: [
        "腹部・太ももなど部分肥満と皮膚のたるみが同時に気になる方",
        "脂肪減少と皮膚弾力改善を一度にご希望の方",
        "痛みに敏感で快適なボディ施術をお探しの方",
        "手術なしでなめらかなボディラインを完成させたい方",
      ],
      tags: ["Fat Reduction", "Body Tightening", "Non-Invasive"],
      duration: "30分〜40分（部位により異なる）",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "3〜4週間隔3回推奨",
    },
    {
      id: "body-botox",
      num: "03",
      title: "ボディボトックス",
      titleEn: "BODY BOTOX",
      subtitle: "Botulinum Toxin Body Contouring",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "ボツリヌストキシンを発達した筋肉部位に注入して筋肉のボリュームを徐々に減少させ、ふくらはぎ・僧帽筋・肩などの凸凹した筋肉のラインをなめらかで女性らしいシルエットに矯正します。",
      desc: "",
      points: ["発達した筋肉のボリューム縮小", "なめらかなボディシルエット", "素早く手軽な施術"],
      headline2: "こんな方にお勧めです。",
      details: [
        "ふくらはぎの筋肉が発達して脚のラインが気になる方",
        "僧帽筋が発達して肩が広く見える方",
        "運動により特定部位の筋肉が過度に発達した方",
        "手術なしで自然なボディラインの矯正をご希望の方",
      ],
      tags: ["Calf Slimming", "Shoulder Line", "Muscle Contouring"],
      duration: "10分〜15分",
      anesthesia: "アイスクーリング",
      recovery: "即日日常生活可能",
      maintenance: "3〜6ヶ月間隔推奨",
    },
  ];

  const recommends = [
    "ダイエットしても特定部位の肉が落ちない方",
    "垂れ下がったお腹や二の腕に弾力を与えたい方",
    "凸凹したセルライトが気になる方",
    "二重あごや深部ほほで顔が大きく見える方",
    "手術や脂肪吸引なしでボディラインを矯正したい方",
  ];

  const processSteps = [
    { step: "01", title: "ボディ・輪郭分析", desc: "お悩み部位の脂肪量・皮膚弾力・\n筋肉の発達程度を精密測定します。", icon: ScanLine },
    { step: "02", title: "カスタムプラン策定", desc: "個人の体型と目標に合わせて\n最適な機器と用量を設計します。", icon: MessageCircle },
    { step: "03", title: "集中施術", desc: "脂肪破壊と弾力改善を目標に\n安全かつ精巧に施術します。", icon: Sparkles },
    { step: "04", title: "アフターケア", desc: "施術効果を高める水分摂取と\n食事・運動療法をご案内します。", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "施術後すぐに効果は現れますか？",
      a: "ボディオンダリフティングは即時のタイトニング効果を感じることができ、破壊された脂肪細胞が排出されるには約2〜4週間かかります。輪郭注射も薬剤が作用して脂肪が排出される1〜2週後からサイズ減少効果が現れます。",
    },
    {
      q: "輪郭注射施術後のむくみは激しいですか？",
      a: "注入された溶液によって施術直後にパンパンになるむくみが生じることがあります。これは脂肪分解成分が作用する自然な現象で、ほとんど1〜2日以内に尿として排出されながら素早く引きます。",
    },
    {
      q: "施術効果を高めるにはどうすればいいですか？",
      a: "破壊された脂肪がスムーズに体外へ排出できるよう、1日1.5〜2L以上の水分摂取をお勧めします。軽い有酸素運動を並行すると血液循環とリンパ循環が促進されてより素早い効果が期待できます。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Body Shape & Fat"
      pageDesc="なめらかなボディラインと弾力ある肌、隠れたあなたのラインを見つけます。"
      heroImg={subHeroImg}
      coreTitle="ボディコンタリングの核心原理"
      coreDesc={[
        "単に体重を減らすのを超えて、身体のバランスを整え凸凹した部位をなめらかに矯正する体型彫刻施術です。",
        "脂肪細胞のみを選択的に破壊または分解排出を誘導して、運動やダイエットでも落ちにくい局所部位の肉（二の腕・腹部・太ももなど）を効果的に減少させます。また脂肪が落ちた部位にコラーゲン再生を促進して皮膚がたるまずタイトに維持されるようサポートします。",
      ]}
      coreHighlight="外科的脂肪吸引が負担な方のために、REFINEは非侵襲的機器と安全な注射療法によるカスタムソリューションを提供します。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="ボディ＆輪郭施術の種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>自分にぴったりの<br className="md:hidden" /> ボディソリューションをご相談ください</>}
      ctaDesc="REFINEの精密体型分析で隠れたあなたのラインを見つけます。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
