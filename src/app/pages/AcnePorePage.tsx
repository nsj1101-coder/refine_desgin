import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Syringe, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/893cd708452e1b0c7059f6e9f42508951216f01b.png";

export default function AcnePorePage() {
  const treatments = [
    {
      id: "capri",
      num: "01",
      title: "카프리 레이저",
      subtitle: "Capri Laser",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "여드름의 주 원인인 피지선을 파괴하는 1450nm 파장과 여드름균을 살균하는 블루라이트를 동시에 조사하여, 좁쌀 여드름부터 화농성 여드름까지 효과적으로 치료합니다.",
      points: [
        "여드름균 살균 및 피지선 파괴",
        "재발성/진행성 여드름 억제",
        "통증을 최소화한 냉각 시스템"
      ],
      duration: "15분 ~ 20분",
      anesthesia: "불필요 (냉각 가스 동시 분사)",
      recovery: "즉시 일상생활 가능",
      maintenance: "1~2주 간격 3~5회 권장"
    },
    {
      id: "agnes",
      num: "02",
      title: "아그네스",
      subtitle: "Agnes RF",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "특수 코팅된 미세 절연침을 피지선에 직접 찌른 후 고주파(RF) 에너지를 전달하여, 표피 손상 없이 트러블의 근본 원인인 피지선만을 선택적으로 파괴하는 시술입니다.",
      points: [
        "난치성/재발성 여드름 근본 치료",
        "블랙헤드 및 눈밑 한관종 개선",
        "피부 표면 손상 최소화"
      ],
      duration: "30분 ~ 40분",
      anesthesia: "크림 마취",
      recovery: "시술 다음날 압출 관리 필요",
      maintenance: "4주 간격 3회 권장"
    },
    {
      id: "pico",
      num: "03",
      title: "피코 프락셀",
      subtitle: "Pico Fraxel",
      img: "https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "피부 표면에 물리적인 상처를 내지 않고 진피층에만 미세한 광학적 구멍(LIOB)을 만들어 냅니다. 강력한 콜라겐 재생을 유도하여 넓어진 모공과 패인 흉터를 매끄럽게 채워줍니다.",
      points: [
        "기존 프락셀 대비 통증/붉은기 감소",
        "여드름 흉터 및 넓은 모공 축소",
        "피부결 및 잔주름 개선"
      ],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 붉은기 완화",
      maintenance: "3~4주 간격 3~5회 권장"
    },
    {
      id: "secret",
      num: "04",
      title: "시크릿 고주파",
      subtitle: "Secret RF",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "마이크로 니들이 피부 진피층까지 직접 들어가 고주파 에너지를 전달합니다. 과도한 피지 분비를 줄여 여드름을 예방하고, 손상된 피부 세포를 재생시켜 흉터와 모공을 치료합니다.",
      points: [
        "모공, 흉터, 탄력을 동시에 개선",
        "피지선 위축으로 여드름 예방",
        "정교한 니들 깊이 조절로 맞춤 시술"
      ],
      duration: "20분 ~ 30분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 붉은기 완화",
      maintenance: "3~4주 간격 3회 이상 권장"
    }
  ];

  const recommends = [
    "같은 자리에 자꾸만 여드름이 재발하여 스트레스 받으시는 분",
    "염증성, 화농성 여드름으로 인해 통증이 있으신 분",
    "과도한 피지 분비로 인해 오후만 되면 얼굴이 번들거리는 분",
    "여드름이 지나간 자리에 깊게 패인 흉터가 남아 고민이신 분",
    "나이가 들면서 세로로 길게 늘어지는 모공이 신경 쓰이는 분"
  ];

  const processSteps = [
    { step: "01", title: "피부 정밀 진단", desc: "여드름의 종류와 진행 단계,\n흉터의 깊이와 모공 상태를 파악합니다.", icon: ScanFace },
    { step: "02", title: "압출 및 스케일링", desc: "레이저 치료 전 막힌 모공을 열고\n염증을 안전하게 압출합니다.", icon: Syringe },
    { step: "03", title: "맞춤 레이저 치료", desc: "피지선 파괴 또는 흉터 재생 등\n목적에 맞는 레이저를 조사합니다.", icon: HeartPulse },
    { step: "04", title: "진정 및 재생 관리", desc: "자극받은 피부를 빠르게 진정시키고\n재생을 돕는 후관리를 진행합니다.", icon: Leaf },
  ];

  const faqs = [
    {
      q: "여드름 치료는 한 번만 받아도 없어지나요?",
      a: "여드름은 만성 염증성 질환으로, 1회 치료만으로는 피지선을 완전히 파괴하기 어렵습니다. 보통 1~2주 간격으로 3~5회 이상 꾸준히 치료받으셔야 재발률을 현저히 낮출 수 있습니다."
    },
    {
      q: "프락셀 레이저 후 일상생활이 가능한가요?",
      a: "과거 프락셀과 달리, 최근의 피코 프락셀이나 시크릿 RF는 피부 표면 손상을 최소화하여 딱지가 거의 생기지 않습니다. 시술 직후 붉은기가 하루 이틀 정도 지속될 수 있으나 화장으로 커버가 가능하여 일상생활에 큰 지장이 없습니다."
    },
    {
      q: "아그네스 시술 후 왜 압출을 또 받아야 하나요?",
      a: "아그네스는 고주파 에너지로 피지선을 파괴하는 시술입니다. 파괴된 피지선 찌꺼기들이 모공 속에 남아있을 수 있으므로, 시술 다음 날 내원하셔서 가볍게 압출 관리를 받으셔야 치료가 깨끗하게 마무리됩니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Pore & Scar"
      pageDesc="반복되는 트러블과 패인 흉터, 원인부터 확실하게 지워냅니다."
      heroImg={subHeroImg}
      coreTitle="여드름 및 모공 치료 핵심 원리"
      coreDesc={[
        "여드름 치료의 핵심은 피지선 컨트롤과 피부 환경의 정상화입니다.",
        "일시적으로 염증을 가라앉히는 것에 그치지 않고, 여드름균을 사멸하고 비정상적으로 발달한 피지선만을 선택적으로 파괴하여 재발의 고리를 끊어냅니다. 또한 이미 넓어진 모공과 패인 흉터는 진피층의 콜라겐 리모델링을 유도하여 새살이 촘촘하게 차오르도록 돕습니다."
      ]}
      coreHighlight="여드름의 진행 상태와 흉터의 모양은 사람마다 다릅니다.\nREFINE은 획일화된 공장형 시술이 아닌 1:1 맞춤 복합 치료를 진행합니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="여드름 / 모공 시술 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>지긋지긋한 트러블,<br className="md:hidden" /> 이제 근본적으로 해결해 보세요</>}
      ctaDesc="피부 상태 정밀 진단을 통해 여드름 재발을 막는 솔루션을 제안합니다."
    />
  );
}