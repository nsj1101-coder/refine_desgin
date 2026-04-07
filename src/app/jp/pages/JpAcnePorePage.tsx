import TreatmentTemplate from "../../components/TreatmentTemplate";
import { Leaf, ScanFace, Syringe, HeartPulse } from "lucide-react";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import subHeroImg from "figma:asset/893cd708452e1b0c7059f6e9f42508951216f01b.png";

const jpLabels = {
  processTitle: "施術プロセス",
  recommendTitle: "こんな方にお勧め",
  faqTitle: "よくある質問",
  duration: "施術時間",
  anesthesia: "麻酔",
  recovery: "回復期間",
  maintenance: "持続期間",
};

export default function JpAcnePorePage() {
  const treatments = [
    {
      id: "potenza",
      num: "01",
      title: "ポテンザ",
      titleEn: "POTENZA",
      subtitle: "Microneedling RF",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "マイクロニードル（微細針）を通して真皮層に高周波（RF）エネルギーを直接届け、広がった毛穴やニキビ跡を改善し、コラーゲン生成を誘導して肌本来の健康さと弾力を取り戻します。",
      desc: "",
      points: ["毛穴縮小・瘢痕改善", "コラーゲン生成促進", "肌質・弾力回復"],
      headline2: "こんな方にお勧めです。",
      details: [
        "広がった毛穴やニキビ跡が気になる方",
        "肌質と肌トーンを同時に改善したい方",
        "コラーゲンブースティングで弾力を取り戻したい方",
        "オーダーメイドの肌再生施術をご希望の方",
      ],
      tags: ["Pore & Scar Refining", "Collagen Boost", "Skin Rejuvenation"],
      duration: "30分〜40分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日",
      maintenance: "3〜4週間隔3回以上推奨",
    },
    {
      id: "hollywood",
      num: "02",
      title: "ハリウッドスペクトラ",
      titleEn: "HOLLYWOOD SPECTRA",
      subtitle: "Nd:YAG Dual Wavelength Laser",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "532nmと1064nmのデュアル波長Nd:YAGレーザーで毛穴内の皮脂と角質を除去し、真皮層のコラーゲンリモデリングを誘導して広がった毛穴を引き締める毛穴専用レーザーです。",
      desc: "",
      points: ["毛穴内皮脂・角質除去", "コラーゲンリモデリングで毛穴縮小", "肌トーン・肌質同時改善"],
      headline2: "こんな方にお勧めです。",
      details: [
        "縦に伸びた毛穴が気になる方",
        "過剰な皮脂分泌で毛穴が詰まりやすい方",
        "ニキビ跡と毛穴を同時に改善したい方",
        "ダウンタイムなしで継続的な毛穴ケアをご希望の方",
      ],
      tags: ["Pore Minimizing", "Skin Texture", "Brightening"],
      duration: "15分〜20分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "1〜2週間隔10回以上推奨",
    },
    {
      id: "juvelook",
      num: "03",
      title: "ジュベルック",
      titleEn: "JUVELOOK",
      subtitle: "PDLLA + HA Skin Booster",
      img: "https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "高分子PDLLAとヒアルロン酸を真皮層に注入して自家コラーゲン生成を誘導し、広がった毛穴や凹んだ瘢痕の周辺に新しいコラーゲンが充填されることで肌質をなめらかに改善します。",
      desc: "",
      points: ["自家コラーゲンで毛穴・瘢痕充填", "肌質・弾力改善", "自然なボリューム回復"],
      headline2: "こんな方にお勧めです。",
      details: [
        "ニキビ跡が深く凹んで気になる方",
        "毛穴が広がり肌質がざらついてきた方",
        "レーザーと組み合わせてシナジー効果をご希望の方",
        "自然なコラーゲン再生で肌を整えたい方",
      ],
      tags: ["Scar Filling", "Collagen Induction", "Skin Texture"],
      duration: "20分〜30分",
      anesthesia: "クリーム麻酔",
      recovery: "1〜2日で赤みと軽いむくみが軽減",
      maintenance: "4週間隔3回推奨",
    },
  ];

  const recommends = [
    "同じ場所にニキビが繰り返し再発してお悩みの方",
    "炎症性・化膿性ニキビで痛みがある方",
    "過剰な皮脂分泌で午後になると顔がテカってしまう方",
    "ニキビ跡が深く凹んだ瘢痕として残っている方",
    "加齢とともに縦に伸びた毛穴が気になってきた方",
  ];

  const processSteps = [
    { step: "01", title: "肌精密診断", desc: "ニキビの種類と進行段階、\n瘢痕の深さと毛穴の状態を把握します。", icon: ScanFace },
    { step: "02", title: "圧出・スケーリング", desc: "レーザー治療前に詰まった毛穴を開き\n炎症を安全に圧出します。", icon: Syringe },
    { step: "03", title: "カスタムレーザー治療", desc: "皮脂腺破壊または瘢痕再生など\n目的に合ったレーザーを照射します。", icon: HeartPulse },
    { step: "04", title: "鎮静・再生ケア", desc: "刺激を受けた肌を素早く鎮静させ\n再生をサポートするアフターケアを行います。", icon: Leaf },
  ];

  const faqs = [
    {
      q: "ニキビ治療は1回だけで治りますか？",
      a: "ニキビは慢性炎症性疾患で、1回の治療だけでは皮脂腺を完全に破壊することが難しいです。通常1〜2週間隔で3〜5回以上継続して治療されることで再発率を大幅に下げることができます。",
    },
    {
      q: "フラクショナルレーザー後も日常生活は可能ですか？",
      a: "従来のフラクショナルと異なり、最近のピコフラクショナルやシークレットRFは皮膚表面へのダメージを最小化し、かさぶたがほとんど生じません。施術直後に赤みが1〜2日続くことがありますが、メイクでカバー可能で日常生活への支障はほとんどありません。",
    },
    {
      q: "アグネス施術後になぜ圧出を受けなければなりませんか？",
      a: "アグネスは高周波エネルギーで皮脂腺を破壊する施術です。破壊された皮脂腺の残留物が毛穴内に残っている場合があるため、施術翌日に来院して軽く圧出ケアを受けると治療がきれいに仕上がります。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Pore & Scar"
      pageDesc="繰り返すトラブルと凹んだ瘢痕、根本原因からしっかりと解消します。"
      heroImg={subHeroImg}
      coreTitle="ニキビ・毛穴治療の核心原理"
      coreDesc={[
        "ニキビ治療の核心は皮脂腺のコントロールと肌環境の正常化です。",
        "一時的に炎症を鎮めるだけでなく、ニキビ菌を死滅させ、異常に発達した皮脂腺のみを選択的に破壊して再発のサイクルを断ち切ります。また、既に広がった毛穴や凹んだ瘢痕は真皮層のコラーゲンリモデリングを誘導して新しい肌が密に形成されるようサポートします。",
      ]}
      coreHighlight="ニキビの進行状態と瘢痕の形状は個人によって異なります。REFINEは画一的な施術ではなく、1:1カスタム複合治療を行います。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="ニキビ・毛穴施術の種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>しつこいトラブルを<br className="md:hidden" /> 今こそ根本的に解決しましょう</>}
      ctaDesc="肌状態の精密診断を通じて、ニキビ再発を防ぐソリューションをご提案します。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
