import TreatmentTemplate from "../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function CollagenBoosterPage() {
  const treatments = [
    {
      id: "juvelook",
      num: "01",
      title: "쥬베룩 / 쥬베룩 볼륨",
      titleEn: "JUVELOOK",
      subtitle: "PDLLA + HA",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"PLA와 히알루론산의 시너지로 자가 콜라겐을 채우는 쥬베룩\"",
      desc: "고분자 PLA와 히알루론산을 결합하여 자가 콜라겐 생성을 유도하는 시술입니다. 피부결, 잔주름 개선은 물론 꺼진 볼륨을 자연스럽게 채워주는 효과가 뛰어납니다.",
      points: [],
      headline2: "\"PDLLA 미세입자가 진피층에서 콜라겐 골격을 형성\"",
      details: [
        "생분해성 PDLLA 미세입자가 진피층에 주입되어 콜라겐이 생성될 수 있는 골격(스캐폴드)을 형성합니다.",
        "히알루론산이 즉각적인 수분과 볼륨을 제공하는 동안, PDLLA가 서서히 분해되며 수개월에 걸쳐 자가 콜라겐을 촘촘하게 채워줍니다.",
      ],
      tags: ["Collagen Induction", "Natural Volume", "Skin Texture"],
      duration: "20분 ~ 30분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 붉은기 및 잔붓기 완화",
      maintenance: "4주 간격 3회 시술 시 1년 이상"
    },
    {
      id: "sculptra",
      num: "02",
      title: "스컬트라",
      titleEn: "SCULPTRA",
      subtitle: "PLLA",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"FDA 승인 PLLA 성분으로 강력한 콜라겐 생성을 유도하는 스컬트라\"",
      desc: "FDA 승인을 받은 PLLA 성분을 주입해 체내 콜라겐 생성을 강력하게 촉진합니다. 얼굴 전체적인 볼륨 감소와 깊은 주름 개선에 탁월한 프리미엄 시술입니다.",
      points: [],
      headline2: "\"PLLA 입자가 섬유아세포를 자극하여 콜라겐 네트워크 재건\"",
      details: [
        "주입된 PLLA 미세입자가 체내에서 서서히 분해되면서 주변 섬유아세포에 지속적인 자극을 가해 콜라겐 생성을 유도합니다.",
        "새로 생성된 콜라겐이 촘촘한 네트워크를 형성하여 꺼진 볼, 관자놀이, 팔자주름 등에 자연스러운 볼륨을 최대 2년간 유지합니다.",
      ],
      tags: ["Full-Face Volume", "Long-Lasting", "FDA Approved"],
      duration: "30분",
      anesthesia: "크림 마취",
      recovery: "결절 예방을 위한 마사지 필요(5-5-5 법칙)",
      maintenance: "4~6주 간격 3회 시술 시 약 2년"
    }
  ];

  const recommends = [
    "얼굴살이 빠지면서 볼이나 관자놀이가 푹 꺼지신 분",
    "인위적인 필러보다 자연스러운 볼륨을 원하시는 분",
    "잔주름이 많고 피부 탄력이 전체적으로 떨어지신 분",
    "여드름 흉터나 넓은 모공 개선이 필요하신 분",
    "오래 지속되는 안티에이징 효과를 원하시는 분"
  ];

  const processSteps = [
    { step: "01", title: "입체 진단", desc: "꺼진 부위와 주름의 깊이,\n얼굴의 전체적인 윤곽을 분석합니다.", icon: ScanLine },
    { step: "02", title: "디자인 및 용량 설계", desc: "개인별 고민 부위에 맞춰\n정확한 주입 용량과 위치를 디자인합니다.", icon: MessageCircle },
    { step: "03", title: "안전한 시술", desc: "캐뉼라를 이용하여 통증과 멍을\n최소화하며 정교하게 주입합니다.", icon: Sparkles },
    { step: "04", title: "사후 관리 안내", desc: "시술 결과 극대화 및 결절 예방을 위한\n맞춤 마사지 방법을 안내합니다.", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "일반 필러와 콜라겐 부스터의 차이점은 무엇인가요?",
      a: "히알루론산 필러는 주입 즉시 볼륨을 채우는 반면, 콜라겐 부스터는 피부 스스로 콜라겐을 생성하도록 유도하여 시간이 지날수록 볼륨이 서서히 차오르는 방식입니다. 이질감 없이 훨씬 자연스럽고 오랜 기간 유지되는 것이 특징입니다."
    },
    {
      q: "효과는 언제부터 나타나나요?",
      a: "콜라겐 생성이 이루어지는 기간이 필요하므로, 보통 시술 후 4~6주 뒤부터 볼륨감과 탄력이 개선되는 것을 서서히 느끼실 수 있습니다."
    },
    {
      q: "스컬트라의 5-5-5 마사지가 무엇인가요?",
      a: "결절(뭉침 현상)을 예방하고 성분이 고르게 퍼지게 하기 위해 시술 후 5일 동안, 하루 5번, 1회당 5분씩 해당 부위를 부드럽게 마사지해 주시는 방법입니다. 시술 후 자세히 안내해 드립니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Collagen Booster"
      pageDesc="시간이 지날수록 차오르는 자연스러운 볼륨, 당신만의 아름다움을 깨워보세요."
      heroImg={subHeroImg}
      coreTitle="콜라겐 부스터 핵심 원리"
      coreDesc={[
        "노화로 인해 소실된 피부 콜라겐을 인위적인 물질이 아닌, 내 몸의 자가 콜라겐으로 채워주는 시술입니다.",
        "생분해성 고분자 물질(PLA)을 진피층과 피하조직에 주입하여 섬유아세포를 자극하고 콜라겐 생성을 유도합니다. 볼륨 감소가 심한 볼, 팔자주름, 관자놀이 등을 자연스럽게 개선하며, 피부 전반의 두께와 탄력을 증가시켜 생기 있는 동안 얼굴을 완성합니다."
      ]}
      coreHighlight="섬세한 용량 조절과 주입 스킬이 필수적인 시술인 만큼,\nREFINE의 숙련된 의료진이 1:1 맞춤 디자인으로 안전하게 시술합니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="콜라겐 부스터 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>자연스럽게 차오르는<br className="md:hidden" /> 탄력과 볼륨을 경험해 보세요</>}
      ctaDesc="REFINE만의 노하우가 담긴 디자인 시술로 입체적인 아름다움을 선사합니다."
    />
  );
}