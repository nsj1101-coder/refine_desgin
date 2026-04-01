import TreatmentTemplate from "../components/TreatmentTemplate";
import { ScanLine, MessageCircle, Sparkles, HeartPulse } from "lucide-react";
import subHeroImg from "figma:asset/70813029fd42410de275caf717d98f8d5ed04279.png";

export default function PetitPage() {
  const treatments = [
    {
      id: "botox",
      num: "01",
      title: "보톡스",
      titleEn: "BOTOX",
      subtitle: "Botulinum Toxin",
      img: "https://images.unsplash.com/photo-1754941622117-97957c5d669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"표정 근육을 정밀하게 이완시켜 주름과 윤곽을 동시에 잡는 보톡스\"",
      desc: "표정 근육을 일시적으로 이완시켜 이마, 미간, 눈가 등의 주름을 개선하거나 발달된 사각턱, 승모근 등의 근육 부피를 줄여 매끄러운 라인을 만들어줍니다.",
      points: [],
      headline2: "\"보툴리눔 톡신이 신경-근육 접합부에 작용하여 근육 이완\"",
      details: [
        "보툴리눔 톡신이 과도하게 수축하는 표정 근육의 신경 신호를 차단하여 주름을 부드럽게 펴줍니다.",
        "발달된 사각턱이나 승모근에 적용하면 근육 부피가 점차 줄어들어 매끄럽고 세련된 라인을 완성합니다.",
      ],
      tags: ["Wrinkle Relaxation", "Jawline Contouring", "Quick Procedure"],
      duration: "5분 ~ 10분",
      anesthesia: "아이스 쿨링 또는 크림 마취",
      recovery: "즉시 일상생활 가능",
      maintenance: "3개월 ~ 6개월"
    },
    {
      id: "filler",
      num: "02",
      title: "필러",
      titleEn: "FILLER",
      subtitle: "Hyaluronic Acid",
      img: "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"히알루론산으로 즉각적인 입체감과 볼륨을 완성하는 필러\"",
      desc: "인체 성분과 유사한 히알루론산을 주입하여 깊게 패인 주름이나 볼륨이 부족한 코, 입술, 이마 등에 즉각적인 입체감을 더해주는 시술입니다.",
      points: [],
      headline2: "\"히알루론산이 진피층에서 수분을 끌어당겨 볼륨을 형성\"",
      details: [
        "체내 성분과 동일한 히알루론산 겔이 주입 즉시 빈 공간을 채우고 주변의 수분을 끌어당겨 자연스러운 볼륨을 형성합니다.",
        "제품의 점도와 탄성에 따라 코, 턱, 입술 등 부위별 맞춤 필러를 선택하여 조화로운 입체감을 디자인합니다.",
      ],
      tags: ["Volume Restoration", "Facial Contouring", "Instant Result"],
      duration: "10분 ~ 20분",
      anesthesia: "크림 마취 또는 국소 마취",
      recovery: "1~2일 내 잔붓기 완화",
      maintenance: "6개월 ~ 1년 (제품에 따라 상이)"
    },
    {
      id: "thread",
      num: "03",
      title: "실리프팅",
      titleEn: "THREAD LIFTING",
      subtitle: "PDO/PCL Thread",
      img: "https://images.unsplash.com/photo-1748543669178-efd3de4e64e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      headline: "\"녹는 실로 처진 피부를 끌어올리고 콜라겐까지 유도하는 실리프팅\"",
      desc: "의료용 녹는 실을 피부 진피층에 삽입하여 처진 피부를 직접 당겨 올리고 주변 콜라겐 생성을 촉진해 탄력을 개선하는 강력한 리프팅 시술입니다.",
      points: [],
      headline2: "\"코그(돌기) 달린 의료용 실이 조직을 물리적으로 견인\"",
      details: [
        "미세한 코그(돌기)가 달린 의료용 실을 피부 속에 삽입하여 처진 조직을 물리적으로 당겨 올려 즉각적인 V라인을 완성합니다.",
        "삽입된 실이 체내에서 서서히 녹으면서 주변 조직에 콜라겐 생성을 유도하여, 시술 효과가 수개월에 걸쳐 더욱 향상됩니다.",
      ],
      tags: ["V-Line Lifting", "Collagen Induction", "Non-Surgical"],
      duration: "30분 ~ 40분",
      anesthesia: "국소 마취",
      recovery: "3~5일 (멍이나 붓기가 있을 수 있음)",
      maintenance: "1년 내외"
    }
  ];

  const recommends = [
    "수술 없이 간편하게 얼굴 윤곽을 개선하고 싶은 분",
    "이마, 미간 등 굵은 표정 주름이 신경 쓰이는 분",
    "입술, 애교살, 코 등 특정 부위에 포인트 볼륨을 원하시는 분",
    "발달된 사각턱이나 승모근 근육을 매끄럽게 줄이고 싶은 분",
    "빠른 시술 시간과 즉각적인 효과가 필요하신 분"
  ];

  const processSteps = [
    { step: "01", title: "얼굴형 분석", desc: "고객님의 골격과 근육 움직임,\n피부 두께를 면밀히 분석합니다.", icon: ScanLine },
    { step: "02", title: "맞춤 디자인", desc: "비대칭을 교정하고 가장 아름다운\n비율을 찾아 섬세하게 디자인합니다.", icon: MessageCircle },
    { step: "03", title: "정교한 시술", desc: "안전이 입증된 정품·정량만을 사용하여\n조심스럽게 시술을 진행합니다.", icon: Sparkles },
    { step: "04", title: "몰딩 및 확인", desc: "시술 부위의 모양을 정교하게 잡고\n고객님과 함께 결과를 확인합니다.", icon: HeartPulse },
  ];

  const faqs = [
    {
      q: "보톡스 내성이 생기면 어떡하나요?",
      a: "잦은 시술이나 고용량 사용 시 내성이 생길 가능성이 있습니다. 이를 예방하기 위해 REFINE에서는 권장 주기와 적정 용량을 철저히 지키며, 복합 단백질을 제거한 내성 발현이 적은 순수 톡신 제품을 추천해 드리고 있습니다."
    },
    {
      q: "필러 시술 후 주의사항이 있나요?",
      a: "시술 부위를 강하게 문지르거나 누르지 마시고, 1~2주간은 모양이 변형될 수 있으므로 사우나, 과격한 운동, 과음은 피해 주시는 것이 좋습니다. 엎드려 자는 자세도 피하시는 것을 권장합니다."
    },
    {
      q: "시술 결과가 마음에 들지 않으면 필러를 녹일 수 있나요?",
      a: "히알루론산(HA) 성분의 필러는 '히알루로니다아제'라는 효소를 통해 언제든지 안전하게 녹일 수 있습니다. 따라서 결과에 대한 부담 없이 시술받으실 수 있습니다."
    }
  ];

  return (
    <TreatmentTemplate
      pageTitleEn="Petit Plastic Surgery"
      pageDesc="수술 없이 티 나지 않게, 당신의 미세한 콤플렉스를 채우고 다듬어 드립니다."
      heroImg={subHeroImg}
      coreTitle="쁘띠성형 핵심 원리"
      coreDesc={[
        "수술의 부담 없이 주사만으로 얼굴의 단점을 보완하고 입체감을 살려주는 미용 시술입니다.",
        "근육의 움직임을 조절하는 톡신과 볼륨을 채워주는 필러 등을 통해 1mm의 미세한 변화로 전체적인 인상을 크게 개선할 수 있습니다. 짧은 시술 시간과 빠른 회복으로 바쁜 현대인들에게 가장 만족도가 높은 시술 중 하나입니다."
      ]}
      coreHighlight="아름다움은 과하지 않을 때 돋보입니다.\nREFINE은 해부학적 지식을 바탕으로 가장 자연스럽고 조화로운 결과를 지향합니다."
      coreImg="https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      treatmentTitle="쁘띠 시술 종류"
      treatments={treatments}
      processSteps={processSteps}
      recommends={recommends}
      faqs={faqs}
      ctaTitle={<>작은 디테일의 차이가<br className="md:hidden" /> 큰 아름다움을 만듭니다</>}
      ctaDesc="REFINE의 전문 의료진과 상의하여 자연스러운 변화를 계획해 보세요."
    />
  );
}