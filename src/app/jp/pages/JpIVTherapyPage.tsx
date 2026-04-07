import TreatmentTemplate from "../../components/TreatmentTemplate";
import { Stethoscope, FlaskConical, BedDouble, Activity } from "lucide-react";
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

export default function JpIVTherapyPage() {
  const treatments = [
    {
      id: "vitamin-b",
      num: "01",
      title: "ビタミンB",
      titleEn: "VITAMIN B",
      subtitle: "Vitamin B Complex IV",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "ビタミンB群複合体（B1・B2・B5・B6・B12）を静脈に直接投与してエネルギー代謝を活性化し、筋肉疲労物質を分解、神経系機能を強化して慢性疲労と無気力感を素早く解消します。",
      desc: "",
      points: ["エネルギー代謝活性化", "筋肉疲労・乳酸分解", "神経系機能強化"],
      headline2: "こんな方にお勧めです。",
      details: [
        "残業や過労で慢性疲労に悩んでいる方",
        "飲み過ぎ後の素早い二日酔い解消が必要な方",
        "運動後の筋肉回復とコンディション充電をご希望の方",
        "無気力感や集中力低下が続く方",
      ],
      tags: ["Energy Boost", "Fatigue Recovery", "Hangover Relief"],
      duration: "30分〜40分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "週1〜2回推奨",
    },
    {
      id: "vitamin-c",
      num: "02",
      title: "ビタミンC",
      titleEn: "VITAMIN C",
      subtitle: "High-Dose Ascorbic Acid IV",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "高用量ビタミンCを点滴注射で直接投与して強力な抗酸化作用で活性酸素を中和し、メラニン生成を抑制して肌の美白と免疫力増進、コラーゲン合成促進効果を同時に実現します。",
      desc: "",
      points: ["強力な抗酸化・美白効果", "免疫力増進", "コラーゲン合成促進"],
      headline2: "こんな方にお勧めです。",
      details: [
        "くすんだ肌トーンを明るく改善したい方",
        "免疫力が低下して風邪や疲れに頻繁に悩んでいる方",
        "肌の老化防止と抗酸化ケアをご希望の方",
        "皮膚科施術と組み合わせて美白シナジーを高めたい方",
      ],
      tags: ["Antioxidant", "Whitening", "Immune Boost"],
      duration: "30分〜40分",
      anesthesia: "不要",
      recovery: "即日日常生活可能",
      maintenance: "週1〜2回推奨",
    },
  ];

  const recommends = [
    "残業やストレスによる慢性疲労に悩んでいる方",
    "頻繁な飲酒後の二日酔い解消と肝機能回復が必要な方",
    "くすんだ肌トーンを明るく改善したい方",
    "免疫力が低下して風邪や帯状疱疹に頻繁に悩んでいる方",
    "皮膚科施術後の回復速度とシナジー効果を高めたい方",
  ];

  const processSteps = [
    { step: "01", title: "1:1コンディション確認", desc: "現在の健康状態・疲労度・お悩みを\n医療スタッフとしっかり相談します。", icon: Stethoscope },
    { step: "02", title: "カスタム点滴処方", desc: "相談結果を基に\n体に最も必要な栄養成分を組み合わせます。", icon: FlaskConical },
    { step: "03", title: "プライベートケア", desc: "快適な個室点滴室で\nリラックスしながら点滴を受けます。", icon: BedDouble },
    { step: "04", title: "回復・帰宅", desc: "投与後に軽やかになったコンディションで\nすぐに日常生活に戻ります。", icon: Activity },
  ];

  const faqs = [
    {
      q: "点滴注射は1回だけで効果がありますか？",
      a: "個人のコンディションによって異なりますが、1回の施術でも疲れが取れてすっきりするのを感じることができます。ただし肌の美白や抗酸化体質改善など根本的な効果をご希望の場合は週1〜2回のペースで5〜10回以上継続的にお受けになることをお勧めします。",
    },
    {
      q: "皮膚科のレーザー施術と一緒に受けても大丈夫ですか？",
      a: "はい、むしろ一緒に受けることをお勧めします。点滴で体内の免疫力と再生力が高まった状態でレーザー施術を受けると皮膚の回復がずっと速くなり、美白効果などシナジー効果が期待できます。",
    },
    {
      q: "にんにく注射を受けると匂いが長く続きますか？",
      a: "にんにく注射は投与時に鼻や口の粘膜を通じて微細なにんにくの香りをご本人だけが一時的に感じます。これは成分の特性によるもので体臭や口臭として残るものではなく、5〜10分以内にすぐ消えますのでご安心ください。",
    },
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="IV Therapy"
      pageDesc="疲れた日常に活力を、皮膚の奥から満ちるエネルギーをチャージしましょう。"
      heroImg={subHeroImg}
      coreTitle="点滴療法の核心原理"
      coreDesc={[
        "高濃縮ビタミン・ミネラル・抗酸化剤など体に必要な栄養成分を静脈血管を通じて直接投与するウェルネスケアです。",
        "経口摂取（サプリ服用）の場合は消化管を通ることで吸収率が20〜30%に落ちますが、点滴注射は有効成分が細胞に100%近く直接届いて即時の疲労回復・免疫力増進・肌の抗酸化効果を発揮します。",
      ]}
      coreHighlight="プライベートで快適な個室点滴室で、専門医療スタッフの診断を通じて現在のコンディションに最も必要な1:1カスタム栄養点滴を処方していただけます。"
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="点滴の種類"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>疲れた体と肌に<br className="md:hidden" /> 素早くエネルギーをチャージしましょう</>}
      ctaDesc="REFINEのカスタム点滴ソリューションで失った活力を取り戻します。"
      labels={jpLabels}
      directionsSection={SubpageDirectionsSection}
      footer={SubpageFooter}
      reservationPath="/jp/reservation"
    />
  );
}
