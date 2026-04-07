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

export default function JpNoticeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const notices = [
    {
      id: 1,
      title: "2024年3月の診療スケジュールについて（三一節休診）",
      date: "2024.02.25",
      isNotice: true,
      content: `
いつも REFINE 皮膚科をご利用いただき、誠にありがとうございます。

2024年3月の診療スケジュールをお知らせいたします。

[ 3月の診療スケジュール ]
- 3月1日（金・三一節）：休診
- その他の平日および土曜日：通常診療

ご来院の際にお役立ていただけますよう、ご案内申し上げます。
休診日はカカオトークおよびお電話でのご相談も難しい場合がございますので、何卒ご了承ください。
ご不明な点は診療日にお電話にてお問い合わせください。

どうぞよろしくお願いいたします。
      `
    },
    {
      id: 2,
      title: "新しいリフティング機器「デンサティ」導入のご案内",
      date: "2024.02.10",
      isNotice: true,
      content: `
いつも REFINE 皮膚科をご利用いただき、誠にありがとうございます。
より良い施術結果をご提供するため、新しいリフティング機器「デンサティ（Density）」を導入いたしました。

デンサティは2種類の高周波（RF）エネルギーを交差照射し、皮膚の真皮層から皮下脂肪層まで強力かつ深くエネルギーを届ける機器です。
皮膚のタイトニング、シワ改善、弾力アップに優れた効果が期待できます。

新しいデンサティリフティングプログラムへのご関心をよろしくお願いいたします。

どうぞよろしくお願いいたします。
      `
    },
    {
      id: 3,
      title: "REFINE 冬のスキンケアのヒント：肌の内側からの保湿",
      date: "2024.01.15",
      isNotice: false,
      content: `
いつも REFINE 皮膚科をご利用いただき、誠にありがとうございます。
乾燥した冬に最も大切なのは「内側からの保湿」です。

表面だけを潤すスキンケアではなく、根本的な水分バリアを整えるための REFINE 独自のスキンケアのヒントをご紹介します。

1. 洗顔後3秒以内の保湿：洗顔後、水分が蒸発する前にトナーやミストで素早くお肌を整えましょう。
2. スキンブースター：深部から水分を補給するリジュラン ヒーラー、水光注射などが効果的です。
3. 室内の湿度管理：加湿器を使用して適切な室内湿度を保つことが、肌の健康にとって非常に重要です。

詳しいご相談はお電話またはご来院にてお問い合わせください。
      `
    }
  ];

  const notice = notices.find(n => n.id === Number(id)) || notices[0];

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
              >Community</motion.p>
              <motion.h1
                className="text-[36px] md:text-[56px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Notice
              </motion.h1>
            </FadeInUp>
          </div>
        </section>

        <section className="w-full bg-white min-h-[50vh]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[60px] md:py-[100px]">
            <div className="max-w-[1000px] mx-auto">
              <FadeInUp>
                <div className="mb-8">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[2px] mb-4 uppercase">
                    {notice.isNotice ? (
                      <span className="text-[#1c1614]">Notice</span>
                    ) : (
                      <span className="text-[#b8a99a]">News</span>
                    )}
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium tracking-[-1px] leading-[1.3] mb-6">
                    {notice.title}
                  </h2>
                  <div className="w-full h-[1px] bg-[#1c1614] mb-6"></div>
                  <div className="flex justify-between items-center text-[#6b5f58] font-['Montserrat',sans-serif] text-[15px] tracking-[1px]">
                    <span>{notice.date}</span>
                    <span className="uppercase text-[13px] tracking-[2px]">Admin</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#e8e5e0] mt-6"></div>
                </div>

                <div className="py-12 min-h-[300px]">
                  <p className="text-[18px] md:text-[20px] text-[#332e2c] font-['Pretendard',sans-serif] font-light leading-[1.8] whitespace-pre-wrap">
                    {notice.content}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#1c1614] mb-12"></div>

                <div className="flex justify-center">
                  <button
                    onClick={() => navigate('/jp/community')}
                    className="px-12 py-4 border border-[#1c1614] text-[#1c1614] hover:bg-[#1c1614] hover:text-white transition-colors duration-300 font-['Montserrat',sans-serif] text-[14px] tracking-[3px] uppercase"
                  >
                    List
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
