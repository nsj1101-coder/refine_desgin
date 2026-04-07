import TreatmentTemplate from "../../components/TreatmentTemplate";
import { Leaf, ScanFace, Droplets, HeartPulse } from "lucide-react";
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

export default function JpSkincarePage() {
  const treatments = [
    {
      id: "larapeel",
      num: "01",
      title: "ラーラピール",
      titleEn: "LARA PEEL",
      subtitle: "Multi-Acid Peeling System",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "複合酸（Multi-Acid）成分が皮膚表面の古い角質と毛穴内の老廃物を優しく溶解し、同時に皮膚再生因子を供給してなめらかで明るい肌質に改善するプレミアムピーリングです。",
      desc: "",
      points: ["古い角質・老廃物の除去", "皮膚再生因子の同時供給", "なめらかな肌質の完成"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌がざらついてくすんで肌質改善が必要な方",
        "黒ずみや古い角質が繰り返し蓄積する方",
        "大切な日程の前に明るく清潔な肌をご希望の方",
        "刺激なく継続的なピーリングケアをご希望の方",
      ],
      tags: ["Peeling", "Skin Texture", "Pore Care"],
      duration: "20分〜30分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "2〜4週間隔推奨",
    },
    {
      id: "rosepeel",
      num: "02",
      title: "ローズピール",
      titleEn: "ROSE PEEL",
      subtitle: "Rose Extract Peeling",
      img: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "バラ幹細胞抽出物と低刺激ピーリング成分を組み合わせて敏感肌にも安全に角質を除去し、肌の鎮静と保湿、トーンアップ効果を同時にもたらすプレミアム鎮静ピーリングです。",
      desc: "",
      points: ["敏感肌にも安全な低刺激ピーリング", "バラ幹細胞鎮静効果", "保湿・トーンアップ同時改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌が敏感で通常のピーリングが負担な方",
        "角質除去と肌の鎮静を同時にご希望の方",
        "肌トーンがくすんでツヤがない方",
        "施術後に赤みなしですぐに日常生活に戻りたい方",
      ],
      tags: ["Gentle Peeling", "Soothing", "Brightening"],
      duration: "20分〜30分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "2〜4週間隔推奨",
    },
    {
      id: "diasono",
      num: "03",
      title: "ダイアソノ",
      titleEn: "DIASONO",
      subtitle: "Diamond Peeling + Ultrasound",
      img: "https://images.unsplash.com/photo-1670201203150-bf8771401590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "ダイヤモンドチップで皮膚表面の角質と老廃物を物理的に精密除去した後、超音波エネルギーで栄養成分を真皮層まで深く浸透させる複合スキンケアです。",
      desc: "",
      points: ["ダイヤモンドチップ物理的角質除去", "超音波栄養成分浸透", "毛穴・肌質同時改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "メイクのりが悪く肌質が凸凹している方",
        "毛穴が広がり肌がざらついてきた方",
        "深い栄養補給と角質除去を同時にご希望の方",
        "レーザー施術の前後で肌コンディションを高めたい方",
      ],
      tags: ["Diamond Peeling", "Ultrasound", "Nutrition Delivery"],
      duration: "30分〜40分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "2〜3週間隔推奨",
    },
    {
      id: "facela",
      num: "04",
      title: "ファセラ",
      titleEn: "FACELA",
      subtitle: "LED + Micro-current Therapy",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "LED光線と微弱電流を同時に照射して皮膚細胞のエネルギー代謝を活性化し、コラーゲン合成促進と皮膚鎮静を通じて肌本来の健康さと輝きを取り戻すアンチエイジングケアです。",
      desc: "",
      points: ["LED光線による細胞活性化", "微弱電流によるコラーゲン促進", "皮膚鎮静・光沢付与"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌がくすんで生気がなく見える方",
        "ストレスや疲れで肌コンディションが落ちている方",
        "アンチエイジングと肌鎮静を同時にご希望の方",
        "リラックスしながら受けられるプレミアムヒーリングケアをお探しの方",
      ],
      tags: ["LED Therapy", "Anti-Aging", "Skin Vitality"],
      duration: "20分〜30分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "1〜2週間隔推奨",
    },
  ];

  const recommends = [
    "肌が敏感でレーザー施術が負担な方",
    "大切な日程の前に明るく輝く光沢肌をご希望の方",
    "どんなに良いスキンケアを使っても内部乾燥が解決しない方",
    "過剰な皮脂と黒ずみで毛穴が詰まってお悩みの方",
    "皮膚科のレーザー施術後の素早い再生と鎮静が必要な方",
  ];

  const processSteps = [
    { step: "01", title: "精密診断", desc: "現在の肌の水分・油分バランスと\nバリア状態をしっかり把握します。", icon: ScanFace },
    { step: "02", title: "カスタムソリューション", desc: "診断結果を基に\n最も必要なケアプログラムを構成します。", icon: Droplets },
    { step: "03", title: "プレミアムケア", desc: "医療スタッフの処方に従いケアスタッフが\n精巧で快適にケアを行います。", icon: HeartPulse },
    { step: "04", title: "仕上げケア", desc: "肌が刺激を受けないよう\nモデリングパックなどで優しく鎮静させます。", icon: Leaf },
  ];

  const faqs = [
    {
      q: "メディカルスキンケアは一般エステとどう違うのですか？",
      a: "一般エステはスキンケアを使った表面的なケアにとどまりますが、メディカルスキンケアは皮膚科専用機器と高濃縮医療用ソリューションを使用して真皮層まで有効成分を届けます。そのためより根本的で確実な肌改善効果が期待できます。",
    },
    {
      q: "レーザー施術とスキンケアを同じ日に受けても大丈夫ですか？",
      a: "はい、可能です。むしろレーザー施術後にクライオセルやLDMケアを並行すると肌の熱感を素早く鎮静させ再生を促進してシナジー効果を高めることができます。",
    },
    {
      q: "アクアピール後すぐにメイクはできますか？",
      a: "はい、アクアピールは肌に負担をかけない低刺激ピーリングのため施術直後からすぐに洗顔とメイクが可能です。大切な約束の当日に受けていただいてもメイクのりが良くなる効果が期待できます。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Premium Skin Care"
      pageDesc="疲れた肌に深い休息を、根本的な健康さを満たすメディカルスキンケア"
      heroImg={subHeroImg}
      coreTitle="プレミアムスキンケアの核心原理"
      coreDesc={[
        "健康な肌の基本は水分・油分バランスの維持と丈夫な皮膚バリアです。",
        "REFINEのプレミアムスキンケアは単に肌の表面だけをケアするものではありません。科学的に検証されたメディカル機器とプレミアムアンプルを使用して皮膚の深い真皮層まで有効成分を直接浸透させ、細胞本来の自生力を引き出して外部刺激にも揺らがない健康な肌の土台を作ります。",
      ]}
      coreHighlight="お一人お一人の肌コンディションは毎日変わります。ご来院時の肌の状態に合った最適なカスタムソリューションをお試しください。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="スキンケアプログラム"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>自分の肌にぴったりの<br className="md:hidden" /> カスタムスキンケアを始めましょう</>}
      ctaDesc="肌状態の精密診断を通じて最も効果的なソリューションをご提案します。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
