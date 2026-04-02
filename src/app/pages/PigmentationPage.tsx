import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/4f34b6a82ff29bde3522fba076b7670ae8399354.png";

export default function PigmentationPage() {
  const treatments = [
    {
      id: "hollywood",
      num: "01",
      title: "헐리우드 스펙트라",
      titleEn: "HOLLYWOOD SPECTRA",
      subtitle: "Nd:YAG Dual Wavelength Laser",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "532nm과 1064nm 듀얼 파장의 Nd:YAG 레이저로 표피부터 진피까지 깊이별 색소를 정밀하게 타겟팅하며, 기미·주근깨·잡티는 물론 피부 톤과 결까지 복합적으로 개선하는 프리미엄 색소 레이저입니다.",
      desc: "",
      points: ["듀얼 파장 깊이별 색소 타겟팅", "기미·주근깨·잡티 복합 개선", "피부톤 및 피부결 동시 개선"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "기미, 주근깨, 잡티 등 다양한 색소가 복합적으로 있는 분",
        "반복적인 색소 치료에도 효과가 부족했던 분",
        "피부톤을 전체적으로 맑고 균일하게 개선하고 싶은 분",
        "색소 치료와 피부결 개선을 동시에 원하는 분",
      ],
      tags: ["Melasma", "Freckles", "Skin Brightening"],
      duration: "15분 ~ 20분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "1~2주 간격 10회 이상 권장"
    },
    {
      id: "clarity",
      num: "02",
      title: "클라리티",
      titleEn: "CLARITY",
      subtitle: "Long-Pulsed Alexandrite & Nd:YAG Laser",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "755nm 알렉산드라이트와 1064nm Nd:YAG 듀얼 파장을 탑재하여 멜라닌 색소와 확장된 혈관을 동시에 치료하며, 안면 홍조·모세혈관 확장증부터 색소 질환까지 폭넓게 대응하는 복합 피부 레이저입니다.",
      desc: "",
      points: ["색소와 혈관 질환 동시 치료", "안면 홍조·모세혈관 확장증 개선", "넓은 스팟으로 빠르고 균일한 시술"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "온도 변화나 감정 변화에 얼굴이 쉽게 붉어지는 분",
        "코와 볼 주변에 모세혈관이 비치는 분",
        "색소와 홍조가 함께 나타나 복합 치료가 필요한 분",
        "다운타임 없이 편안한 레이저 치료를 원하는 분",
      ],
      tags: ["Redness", "Vascular Lesion", "Dual Wavelength"],
      duration: "15분 ~ 20분",
      anesthesia: "불필요 (쿨링 시스템 탑재)",
      recovery: "즉시 일상생활 가능",
      maintenance: "2~4주 간격 3~5회 권장"
    }
  ];

  const recommends = [
    "얼굴 전체에 퍼진 기미와 주근깨, 잡티가 신경 쓰이시는 분",
    "온도 변화나 감정 변화에 얼굴이 쉽게 붉어지시는 분 (홍조)",
    "여드름이 지나간 자리에 붉거나 거뭇한 자국이 남으신 분",
    "전체적인 피부 톤이 칙칙하고 어두워 화사해지고 싶으신 분",
    "여러 번 레이저 치료를 받았으나 기미가 재발하신 분"
  ];

  const processSteps = [
    { step: "01", title: "피부 정밀 진단", desc: "마크뷰 피부 진단기를 통해 표피와\n진피 속 숨은 색소까지 분석합니다.", icon: ScanFace },
    { step: "02", title: "치료 플랜 수립", desc: "색소의 종류와 깊이에 따라\n최적의 레이저 장비들을 조합합니다.", icon: Sparkles },
    { step: "03", title: "맞춤 레이저 치료", desc: "주변 정상 피부 조직의 손상 없이\n타겟 색소만을 정교하게 파괴합니다.", icon: HeartPulse },
    { step: "04", title: "화이트닝 케어", desc: "레이저 후 비타민 투여 등 진정과\n미백을 돕는 후관리를 진행합니다.", icon: Leaf },
  ];

  const faqs = [
    {
      q: "레이저 토닝은 한 번만 받아도 맑아지나요?",
      a: "색소 치료는 단기간에 강한 에너지로 치료하면 오히려 색소가 짙어지는 부작용이 생길 수 있습니다. 약한 에너지로 색소를 조금씩 잘게 부수어 배출시키는 과정이 필요하므로, 주 1~2회 간격으로 10회 이상 꾸준히 치료받으시는 것을 권장합니다."
    },
    {
      q: "기미 치료를 받으면 기미가 완치되나요?",
      a: "기미는 여성 호르몬, 자외선, 스트레스 등 다양한 요인으로 발생하므로 '완치'보다는 '관리'의 개념으로 접근하셔야 합니다. 레이저 치료로 옅어지게 만든 후, 자외선 차단제와 스킨케어로 꾸준히 유지해 주시는 것이 중요합니다."
    },
    {
      q: "레이저 치료 후 세안이나 화장이 가능한가요?",
      a: "피코토닝, 레블라이트 토닝, 엑셀V 등은 피부 표면에 상처를 내지 않아 시술 직후 세안과 화장이 모두 가능합니다. 단, IPL이나 특정 잡티 제거 레이저는 미세한 딱지가 생길 수 있으나 화장으로 커버가 가능합니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Brightening & Redness"
      pageDesc="칙칙한 안색과 얼룩덜룩한 색소, 투명하고 맑은 피부로 되돌려드립니다."
      heroImg={subHeroImg}
      coreTitle="색소 및 홍조 치료 핵심 원리"
      coreDesc={[
        "색소 질환은 기미, 주근깨, 잡티, 흑자 등 종류가 다양하고 멜라닌 색소가 분포하는 깊이도 표피에서 진피까지 각각 다릅니다.",
        "따라서 단일 레이저만으로는 완벽한 치료가 어렵습니다. REFINE은 파장과 침투 깊이가 다른 여러 가지 프리미엄 레이저를 복합적으로 사용하여, 피부 겉의 얕은 색소부터 깊숙이 자리 잡은 난치성 기미, 그리고 홍조를 유발하는 늘어진 혈관까지 정확하게 타겟팅하여 파괴합니다."
      ]}
      coreHighlight="단순히 보이는 색소만 지우는 것이 아니라, 피부 진피층의 환경을 건강하게 개선하여 색소가 다시 생기는 것을 예방합니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="색소 / 홍조 시술 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>숨겨진 본연의 맑은 피부를<br className="md:hidden" /> 되찾아 보세요</>}
      ctaDesc="정확한 진단과 복합 레이저 치료로 투명한 피부를 선사합니다."
    />
  );
}