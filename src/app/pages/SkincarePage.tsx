import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Droplets, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function SkincarePage() {
  const treatments = [
    {
      id: "larapeel",
      num: "01",
      title: "라라필",
      titleEn: "LARA PEEL",
      subtitle: "Multi-Acid Peeling System",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "복합 산(Multi-Acid) 성분이 피부 표면의 묵은 각질과 모공 속 노폐물을 부드럽게 용해하고, 동시에 피부 재생 인자를 공급하여 매끄럽고 맑은 피부결로 개선하는 프리미엄 필링입니다.",
      desc: "",
      points: ["묵은 각질 및 노폐물 제거", "피부 재생 인자 동시 공급", "매끄러운 피부결 완성"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부가 거칠고 칙칙하여 피부결 개선이 필요한 분",
        "블랙헤드와 묵은 각질이 반복적으로 쌓이는 분",
        "중요한 일정 전 맑고 깨끗한 피부를 원하는 분",
        "자극 없이 꾸준한 필링 관리를 원하는 분",
      ],
      tags: ["Peeling", "Skin Texture", "Pore Care"],
      duration: "20분 ~ 30분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "2~4주 간격 권장"
    },
    {
      id: "rosepeel",
      num: "02",
      title: "로즈필",
      titleEn: "ROSE PEEL",
      subtitle: "Rose Extract Peeling",
      img: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "장미 줄기세포 추출물과 저자극 필링 성분을 결합하여 민감한 피부에도 안전하게 각질을 제거하고, 피부 진정과 보습, 톤업 효과를 동시에 선사하는 프리미엄 진정 필링입니다.",
      desc: "",
      points: ["민감 피부도 안전한 저자극 필링", "장미 줄기세포 진정 효과", "보습 및 톤업 동시 개선"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부가 예민하여 일반 필링이 부담스러운 분",
        "각질 제거와 피부 진정을 동시에 원하는 분",
        "피부톤이 칙칙하고 윤기가 없는 분",
        "시술 후 붉은기 없이 바로 일상생활을 원하는 분",
      ],
      tags: ["Gentle Peeling", "Soothing", "Brightening"],
      duration: "20분 ~ 30분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "2~4주 간격 권장"
    },
    {
      id: "diasono",
      num: "03",
      title: "다이아소노",
      titleEn: "DIASONO",
      subtitle: "Diamond Peeling + Ultrasound",
      img: "https://images.unsplash.com/photo-1670201203150-bf8771401590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "다이아몬드 팁으로 피부 표면의 각질과 노폐물을 물리적으로 정밀 제거한 후, 초음파 에너지를 통해 영양 성분을 진피층까지 깊숙이 침투시키는 복합 스킨케어입니다.",
      desc: "",
      points: ["다이아몬드 팁 물리적 각질 제거", "초음파 영양 성분 침투", "모공 및 피부결 동시 개선"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "화장이 잘 먹지 않고 피부결이 울퉁불퉁한 분",
        "모공이 넓어지면서 피부가 거칠어진 분",
        "깊은 영양 공급과 각질 제거를 함께 원하는 분",
        "레이저 시술 전후 피부 컨디션을 높이고 싶은 분",
      ],
      tags: ["Diamond Peeling", "Ultrasound", "Nutrition Delivery"],
      duration: "30분 ~ 40분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "2~3주 간격 권장"
    },
    {
      id: "facela",
      num: "04",
      title: "파셀라",
      titleEn: "FACELA",
      subtitle: "LED + Micro-current Therapy",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "LED 광선과 미세 전류를 동시에 조사하여 피부 세포의 에너지 대사를 활성화하고, 콜라겐 합성 촉진과 피부 진정을 통해 피부 본연의 건강함과 광채를 되찾아주는 안티에이징 관리입니다.",
      desc: "",
      points: ["LED 광선 세포 활성화", "미세 전류 콜라겐 촉진", "피부 진정 및 광채 부여"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부가 칙칙하고 생기가 없어 보이는 분",
        "스트레스와 피로로 피부 컨디션이 떨어진 분",
        "안티에이징과 피부 진정을 동시에 원하는 분",
        "편안하게 받을 수 있는 프리미엄 힐링 케어를 찾는 분",
      ],
      tags: ["LED Therapy", "Anti-Aging", "Skin Vitality"],
      duration: "20분 ~ 30분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "1~2주 간격 권장"
    }
  ];

  const recommends = [
    "피부가 예민하여 레이저 시술이 부담스러우신 분",
    "중요한 일정을 앞두고 맑게 빛나는 광채 피부를 원하시는 분",
    "아무리 좋은 화장품을 발라도 속당김이 해결되지 않는 분",
    "과도한 피지와 블랙헤드로 모공이 막혀 고민이신 분",
    "피부과 레이저 시술 후 빠른 재생과 진정이 필요하신 분"
  ];

  const processSteps = [
    { step: "01", title: "정밀 진단", desc: "현재 피부의 유수분 밸런스와\n장벽 상태를 꼼꼼하게 파악합니다.", icon: ScanFace },
    { step: "02", title: "맞춤 솔루션", desc: "진단 결과를 바탕으로\n가장 필요한 케어 프로그램을 구성합니다.", icon: Droplets },
    { step: "03", title: "프리미엄 관리", desc: "의료진의 처방에 따라 관리사가\n정교하고 편안하게 케어를 진행합니다.", icon: HeartPulse },
    { step: "04", title: "마무리 케어", desc: "피부가 자극받지 않도록\n모델링 팩 등으로 부드럽게 진정시킵니다.", icon: Leaf },
  ];

  const faqs = [
    {
      q: "메디컬 스킨케어는 일반 에스테틱과 어떻게 다른가요?",
      a: "일반 에스테틱은 화장품을 이용한 표면적인 관리에 그치지만, 메디컬 스킨케어는 피부과 전문 장비와 고농축 의료용 솔루션을 사용하여 진피층까지 유효 성분을 도달시킵니다. 따라서 보다 근본적이고 확실한 피부 개선 효과를 기대할 수 있습니다."
    },
    {
      q: "레이저 시술과 스킨케어를 같은 날 받아도 되나요?",
      a: "네, 가능합니다. 오히려 레이저 시술 후 크라이오셀이나 LDM 관리를 병행하시면 피부의 열감을 빠르게 진정시키고 재생을 촉진하여 시너지 효과를 높일 수 있습니다."
    },
    {
      q: "아쿠아필 후 화장을 바로 해도 되나요?",
      a: "네, 아쿠아필은 피부에 무리를 주지 않는 저자극 필링이므로 시술 직후 바로 세안 및 메이크업이 가능합니다. 중요한 약속 당일에 받으셔도 화장이 잘 먹는 효과를 보실 수 있습니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Premium Skin Care"
      pageDesc="지친 피부에 깊은 휴식을, 근본적인 건강함을 채워주는 메디컬 스킨케어"
      heroImg={subHeroImg}
      coreTitle="프리미엄 스킨케어 핵심 원리"
      coreDesc={[
        "건강한 피부의 기본은 유수분 밸런스의 유지와 튼튼한 피부 장벽입니다.",
        "REFINE의 프리미엄 스킨케어는 단순히 피부 겉면만 관리하는 것이 아닙니다. 과학적으로 검증된 메디컬 장비와 프리미엄 앰플을 사용하여 피부 깊은 진피층까지 유효 성분을 직접 침투시키고, 세포 본연의 자생력을 끌어올려 외부 자극에도 흔들리지 않는 건강한 피부 바탕을 만들어 줍니다."
      ]}
      coreHighlight="개개인의 피부 컨디션은 매일 달라집니다. 방문 시점의 피부 상태에 맞춘 최적의 맞춤 솔루션을 경험해 보세요."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="스킨케어 프로그램"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>내 피부에 딱 맞는<br className="md:hidden" /> 맞춤 스킨케어를 시작해 보세요</>}
      ctaDesc="피부 상태 정밀 진단을 통해 가장 효과적인 솔루션을 제안합니다."
    />
  );
}