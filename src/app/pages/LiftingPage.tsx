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
      headline: "\"피부 속 빈틈을 콜라겐으로 채워 완성하는 촘촘한 탄력, 덴서티(DENSITY) 리프팅\"",
      desc: "단순히 겉피부만 당기는 것이 아닙니다. 6.78MHz의 강력한 고주파(RF) 에너지를 이용해 노화로 인해 얇아진 진피층에 새로운 콜라겐 생성을 유도하고, 무너진 페이스 라인을 매끄럽고 단단하게 재건하는 프리미엄 탄력 리프팅입니다.",
      points: [],
      headline2: "\"피부 속을 고주파 열로 채워 콜라겐 밀도 증가\"",
      details: [
        "강력한 고주파 에너지를 진피층 깊숙이 전달합니다.",
        "열 자극을 통해 느슨해진 콜라겐을 수축시키고, 새로운 콜라겐 생성을 유도해 피부 속을 촘촘하게 채웁니다.",
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
      headline: "\"통증은 줄이고, 탄력과 윤곽은 동시에 잡는 극초음파, 온다(ONDA) 리프팅\"",
      desc: "불필요한 볼륨은 줄이고 피부의 밀도는 높입니다. 특허받은 마이크로웨이브(극초음파) 에너지를 이용하여 표피의 손상과 통증을 최소화하면서, 지방층을 감소시키고 진피층의 콜라겐을 리모델링하는 프리미엄 윤곽 타이트닝 시술입니다.",
      points: [],
      headline2: "\"표면 손상 없이 지방층과 진피층만 정밀 타겟팅\"",
      details: [
        "특허받은 극초음파 에너지가 피부 겉은 안전하게 통과하고 속(지방층, 진피층)에만 열을 전달합니다.",
        "불필요한 지방 세포는 분해하고 콜라겐 섬유는 강하게 수축시켜, 통증 없이 윤곽을 매끄럽게 다듬습니다.",
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
      headline: "\"피부 깊은 곳부터 끌어올려 완성하는 입체적인 V라인, 슈링크(SHURINK) 리프팅\"",
      desc: "늘어지고 처진 얼굴선의 근본적인 원인을 해결합니다. 고강도 집속 초음파(HIFU) 에너지를 피부 속 가장 깊은 근막층(SMAS)까지 전달하여, 수술 없이도 피부 조직을 탄탄하게 수축시키고 중력을 거스르는 강력한 리프팅 효과를 선사합니다.",
      points: [],
      headline2: "\"돋보기 원리로 초음파를 모아 가장 깊은 곳부터 리프팅\"",
      details: [
        "돋보기로 빛을 모으듯, 강력한 초음파 에너지를 피부 가장 깊은 근막층(SMAS)에 집중시킵니다.",
        "타겟팅된 부위에 미세한 열응고점을 만들어, 늘어진 피부 조직을 즉각적으로 수축시키고 위로 당겨 올립니다.",
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
      headline: "\"피부 겉과 속을 동시에 재생하는 촘촘한 맞춤형 코어 부스터, 포텐자(POTENZA)\"",
      desc: "개개인의 피부 고민에 맞춘 정교한 솔루션입니다. 마이크로 니들(미세침)을 통해 진피층에 고주파(RF) 에너지를 직접 전달하여, 넓어진 모공과 흉터를 개선하고 콜라겐 생성을 유도해 피부 근본의 건강함과 탄력을 되찾아 줍니다.",
      points: [],
      headline2: "\"미세침과 고주파 열에너지의 듀얼 재생 시스템\"",
      details: [
        "머리카락보다 얇은 미세침이 피부에 침투해 물리적인 재생 반응을 유도합니다.",
        "동시에 침투된 바늘 끝에서 고주파 에너지를 방출하여, 넓어진 모공을 조이고 전반적인 피부 결을 개선합니다.",
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
    { step: "01", title: "1:1 맞춤 상담", desc: "피부 상태와 고민을 파악하고\n최적의 시술을 설계합니다", icon: MessageCircle },
    { step: "02", title: "정밀 진단", desc: "피부 층별 상태를 분석하여\n시술 깊이와 강도를 결정합니다", icon: ScanLine },
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
      coreHighlight={"REFINE은 개인마다 다른 피부 노화 패턴과 골격 구조를 고려하여\n최적의 리프팅 프로토콜을 설계해 드립니다."}
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
