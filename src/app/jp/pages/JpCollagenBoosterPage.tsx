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

export default function JpCollagenBoosterPage() {
  const treatments = [
    {
      id: "juvelook-volume",
      num: "01",
      title: "ジュベルックボリューム",
      titleEn: "JUVELOOK VOLUME",
      subtitle: "High-Concentration PDLLA + HA",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "高濃縮PDLLAとヒアルロン酸を組み合わせて強力な自家コラーゲン生成を誘導し、凹んだほほ・こめかみ・ほうれい線などに自然なボリュームを補うプレミアムコラーゲンブースターです。",
      desc: "",
      points: ["高濃縮コラーゲン生成誘導", "自然なフルフェイスボリューム", "肌質・小じわ同時改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "顔肉が落ちてほほやこめかみが凹んでいる方",
        "人工的なフィラーより自然なボリューム感をご希望の方",
        "ほうれい線が深くなり肌の弾力が落ちている方",
        "長く持続する自然なアンチエイジングをご希望の方",
      ],
      tags: ["Collagen Induction", "Natural Volume", "Full-Face Rejuvenation"],
      duration: "20分〜30分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日で赤みと軽いむくみが軽減",
      maintenance: "4週間隔3回施術で1年以上",
    },
    {
      id: "radiesse",
      num: "02",
      title: "レディエス",
      titleEn: "RADIESSE",
      subtitle: "Calcium Hydroxylapatite (CaHA)",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "カルシウムハイドロキシアパタイト（CaHA）微粒子が真皮層と皮下組織に即時のボリュームを提供しながら、周辺の線維芽細胞を刺激して自家コラーゲン生成を長期的に促進するデュアルアクションコラーゲンブースターです。",
      desc: "",
      points: ["即時ボリューム＋コラーゲン生成同時効果", "FDA承認CaHA成分", "最大18ヶ月長期持続"],
      headline2: "こんな方にお勧めです。",
      details: [
        "即時のボリューム感と長期的なコラーゲン効果を同時にご希望の方",
        "手の甲・首など体の部位の弾力とボリュームが減少した方",
        "深いほうれい線やマリオネットラインが気になる方",
        "検証済みのFDA承認製品で安全な施術をご希望の方",
      ],
      tags: ["Dual Action", "Long-Lasting Volume", "FDA Approved"],
      duration: "20分〜30分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日で軽いむくみが軽減",
      maintenance: "12〜18ヶ月持続",
    },
  ];

  const recommends = [
    "顔肉が落ちてほほやこめかみがすっかり凹んでいる方",
    "人工的なフィラーより自然なボリュームをご希望の方",
    "小じわが多く肌の弾力が全体的に落ちている方",
    "ニキビ跡や広がった毛穴の改善が必要な方",
    "長く持続するアンチエイジング効果をご希望の方",
  ];

  const processSteps = [
    { step: "01", title: "立体診断", desc: "凹んだ部位としわの深さ、\n顔の全体的な輪郭を分析します。", icon: ScanLine },
    { step: "02", title: "デザイン・用量設計", desc: "個人別のお悩み部位に合わせて\n正確な注入用量と位置をデザインします。", icon: MessageCircle },
    { step: "03", title: "安全な施術", desc: "カニューレを使用して痛みとあざを\n最小化しながら精巧に注入します。", icon: Sparkles },
    { step: "04", title: "アフターケア案内", desc: "施術結果の最大化と結節予防のための\nカスタムマッサージ方法をご案内します。", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "通常のフィラーとコラーゲンブースターの違いは何ですか？",
      a: "ヒアルロン酸フィラーは注入直後にボリュームを補うのに対し、コラーゲンブースターは皮膚自身がコラーゲンを生成するように誘導して時間が経つほどボリュームが徐々に増す方式です。違和感なくずっと自然で長期間持続するのが特徴です。",
    },
    {
      q: "効果はいつから現れますか？",
      a: "コラーゲン生成が行われる期間が必要なため、通常施術後4〜6週後からボリューム感と弾力が改善されるのを徐々に感じていただけます。",
    },
    {
      q: "スカルプトラの5-5-5マッサージとは何ですか？",
      a: "結節（固まり現象）を予防し成分が均一に広がるようにするために、施術後5日間、1日5回、1回あたり5分間該当部位を優しくマッサージする方法です。施術後に詳しくご案内します。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Collagen Booster"
      pageDesc="時間が経つほど満ちてくる自然なボリューム、あなただけの美しさを目覚めさせましょう。"
      heroImg={subHeroImg}
      coreTitle="コラーゲンブースターの核心原理"
      coreDesc={[
        "老化によって失われた皮膚コラーゲンを人工的な物質ではなく、自分の体の自家コラーゲンで補う施術です。",
        "生分解性高分子物質（PLA）を真皮層と皮下組織に注入して線維芽細胞を刺激しコラーゲン生成を誘導します。ボリューム減少が著しいほほ・ほうれい線・こめかみなどを自然に改善し、皮膚全般の厚みと弾力を増加させて生き生きとした若々しい顔を完成させます。",
      ]}
      coreHighlight="細かな用量調節と注入スキルが必須の施術だからこそ、REFINEの熟練した医療スタッフが1:1カスタムデザインで安全に施術します。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="コラーゲンブースターの種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>自然に満ちてくる<br className="md:hidden" /> 弾力とボリュームを体験しましょう</>}
      ctaDesc="REFINEのノウハウが詰まったデザイン施術で立体的な美しさをお届けします。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
