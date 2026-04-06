import TreatmentTemplate from "../components/TreatmentTemplate";
import { MessageCircle, ScanLine, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import liftingImg1 from "../../assets/lifting1.png";
import liftingImg2 from "../../assets/lifting2.png";
import liftingImg3 from "../../assets/lifting3.png";
import liftingImg4 from "../../assets/lifting4.png";

export default function LiftingPage() {
  const treatments = [
    {
      id: "density",
      num: "01",
      title: "덴서티",
      titleEn: "DENSITY",
      subtitle: "High-Intensity Focused Ultrasound",
      img: liftingImg1,
      headline: "고주파 에너지를 활용하여 진피층의 콜라겐 생성을 활성화시키며, 피부 탄력과 피부결을 즉각적으로 개선합니다.",
      desc: "",
      points: ["진피층 콜라겐 활성화", "타이트닝 효과", "피부결 및 모공 개선"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부 탄력 저하 및 처짐이 고민인 분",
        "잔주름과 피부결 개선을 원하는 분",
        "콜라겐 생성으로 피부 밀도를 높이고 싶은 분",
        "다운타임 없이 리프팅 효과를 원하는 분",
      ],
      tags: ["Skin Tightening", "Contouring", "Texture Improvement"],
      duration: "30분 ~ 40분",
      anesthesia: "크림 마취",
      recovery: "즉시 일상생활 가능",
      maintenance: "6개월 ~ 1년"
    },
    {
      id: "onda",
      num: "02",
      title: "온다",
      titleEn: "ONDA",
      subtitle: "Microwave RF Technology",
      img: liftingImg2,
      headline: "특허받은 마이크로웨이브(극초음파) 에너지로 표피 손상 없이 지방층을 감소시키고 진피층의 콜라겐을 리모델링합니다.",
      desc: "",
      points: ["지방 감소 및 윤곽 개선", "통증 최소화 시술", "콜라겐 리모델링"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "이중턱, 볼살 등 얼굴 윤곽이 고민인 분",
        "통증에 민감하여 편안한 시술을 원하는 분",
        "지방 감소와 탄력 개선을 동시에 원하는 분",
        "비침습적 윤곽 타이트닝을 찾는 분",
      ],
      tags: ["Slimming", "Contouring", "Immediate Tightening"],
      duration: "20분 ~ 30분",
      anesthesia: "불필요 (통증 거의 없음)",
      recovery: "즉시 일상생활 가능",
      maintenance: "6개월 ~ 1년"
    },
    {
      id: "shurink",
      num: "03",
      title: "슈링크",
      titleEn: "SHURINK",
      subtitle: "Focused Ultrasound",
      img: liftingImg3,
      headline: "고강도 집속 초음파(HIFU) 에너지를 피부 속 가장 깊은 근막층(SMAS)까지 전달하여 수술 없이도 강력한 리프팅 효과를 선사합니다.",
      desc: "",
      points: ["근막층(SMAS) 타겟팅", "즉각적인 V라인 리프팅", "콜라겐 신생 유도"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "볼과 턱선이 처져서 인상이 피곤해 보이는 분",
        "수술 없이 강력한 리프팅 효과를 원하는 분",
        "중력으로 인해 무너진 얼굴 윤곽을 개선하고 싶은 분",
        "결혼식, 행사 등 중요한 일정 전 관리가 필요하신 분",
      ],
      tags: ["V-Line Lifting", "Core Firming", "Customized Tightening"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "즉시 일상생활 가능",
      maintenance: "3개월 ~ 6개월"
    },
    {
      id: "potenza",
      num: "04",
      title: "포텐자",
      titleEn: "POTENZA",
      subtitle: "Microneedling RF",
      img: liftingImg4,
      headline: "마이크로 니들(미세침)을 통해 진피층에 고주파(RF) 에너지를 직접 전달하여 모공, 흉터를 개선하고 콜라겐 생성을 유도합니다.",
      desc: "",
      points: ["모공 축소 및 흉터 개선", "콜라겐 생성 촉진", "피부결 및 탄력 회복"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "넓어진 모공과 여드름 흉터가 고민인 분",
        "피부결과 피부톤을 동시에 개선하고 싶은 분",
        "콜라겐 부스팅으로 탄력을 회복하고 싶은 분",
        "맞춤형 피부 재생 시술을 원하는 분",
      ],
      tags: ["Pore & Scar Refining", "Tone & Texture Improvement", "Booster Synergy"],
      duration: "30분 ~ 40분",
      anesthesia: "크림 마취",
      recovery: "1~2일",
      maintenance: "6개월 ~ 1년"
    }
  ];

  const recommends = [
    "볼과 턱선이 처져서 인상이 피곤해 보이는 분",
    "나이보다 더 들어 보인다는 이야기를 들으시는 분",
    "탄력이 떨어지고 주름이 깊어져 고민이신 분",
    "수술 없이 자연스러운 리프팅 효과를 원하시는 분",
    "결혼식, 행사 등 중요한 일정 전 관리가 필요하신 분",
  ];

  const processSteps = [
    { step: "01", title: "정밀 진단", desc: "피부 층별 상태를 분석하여\n시술 깊이와 강도를 결정합니다", icon: ScanLine },
    { step: "02", title: "1:1 맞춤 상담", desc: "피부 상태와 고민을 파악하고\n최적의 시술을 설계합니다", icon: MessageCircle },
    { step: "03", title: "맞춤 시술", desc: "개인별 맞춤 프로토콜로\n정교하게 시술을 진행합니다", icon: Sparkles },
    { step: "04", title: "사후 관리", desc: "시술 후 경과를 체크하고\n최적의 유지 관리법을 안내합니다", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "리프팅 시술 후 바로 일상생활이 가능한가요?",
      a: "네, 대부분의 리프팅 시술은 비침습적이기 때문에 시술 직후 바로 일상생활이 가능합니다. 약간의 붉은기나 부기가 있을 수 있지만, 보통 수 시간 이내에 자연스럽게 가라앉습니다. 가벼운 메이크업도 시술 직후 바로 가능하세요."
    },
    {
      q: "효과는 언제부터 나타나고, 얼마나 유지되나요?",
      a: "시술 직후에도 즉각적인 타이트닝 효과를 느끼실 수 있고, 콜라겐 리모델링이 진행되면서 2~4주에 걸쳐 점차 개선됩니다. 시술 종류에 따라 6개월에서 1년까지 효과가 유지되며, 정기적인 관리 통해 더 오래 유지할 수 있습니다."
    },
    {
      q: "시술 시 통증은 어느 정도인가요?",
      a: "크림 마취를 적용하기 때문에 대부분 편안하게 시술받으실 수 있습니다. 온다의 경우 마취 없이도 시술이 가능할 정도로 통증이 거의 없으며, 슈링크나 포텐자도 개인 차이가 있지만 참을 수 있는 정도의 따끔함입니다."
    },
    {
      q: "시술 후 주의해야 할 사항이 있나요?",
      a: "시술 후 3일간은 미온수로 세안하시고, 자외선 차단제를 꼭 발라주세요. 2~3일간 음주, 흡연, 사우나, 찜질방은 피하시는 것이 좋습니다. 드물게 감각이 둔해지거나 두통이 생길 수 있으나 시간이 지나면 자연스럽게 사라집니다."
    },
    {
      q: "어떤 리프팅 시술이 저에게 맞는지 어떻게 알 수 있나요?",
      a: "피부 상태, 노화 정도, 원하시는 개선 부위에 따라 최적의 시술이 달라집니다. REFINE에서는 1:1 맞춤 상담을 통해 고객님께 가장 적합한 시술을 설계해 드리고 있으니 편하게 상담받아 보세요."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Lifting"
      pageDesc="자연스러운 윤곽, 탄력 있는 피부를 정교한 시술로 되찾아드립니다."
      heroImg={subHeroImg}
      coreTitle="리프팅 핵심 원리"
      coreDesc={[
        "리프팅 시술은 피부 속 콜라겐과 엘라스틴의 재생을 촉진하여 무너진 페이스 라인을 복원하고, 자연스러운 탄력을 되찾아주는 비침습적 안티에이징 솔루션입니다.",
        "고주파, 초음파, 마이크로 니들 RF 등 다양한 에너지를 활용해 진피층부터 SMAS 근막층까지 깊이별 맞춤 시술이 가능하며, 절개 없이도 수술에 준하는 리프팅 효과를 기대할 수 있습니다."
      ]}
      coreHighlight={"REFINE은 개인마다 다른 피부 노화 패턴과 골격 구조를 고려하여 최적의 리프팅 프로토콜을 설계해 드립니다."}
      coreImg="https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="리프팅 프로그램"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>1:1 맞춤 상담으로<br className="md:hidden" /> 최적의 리프팅을 찾아보세요</>}
      ctaDesc="정밀 진단을 통해 피부 상태에 가장 알맞은 리프팅 프로토콜을 설계해 드립니다."
    />
  );
}
