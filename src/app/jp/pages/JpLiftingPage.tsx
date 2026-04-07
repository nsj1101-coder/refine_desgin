import TreatmentTemplate from "../../components/TreatmentTemplate";
import { MessageCircle, ScanLine, Sparkles, HeartPulse } from "lucide-react";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import liftingImg1 from "../../../assets/lifting1.png";
import liftingImg2 from "../../../assets/lifting2.png";
import liftingImg3 from "../../../assets/lifting3.png";
import liftingImg4 from "../../../assets/lifting4.png";

const jpLabels = {
  processTitle: "施術プロセス",
  recommendTitle: "こんな方にお勧め",
  faqTitle: "よくある質問",
  duration: "施術時間",
  anesthesia: "麻酔",
  recovery: "回復期間",
  maintenance: "持続期間",
};

export default function JpLiftingPage() {
  const treatments = [
    {
      id: "density",
      num: "01",
      title: "デンシティ",
      titleEn: "DENSITY",
      subtitle: "High-Intensity Focused Ultrasound",
      img: liftingImg1,
      headline: "高周波エネルギーを活用して真皮層のコラーゲン生成を活性化し、肌の弾力と肌質を即座に改善します。",
      desc: "",
      points: ["真皮層コラーゲン活性化", "タイトニング効果", "肌質・毛穴改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "肌の弾力低下・たるみが気になる方",
        "小じわや肌質改善をご希望の方",
        "コラーゲン生成で肌密度を高めたい方",
        "ダウンタイムなしでリフティング効果をご希望の方",
      ],
      tags: ["Skin Tightening", "Contouring", "Texture Improvement"],
      duration: "30分〜40分",
      anesthesia: "クリーム麻酔",
      recovery: "即日日常生活可能",
      maintenance: "6ヶ月〜1年",
    },
    {
      id: "onda",
      num: "02",
      title: "オンダ",
      titleEn: "ONDA",
      subtitle: "Microwave RF Technology",
      img: liftingImg2,
      headline: "特許取得済みのマイクロ波（超短波）エネルギーで表皮を傷つけることなく脂肪層を減少させ、真皮層のコラーゲンをリモデリングします。",
      desc: "",
      points: ["脂肪減少・輪郭改善", "痛みを最小化した施術", "コラーゲンリモデリング"],
      headline2: "こんな方にお勧めです。",
      details: [
        "二重あご・ほほ肉など顔の輪郭が気になる方",
        "痛みに敏感でリラックスした施術をご希望の方",
        "脂肪減少と弾力改善を同時にご希望の方",
        "非侵襲的な輪郭タイトニングをお探しの方",
      ],
      tags: ["Slimming", "Contouring", "Immediate Tightening"],
      duration: "20分〜30分",
      anesthesia: "不要（ほぼ痛みなし）",
      recovery: "即日日常生活可能",
      maintenance: "6ヶ月〜1年",
    },
    {
      id: "shurink",
      num: "03",
      title: "シュリンク",
      titleEn: "SHURINK",
      subtitle: "Focused Ultrasound",
      img: liftingImg3,
      headline: "高強度集束超音波（HIFU）エネルギーを皮膚の最も深い筋膜層（SMAS）まで届け、手術なしでも強力なリフティング効果をもたらします。",
      desc: "",
      points: ["筋膜層（SMAS）ターゲティング", "即時Vラインリフティング", "コラーゲン新生誘導"],
      headline2: "こんな方にお勧めです。",
      details: [
        "ほほやあごのラインがたるんで疲れた印象になっている方",
        "手術なしで強力なリフティング効果をご希望の方",
        "重力によって崩れた顔の輪郭を改善したい方",
        "結婚式やイベントなど大切な日程の前にケアが必要な方",
      ],
      tags: ["V-Line Lifting", "Core Firming", "Customized Tightening"],
      duration: "15分〜20分",
      anesthesia: "クリーム麻酔",
      recovery: "即日日常生活可能",
      maintenance: "3ヶ月〜6ヶ月",
    },
    {
      id: "potenza",
      num: "04",
      title: "ポテンザ",
      titleEn: "POTENZA",
      subtitle: "Microneedling RF",
      img: liftingImg4,
      headline: "マイクロニードル（微細針）を通して真皮層に高周波（RF）エネルギーを直接届け、毛穴・瘢痕を改善しコラーゲン生成を誘導します。",
      desc: "",
      points: ["毛穴縮小・瘢痕改善", "コラーゲン生成促進", "肌質・弾力回復"],
      headline2: "こんな方にお勧めです。",
      details: [
        "広がった毛穴やニキビ跡が気になる方",
        "肌質と肌トーンを同時に改善したい方",
        "コラーゲンブースティングで弾力を取り戻したい方",
        "オーダーメイドの肌再生施術をご希望の方",
      ],
      tags: ["Pore & Scar Refining", "Tone & Texture Improvement", "Booster Synergy"],
      duration: "30分〜40分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日",
      maintenance: "6ヶ月〜1年",
    },
  ];

  const recommends = [
    "ほほやあごのラインがたるんで疲れた印象になっている方",
    "実年齢より老けて見えると言われる方",
    "弾力が落ちてしわが深くなってきた方",
    "手術なしで自然なリフティング効果をご希望の方",
    "結婚式やイベントなど大切な日程の前にケアが必要な方",
  ];

  const processSteps = [
    { step: "01", title: "精密診断", desc: "皮膚の層ごとの状態を分析し\n施術の深さと強度を決定します", icon: ScanLine },
    { step: "02", title: "1:1カスタム相談", desc: "肌の状態とお悩みを把握し\n最適な施術をデザインします", icon: MessageCircle },
    { step: "03", title: "カスタム施術", desc: "個人別カスタムプロトコルで\n精巧に施術を行います", icon: Sparkles },
    { step: "04", title: "アフターケア", desc: "施術後の経過をチェックし\n最適なメンテナンス方法をご案内します", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "リフティング施術後すぐに日常生活に戻れますか？",
      a: "はい、ほとんどのリフティング施術は非侵襲的なため、施術直後から日常生活が可能です。軽い赤みやむくみが出ることがありますが、通常数時間以内に自然と落ち着きます。軽いメイクも施術直後からお使いいただけます。",
    },
    {
      q: "効果はいつから現れ、どのくらい持続しますか？",
      a: "施術直後でも即時のタイトニング効果を感じていただけます。コラーゲンリモデリングが進行するにつれて2〜4週間かけて徐々に改善されます。施術の種類によって6ヶ月〜1年間効果が持続し、定期的なケアでさらに長く維持できます。",
    },
    {
      q: "施術中の痛みはどの程度ですか？",
      a: "クリーム麻酔を使用するため、ほとんどの方が快適に施術を受けていただけます。オンダの場合は麻酔なしでも施術できるほど痛みがほとんどなく、シュリンクやポテンザも個人差はありますが我慢できる程度のチクチク感です。",
    },
    {
      q: "施術後に注意すべきことはありますか？",
      a: "施術後3日間はぬるま湯で洗顔し、日焼け止めを必ず塗ってください。2〜3日間の飲酒・喫煙・サウナ・スチームバスはお控えください。まれに感覚が鈍くなったり頭痛が起きることがありますが、時間とともに自然に改善されます。",
    },
    {
      q: "どのリフティング施術が自分に合うか、どうすれば分かりますか？",
      a: "肌の状態・老化の程度・ご希望の改善部位によって最適な施術が異なります。REFINEでは1:1カスタム相談を通じて、お客様に最も適した施術をデザインしております。お気軽にご相談ください。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Lifting"
      pageDesc="自然な輪郭と弾力ある肌を精巧な施術で取り戻します。"
      heroImg={subHeroImg}
      coreTitle="リフティングの核心原理"
      coreDesc={[
        "リフティング施術は、皮膚内のコラーゲンとエラスチンの再生を促進し、崩れたフェイスラインを復元して自然な弾力を取り戻す非侵襲的アンチエイジングソリューションです。",
        "高周波・超音波・マイクロニードルRFなど様々なエネルギーを活用し、真皮層からSMAS筋膜層まで深さ別にカスタム施術が可能で、切開なしでも手術に匹敵するリフティング効果が期待できます。",
      ]}
      coreHighlight="REFINEは個人ごとに異なる皮膚老化パターンと骨格構造を考慮し、最適なリフティングプロトコルをデザインします。"
      coreImg="https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="リフティングプログラム"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>1:1カスタム相談で<br className="md:hidden" /> 最適なリフティングを見つけましょう</>}
      ctaDesc="精密診断により、お肌の状態に最も適したリフティングプロトコルをデザインします。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
