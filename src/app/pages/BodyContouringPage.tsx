import TreatmentTemplate from "../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function BodyContouringPage() {
  const treatments = [
    {
      id: "onda-body",
      num: "01",
      title: "바디 온다 리프팅",
      titleEn: "BODY ONDA",
      subtitle: "Body ONDA Microwave",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"극초음파로 지방은 파괴하고 피부는 탄탄하게, 바디 온다 리프팅\"",
      desc: "특수 극초음파 에너지를 피하지방층에 집중시켜 불필요한 지방 세포를 파괴하고, 동시에 진피층의 콜라겐을 재생해 늘어진 피부를 매끄럽게 타이트닝하는 바디 전용 리프팅입니다.",
      points: [],
      headline2: "\"마이크로웨이브가 지방층만 선택적으로 가열·파괴\"",
      details: [
        "특허받은 극초음파(마이크로웨이브) 에너지가 표피는 안전하게 통과하고 피하지방층에만 선택적으로 열을 전달하여 지방 세포를 파괴합니다.",
        "동시에 진피층의 콜라겐 섬유를 수축·재생시켜, 지방이 줄어든 자리의 피부가 처지지 않고 매끄럽게 타이트닝됩니다.",
      ],
      tags: ["Fat Reduction", "Body Tightening", "Non-Invasive"],
      duration: "30분 ~ 40분 (부위별 상이)",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "3~4주 간격 3회 권장"
    },
    {
      id: "fat-dissolving",
      num: "02",
      title: "윤곽/바디 주사",
      titleEn: "FAT DISSOLVING",
      subtitle: "Fat Dissolving Injection",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"지방 분해와 림프 순환 촉진으로 군살을 배출하는 윤곽/바디 주사\"",
      desc: "지방을 분해하고 말초 혈관 및 림프 순환을 촉진시켜 체내 노폐물과 함께 지방을 체외로 배출시키는 주사 시술입니다. 다이어트로는 잘 빠지지 않는 군살 제거에 탁월합니다.",
      points: [],
      headline2: "\"지방 분해 성분이 세포막을 용해하여 지방을 자연 배출\"",
      details: [
        "주입된 PPC/DC 성분이 지방 세포의 세포막을 선택적으로 용해시켜 지방을 유리지방산으로 분해합니다.",
        "분해된 지방은 림프 순환을 통해 체외로 자연스럽게 배출되며, 이중턱·심부볼·팔뚝 등 국소 부위의 라인을 정리합니다.",
      ],
      tags: ["Double Chin", "Contouring", "Fat Metabolism"],
      duration: "10분 ~ 15분",
      anesthesia: "아이스 쿨링",
      recovery: "1~2일 내 붓기 완화",
      maintenance: "1~2주 간격 3회 이상 권장"
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
      coreHighlight="수술적 지방흡입이 부담스러우신 분들을 위해,\nREFINE은 비침습적 장비와 안전한 주사 요법을 통한 맞춤 솔루션을 제공합니다."
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