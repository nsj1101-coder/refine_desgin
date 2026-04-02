import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Syringe, HeartPulse, Sparkles, MessageCircle, ScanLine } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function SkinBoosterPage() {
  const treatments = [
    {
      id: "revive",
      num: "01",
      title: "리바이브",
      titleEn: "REVIVE",
      subtitle: "Exosome + Growth Factor",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "줄기세포 유래 엑소좀과 성장인자를 피부에 직접 전달하여 손상된 세포의 재생 능력을 극대화하고, 피부 장벽을 강화하여 근본적인 피부 환경 개선과 안티에이징 효과를 실현합니다.",
      desc: "",
      points: ["세포 재생 능력 극대화", "피부 장벽 강화", "강력한 항염 진정 효과"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부가 얇아지고 탄력이 급격히 떨어진 분",
        "피부 장벽이 약해 외부 자극에 민감한 분",
        "레이저 시술 후 빠른 재생과 회복을 원하는 분",
        "최신 재생 치료로 피부를 근본적으로 개선하고 싶은 분",
      ],
      tags: ["Cell Regeneration", "Barrier Repair", "Anti-Aging"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "거의 없음",
      maintenance: "3~4주 간격 3회 권장"
    },
    {
      id: "juvelook",
      num: "02",
      title: "쥬베룩",
      titleEn: "JUVELOOK",
      subtitle: "PDLLA + HA",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "고분자 PDLLA와 히알루론산을 결합하여 진피층에 자가 콜라겐 생성을 유도하며, 피부결과 잔주름 개선은 물론 꺼진 볼륨을 자연스럽게 채워주는 차세대 스킨부스터입니다.",
      desc: "",
      points: ["자가 콜라겐 생성 유도", "자연스러운 볼륨 회복", "피부결 및 잔주름 개선"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "얼굴살이 빠지면서 볼이 꺼지기 시작한 분",
        "인위적인 필러보다 자연스러운 볼륨감을 원하는 분",
        "잔주름이 많아지고 피부 탄력이 떨어진 분",
        "오래 지속되는 안티에이징 효과를 원하는 분",
      ],
      tags: ["Collagen Induction", "Natural Volume", "Skin Texture"],
      duration: "20분 ~ 30분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 붉은기 및 잔붓기 완화",
      maintenance: "4주 간격 3회 시술 시 1년 이상"
    },
    {
      id: "rejuran",
      num: "03",
      title: "리쥬란",
      titleEn: "REJURAN",
      subtitle: "Polynucleotide (PN)",
      img: "https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "연어 유래 폴리뉴클레오타이드(PN) 성분을 진피층에 직접 투여하여 손상된 피부 구조를 복원하고, 콜라겐과 엘라스틴 생성을 촉진해 피부 본연의 탄력과 재생력을 높여줍니다.",
      desc: "",
      points: ["피부 자생력 회복", "콜라겐·엘라스틴 촉진", "유수분 밸런스 정상화"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "피부가 얇아지고 잔주름이 늘어난 분",
        "속건조가 심하여 화장품만으로 해결이 안 되는 분",
        "피부 탄력이 떨어져 전반적인 재생이 필요한 분",
        "근본적인 피부 체질 개선을 원하는 분",
      ],
      tags: ["Skin Healing", "Hydration Balance", "Regeneration"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 엠보싱 완화",
      maintenance: "2~3주 간격 3회 권장"
    },
    {
      id: "ha",
      num: "04",
      title: "히알루론산",
      titleEn: "HYALURONIC ACID",
      subtitle: "HA Skin Booster",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "비가교 히알루론산을 진피층에 직접 주입하여 피부 속부터 깊은 수분을 채우고, 건조하고 푸석해진 피부에 즉각적인 윤기와 탄력을 부여하는 기본 보습 부스터입니다.",
      desc: "",
      points: ["진피층 깊은 수분 공급", "즉각적인 윤기와 광채", "피부톤 균일화"],
      headline2: "이런 분께 추천합니다.",
      details: [
        "속건조가 심하고 피부가 푸석해진 분",
        "화장이 잘 먹지 않고 피부에 윤기가 없는 분",
        "가볍고 부담 없는 보습 시술을 찾는 분",
        "다른 시술과 병행하여 피부 컨디션을 높이고 싶은 분",
      ],
      tags: ["Deep Hydration", "Glow Skin", "Moisture Boost"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "거의 없음 (즉시 일상생활 가능)",
      maintenance: "2주 간격 3~5회 권장"
    }
  ];

  const recommends = [
    "피부가 얇아지고 잔주름이 늘어 고민이신 분",
    "속건조가 심해 어떤 화장품을 써도 건조하신 분",
    "피부톤이 칙칙하고 윤기가 없어 보이시는 분",
    "염증성 여드름, 잦은 트러블로 고생하시는 분",
    "자연스럽고 건강한 피부 본연의 아름다움을 찾고 싶은 분"
  ];

  const processSteps = [
    { step: "01", title: "1:1 맞춤 진단", desc: "현재 피부의 수분도와 탄력,\n고민을 세밀하게 분석합니다.", icon: MessageCircle },
    { step: "02", title: "제품 설계", desc: "분석 결과를 바탕으로\n최적의 부스터를 선택합니다.", icon: ScanLine },
    { step: "03", title: "정교한 주입", desc: "필요한 진피층 깊이에 맞춰\n균일하게 성분을 전달합니다.", icon: Sparkles },
    { step: "04", title: "진정 및 관리", desc: "시술 직후 피부 진정 팩으로\n회복을 돕고 관리법을 안내합니다.", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "시술 시 통증이 심한가요?",
      a: "주사 시술의 특성상 약간의 따끔거림은 있을 수 있습니다. 하지만 시술 전 충분한 크림 마취를 진행하며, 통증이 걱정되시는 분들을 위해 다양한 쿨링 장비와 무통증 인젝터를 활용하여 불편함을 최소화해 드립니다."
    },
    {
      q: "엠보싱 현상(올록볼록함)은 얼마나 가나요?",
      a: "리쥬란 힐러 등 점성이 높은 제품은 시술 직후 피부 표면이 모기 물린 것처럼 볼록해지는 엠보싱 현상이 발생합니다. 이는 약물이 진피층에 잘 주입되었다는 증거이며, 보통 1~3일 이내에 자연스럽게 흡수되어 사라집니다."
    },
    {
      q: "한 번의 시술로도 효과가 있나요?",
      a: "1회 시술로도 피부 속당김 개선과 일시적인 윤기를 느낄 수 있지만, 스킨부스터는 피부 세포의 근본적인 환경을 개선하는 시술이므로 2~4주 간격으로 3회 이상 꾸준히 받으시는 것을 권장해 드립니다."
    },
    {
      q: "다른 레이저 시술과 함께 받아도 되나요?",
      a: "네, 함께 받으시면 시너지 효과를 기대할 수 있습니다. 예를 들어, 리프팅 레이저로 탄력을 잡고 스킨부스터로 속보습과 재생을 더해주면 피부 결과 톤, 탄력까지 복합적으로 개선되는 훌륭한 효과를 얻을 수 있습니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Skin Booster"
      pageDesc="피부 깊은 곳부터 채우는 수분과 영양, 맑고 투명한 피부를 완성합니다."
      heroImg={subHeroImg}
      coreTitle="스킨부스터 핵심 원리"
      coreDesc={[
        "화장품만으로는 닿지 않는 피부 속 깊은 진피층에 직접 유효 성분을 전달하여 피부의 자생력을 키워주는 시술입니다.",
        "단순히 겉표면만 일시적으로 촉촉해지는 것이 아니라, 콜라겐 생성을 촉진하고 손상된 피부 세포를 복원하여 근본적인 피부 환경을 건강하게 개선합니다. 속건조 해결은 물론 잔주름, 피부결, 피부톤까지 전반적인 안티에이징 효과를 기대할 수 있습니다."
      ]}
      coreHighlight="REFINE은 개인마다 다른 피부 타입과 고민에 맞추어 수분, 재생, 미백 등 최적의 스킨부스터 앰플을 처방해 드립니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="스킨부스터 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>1:1 맞춤 상담으로<br className="md:hidden" /> 최적의 스킨부스터를 찾아보세요</>}
      ctaDesc="정밀 진단을 통해 피부 컨디션에 가장 알맞은 앰플을 처방해 드립니다."
    />
  );
}