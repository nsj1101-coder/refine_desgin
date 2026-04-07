import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { jpMockInquiries } from "./JpInquiryPage";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const mockContents: Record<number, { question: string; answer?: string }> = {
  12: {
    question: "先週リフティング施術を受けたのですが、まだむくみが残っています。通常、むくみが完全に引くまでどのくらいかかりますか？また、むくみを早く引かせるのに効果的な方法があれば教えてください。",
    answer: "リフティング施術後のむくみには個人差がありますが、通常3〜7日以内にほとんどが落ち着きます。施術部位を冷やし、就寝時に頭をやや高くすると効果的です。2週間以上続く場合は、ご来院いただき経過を確認することをお勧めします。",
  },
  10: {
    question: "スキンブースターに興味があるのですが、通常どのくらいのサイクルで受ければ効果が維持できますか？また、施術直後の日常生活への影響も知りたいです。",
    answer: "スキンブースターは初回3〜4回を2〜3週間間隔で受けることをお勧めしており、その後の維持には2〜3ヶ月間隔での施術をお勧めしています。施術後に軽い赤みが出ることがありますが、当日のご洗顔やメイクアップが可能です。",
  },
  8: {
    question: "ニキビ跡がかなり深いのですが、どのような治療を受ければよいかご相談したいです。おおよその治療費用と期間もお聞かせいただければ幸いです。",
    answer: "ニキビ跡の種類（アイスピック・ボックスカー・ローリング）によって治療方法が異なります。ご来院いただければ精密診断の後、レーザー・サブシジョン・フィラーなど複合的な治療計画をご提案いたします。正確な費用はお肌の状態によって異なりますので、無料相談をご予約ください。",
  },
  7: {
    question: "季節の変わり目になるとお肌が乾燥して角質が目立つのですが、クリニックで受けられるケアはありますか？ホームケアの方法も教えていただければ嬉しいです。",
    answer: "季節の変わり目の肌バリア強化には、水分ブースター施術や鎮静レーザーをお勧めします。ホームケアとしては、セラミド成分の保湿剤をご使用いただき、洗顔時はぬるま湯をお使いください。スクラブやピーリング製品は刺激になる可能性があるため、季節の変わり目はお控えください。",
  },
  5: {
    question: "鼻と頬周りの毛穴が広がっていて悩んでいます。毛穴縮小に効果的な施術の種類と、施術後のケア方法も教えてください。",
    answer: "毛穴縮小にはフラクショナルレーザー、ピコトーニング、スキンブースター複合治療が効果的です。施術後は直射日光を避け、皮脂管理のための低刺激クレンザーのご使用をお勧めします。ご来院相談時に、お肌の状態に合わせたカスタムプログラムをご案内いたします。",
  },
  4: {
    question: "オールデプスリフティングが一般的なリフティングとどう違うのか知りたいです。効果や持続期間、痛みの程度も比較して教えていただければ助かります。",
    answer: "オールデプスリフティングは表皮・真皮・SMAS層まで各肌層を複合的にターゲットにすることで、より自然で深いリフティング効果を提供します。一般的なリフティングより持続期間が長く（約12〜18ヶ月）、施術中は局所麻酔で痛みを最小限に抑えます。詳しいご相談はご来院時にご案内いたします。",
  },
  2: {
    question: "コラーゲンブースターを受けると効果はどのくらい続きますか？また、他の施術と併用しても大丈夫でしょうか？",
    answer: "コラーゲンブースターは施術後にコラーゲン生成が促進され、約6〜12ヶ月効果が持続します。スキンブースターやリフティングなど他の施術との併用でシナジー効果が期待できます。適切な施術間隔はお肌の状態によって異なりますので、ご相談の上ご決定ください。",
  },
  1: {
    question: "初めて来院したいのですが、相談の流れはどうなっていますか？予約なしで訪問しても大丈夫でしょうか？",
    answer: "初回来院時は受付後、専門カウンセラーとの1対1の相談を行い、その後院長による精密診断相談へと続きます。スムーズなご相談のため、事前予約をお勧めしており、お電話（02-544-1005）またはオンラインでのご予約が可能です。相談のみでも遠慮なくお気軽にお越しください。",
  },
};

export default function JpInquiryDetailPage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { id } = useParams();
  const inquiryId = Number(id);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const inquiry = jpMockInquiries.find(item => item.id === inquiryId);
  const content = mockContents[inquiryId];

  if (!inquiry) {
    return (
      <ScaledPageWrapper>
        <div className="w-full min-h-screen bg-white flex items-center justify-center">
          <p className="text-[#6b5f58]">投稿が見つかりません。</p>
        </div>
      </ScaledPageWrapper>
    );
  }

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600947871775-082dd97e2d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Consultation Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="absolute inset-0 bg-black/40 z-0" style={{ opacity: heroOpacity }} />

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeInUp delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >Community</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Online Inquiry
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                ご質問をお寄せいただければ、専門医療スタッフが迅速・正確にお答えいたします。
              </motion.p>
            </FadeInUp>
          </motion.div>

          <motion.div
            className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[16px] z-10 pointer-events-none"
            style={{ opacity: heroOpacity }}
          >
            <span className="text-white text-[14px] font-['Montserrat',sans-serif] font-medium tracking-[3px] uppercase opacity-70">Scroll</span>
            <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
              <motion.div
                className="w-full h-1/2 bg-white absolute left-0"
                animate={{ top: ['-50%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="max-w-[1000px] mx-auto">

              <FadeInUp>
                <div className="border-t-2 border-[#1c1614] pt-10 pb-8 border-b border-b-[#e8e5e0]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[13px] text-[#b8a99a] border border-[#e8e5e0] px-3 py-1">
                      {inquiry.category}
                    </span>
                    {inquiry.hasAnswer ? (
                      <span className="text-[12px] font-medium text-white bg-[#1c1614] px-3 py-1">回答完了</span>
                    ) : (
                      <span className="text-[12px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-3 py-1">回答待ち</span>
                    )}
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] font-light tracking-[-1px] leading-[1.3] mb-6">
                    {inquiry.title}
                  </h2>
                  <div className="flex items-center gap-4 text-[14px] text-[#b8a99a]">
                    <span>{inquiry.author}</span>
                    <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                    <span className="font-['Montserrat',sans-serif] tracking-[0.5px]">{inquiry.date}</span>
                    <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                    <span className="font-['Montserrat',sans-serif]">Views {inquiry.views}</span>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="py-12 md:py-16 border-b border-[#e8e5e0]">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="shrink-0 w-8 h-8 bg-[#1c1614] text-white flex items-center justify-center font-['Montserrat',sans-serif] text-[14px] font-medium">
                      Q
                    </span>
                    <span className="text-[14px] text-[#b8a99a] font-medium mt-1.5">お問い合わせ内容</span>
                  </div>
                  <div className="pl-12">
                    <p className="text-[16px] md:text-[17px] text-[#1c1614] leading-[2] tracking-[-0.3px]">
                      {content?.question || "お問い合わせ内容がありません。"}
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {inquiry.hasAnswer && content?.answer && (
                <FadeInUp delay={0.2}>
                  <div className="py-12 md:py-16 border-b border-[#e8e5e0] bg-[#faf6f1]/50">
                    <div className="flex items-start gap-4 mb-6 px-6 md:px-10">
                      <span className="shrink-0 w-8 h-8 bg-[#b8a99a] text-white flex items-center justify-center font-['Montserrat',sans-serif] text-[14px] font-medium">
                        A
                      </span>
                      <span className="text-[14px] text-[#b8a99a] font-medium mt-1.5">回答</span>
                    </div>
                    <div className="pl-12 md:pl-[76px] pr-6 md:pr-10">
                      <p className="text-[16px] md:text-[17px] text-[#6b5f58] leading-[2] tracking-[-0.3px]">
                        {content.answer}
                      </p>
                      <p className="mt-8 text-[14px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[1px]">
                        — Medical Team
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              )}

              <FadeInUp delay={0.3}>
                <div className="flex items-center justify-center gap-4 mt-16">
                  <button
                    onClick={() => navigate("/jp/community/inquiry")}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#1c1614] hover:text-white transition-colors duration-300"
                  >
                    List
                  </button>
                  <button
                    onClick={() => navigate("/jp/community/inquiry/write")}
                    className="px-12 py-4 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                  >
                    投稿する
                  </button>
                </div>
              </FadeInUp>

            </div>
          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}
