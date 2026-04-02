import { motion, useScroll, useTransform } from "motion/react";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGludGVyaW9yJTIwYmVpZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzczNjM5ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "리파인 클리닉 메인 로비",
    span: "md:col-span-2 md:row-span-2",
    aspect: "min-h-[300px] md:min-h-[620px]",
  },
  {
    src: "https://images.unsplash.com/photo-1659277318898-9562d00c3b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJtYXRvbG9neSUyMGNsaW5pYyUyMHRhcmFucyUyMGRvb3J8ZW58MXx8fHwxNzczNjM5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "프라이빗 대기실",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1679496124845-ac6957c8bffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGNvbnN1bHRhdGlvbiUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzczNjM5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "1:1 맞춤 상담실",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

const GALLERY_IMAGES_ROW2 = [
  {
    src: "https://images.unsplash.com/photo-1721826917395-f35784f2b6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwY2xpbmljJTIwaGFsbHdheSUyMGJlaWdlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM2Mzk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "클리닉 복도",
  },
  {
    src: "https://images.unsplash.com/photo-1766299892549-b56b257d1ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhdG1lbnQlMjByb29tJTIwYWVzdGhldGljJTIwY2xpbmljfGVufDF8fHx8MTc3MzYzOTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "VIP 1인 시술실",
  },
  {
    src: "https://images.unsplash.com/photo-1758336716950-370f54b7a43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhZXN0aGV0aWMlMjBjbGluaWMlMjB0cmVhdG1lbnQlMjByb29tfGVufDF8fHx8MTc3MzYzMjA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "에스테틱 케어룸",
  },
];

export default function GalleryPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light text-[#1c1614]">
        {/* ===== Hero ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1735448213858-6bdfdf78967a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZXJtYXRvbG9neSUyMGNsaW5pYyUyMGludGVyaW9yJTIwd2hpdGV8ZW58MXx8fHwxNzczNjM2NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gallery Hero"
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
              >
                About
              </motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Gallery
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                리파인의원의 공간을 소개합니다.
              </motion.p>
            </FadeInUp>
          </motion.div>

          <motion.div
            className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[16px] z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
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

        {/* ===== Gallery Grid ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                Clinic Space
              </p>
              <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light leading-[1.2] mb-[80px] md:mb-[100px]">
                원내 시설
              </h2>
            </FadeInUp>

            {/* First Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {GALLERY_IMAGES.map((img, i) => (
                <FadeInUp key={i} delay={i * 0.1} className={img.span}>
                  <div className={`w-full h-full ${img.aspect} overflow-hidden bg-[#e8e2db] group`}>
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Second Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[20px]">
              {GALLERY_IMAGES_ROW2.map((img, i) => (
                <FadeInUp key={i} delay={(i + 3) * 0.1}>
                  <div className="w-full aspect-[4/3] overflow-hidden bg-[#e8e2db] group">
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}