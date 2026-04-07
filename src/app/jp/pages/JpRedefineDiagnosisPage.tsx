import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import subHeroImg from "figma:asset/1abc62602d7139f0f3c40ce65b44e34743d1ec1f.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function JpRedefineDiagnosisPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "RE:DEFINE診断は通常の肌相談とどう違いますか？", a: "通常の肌相談は目視観察に頼りますが、RE:DEFINEは3D AI精密スキャンデータを基に、目に見えない微細な凹凸・非対称・色素分布まで客観的に分析します。このデータに代表院長の解剖学的知見を加え、あなただけのカスタム治療ロードマップを設計します。" },
    { q: "診断にはどのくらい時間がかかりますか？", a: "3D AIスキャンは約5分以内に完了し、代表院長との1対1カスタム相談を含めて合計20〜30分程度かかります。十分な時間をかけて肌の現状と改善の方向性を一緒に話し合います。" },
    { q: "診断結果を元にすぐに施術を受けられますか？", a: "はい、診断当日にそのまま施術を受けていただけます。ただし、お客様の肌状態と施術の種類によって最適な時期をご提案する場合もあります。最良の結果のために院長と十分にご相談の上ご決定ください。" },
    { q: "診断費用は別途かかりますか？", a: "RE:DEFINE診断はリファインのすべての施術相談に基本含まれております。別途追加費用なしで3D AIスキャンと代表院長1対1カスタム相談をお受けいただけます。" },
    { q: "診断データはどのように活用されますか？", a: "診断データは施術前後の比較分析・カスタム治療計画の策定・長期的な肌変化の追跡に活用されます。再来院時に以前のデータと比較して改善の経過を客観的にご確認いただけます。" },
  ];

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614] break-keep selection:bg-[#1c1614] selection:text-[#faf6f1]">

        {/* HERO */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#201814]" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src={subHeroImg}
              alt="RE:DEFINE カスタム診断"
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
          </motion.div>

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeInUp delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Signature Diagnosis
              </motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                RE:DEFINE
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-[rgba(255,255,255,0.9)] font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                あなたが知らなかった本来の美しさを、新たに定義します。
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

        {/* INTRO */}
        <section className="relative w-full bg-[#faf6f1] border-b border-[#1c1614]/10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02] overflow-hidden">
            <h2 className="font-['Montserrat',sans-serif] text-[25vw] font-bold text-[#1c1614] whitespace-nowrap leading-none tracking-[-5px]">
              RE:DEFINE
            </h2>
          </div>
          <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px] flex flex-col items-center text-center">
            <FadeInUp>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Core Philosophy
                </p>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.3]">
                  あなたが知らなかった本来の美しさを、<br />
                  リファインのカスタム診断で新たに定義<span className="font-['Montserrat',sans-serif] bg-[#201814] text-white px-2 py-1 mx-1 inline-block leading-[1.1]">RE:DEFINE</span>します。
                </h2>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="max-w-[800px] mx-auto">
                <p className="text-[#4a3f3a] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  <span className="font-['Montserrat',sans-serif] font-bold text-[#1c1614]">RE:DEFINE</span>は、単に顔を確認するにとどまらず、「肌構造の本質を見つけ、治療の方向性を新たに定義すること」を意味します。3D AI精密分析（<span className="font-['Montserrat',sans-serif] font-bold italic">EVE</span> V <span className="font-['Montserrat',sans-serif] font-bold italic">MUSE</span>）を基に顔を立体的に分析し、代表院長が肌の構造的観点から最も必要な施術を診断します。
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="w-full bg-[#201814] text-[#faf6f1] border-b border-[#1c1614]/10">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-[140px] py-[100px] md:py-[140px] order-2 md:order-1 border-t md:border-t-0 border-white/10 md:border-r">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Technology
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-white tracking-[-1px] font-['Montserrat',sans-serif] font-light leading-[1.3]">
                    <span className="italic pr-1">EVE</span> V <span className="italic pl-1">MUSE</span><br />
                    3D AI Scanning
                  </h2>
                </div>
                <div className="bg-[#1c1614] p-6 md:p-8 border-l border-white mb-6">
                  <p className="text-white text-[16px] md:text-[18px] font-['Pretendard',sans-serif] font-medium leading-[1.8] whitespace-pre-line break-keep">
                    AIデータが示す詳細、<span className="font-['Montserrat',sans-serif] italic">EVE</span> V <span className="font-['Montserrat',sans-serif] italic">MUSE</span>
                  </p>
                </div>
                <p className="text-[rgba(255,255,255,0.7)] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  顔全体を立体的にスキャンし、目に見えない微細な凹凸・非対称・シワ・色素・紅潮などを捉えます。
                </p>
              </FadeInUp>
            </div>
            <div className="w-full md:w-1/2 h-[500px] md:h-auto min-h-[600px] relative order-1 md:order-2 bg-[#13100E]">
              <motion.div
                className="absolute inset-0 p-6 md:p-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1665963287479-105466e03324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZhY2UlMjB0b3BvZ3JhcGh5JTIwbGlnaHQlMjBiZWFtJTIwZGFya3xlbnwxfHx8fDE3NzM4MDA3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="3D AI scanning EVE V MUSE"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/20 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="w-full bg-[#faf6f1] border-b border-[#1c1614]/10">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[500px] md:h-auto min-h-[600px] relative border-b md:border-b-0 border-[#1c1614]/10 md:border-r bg-[#fcfbf9]">
              <motion.div
                className="absolute inset-0 p-6 md:p-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768979121229-392fce4957ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBwcmVtaXVtJTIwbWluaW1hbCUyMHRleHR1cmV8ZW58MXx8fHwxNzczODAwNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Philosophy Beyond the data"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-[#1c1614]/10 pointer-events-none" />
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-[140px] py-[100px] md:py-[140px]">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Philosophy
                  </p>
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Montserrat',sans-serif] font-light leading-[1.3]">
                    Beyond The Data
                  </h2>
                </div>
                <div className="bg-white p-6 md:p-8 border-l border-[#1c1614] mb-6 shadow-sm">
                  <p className="text-[#1c1614] text-[16px] md:text-[18px] font-['Pretendard',sans-serif] font-medium leading-[1.8] whitespace-pre-line break-keep">
                    診断の洞察力が結果の深さを決定します。
                  </p>
                </div>
                <p className="text-[#4a3f3a] text-[16px] md:text-[17px] leading-[1.9] break-keep">
                  AI精密データに代表院長の熟練した洞察力を加えます。リファインはあなたの肌状態と解剖学的構造を立体的に分析し、あなただけのための精緻な治療ロードマップを設計します。
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[60px] md:mb-[80px]">
                <div>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Q&A
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    よくある質問
                  </h2>
                </div>
              </div>
            </FadeInUp>

            <div className="flex flex-col border-t-[2px] border-[#1c1614]">
              {faqs.map((faq, idx) => (
                <FadeInUp key={idx} delay={idx * 0.05}>
                  <div className="border-b border-[#e8e5e0]">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start md:items-center justify-between py-[32px] md:py-[40px] text-left gap-6 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1 min-w-0">
                        <span className="font-['Montserrat',sans-serif] text-[18px] md:text-[20px] text-[#b8a99a] shrink-0 font-medium">
                          Q.
                        </span>
                        <span className={`text-[18px] md:text-[22px] leading-[1.5] transition-colors duration-300 break-keep ${
                          openFaq === idx ? 'text-[#1c1614] font-bold' : 'text-[#4a3f3a] font-medium group-hover:text-[#1c1614]'
                        }`}>
                          {faq.q}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaq === idx ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="shrink-0 mt-1 md:mt-0"
                      >
                        <ChevronDown className={`w-[24px] h-[24px] stroke-[1] transition-colors duration-300 ${openFaq === idx ? 'text-[#1c1614]' : 'text-[#b8a99a]'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="md:pl-[64px] pb-[40px] pt-0">
                            <p className="text-[16px] md:text-[18px] text-[#6b5f58] leading-[2] break-keep">
                              A. {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}
