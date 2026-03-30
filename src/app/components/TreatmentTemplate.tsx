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
  subtitle: string;
  img: string;
  desc: string;
  points: string[];
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
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] mb-6 uppercase"
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

        {/* ===== Editorial Core Principle ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] items-start">
              <div className="md:col-span-5 flex flex-col gap-[60px] overflow-hidden">
                <div>
                  <FadeIn>
                    <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] md:text-[16px] tracking-[0px] uppercase mb-4">
                      Core Principle
                    </p>
                    <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold mb-6 leading-[1.3]">
                      {coreTitle}
                    </h2>
                    <div className="w-[40px] h-[1px] bg-[#1c1614] mb-8" />
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <div className="text-[#4a3f3a] text-[16px] md:text-[17px] leading-[1.9] space-y-4">
                      {coreDesc.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                      ))}
                    </div>
                  </FadeIn>
                </div>
                <FadeIn delay={0.2}>
                  <div className="bg-[#faf6f1] p-6 md:p-8 border-l border-[#1c1614]">
                    <p className="text-[#1c1614] text-[16px] md:text-[18px] font-['Pretendard',sans-serif] font-medium leading-[1.8] whitespace-pre-line break-keep">
                      {coreHighlight}
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-7 overflow-hidden">
                <FadeIn delay={0.3} className="w-full">
                  <div className="w-full aspect-[7/4] overflow-hidden">
                    <ImageWithFallback src={coreImg} alt={coreTitle} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Sticky Treatment Types ===== */}
        <section className="w-full bg-[#fcfbf9]">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeIn>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Treatment Types
                </p>
                <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold">
                  {treatmentTitle}
                </h2>
              </div>
            </FadeIn>

            {/* Mobile Horizontal Scroll Tabs */}
            <div className="md:hidden flex overflow-x-auto scrollbar-hide border-b border-[#e8e5e0] mb-[60px]">
              {treatments.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTreatment(idx)}
                  className={`shrink-0 px-6 py-4 text-[16px] font-medium transition-colors whitespace-nowrap ${
                    activeTreatment === idx ? 'border-b-[2px] border-[#1c1614] text-[#1c1614]' : 'text-[#b8a99a]'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-[60px] md:gap-[120px] items-start relative">
              {/* Desktop Sticky Sidebar */}
              <div className="hidden md:block w-[320px] shrink-0 sticky top-[160px]">
                <div className="border-t-[2px] border-[#1c1614] flex flex-col">
                  {treatments.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTreatment(idx)}
                      className={`flex items-center justify-between py-6 border-b border-[#e8e5e0] text-left transition-all duration-300 group ${
                        activeTreatment === idx ? 'text-[#1c1614]' : 'text-[#b8a99a] hover:text-[#1c1614]'
                      }`}
                    >
                      <span className="font-['Montserrat',sans-serif] text-[14px] tracking-[2px] w-[40px] opacity-60 group-hover:opacity-100 transition-opacity">
                        {t.num}
                      </span>
                      <span className={`flex-1 text-[20px] ${activeTreatment === idx ? 'font-bold' : 'font-medium'}`}>
                        {t.title}
                      </span>
                      <div className={`w-[24px] h-[1px] bg-current transition-all duration-300 ${activeTreatment === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Treatment Content Area */}
              <div className="flex-1 w-full min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeT.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Desktop: 2-column layout (image left + text right) */}
                    <div className="hidden md:grid md:grid-cols-2 gap-[60px] items-start">
                      {/* Left: Image */}
                      <div className="aspect-[7/8] w-full overflow-hidden bg-[#e8e5e0]">
                        <ImageWithFallback
                          src={activeT.img}
                          alt={activeT.title}
                          className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                      </div>

                      {/* Right: Text content — height matches image */}
                      <div className="flex flex-col overflow-hidden">
                        <div>
                          <div className="mb-5">
                            <p className="font-['Montserrat',sans-serif] text-[16px] text-[#b8a99a] tracking-[0px] uppercase mb-2">
                              {activeT.subtitle}
                            </p>
                            <h3 className="text-[32px] md:text-[36px] text-[#1c1614] font-['Pretendard',sans-serif] font-bold tracking-[-1px]">
                              {activeT.title}
                            </h3>
                          </div>

                          <p className="text-[16px] md:text-[18px] text-[#4a3f3a] leading-[1.9] mb-6 break-keep">
                            {activeT.desc}
                          </p>

                          <div className="space-y-2 mb-6">
                            {activeT.points.map((point, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-[4px] h-[4px] bg-[#b8a99a] shrink-0 mt-[10px]" />
                                <p className="text-[16px] text-[#1c1614] font-medium leading-[1.6]">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Compact Info Grid — pushed to bottom */}
                        <div className="grid grid-cols-2 border-t border-[#1c1614] mt-[60px]">
                          {[
                            { icon: Clock, label: "시술시간", value: activeT.duration },
                            { icon: Shield, label: "마취 여부", value: activeT.anesthesia },
                            { icon: Activity, label: "회복 기간", value: activeT.recovery },
                            { icon: CalendarDays, label: "추천/유지", value: activeT.maintenance },
                          ].map((info, i) => (
                            <div key={i} className={`flex flex-col gap-2 py-[20px] px-[16px] border-b border-[#e8e5e0] ${i % 2 === 0 ? 'border-r border-r-[#e8e5e0]' : ''}`}>
                              <div className="font-['Montserrat',sans-serif] text-[#b8a99a] text-[12px] tracking-[2px] flex items-center gap-2 uppercase">
                                {info.icon && <info.icon className="w-[14px] h-[14px] stroke-[1.5]" />}
                                {info.label}
                              </div>
                              <div className="text-[16px] text-[#1c1614] font-medium break-keep">
                                {info.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile: stacked layout */}
                    <div className="md:hidden">
                      <div className="aspect-[16/9] w-full mb-[32px] overflow-hidden bg-[#e8e5e0]">
                        <ImageWithFallback
                          src={activeT.img}
                          alt={activeT.title}
                          className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                      </div>

                      <div className="mb-6">
                        <p className="font-['Montserrat',sans-serif] text-[16px] text-[#b8a99a] tracking-[0px] uppercase mb-2">
                          {activeT.subtitle}
                        </p>
                        <h3 className="text-[28px] text-[#1c1614] font-['Pretendard',sans-serif] font-bold tracking-[-1px]">
                          {activeT.title}
                        </h3>
                      </div>

                      <p className="text-[16px] text-[#4a3f3a] leading-[1.9] mb-8 break-keep">
                        {activeT.desc}
                      </p>

                      <div className="space-y-3 mb-8">
                        {activeT.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-[4px] h-[4px] bg-[#b8a99a] shrink-0 mt-[10px]" />
                            <p className="text-[16px] text-[#1c1614] font-medium leading-[1.6]">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 border-t border-[#1c1614]">
                        {[
                          { icon: Clock, label: "시술시간", value: activeT.duration },
                          { icon: Shield, label: "마취 여부", value: activeT.anesthesia },
                          { icon: Activity, label: "회복 기간", value: activeT.recovery },
                          { icon: CalendarDays, label: "추천/유지", value: activeT.maintenance },
                        ].map((info, i) => (
                          <div key={i} className={`flex flex-col gap-2 py-[16px] pr-[12px] border-b border-[#e8e5e0] ${i % 2 === 0 ? 'border-r border-r-[#e8e5e0]' : 'pl-[12px]'}`}>
                            <div className="font-['Montserrat',sans-serif] text-[#b8a99a] text-[12px] tracking-[2px] flex items-center gap-2 uppercase">
                              {info.icon && <info.icon className="w-[14px] h-[14px] stroke-[1.5]" />}
                              {info.label}
                            </div>
                            <div className="text-[15px] text-[#1c1614] font-medium break-keep">
                              {info.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Minimalist Process Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeIn>
              <div className="mb-[60px] md:mb-[80px]">
                <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                  Process
                </p>
                <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold">
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
                  <h2 className="text-[32px] md:text-[44px] text-[#faf6f1] tracking-[-1px] font-['Pretendard',sans-serif] font-bold">
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
                  <h2 className="text-[32px] md:text-[44px] text-[#1c1614] tracking-[-1px] font-['Pretendard',sans-serif] font-bold">
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