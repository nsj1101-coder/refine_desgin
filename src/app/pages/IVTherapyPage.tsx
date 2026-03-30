import TreatmentTemplate from "../components/TreatmentTemplate";
import { Stethoscope, FlaskConical, BedDouble, Activity } from "lucide-react";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";

export default function IVTherapyPage() {
  const treatments = [
    {
      id: "cinderella",
      num: "01",
      title: "신데렐라 주사",
      subtitle: "Thioctic Acid",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "항산화 작용이 비타민 C의 400배에 달하는 티옥트산을 주성분으로 하여, 체내 활성산소를 억제하고 신진대사를 촉진시켜 피로 회복과 피부 노화 방지에 도움을 주는 수액입니다.",
      points: [
        "강력한 항산화 및 안티에이징",
        "체지방 감소 및 신진대사 촉진",
        "만성 피로 회복 및 면역력 강화"
      ],
      duration: "30분 ~ 40분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "주 1~2회 권장"
    },
    {
      id: "white-jade",
      num: "02",
      title: "백옥 주사",
      subtitle: "Glutathione",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "멜라닌 색소의 합성을 억제하는 글루타치온을 정맥에 직접 투여하여, 피부톤을 맑고 환하게 가꿔주며 간 해독 작용을 도와 전반적인 컨디션을 회복시키는 수액입니다.",
      points: [
        "전신 미백 및 기미·잡티 예방",
        "간 기능 개선 및 중금속 해독",
        "맑고 투명한 피부톤 유지"
      ],
      duration: "30분 ~ 40분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "주 1~2회 권장"
    },
    {
      id: "garlic",
      num: "03",
      title: "마늘 주사",
      subtitle: "Vitamin B1",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      desc: "주사 시 마늘 특유의 향이 나서 붙여진 이름으로, 고농축 비타민 B1(알리신)을 공급하여 근육의 피로 물질을 분해하고 에너지를 즉각적으로 보충해 주는 활력 수액입니다.",
      points: [
        "근육 통증 완화 및 젖산 분해",
        "과음 후 숙취 해소",
        "떨어진 체력과 에너지 즉각 충전"
      ],
      duration: "30분 ~ 40분",
      anesthesia: "불필요",
      recovery: "즉시 일상생활 가능",
      maintenance: "피로 시 수시 권장"
    }
  ];

  const recommends = [
    "야근과 스트레스로 인해 만성 피로에 시달리시는 분",
    "잦은 음주 후 숙취 해소와 간 기능 회복이 필요하신 분",
    "칙칙해진 피부톤을 맑고 화사하게 개선하고 싶은 분",
    "면역력이 떨어져 감기나 대상포진에 자주 걸리시는 분",
    "피부과 시술 후 회복 속도와 시너지 효과를 높이고 싶은 분"
  ];

  const processSteps = [
    { step: "01", title: "1:1 컨디션 체크", desc: "현재의 건강 상태, 피로도, 고민 등을\n의료진과 꼼꼼히 상담합니다.", icon: Stethoscope },
    { step: "02", title: "맞춤 수액 처방", desc: "상담 결과를 바탕으로\n내 몸에 가장 필요한 영양 성분을 조합합니다.", icon: FlaskConical },
    { step: "03", title: "프라이빗 케어", desc: "편안한 1인 수액실에서\n휴식을 취하며 수액을 투여받습니다.", icon: BedDouble },
    { step: "04", title: "회복 및 귀가", desc: "투여 후 한결 가벼워진 컨디션으로\n바로 일상생활에 복귀합니다.", icon: Activity },
  ];

  const faqs = [
    {
      q: "수액 주사는 한 번만 맞아도 효과가 있나요?",
      a: "개인의 컨디션에 따라 다르지만, 1회 시술만으로도 피로가 풀리고 개운해지는 것을 느낄 수 있습니다. 다만 피부 미백이나 항산화 체질 개선 등 근본적인 효과를 원하신다면 주 1~2회 간격으로 5~10회 이상 꾸준히 맞으시는 것을 권장합니다."
    },
    {
      q: "피부과 레이저 시술과 같이 받아도 되나요?",
      a: "네, 오히려 함께 받으시는 것을 추천합니다. 수액을 통해 체내 면역력과 재생력이 높아진 상태에서 레이저 시술을 받으면 피부 회복이 훨씬 빨라지고, 미백 효과 등 시너지 작용을 기대할 수 있습니다."
    },
    {
      q: "마늘 주사를 맞으면 냄새가 오래 가나요?",
      a: "마늘 주사는 투여 시 코나 입 점막을 통해 미세한 마늘향을 본인만 일시적으로 느끼게 됩니다. 이는 성분의 특성일 뿐 체취나 입냄새로 남지 않으며 5~10분 내로 금방 사라지니 걱정하지 않으셔도 됩니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="IV Therapy"
      pageDesc="지친 일상에 활력을, 피부 깊숙은 곳부터 차오르는 에너지를 충전하세요."
      heroImg={subHeroImg}
      coreTitle="수액 치료 핵심 원리"
      coreDesc={[
        "고농축 비타민, 미네랄, 항산화제 등 우리 몸에 꼭 필요한 영양 성분을 정맥혈관을 통해 직접 투여하는 웰니스 케어입니다.",
        "경구 섭취(영양제 복용)의 경우 위장관을 거치면서 흡수율이 20~30%로 떨어지지만, 정맥 주사는 유효 성분이 세포에 100% 가깝게 직접 도달하여 즉각적인 피로 회복, 면역력 증진, 피부 항산화 효과를 발휘합니다."
      ]}
      coreHighlight="프라이빗하고 편안한 1인 수액실에서, 전문 의료진의 진단을 통해\n현재 컨디션에 가장 필요한 1:1 맞춤 영양 수액을 처방받으실 수 있습니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="수액 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>지친 몸과 피부에<br className="md:hidden" /> 빠른 에너지를 충전해 보세요</>}
      ctaDesc="REFINE의 맞춤 수액 솔루션으로 잃어버린 활력을 되찾아 드립니다."
    />
  );
}