import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Droplets, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function SkincarePage() {
  const treatments = [
    {
      id: "ldm",
      num: "01",
      title: "LDM 물방울 리프팅",
      titleEn: "LDM",
      subtitle: "High-Density Ultrasound",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"고밀도 초음파로 진피층 수분을 채워 촉촉한 탄력을 완성하는 LDM\"",
      desc: "고밀도 초음파 에너지를 이용하여 피부 속 수분을 진피층으로 끌어올려 촉촉하고 탄력 있는 피부를 완성합니다. 자극이 없어 매일 받아도 좋은 프리미엄 보습 관리입니다.",
      points: [],
      headline2: "\"초당 1,000만 회 진동이 세포 간 수분 이동을 활성화\"",
      details: [
        "고밀도 초음파가 초당 1,000만 회 이상 미세하게 진동하며 세포막의 투과성을 높여 유효 성분의 흡수를 극대화합니다.",
        "진피층의 히알루론산 합성을 촉진하여 피부 속부터 수분을 채우고, 무너진 피부 장벽을 복원합니다.",
      ],
      tags: ["Deep Hydration", "Barrier Repair", "Zero Downtime"],
      duration: "15분 ~ 20분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "주 1~2회 권장"
    },
    {
      id: "aquapeel",
      num: "02",
      title: "아쿠아필",
      titleEn: "AQUA PEEL",
      subtitle: "Aqua Peel",
      img: "https://images.unsplash.com/photo-1670201202784-ec638a82bca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"3단계 솔루션으로 모공 속 노폐물을 녹여내는 저자극 아쿠아필\"",
      desc: "3단계 특수 솔루션을 통해 모공 속 피지, 블랙헤드, 모낭충, 묵은 각질을 부드럽게 녹여내고 동시에 수분을 채워넣는 저자극 모공 청소 필링입니다.",
      points: [],
      headline2: "\"AHA·BHA·저자극 솔루션이 단계별로 모공을 청소\"",
      details: [
        "1단계 AHA 솔루션이 피부 표면의 묵은 각질을 부드럽게 녹이고, 2단계 BHA 솔루션이 모공 깊숙한 피지와 블랙헤드를 용해합니다.",
        "3단계 영양 솔루션이 깨끗해진 모공에 수분과 항산화 성분을 채워넣어, 피지 분비를 조절하고 트러블을 예방합니다.",
      ],
      tags: ["Pore Cleansing", "Blackhead Removal", "Gentle Peeling"],
      duration: "20분 ~ 30분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "1~2주 간격 권장"
    },
    {
      id: "cryocell",
      num: "03",
      title: "크라이오셀",
      titleEn: "CRYOCELL",
      subtitle: "Cryo Electroporation",
      img: "https://images.unsplash.com/photo-1670201203150-bf8771401590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"영하 냉각과 미세 전류로 진정과 영양 침투를 동시에, 크라이오셀\"",
      desc: "영하 15도까지 피부 표면을 냉각시켜 진정 효과를 주며, 미세 전류를 통해 비타민과 영양 성분을 피부 깊숙이 침투시키는 강력한 진정 보습 케어입니다.",
      points: [],
      headline2: "\"극저온 냉각 + 전기천공법으로 유효 성분 침투율 극대화\"",
      details: [
        "영하 15도의 극저온 냉각이 확장된 모세혈관을 수축시키고 열감과 붉은기를 즉각적으로 진정시킵니다.",
        "전기천공법(Electroporation)이 세포막에 미세한 통로를 일시적으로 형성하여, 비타민과 성장인자의 침투율을 극대화합니다.",
      ],
      tags: ["Post-Laser Care", "Cooling", "Active Delivery"],
      duration: "15분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "상태에 따라 수시 진행"
    },
    {
      id: "o2",
      num: "04",
      title: "오투덤 산소테라피",
      titleEn: "O2TODERM",
      subtitle: "O2toDerm Therapy",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"고농도 산소와 음이온으로 지친 피부 세포를 깨우는 오투덤 산소테라피\"",
      desc: "고농도 산소와 음이온을 돔 형태의 마스크를 통해 피부에 공급하여, 지친 피부 세포를 재생시키고 맑고 투명한 피부톤으로 가꿔주는 안티에이징 활력 케어입니다.",
      points: [],
      headline2: "\"90% 이상 고농도 산소가 세포 대사를 활성화\"",
      details: [
        "돔 형태의 마스크가 피부 주변을 90% 이상의 고농도 산소 환경으로 만들어, 세포 호흡과 ATP 에너지 생성을 촉진합니다.",
        "음이온이 활성산소를 중화시켜 피부 노화를 억제하고, 산소가 풍부해진 세포 환경이 맑고 화사한 피부톤을 만들어냅니다.",
      ],
      tags: ["Oxygen Therapy", "Cell Vitality", "Brightening"],
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
      coreHighlight="개개인의 피부 컨디션은 매일 달라집니다.\n방문 시점의 피부 상태에 맞춘 최적의 맞춤 솔루션을 경험해 보세요."
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