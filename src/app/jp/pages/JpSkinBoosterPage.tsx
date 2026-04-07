import TreatmentTemplate from "../../components/TreatmentTemplate";
import { Sparkles, MessageCircle, ScanLine, HeartPulse } from "lucide-react";
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

export default function JpSkinBoosterPage() {
  const treatments = [
    {
      id: "revive",
      num: "01",
      title: "リバイブ",
      titleEn: "REVIVE",
      subtitle: "Exosome + Growth Factor",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "幹細胞由来エクソソームと成長因子を皮膚に直接届け、損傷した細胞の再生能力を最大化し、皮膚バリアを強化して根本的な肌環境改善とアンチエイジング効果を実現します。",
      desc: "",
      points: ["細胞再生能力の最大化", "皮膚バリア強化", "強力な抗炎症・鎮静効果"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌が薄くなり弾力が急激に落ちている方",
        "皮膚バリアが弱く外部刺激に敏感な方",
        "レーザー施術後の素早い再生・回復をご希望の方",
        "最新の再生治療で肌を根本的に改善したい方",
      ],
      tags: ["Cell Regeneration", "Barrier Repair", "Anti-Aging"],
      duration: "15分〜20分",
      anesthesia: "クリーム麻酔",
      recovery: "ほぼなし",
      maintenance: "3〜4週間隔3回推奨",
    },
    {
      id: "juvelook",
      num: "02",
      title: "ジュベルック",
      titleEn: "JUVELOOK",
      subtitle: "PDLLA + HA",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "高分子PDLLAとヒアルロン酸を組み合わせて真皮層に自家コラーゲン生成を誘導し、肌質と小じわ改善はもちろん凹んだボリュームを自然に補う次世代スキンブースターです。",
      desc: "",
      points: ["自家コラーゲン生成誘導", "自然なボリューム回復", "肌質・小じわ改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "顔肉が落ちてほほが凹み始めている方",
        "人工的なフィラーより自然なボリューム感をご希望の方",
        "小じわが増え肌の弾力が落ちている方",
        "長く持続するアンチエイジング効果をご希望の方",
      ],
      tags: ["Collagen Induction", "Natural Volume", "Skin Texture"],
      duration: "20分〜30分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日で赤みと軽いむくみが軽減",
      maintenance: "4週間隔3回施術で1年以上",
    },
    {
      id: "rejuran",
      num: "03",
      title: "リジュラン",
      titleEn: "REJURAN",
      subtitle: "Polynucleotide (PN)",
      img: "https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "サーモン由来のポリヌクレオチド（PN）成分を真皮層に直接投与し、損傷した皮膚構造を復元、コラーゲンとエラスチン生成を促進して肌本来の弾力と再生力を高めます。",
      desc: "",
      points: ["皮膚自生力回復", "コラーゲン・エラスチン促進", "水分・油分バランス正常化"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌が薄くなり小じわが増えている方",
        "内部乾燥が激しくスキンケアだけでは解決できない方",
        "肌の弾力が落ちて全般的な再生が必要な方",
        "根本的な肌体質改善をご希望の方",
      ],
      tags: ["Skin Healing", "Hydration Balance", "Regeneration"],
      duration: "15分〜20分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日でエンボッシングが軽減",
      maintenance: "2〜3週間隔3回推奨",
    },
    {
      id: "ha",
      num: "04",
      title: "ヒアルロン酸",
      titleEn: "HYALURONIC ACID",
      subtitle: "HA Skin Booster",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "非架橋ヒアルロン酸を真皮層に直接注入して肌の奥から深い水分を満たし、乾燥してパサついた肌に即時のツヤと弾力を与える基本保湿ブースターです。",
      desc: "",
      points: ["真皮層への深い水分補給", "即時のツヤと光沢", "肌トーンの均一化"],
      headline2: "こんな方にお勧めです。",
      details: [
        "内部乾燥が激しく肌がパサついている方",
        "メイクのりが悪く肌にツヤがない方",
        "軽くて負担のない保湿施術をお探しの方",
        "他の施術と組み合わせて肌コンディションを高めたい方",
      ],
      tags: ["Deep Hydration", "Glow Skin", "Moisture Boost"],
      duration: "15分〜20分",
      anesthesia: "クリーム麻酔",
      recovery: "ほぼなし（即日日常生活可能）",
      maintenance: "2週間隔3〜5回推奨",
    },
  ];

  const recommends = [
    "肌が薄くなり小じわが増えてお悩みの方",
    "内部乾燥が激しくどのスキンケアを使っても乾燥する方",
    "肌トーンがくすんでツヤがないように見える方",
    "炎症性ニキビや頻繁なトラブルでお悩みの方",
    "自然で健康な肌本来の美しさを取り戻したい方",
  ];

  const processSteps = [
    { step: "01", title: "1:1カスタム診断", desc: "現在の肌の水分量と弾力、\nお悩みを詳しく分析します。", icon: MessageCircle },
    { step: "02", title: "製品設計", desc: "分析結果を基に\n最適なブースターを選択します。", icon: ScanLine },
    { step: "03", title: "精巧な注入", desc: "必要な真皮層の深さに合わせて\n均一に成分を届けます。", icon: Sparkles },
    { step: "04", title: "鎮静・ケア", desc: "施術直後に皮膚鎮静パックで\n回復をサポートしケア方法をご案内します。", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "施術中の痛みは強いですか？",
      a: "注射施術の特性上、軽いチクチク感が生じることがあります。しかし施術前に十分なクリーム麻酔を行い、痛みが心配な方のために様々な冷却機器と無痛インジェクターを活用して不快感を最小化します。",
    },
    {
      q: "エンボッシング現象（凸凹）はどのくらい続きますか？",
      a: "リジュランヒーラーなど粘性が高い製品は施術直後に皮膚表面が虫刺されのように盛り上がるエンボッシング現象が生じます。これは薬剤が真皮層にうまく注入されたサインであり、通常1〜3日以内に自然に吸収されて消えます。",
    },
    {
      q: "1回の施術でも効果はありますか？",
      a: "1回の施術でも肌の内部乾燥の改善と一時的なツヤを感じることができますが、スキンブースターは肌細胞の根本的な環境を改善する施術なので、2〜4週間隔で3回以上継続してお受けになることをお勧めします。",
    },
    {
      q: "他のレーザー施術と一緒に受けても大丈夫ですか？",
      a: "はい、一緒に受けるとシナジー効果が期待できます。例えばリフティングレーザーで弾力を整えてスキンブースターで保湿と再生を加えると、肌質・肌トーン・弾力まで複合的に改善される素晴らしい効果が得られます。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Skin Booster"
      pageDesc="皮膚の奥から満たす水分と栄養、明るく透明な肌を完成させます。"
      heroImg={subHeroImg}
      coreTitle="スキンブースターの核心原理"
      coreDesc={[
        "スキンケアだけでは届かない皮膚の奥深い真皮層に直接有効成分を届けて皮膚の自生力を育てる施術です。",
        "単に表面を一時的に潤わせるのではなく、コラーゲン生成を促進し損傷した皮膚細胞を復元して根本的な肌環境を健康に改善します。内部乾燥の解消はもちろん小じわ・肌質・肌トーンまで全般的なアンチエイジング効果が期待できます。",
      ]}
      coreHighlight="REFINEは個人ごとに異なる肌タイプとお悩みに合わせて、保湿・再生・美白など最適なスキンブースターアンプルを処方します。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="スキンブースターの種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>1:1カスタム相談で<br className="md:hidden" /> 最適なスキンブースターを見つけましょう</>}
      ctaDesc="精密診断により、お肌のコンディションに最も適したアンプルを処方します。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
