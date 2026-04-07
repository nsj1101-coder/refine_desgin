import React from "react";
import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { ScaledPageWrapper } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function JpPromotionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allEvents = [
    {
      id: 2,
      branch: "REFINE 狎鴎亭",
      monthText: "February",
      period: "2026.02.01 - 2026.02.28",
      statusText: "開催中のイベント",
      title: "2月シグネチャーアンチエイジングパッケージ",
      isEnded: false,
      content: `
REFINE 皮膚科 狎鴎亭院 限定開催！

来たる春に向けた2月シグネチャーアンチエイジングパッケージで、
失われた弾力を取り戻し、生き生きとした輝きのある肌へと生まれ変わりましょう。

[ パッケージ詳細 ]
1. ウルセラ 300ショット + サーマジ FLX 300ショット：コラーゲン生成と強力なリフティング
2. ジュベルック ボリューム 3cc：凹んだ部位への自然なボリューム改善
3. クライオセル 鎮静ケア：施術後の迅速なお肌の回復と鎮静

※ 先着50名様限定でスキンブースター1回無料体験券をプレゼントいたします。
詳しい費用およびご予約のお問い合わせは、お電話にてお気軽にご相談ください。
      `
    },
    {
      id: 1,
      branch: "REFINE 狎鴎亭",
      monthText: "January",
      period: "2026.01.01 - 2026.01.31",
      statusText: "終了したイベント",
      title: "REFINE 1月リフティングスペシャル",
      isEnded: true,
      content: `
新年を迎えた1月限定リフティングスペシャル特典は、盛況のうちに終了いたしました。
多くのご参加をいただき、誠にありがとうございました。
今後もさらに充実したイベントをご用意してお待ちしております。
      `
    },
    {
      id: 3,
      branch: "REFINE 全店舗",
      monthText: "Spring",
      period: "2026.03.01 - 2026.03.15",
      statusText: "開催中のイベント",
      title: "春の美白ホワイトニング4週間完成",
      isEnded: false,
      content: `
季節の変わり目でくすんでしまった肌トーンを明るく整える、春の美白ホワイトニングプログラム！
REFINE 全店舗で同時開催する、わずか2週間の特別な特典です。

[ 4週間完成 ホワイトニングソリューション ]
1週目：ピコトーニング + ビタミン管理
2週目：シルフォームX + 再生クリーム塗布
3週目：ピコトーニング + クライオセル
4週目：エクソソーム スキンブースター + LDM 水滴リフティング

透明感のある明るい肌をご希望の方は、今すぐご相談のご予約を。
      `
    }
  ];

  const event = allEvents.find(e => e.id === Number(id)) || allEvents[0];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-white font-['Pretendard',sans-serif] font-light">
        <section className="relative w-full flex flex-col items-center justify-center bg-[#201814] pt-[200px] md:pt-[240px] pb-[80px] md:pb-[120px]">
          <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">
            <FadeInUp delay={0.1}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Promotion
              </motion.p>
              <motion.h1
                className="text-[36px] md:text-[56px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Event Detail
              </motion.h1>
            </FadeInUp>
          </div>
        </section>

        <section className="w-full bg-white min-h-[50vh]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[60px] md:py-[100px]">
            <div className="max-w-[1000px] mx-auto">
              <FadeInUp>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[13px] tracking-[1px] font-['Pretendard',sans-serif] px-3 py-1 border ${event.isEnded ? 'border-[#e8e5e0] text-[#a09a96]' : 'border-[#1c1614] text-[#1c1614]'}`}>
                      {event.statusText}
                    </span>
                    <span className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[1px] uppercase text-[#a09a96]">
                      {event.branch}
                    </span>
                  </div>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] font-['Pretendard',sans-serif] font-light tracking-[-1px] leading-[1.3] mb-4">
                    {event.title}
                  </h2>
                  <p className="text-[16px] text-[#a09a96] font-['Montserrat',sans-serif] tracking-[1px]">
                    {event.period}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#e8e5e0] mb-12"></div>

                <div className="prose prose-lg max-w-none text-[#1c1614] whitespace-pre-line leading-[1.8] font-['Pretendard',sans-serif] text-[16px] md:text-[18px]">
                  {event.content}
                </div>

                <div className="mt-16 pt-8 border-t border-[#e8e5e0] flex justify-center">
                  <button
                    onClick={() => navigate('/jp/promotion')}
                    className="flex items-center gap-2 group border border-[#1c1614] px-8 py-4 transition-all duration-300 hover:bg-[#1c1614] hover:text-white"
                  >
                    <span className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] uppercase">
                      List
                    </span>
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
