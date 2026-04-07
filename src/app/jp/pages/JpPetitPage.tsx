import TreatmentTemplate from "../../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import subHeroImg from "figma:asset/70813029fd42410de275caf717d98f8d5ed04279.png";

const jpLabels = {
  processTitle: "施術プロセス",
  recommendTitle: "こんな方にお勧め",
  faqTitle: "よくある質問",
  duration: "施術時間",
  anesthesia: "麻酔",
  recovery: "回復期間",
  maintenance: "持続期間",
};

export default function JpPetitPage() {
  const treatments = [
    {
      id: "botox",
      num: "01",
      title: "ボトックス",
      titleEn: "BOTOX",
      subtitle: "Botulinum Toxin",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "ボツリヌストキシンで表情筋を精密にリラックスさせ、額・眉間・目尻のしわを改善し、発達したエラ・僧帽筋のボリュームを減らしてなめらかなラインを完成させます。",
      desc: "",
      points: ["表情じわ改善", "エラ・僧帽筋縮小", "素早い施術時間"],
      headline2: "こんな方にお勧めです。",
      details: [
        "額・眉間・目尻などの表情じわが深くなってきた方",
        "発達したエラや僧帽筋をなめらかに小さくしたい方",
        "素早く簡単なしわ改善施術をご希望の方",
        "自然な印象の変化をご希望の方",
      ],
      tags: ["Wrinkle Relaxation", "Jawline Contouring", "Quick Procedure"],
      duration: "5分〜10分",
      anesthesia: "アイスクーリングまたはクリーム麻酔",
      recovery: "即日日常生活可能",
      maintenance: "3ヶ月〜6ヶ月",
    },
    {
      id: "filler",
      num: "02",
      title: "フィラー",
      titleEn: "FILLER",
      subtitle: "Hyaluronic Acid",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "人体成分と類似したヒアルロン酸を注入し、深く刻まれたしわを埋め、鼻・唇・額などに即時の立体感とボリュームを完成させます。",
      desc: "",
      points: ["即時ボリューム形成", "部位別カスタムデザイン", "自然な立体感"],
      headline2: "こんな方にお勧めです。",
      details: [
        "凹んだほほや額に自然なボリュームをご希望の方",
        "鼻・あごなど輪郭に立体感を加えたい方",
        "深いほうれい線やマリオネットラインが気になる方",
        "手術なしで即時の顔の輪郭改善をご希望の方",
      ],
      tags: ["Volume Restoration", "Facial Contouring", "Instant Result"],
      duration: "10分〜20分",
      anesthesia: "クリーム麻酔または局所麻酔",
      recovery: "1〜2日で軽いむくみが軽減",
      maintenance: "6ヶ月〜1年（製品により異なる）",
    },
    {
      id: "refinecut",
      num: "03",
      title: "リファインカット",
      titleEn: "REFINE CUT",
      subtitle: "Precision Contouring Injection",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "REFINEオリジナルの複合注射プロトコルで脂肪分解と肌弾力改善を同時に進行し、二重あご・深部ほほ・あごのラインなど顔の輪郭を精密に整えて自然なVラインを完成させます。",
      desc: "",
      points: ["脂肪分解＋弾力改善同時進行", "顔の輪郭精密デザイン", "自然なVライン完成"],
      headline2: "こんな方にお勧めです。",
      details: [
        "二重あごや深部ほほで顔が大きく見える方",
        "あごのラインがぼやけて輪郭を整えたい方",
        "脂肪吸引なしで自然な輪郭改善をご希望の方",
        "ダイエットしても顔のラインが変わらない方",
      ],
      tags: ["V-Line Contouring", "Fat Dissolving", "Precision Design"],
      duration: "15分〜20分",
      anesthesia: "アイスクーリングまたはクリーム麻酔",
      recovery: "1〜3日でむくみが軽減",
      maintenance: "2〜4週間隔3回推奨",
    },
  ];

  const recommends = [
    "手術なしで簡単に顔の輪郭を改善したい方",
    "額・眉間などの深い表情じわが気になる方",
    "唇・愛嬌筋・鼻など特定の部位にポイントボリュームをご希望の方",
    "発達したエラや僧帽筋をなめらかに小さくしたい方",
    "素早い施術時間と即時の効果が必要な方",
  ];

  const processSteps = [
    { step: "01", title: "顔型分析", desc: "お客様の骨格と筋肉の動き、\n皮膚の厚さを詳しく分析します。", icon: ScanLine },
    { step: "02", title: "カスタムデザイン", desc: "非対称を矯正し最も美しい\nバランスを見つけて繊細にデザインします。", icon: MessageCircle },
    { step: "03", title: "精巧な施術", desc: "安全性の実証された正規品・適量のみを使用し\n慎重に施術を行います。", icon: Sparkles },
    { step: "04", title: "モールディング・確認", desc: "施術部位の形を精巧に整え\nお客様と一緒に結果を確認します。", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "ボトックスに耐性が生じた場合はどうすればいいですか？",
      a: "頻繁な施術や高用量の使用時に耐性が生じる可能性があります。これを予防するためにREFINEでは推奨周期と適切な用量を厳守し、複合タンパク質を除去した耐性が生じにくい純粋なトキシン製品をお勧めしています。",
    },
    {
      q: "フィラー施術後の注意事項はありますか？",
      a: "施術部位を強くこすったり押したりしないでください。1〜2週間は形が変形する可能性があるため、サウナ・激しい運動・過度の飲酒はお控えください。うつ伏せで寝る姿勢もお控えになることをお勧めします。",
    },
    {
      q: "施術結果が気に入らない場合、フィラーを溶かすことはできますか？",
      a: "ヒアルロン酸（HA）成分のフィラーは「ヒアルロニダーゼ」という酵素を通じていつでも安全に溶かすことができます。そのため結果に対する心配なしに施術を受けていただけます。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Petit Plastic Surgery"
      pageDesc="手術なしで目立たず、あなたの細かなコンプレックスを補い整えます。"
      heroImg={subHeroImg}
      coreTitle="プチ整形の核心原理"
      coreDesc={[
        "手術の負担なく注射だけで顔の短所を補い、立体感を出してくれる美容施術です。",
        "筋肉の動きを調節するトキシンとボリュームを補うフィラーなどを通じて1mmの微細な変化で全体的な印象を大きく改善できます。短い施術時間と素早い回復で忙しい現代人に最も満足度の高い施術の一つです。",
      ]}
      coreHighlight="美しさは過剰でない時に際立ちます。REFINEは解剖学的知識を基に最も自然で調和のとれた結果を追求します。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="プチ施術の種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>小さなディテールの違いが<br className="md:hidden" /> 大きな美しさを生みます</>}
      ctaDesc="REFINEの専門医療スタッフとご相談の上、自然な変化をプランニングしましょう。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
