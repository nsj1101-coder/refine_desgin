import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";
import { Check, ChevronDown, Clock, Shield, Activity, CalendarDays } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ScaledPageWrapper, useScaledViewportHeight } from "./ScaledPageWrapper";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export interface TreatmentInfo {
  id: string;
  num: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  img: string;
  headline?: string;
  desc: string;
  points: string[];
  headline2?: string;
  details?: string[];
  tags?: string[];
  duration: string;
  anesthesia: string;
  recovery: string;
  maintenance: string;
}

export interface ProcessStepInfo {
  step: string;
  title: string;
  desc: string;
  icon: any;
}

export interface FAQInfo {
  q: string;
  a: string;
}

export interface TreatmentTemplateProps {
  pageTitleEn: string;
  pageDesc: string;
  heroImg: string;
  coreTitle: string;
  coreDesc: string[];
  coreHighlight: string;
  coreImg: string;
  treatmentTitle: string;
  treatments: TreatmentInfo[];
  processSteps: ProcessStepInfo[];
  recommends: string[];
  faqs: FAQInfo[];
  ctaTitle: React.ReactNode;
  ctaDesc: string;
}

export default function TreatmentTemplate({
  pageTitleEn,
  pageDesc,
  heroImg,
  coreTitle,
  coreDesc,
  coreHighlight,
  coreImg,
  treatmentTitle,
  treatments,
  processSteps,
  recommends,
  faqs,
  ctaTitle,
  ctaDesc
}: TreatmentTemplateProps) {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeT = treatments[activeTreatment];

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614]">
        {/* ===== Cinematic Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback src={heroImg} alt={`${pageTitleEn} Hero`} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="absolute inset-0 bg-black/40 z-0" style={{ opacity: heroOpacity }} />

          <motion.div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center" style={{ opacity: heroOpacity, y: heroY }}>
            <FadeIn delay={0.2}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >Treatment</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {pageTitleEn}
              </motion.h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-[rgba(255,255,255,0.9)] font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {pageDesc}
              </motion.p>
            </FadeIn>
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

        {/* ===== Core Principle (Figma) ===== */}
        <section className="w-full bg-[#201814] relative flex flex-col md:flex-row overflow-hidden" style={{minHeight:358}}>
          {/* Left: Title */}
          <div className="flex flex-col gap-0 pt-10 pl-[50px] max-md:px-6 max-md:pt-8 shrink-0 md:w-[40%]">
            <FadeIn>
              <span className="font-['Montserrat',sans-serif] text-[#B8A99A] text-base font-medium leading-[1.5]">Core Principle</span>
              <h2 className="text-[#FBF6F1] text-[28px] md:text-[42px] font-light leading-[1.3] tracking-[-1px] mt-[6px] font-['Pretendard',sans-serif]">
                {coreTitle}
              </h2>
              <div className="w-[46px] h-px bg-[#FBF6F1] opacity-50 mt-[14px]" />
            </FadeIn>
          </div>

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block w-px h-[46px] bg-[#FBF6F1] opacity-50 shrink-0 mt-[95px]" />

          {/* Right: Description */}
          <div className="flex flex-col gap-5 pt-[40px] md:pt-[86px] pl-[24px] pr-[382px] max-md:px-6 max-md:pb-10 w-full md:flex-1">
            <FadeIn delay={0.1}>
              {coreDesc.map((desc, idx) => (
                <p key={idx} className="text-white text-[17px] font-light leading-[1.6]">{desc}</p>
              ))}
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#FBF6F1] text-lg font-medium leading-[1.6]" style={{maxWidth:517}}>
                {coreHighlight}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ===== Treatment Types (Figma) ===== */}
        <section className="w-full bg-[#FCFBF9]">
          {/* Sticky Tab Bar */}
          <div className="w-full bg-[#FCFBF9] sticky top-0 z-10 flex">
            {treatments.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTreatment(idx);
                  document.getElementById(`sec-${t.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex-1 h-[100px] max-md:h-[48px] flex items-center justify-center text-xl max-md:text-base transition-all duration-300 cursor-pointer ${
                  activeTreatment === idx
                    ? "border-b-4 border-[#1C1614] text-[#1C1614] font-bold"
                    : "border-b border-[rgba(28,22,20,0.2)] text-[#B8A99A] font-medium"
                }`}
              >
                {t.title}
                </button>
              ))}
            </div>
          {/* Treatment Sections */}
          {treatments.map((t, idx) => {
            const isImageLeft = idx % 2 === 0;
            const imageBlock = (
              <div className="w-[67vw] md:w-[500px] shrink-0 overflow-hidden aspect-[262/443] md:aspect-[500/896]">
                <ImageWithFallback src={t.img} alt={t.title} className="w-full h-full object-cover" />
              </div>
            );
            const contentBlock = (
              <div className="flex-1 relative px-5 md:px-0" style={{minHeight: 661}}>
                <span className="font-['Montserrat',sans-serif] text-[#B8A99A] text-base font-light leading-[1.5]">{t.subtitle}</span>
                <h3 className="font-['Montserrat',sans-serif] text-[#504945] text-[40px] md:text-[64px] font-light tracking-[-1px] mt-[10px] leading-[1.2]">{t.titleEn}</h3>
                <span className="block text-[#B5B0AC] text-[24px] md:text-[32px] font-light tracking-[-1px] mt-2 leading-[1.4]">{t.title}</span>

                <p className="text-[#4A3F3A] text-lg md:text-xl font-normal leading-[1.6] max-w-[667px] mt-[24px]">{t.headline}</p>
                {t.desc && <p className="text-[#6E6560] text-lg font-light leading-[1.6] max-w-[667px] mt-[8px]">{t.desc}</p>}

                {t.points && t.points.length > 0 && (
                <ul className="flex flex-col gap-2 mt-[16px]">
                  {t.points.map((p: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[#6E6560] text-lg font-light leading-[1.6]">
                      <span className="mt-[10px] w-[5px] h-[5px] rounded-full bg-[#6E6560] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                )}

                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-5 mt-[24px]">
                  {[
                    { label: "시술시간", value: t.duration },
                    { label: "마취 여부", value: t.anesthesia },
                    { label: "회복 기간", value: t.recovery },
                    { label: "추천/유지", value: t.maintenance },
                  ].map((info) => (
                    <div key={info.label} className="flex flex-col gap-3 bg-[#FBF6F1] p-2.5 items-center text-center">
                      <span className="font-['Montserrat',sans-serif] text-[#B8A99A] text-xs font-light tracking-[2px] leading-[1.5]">{info.label}</span>
                      <span className="text-[#504945] text-base font-light leading-[1.5]">{info.value}</span>
                    </div>
                  ))}
                </div>

                {t.headline2 && <p className="text-[#4A3F3A] text-lg md:text-xl font-normal leading-[1.3] mt-[24px] mb-4">{t.headline2}</p>}
                {t.details && t.details.length > 0 && (
                <div className="flex flex-col gap-2 max-w-[689px]">
                  {t.details.map((d: string, i: number) => (
                    <p key={i} className="text-[#6E6560] text-lg font-light leading-[1.6]">{i + 1}. {d}</p>
                  ))}
                </div>
                )}

                {t.tags && t.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-[24px]">
                  {t.tags.map((tag: string) => (
                    <span key={tag} className="font-['Montserrat',sans-serif] text-[#B8A99A] text-base font-medium border border-[#B8A99A] rounded px-3.5 py-2">{tag}</span>
                  ))}
                </div>
                )}
              </div>
            );

            return (
              <FadeIn key={t.id}>
                <div id={`sec-${t.id}`} className={`flex flex-col items-center gap-[40px] md:gap-[80px] px-0 md:px-[326px] py-[60px] md:py-[100px] ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {imageBlock}{contentBlock}
                </div>
              </FadeIn>
            );
          })}
        </section>

        {/* ===== Minimalist Process Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeIn>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Process
                </p>
                <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                  시술 과정
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[60px] gap-y-[60px]">
              {processSteps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="border-t border-[#1c1614] pt-[40px] relative">
                    <span className="font-['Montserrat',sans-serif] text-[60px] md:text-[80px] font-extralight text-[#f0ebe4] leading-none absolute top-[20px] right-0 z-0">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      {step.icon && <step.icon className="w-[32px] h-[32px] text-[#1c1614] stroke-[1] mb-8" />}
                      <h4 className="text-[20px] md:text-[24px] text-[#1c1614] font-['Pretendard',sans-serif] font-bold mb-4 tracking-[-0.5px]">
                        {step.title}
                      </h4>
                      <p className="text-[16px] md:text-[16px] text-[#6b5f58] leading-[1.8] whitespace-pre-line break-keep">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ===== High Contrast Recommend Section ===== */}
        <section className="w-full bg-[#1c1614]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[100px]">
              <div className="lg:col-span-5">
                <FadeIn>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Recommend
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#faf6f1] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    이런 분께 추천드려요
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-col border-t border-white/20">
                  {recommends.map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 0.05}>
                      <div className="flex items-start gap-6 py-[32px] md:py-[40px] border-b border-white/10">
                        <Check className="w-[20px] h-[20px] text-[#b8a99a] shrink-0 mt-1 stroke-[2]" />
                        <p className="text-[18px] md:text-[22px] text-[rgba(250,246,241,0.9)] leading-[1.6] font-['Pretendard',sans-serif] font-light break-keep">
                          {item}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Minimalist FAQ Section ===== */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[60px] md:mb-[80px]">
                <div>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Q&A
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    자주 묻는 질문
                  </h2>
                </div>
              </div>
            </FadeIn>

            <div className="flex flex-col border-t-[2px] border-[#1c1614]">
              {faqs.map((faq, idx) => (
                <FadeIn key={idx} delay={idx * 0.05}>
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
                        <ChevronDown className={`w-[24px] h-[24px] stroke-[1] transition-colors duration-300 ${
                          openFaq === idx ? 'text-[#1c1614]' : 'text-[#b8a99a]'
                        }`} />
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Block CTA Section ===== */}
        <section className="w-full">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] pb-[100px] md:pb-[140px]">
            <FadeIn>
              <div className="bg-[#1c1614] w-full flex flex-col md:flex-row items-center justify-between p-[50px] md:p-[80px] gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-[28px] md:text-[36px] text-[#faf6f1] font-['Pretendard',sans-serif] font-bold tracking-[-1px] mb-4 leading-[1.3]">
                    {ctaTitle}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[rgba(250,246,241,0.6)] font-light break-keep">
                    {ctaDesc}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/reservation')}
                  className="px-[48px] py-[20px] border border-[#faf6f1] text-[#faf6f1] font-['Montserrat',sans-serif] font-medium text-[14px] tracking-[3px] uppercase hover:bg-[#faf6f1] hover:text-[#1c1614] transition-colors duration-500 shrink-0"
                >
                  Book Now
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== Location Section ===== */}
        <SubpageDirectionsSection />

        {/* ===== Footer ===== */}
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}