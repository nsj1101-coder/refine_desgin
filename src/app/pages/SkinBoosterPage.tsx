import TreatmentTemplate from "../components/TreatmentTemplate";
import { Leaf, ScanFace, Syringe, HeartPulse, Sparkles, MessageCircle, ScanLine } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function SkinBoosterPage() {
  const treatments = [
    {
      id: "rejuran",
      num: "01",
      title: "리쥬란 힐러",
      titleEn: "REJURAN",
      subtitle: "Polynucleotide",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"연어 유래 PN 성분으로 손상된 피부를 근본적으로 복원하는 리쥬란 힐러\"",
      desc: "연어에서 추출한 생체 복합 물질(PN)을 진피층에 직접 투여하여 손상된 피부 구조를 복원하고, 탄력과 재생력을 높여주는 근본적인 피부 힐링 시술입니다.",
      points: [],
      headline2: "\"폴리뉴클레오타이드(PN)가 섬유아세포를 활성화하여 피부 자생력 회복\"",
      details: [
        "연어 DNA에서 추출한 PN 성분이 진피층의 섬유아세포를 직접 자극하여 콜라겐과 엘라스틴 생성을 촉진합니다.",
        "손상된 피부 조직의 성장인자 분비를 유도하여 피부 두께를 증가시키고, 유수분 밸런스를 정상화합니다.",
      ],
      tags: ["Skin Healing", "Hydration Balance", "Anti-Aging"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "1~2일 내 엠보싱 완화",
      maintenance: "2~3주 간격 3회 권장"
    },
    {
      id: "nctf",
      num: "02",
      title: "필로가 135 (NCTF)",
      titleEn: "FILORGA NCTF",
      subtitle: "NCTF 135 HA",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"53가지 복합 영양 성분으로 피부 노화를 다각도로 개선하는 필로가 NCTF\"",
      desc: "53가지 복합 성분과 히알루론산을 최적의 비율로 조합하여 피부 노화를 방지하고 색소 침착, 주름, 탄력을 복합적으로 개선하는 프랑스 프리미엄 스킨부스터입니다.",
      points: [],
      headline2: "\"비타민, 아미노산, 미네랄 등 53종 성분이 진피층에 직접 영양 공급\"",
      details: [
        "히알루론산이 진피층의 수분을 채우는 동시에, 12종 비타민, 23종 아미노산, 6종 미네랄 등이 세포 대사를 활성화합니다.",
        "복합 영양 성분이 콜라겐 합성을 촉진하고 멜라닌 생성을 억제하여, 피부 광채와 톤업 효과를 동시에 실현합니다.",
      ],
      tags: ["Glow Skin", "Multi-Nutrient", "Premium Booster"],
      duration: "15분 ~ 20분",
      anesthesia: "크림 마취",
      recovery: "거의 없음 (즉시 일상생활 가능)",
      maintenance: "2주 간격 3~5회 권장"
    },
    {
      id: "exosome",
      num: "03",
      title: "엑소좀",
      titleEn: "EXOSOME",
      subtitle: "Exosome Cell Therapy",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"줄기세포 유래 엑소좀으로 세포 재생 능력을 극대화하는 차세대 부스터\"",
      desc: "줄기세포 배양액의 핵심 성분인 엑소좀을 피부에 전달하여 세포 자체의 재생 능력을 극대화하고, 항염 효과가 뛰어나 염증성 피부나 트러블 개선에 탁월합니다.",
      points: [],
      headline2: "\"나노 크기의 엑소좀이 세포 간 신호를 전달하여 재생 프로그램 가동\"",
      details: [
        "줄기세포에서 분비된 나노 크기(30~150nm)의 엑소좀이 손상된 피부 세포에 직접 재생 신호를 전달합니다.",
        "강력한 항염 인자가 트러블과 염증을 빠르게 진정시키고, 성장인자가 피부 장벽을 강화하여 건강한 피부 환경을 조성합니다.",
      ],
      tags: ["Cell Regeneration", "Anti-Inflammation", "Barrier Repair"],
      duration: "15분",
      anesthesia: "크림 마취",
      recovery: "거의 없음",
      maintenance: "3~4주 간격 3회 권장"
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
      coreHighlight="REFINE은 개인마다 다른 피부 타입과 고민에 맞추어\n수분, 재생, 미백 등 최적의 스킨부스터 앰플을 처방해 드립니다."
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