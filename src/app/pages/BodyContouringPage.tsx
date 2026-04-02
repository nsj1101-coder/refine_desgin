import TreatmentTemplate from "../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function BodyContouringPage() {
  const treatments = [
    {
      id: "refine-bodycut",
      num: "01",
      title: "리파인바디컷",
      titleEn: "REFINE BODY CUT",
      subtitle: "Fat Dissolving Injection",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "리파인만의 독자적인 지방분해 주사 프로토콜로 지방 세포막을 선택적으로 용해하고 림프 순환을 촉진하여, 다이어트로는 빠지지 않는 복부·팔뚝·허벅지·이중턱 등의 국소 지방을 효과적으로 분해·배출합니다.",
      desc: "",
      points: ["지방 세포 선택적 분해·배출", "국소 부위 바디라인 교정", "림프 순환 촉진"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "다이어트를 해도 특정 부위의 군살이 안 빠지는 분",
        "복부, 팔뚝, 허벅지 등 바디 라인을 정리하고 싶은 분",
        "지방흡입 수술 없이 간편한 체형 교정을 원하는 분",
        "이중턱이나 심부볼 때문에 얼굴이 커 보이는 분",
      ],
      tags: ["Fat Dissolving", "Body Contouring", "Non-Surgical"],
      duration: "10분 ~ 20분",
      anesthesia: "아이스 쿨링 또는 크림 마취",
      recovery: "1~3일 내 붓기 완화",
      maintenance: "2~4주 간격 3회 이상 권장"
    },
    {
      id: "onda",
      num: "02",
      title: "온다",
      titleEn: "ONDA",
      subtitle: "Microwave RF Technology",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "특허받은 마이크로웨이브(극초음파) 에너지를 피하지방층에 집중시켜 불필요한 지방 세포를 파괴하고, 동시에 진피층의 콜라겐을 재생하여 지방 감소와 피부 타이트닝을 한 번에 실현합니다.",
      desc: "",
      points: ["지방 세포 선택적 파괴", "콜라겐 재생으로 피부 탄력 개선", "통증 없는 비침습적 시술"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "복부, 허벅지 등 부분 비만과 피부 처짐이 동시에 고민인 분",
        "지방 감소와 피부 탄력 개선을 한 번에 원하는 분",
        "통증에 민감하여 편안한 바디 시술을 찾는 분",
        "수술 없이 매끄러운 바디 라인을 완성하고 싶은 분",
      ],
      tags: ["Fat Reduction", "Body Tightening", "Non-Invasive"],
      duration: "30분 ~ 40분 (부위별 상이)",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "3~4주 간격 3회 권장"
    },
    {
      id: "body-botox",
      num: "03",
      title: "바디 보톡스",
      titleEn: "BODY BOTOX",
      subtitle: "Botulinum Toxin Body Contouring",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "보툴리눔 톡신을 발달된 근육 부위에 주입하여 근육의 부피를 점진적으로 줄이고, 종아리·승모근·어깨 등 울퉁불퉁한 근육 라인을 매끄럽고 여성스러운 실루엣으로 교정합니다.",
      desc: "",
      points: ["발달 근육 부피 축소", "매끄러운 바디 실루엣", "빠르고 간편한 시술"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "종아리 근육이 발달하여 다리 라인이 고민인 분",
        "승모근이 발달하여 어깨가 넓어 보이는 분",
        "운동으로 인해 특정 부위 근육이 과도하게 발달한 분",
        "수술 없이 자연스러운 바디 라인 교정을 원하는 분",
      ],
      tags: ["Calf Slimming", "Shoulder Line", "Muscle Contouring"],
      duration: "10분 ~ 15분",
      anesthesia: "아이스 쿨링",
      recovery: "즉시 일상생활 가능",
      maintenance: "3~6개월 간격 권장"
    }
  ];

  const recommends = [
    "다이어트를 해도 특정 부위의 군살이 안 빠지시는 분",
    "늘어진 뱃살이나 팔뚝살에 탄력을 주고 싶은 분",
    "울퉁불퉁한 셀룰라이트가 고민이신 분",
    "이중턱이나 심부볼 때문에 얼굴이 커 보이시는 분",
    "수술이나 지방흡입 없이 바디 라인을 교정하고 싶은 분"
  ];

  const processSteps = [
    { step: "01", title: "바디/윤곽 분석", desc: "고민 부위의 지방량, 피부 탄력,\n근육 발달 정도를 정밀 측정합니다.", icon: ScanLine },
    { step: "02", title: "맞춤 플랜 수립", desc: "개인의 체형과 목표에 맞춰\n최적의 장비와 용량을 설계합니다.", icon: MessageCircle },
    { step: "03", title: "집중 시술", desc: "지방 파괴와 탄력 개선을 목표로\n안전하고 정교하게 시술합니다.", icon: Sparkles },
    { step: "04", title: "애프터 케어", desc: "시술 효과를 높이는 수분 섭취와\n식이 및 운동 요법을 안내합니다.", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "시술 후 바로 효과가 나타나나요?",
      a: "바디 온다 리프팅은 즉각적인 타이트닝 효과를 느낄 수 있으며, 파괴된 지방 세포가 배출되는 데에는 약 2~4주의 시간이 필요합니다. 윤곽 주사 역시 약물이 작용하고 지방이 배출되는 1~2주 뒤부터 사이즈 감소 효과가 나타납니다."
    },
    {
      q: "윤곽 주사 시술 후 붓기가 심한가요?",
      a: "주입된 용액으로 인해 시술 직후 빵빵해지는 붓기가 생길 수 있습니다. 이는 지방 분해 성분이 작용하는 자연스러운 현상이며, 대부분 1~2일 내에 소변으로 배출되면서 빠르게 가라앉습니다."
    },
    {
      q: "시술 효과를 높이려면 어떻게 해야 하나요?",
      a: "파괴된 지방이 원활하게 체외로 배출될 수 있도록 하루 1.5~2L 이상의 수분 섭취를 권장합니다. 가벼운 유산소 운동을 병행하시면 혈액순환과 림프 순환이 촉진되어 더욱 빠른 효과를 보실 수 있습니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Body Shape & Fat"
      pageDesc="매끄러운 바디 라인과 탄력 있는 피부, 숨겨진 당신의 선을 찾아드립니다."
      heroImg={subHeroImg}
      coreTitle="바디 컨투어링 핵심 원리"
      coreDesc={[
        "단순히 체중을 줄이는 것을 넘어, 신체의 밸런스를 맞추고 굴곡진 부위를 매끄럽게 교정하는 체형 조각 시술입니다.",
        "지방세포만을 선택적으로 파괴하거나 분해 배출을 유도하여, 운동이나 다이어트로도 쉽게 빠지지 않는 국소 부위의 군살(팔뚝, 복부, 허벅지 등)을 효과적으로 감소시킵니다. 또한 지방이 빠진 자리에 콜라겐 재생을 촉진하여 피부가 처지지 않고 탄탄하게 유지되도록 돕습니다."
      ]}
      coreHighlight="수술적 지방흡입이 부담스러우신 분들을 위해, REFINE은 비침습적 장비와 안전한 주사 요법을 통한 맞춤 솔루션을 제공합니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="바디 & 윤곽 시술 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>나에게 딱 맞는<br className="md:hidden" /> 바디 솔루션을 상담 받아보세요</>}
      ctaDesc="REFINE의 정밀 체형 분석을 통해 숨겨진 당신의 선을 찾아드립니다."
    />
  );
}