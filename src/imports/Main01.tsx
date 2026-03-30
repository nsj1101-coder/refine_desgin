import svgPaths from "./svg-t6d565ngvn";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useState, useEffect, createContext, useContext, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router";
import img2 from "figma:asset/59854c8bbd918270a595c3d38bb9a90878a44d4b.png";
import imgImageHeroBackground from "figma:asset/a9881fea75c2dee3fc5edf6fcbc4ef9a03ebda9f.png";
import imgImage15 from "figma:asset/e6132ff3713e0e5b034bd953bf175dfb23ecf30f.png";
import imgImage from "figma:asset/a774068a16ec6c64242f491304f30d569e620d6c.png";
import imgImage1 from "figma:asset/128b212be112366e2226a89a32dd6bb2d800ae0a.png";
import imgApp from "figma:asset/fe61453774969e2ef94b0c47c89d8e5a0191cbba.png";
import exampleImage from "figma:asset/28e03573e626cc6c4a56656a4e500455ccd2388f.png";
import accordionImage2 from "figma:asset/73995ea4431ee97bed0dddbd96a07636c90f1932.png";
import accordionImage3 from "figma:asset/5714b23d66292d96d5bc8d89ee1e88b3a3a15cf2.png";
import exampleImage2 from "figma:asset/7a69068f75f2bd9699e4e253a546c5bc5f1e27f8.png";
import refineImage from "figma:asset/1d0ea9cdfba64e383b32981fbba8c060872e076b.png";
import leafDropImage from "figma:asset/69dcf7f10a7a0fa32f05cdba58d8dfa2862c5d55.png";
import promoImage from "figma:asset/f07f2b3a3574a95089d05cecb129630dabfa8daa.png";
import eqJeisys from "figma:asset/8b6eabe5666d5fc5ddb4d0cb01d900f2468e8860.png";
import eqClarity from "figma:asset/6b968a4d1a864e3b1cccf348c4676f2196ab7ee3.png";
import eqOnda from "figma:asset/59854c8bbd918270a595c3d38bb9a90878a44d4b.png";
import eqHollywood from "figma:asset/de1782d0fafd7b5fac075eb4dee129fcbbe9b4ad.png";
import { imgGroup } from "./svg-k5xuk";
import imgHeroModel from "figma:asset/0a9e7116625cbca8e49f45810f894aeb8e59ca41.png";

const imgImageHollywoodSpectra = eqHollywood; // alias for dead-code component

// Mobile detection context - motion.div의 WAAPI가 CSS !important를 무시하므로 React 레벨에서 제어
export const MobileContext = createContext(false);
export function useIsMobile() { return useContext(MobileContext); }

export function useHeroHeight() {
  const [heroHeight, setHeroHeight] = useState(1080);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      if (window.innerWidth > 768) {
        const scale = window.innerWidth / 1920;
        setHeroHeight(window.innerHeight / scale);
      } else {
        setHeroHeight(window.innerHeight);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return heroHeight;
}

function Container() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none" />
    </>
  );
}

import heroImg1 from "figma:asset/a9881fea75c2dee3fc5edf6fcbc4ef9a03ebda9f.png";
import heroImg2 from "figma:asset/78c1128b7537c1638be98cef0bca77fba70b1101.png";
import heroImg3 from "figma:asset/0a9e7116625cbca8e49f45810f894aeb8e59ca41.png";

const HERO_IMAGES = [
  heroImg1,
  heroImg2,
  heroImg3,
];

const HERO_INTERVAL = 5000; // ms per slide

// Context to share hero carousel state between ImageHeroBackground and Frame
const HeroCarouselContext = createContext({ currentIndex: 0, progress: 0, count: HERO_IMAGES.length });

function HeroIndicator() {
  const { count, currentIndex: activeIndex, progress } = useContext(HeroCarouselContext);
  const circumference = 2 * Math.PI * 10;
  return (
    <div className="flex items-center gap-[14px] max-md:gap-[10px] mt-[40px] max-md:mt-[24px]">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        return (
          <span key={i} className="relative flex items-center justify-center w-[24px] h-[24px] max-md:w-[16px] max-md:h-[16px]">
            <svg width="100%" height="100%" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
              <circle
                cx="15" cy="15" r="10" fill="none"
                stroke="#ffffff" strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={
                  isActive
                    ? circumference * (1 - progress)
                    : isPast
                    ? 0
                    : circumference
                }
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  transition: isActive ? 'stroke-dashoffset 0.1s linear' : 'none',
                }}
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

const EQUIPMENT_DATA = [
  {
    id: 1,
    nameLines: ["Hollywood", "Spectra"],
    subtitle: "헐리우드 스펙트라",
    tags: ["#기미", "#모공", "#색소침착", "#여드름흉터"],
    desc: [
      "기미나 잡티 같은 다양한 색소질환에 균일하게",
      "레이저 빔을 전달해 얕은 색소부터 깊은 색소까지",
      "폭넓게 개선하는데 탁월한 효과를 보여줍니다."
    ],
    img: eqHollywood,
    imgScale: 1.3
  },
  {
    id: 2,
    nameLines: ["Jeisys", "Diamond"],
    subtitle: "제이시스 다이아몬드",
    tags: ["#리프팅", "#탄력", "#피부결", "#타이트닝"],
    desc: [
      "피부 속 깊은 곳부터 탄력을 채워주는",
      "프리미엄 리프팅 장비로 자연스러운",
      "볼륨감과 타이트닝 효과를 제공합니다."
    ],
    img: eqJeisys,
    imgScale: 1
  },
  {
    id: 3,
    nameLines: ["Clarity", "Pro"],
    subtitle: "클라리티 프로",
    tags: ["#제모", "#홍조", "#혈관", "#모공"],
    desc: [
      "듀얼 파장을 이용해 제모부터 혈관 병변까지",
      "맞춤형 치료가 가능하며 적은 통증으로",
      "안전하고 효과적인 시술이 가능합니다."
    ],
    img: eqClarity,
    imgScale: 1
  },
  {
    id: 4,
    nameLines: ["Deka", "Onda"],
    subtitle: "데카 온다",
    tags: ["#바디컨투어링", "#셀룰라이트", "#탄력", "#리프팅"],
    desc: [
      "극초단파를 이용해 지방세포를 파괴하고",
      "콜라겐 생성을 유도하여 탄력있는",
      "바디라인을 완성하는 프리미엄 장비입니다."
    ],
    img: eqOnda,
    imgScale: 3.5
  }
];

function useHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);
    const frame = { id: 0 };
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / HERO_INTERVAL, 1);
      setProgress(p);
      if (p >= 1) {
        setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      } else {
        frame.id = requestAnimationFrame(tick);
      }
    };
    frame.id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.id);
  }, [currentIndex]);

  return { currentIndex, progress, count: HERO_IMAGES.length };
}

function ImageHeroBackground({ heroHeight }: { heroHeight?: number }) {
  const { currentIndex } = useContext(HeroCarouselContext);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  
  // Fade out between 0px and 800px of scrolling
  const opacity = useTransform(scrollY, [0, 800], [0.9, 0]);
  const y = useTransform(scrollY, [0, 800], [0, 200]); // slight parallax

  if (isMobile) {
    return (
      <div className="relative h-[100dvh] left-0 overflow-clip top-0 w-full bg-[#faf6f1]" data-name="Image (Hero Background)">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.15 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: HERO_INTERVAL / 1000, ease: [0.25, 0.1, 0.25, 1] }
              }} 
              alt="Hero background" 
              className="absolute h-full left-0 max-w-none top-0 w-full object-cover" 
              src={HERO_IMAGES[currentIndex]} 
            />
          </AnimatePresence>
        </div>
        <Container />
      </div>
    );
  }

  return (
    <motion.div style={{ opacity, y, height: heroHeight || 1080 }} className="absolute left-0 overflow-clip top-0 w-[1920px] bg-[#faf6f1]" data-name="Image (Hero Background)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: HERO_INTERVAL / 1000, ease: [0.25, 0.1, 0.25, 1] }
            }} 
            alt="Hero background" 
            className="absolute h-full left-0 max-w-none top-0 w-full object-cover" 
            src={HERO_IMAGES[currentIndex]} 
          />
        </AnimatePresence>
      </div>
      <Container />
    </motion.div>
  );
}

function Group() {
  return (
    <div className="absolute top-[38.46px] left-[247.17px] h-[11.538px] w-[82.071px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.0706 11.5385">
        <g id="Group">
          <path d={svgPaths.p2d3580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p33fdb800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p33e20280} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1638a800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pf629e00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2090c700} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute top-0 left-0 h-[50px] w-[230.825px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.824 50">
        <g id="Group">
          <path d={svgPaths.p17070840} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p137b1540} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p187ca940} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2b9119a0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p31e5bf80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p301a5380} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group12({ isScrolled, isMenuOpen, onLogoClick }: { isScrolled?: boolean; isMenuOpen?: boolean; onLogoClick?: () => void }) {
  const isMobile = useIsMobile();
  return (
    <motion.div 
      initial={{ height: isMobile ? 30 : 50, width: isMobile ? 198 : 330 }}
      animate={{ height: isMobile ? 30 : (isScrolled ? 30 : 50), width: isMobile ? 198 : (isScrolled ? 198 : 330) }}
      transition={{ duration: 0.3 }}
      className="relative shrink-0 cursor-pointer flex items-center"
      onClick={onLogoClick}
    >
      <motion.div
        initial={{ scale: isMobile ? 0.6 : 1 }}
        animate={{ scale: isMobile ? 0.6 : (isScrolled ? 0.6 : 1) }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left center", "--fill-0": (isScrolled && !isMenuOpen) ? "#1c1614" : "white" } as React.CSSProperties}
        className="w-[330px] h-[50px] relative"
      >
        <Group1 />
        <Group />
      </motion.div>
    </motion.div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[34px_34px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Group">
          <path d={svgPaths.p33051400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p5083d00} fill="var(--fill-0, #D80027)" id="Vector_2" />
          <path d="M0 0H17V17H0V0Z" fill="var(--fill-0, #0052B4)" id="Vector_3" />
          <path d={svgPaths.pd5f9180} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group2 />
    </div>
  );
}

function LangUs() {
  return (
    <div className="overflow-clip relative shrink-0 size-[34px]" data-name="lang_us">
      <MaskGroup />
    </div>
  );
}

function LangJp() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lang_jp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lang_jp">
          <rect fill="var(--fill-0, white)" height="34" rx="17" width="34" />
          <path d={svgPaths.p2fcf4a00} fill="var(--fill-0, #D80027)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2218 26.9896">
        <g id="Group">
          <g id="SVGoLAQBc9q">
            <path clipRule="evenodd" d={svgPaths.p3544f500} fill="var(--fill-0, #000001)" fillRule="evenodd" id="SVGDce7udzV" />
            <path clipRule="evenodd" d={svgPaths.p275a3a00} fill="var(--fill-0, #000001)" fillRule="evenodd" id="SVGDce7udzV_2" />
          </g>
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p31878200} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.pd5837c0} stroke="var(--stroke-0, white)" strokeWidth="0.292969" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p381f5a00} fill="var(--fill-0, #CD2E3A)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3bc21df0} fill="var(--fill-0, #0047A0)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p3e849100} fill="var(--fill-0, #CD2E3A)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.11092 26.7351">
        <g id="Group">
          <g id="SVGoLAQBc9q">
            <path clipRule="evenodd" d={svgPaths.p218cf000} fill="var(--fill-0, #000001)" fillRule="evenodd" id="SVGDce7udzV" />
            <path clipRule="evenodd" d={svgPaths.p15cd1880} fill="var(--fill-0, #000001)" fillRule="evenodd" id="SVGDce7udzV_2" />
          </g>
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2484c80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p5e4a000} stroke="var(--stroke-0, white)" strokeWidth="0.292969" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LangKr() {
  return (
    <div className="bg-white overflow-clip relative rounded-[1000px] shrink-0 size-[34px]" data-name="lang_kr">
      <div className="absolute flex inset-[13.54%_6.25%_12.51%_7.76%] items-center justify-center">
        <div className="flex-none h-[26.991px] rotate-[-56.3deg] w-[12.222px]">
          <Group3 />
        </div>
      </div>
      <div className="absolute flex inset-[20.59%_11.85%_20.82%_12.76%] items-center justify-center">
        <div className="flex-none h-[26.735px] rotate-[-123.7deg] w-[6.112px]">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Frame19({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <motion.div 
      initial={{ height: 'auto', opacity: 1 }}
      animate={{ 
        height: isScrolled ? 0 : 'auto', 
        opacity: isScrolled ? 0 : 1,
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}
      transition={{ duration: 0.3 }}
      className="content-stretch flex gap-[12px] items-center relative shrink-0 overflow-hidden"
    >
      <LangUs />
      <LangJp />
      <LangKr />
    </motion.div>
  );
}

function Nav({ isScrolled }: { isScrolled?: boolean }) {
  const navigate = useNavigate();
  return (
    <div className="flex font-['Montserrat',sans-serif] font-medium gap-[40px] items-end justify-end leading-[normal] relative shrink-0 text-[17px] whitespace-nowrap transition-colors duration-300 uppercase" style={{ color: isScrolled ? "#1c1614" : "white" }} data-name="nav">
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">About</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/about/brand-value')} onClick={() => navigate('/about/brand-value')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Brand Value</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">브랜드 가치</p>
            </div>
            <div onMouseDown={() => navigate('/about/doctor')} onClick={() => navigate('/about/doctor')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Doctor</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">의료진</p>
            </div>
            <div onMouseDown={() => navigate('/about/gallery')} onClick={() => navigate('/about/gallery')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Gallery</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">갤러리</p>
            </div>
            <div onMouseDown={() => navigate('/about/location')} onClick={() => navigate('/about/location')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Location</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">위치</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">All-depth Lifting</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/alldepth/redefine')} onClick={() => navigate('/alldepth/redefine')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">RE:DEFINE</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">맞춤진단</p>
            </div>
            <div onMouseDown={() => navigate('/alldepth/lifting')} onClick={() => navigate('/alldepth/lifting')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">All-depth Lifting</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">올뎁스 리프팅</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">Treatment</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/treatment/lifting')} onClick={() => navigate('/treatment/lifting')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Lifting</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">리프팅</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/pigmentation')} onClick={() => navigate('/treatment/pigmentation')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Brightening & Redness</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">색소 & 홍조</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/acne-pore')} onClick={() => navigate('/treatment/acne-pore')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Pore & Scar</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">모공 & 흉터</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/petit')} onClick={() => navigate('/treatment/petit')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Petit Plastic Surgery</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">쁘띠성형</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/skin-booster')} onClick={() => navigate('/treatment/skin-booster')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Skin Booster</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">스킨부스터</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/collagen-booster')} onClick={() => navigate('/treatment/collagen-booster')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Collagen Booster</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">콜라겐부스터</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/body')} onClick={() => navigate('/treatment/body')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Body Shape & Fat</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">바디 & 윤곽</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/skincare')} onClick={() => navigate('/treatment/skincare')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Premium Skin Care</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">프리미엄 스킨케어</p>
            </div>
            <div onMouseDown={() => navigate('/treatment/iv-therapy')} onClick={() => navigate('/treatment/iv-therapy')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">IV Therapy</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">수액</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">Reservation</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/reservation')} onClick={() => navigate('/reservation')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Reservation</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">예약</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">Promotion</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/promotion')} onClick={() => navigate('/promotion')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Promotion</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">프로모션</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group flex items-center h-full">
        <p className="cursor-pointer hover:opacity-80 transition-opacity py-[10px]">Community</p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-[25px] hidden group-hover:flex flex-col z-[1001]">
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] px-[32px] py-[24px] relative size-full whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.08)] min-w-[220px]">
            <div onMouseDown={() => navigate('/community')} onClick={() => navigate('/community')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Notice</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">공지사항</p>
            </div>
            <div onMouseDown={() => navigate('/community/column')} onClick={() => navigate('/community/column')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Column</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">칼럼</p>
            </div>
            <div onMouseDown={() => navigate('/community/before-after')} onClick={() => navigate('/community/before-after')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Before & After</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">비포앤애프터</p>
            </div>
            <div onMouseDown={() => navigate('/community/inquiry')} onClick={() => navigate('/community/inquiry')} className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0 w-full group/item cursor-pointer">
              <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#1c1614] text-[16px] group-hover/item:text-[#1c1614] transition-colors uppercase">Customer Inquiry</p>
              <p className="font-['Pretendard',sans-serif] font-light relative shrink-0 text-[#b8a99a] text-[16px] group-hover/item:text-[#1c1614] transition-colors">온라인 상담</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35({ isScrolled, isMenuOpen, setIsMenuOpen }: { isScrolled?: boolean; isMenuOpen: boolean; setIsMenuOpen: (val: boolean) => void }) {
  const isMobile = useIsMobile();
  return (
    <motion.div 
      initial={{ alignItems: "flex-end" }}
      animate={{ alignItems: isScrolled ? "center" : "flex-end" }}
      transition={{ duration: 0.3 }}
      className="flex z-50 relative items-end"
    >
      {!isMobile && (
        <motion.div 
          initial={{ gap: "36px" }}
          animate={{ gap: isScrolled ? "0px" : "36px", opacity: isMenuOpen ? 0 : 1, pointerEvents: isMenuOpen ? "none" : "auto" }}
          transition={{ duration: 0.3 }}
          style={{ gap: "36px" }}
          className="flex flex-col items-end relative shrink-0"
        >
          <Frame19 isScrolled={isScrolled} />
          <Nav isScrolled={isScrolled} />
        </motion.div>
      )}
      <motion.div 
        initial={isMobile ? { opacity: 1, width: 32, marginLeft: 0 } : { opacity: 0, width: 0, marginLeft: 0 }}
        animate={isMobile ? { opacity: 1, width: 32, marginLeft: 0 } : { 
          opacity: (isScrolled || isMenuOpen) ? 1 : 0, 
          width: (isScrolled || isMenuOpen) ? 32 : 0,
          marginLeft: (isScrolled || isMenuOpen) ? 40 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity overflow-hidden shrink-0 pointer-events-auto"
      >
        <div className="relative w-[32px] h-[32px] flex flex-col items-center justify-center shrink-0 min-w-[32px]">
          {/* Top line */}
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
              backgroundColor: (isScrolled && !isMenuOpen && !isMobile) ? "#1c1614" : "#ffffff",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block w-[24px] h-[2px] rounded-full absolute top-[7px]"
          />
          {/* Middle line */}
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scaleX: isMenuOpen ? 0 : 1,
              backgroundColor: (isScrolled && !isMenuOpen && !isMobile) ? "#1c1614" : "#ffffff",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block w-[24px] h-[2px] rounded-full absolute top-[15px]"
          />
          {/* Bottom line */}
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
              backgroundColor: (isScrolled && !isMenuOpen && !isMobile) ? "#1c1614" : "#ffffff",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block w-[24px] h-[2px] rounded-full absolute top-[23px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Frame36() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const heroHeight = useHeroHeight();

  const handleMenuNav = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0, backgroundColor: "rgba(250, 246, 241, 0)", alignItems: "flex-end", paddingTop: isMobile ? 12 : 30, paddingBottom: isMobile ? 12 : 30 }} 
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: isMobile 
            ? "rgba(250, 246, 241, 0.98)" 
            : (isMenuOpen ? "rgba(250, 246, 241, 0)" : (isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(250, 246, 241, 0)")),
          alignItems: isMobile ? "center" : (isScrolled ? "center" : "flex-end"),
          paddingTop: isMobile ? 12 : (isScrolled ? 20 : 30),
          paddingBottom: isMobile ? 12 : (isScrolled ? 20 : 30),
          paddingLeft: isMobile ? 20 : 140,
          paddingRight: isMobile ? 20 : 140,
          width: isMobile ? "100%" : 1920
        }} 
        transition={{ 
          y: { duration: 0.8, ease: "easeOut" }, 
          opacity: { duration: 0.8, ease: "easeOut" },
          backgroundColor: { duration: 0.3 },
          alignItems: { duration: 0.3 },
          paddingTop: { duration: 0.3 },
          paddingBottom: { duration: 0.3 }
        }} 
        style={{
          backdropFilter: (!isMobile && isScrolled && !isMenuOpen) ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: (!isMobile && isScrolled && !isMenuOpen) ? "blur(20px)" : "blur(0px)",
        }}
        className="absolute flex justify-between top-0 z-[1000] items-end"
      >
        <motion.div 
          aria-hidden="true" 
          animate={{ opacity: isMobile ? 0 : (isScrolled && !isMenuOpen ? 0 : (isMenuOpen ? 0 : 1)) }}
          transition={{ duration: 0.3 }}
          style={{ left: isMobile ? 20 : 140, right: isMobile ? 20 : 140 }}
          className="absolute bottom-0 border-[rgba(255,255,255,0.6)] border-b border-solid pointer-events-none" 
        />
        <Group12 isScrolled={isScrolled} isMenuOpen={isMenuOpen} onLogoClick={() => handleMenuNav('/')} />
        <Frame35 isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </motion.div>
      
      {/* Full Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? "0%" : "-100%"
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-[1920px] max-md:w-full z-[999] flex flex-col overflow-hidden max-md:overflow-auto bg-[#1c1614]"
        style={{ height: isMobile ? "100dvh" : heroHeight, pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsJTIwc3BhJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjkyNzE3fDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral" 
            alt="Menu Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 flex flex-col w-full h-full pt-[120px] max-md:pt-[80px] px-[140px] max-md:px-5 pb-[60px] max-md:pb-[40px]">
          <div className="relative flex max-md:flex-col w-full flex-1 items-center max-md:items-start justify-center">
            {/* Main Navigation */}
            <div className="flex flex-col justify-center gap-[10px] max-md:gap-[8px] w-full my-auto">
              {/* About - with submenu */}
              <div className="group/about">
                <div onClick={() => handleMenuNav('/about/brand-value')} className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/about:text-[#faf6f1] group-hover/about:translate-x-4 uppercase transition-all duration-500 ease-out">About</p>
                </div>
                <div className="max-h-0 group-hover/about:max-h-[200px] max-md:group-hover/about:max-h-[160px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px]">
                    <span onClick={() => handleMenuNav('/about/brand-value')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Brand Value</span>
                    <span onClick={() => handleMenuNav('/about/doctor')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Doctor</span>
                    <span onClick={() => handleMenuNav('/about/gallery')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Gallery</span>
                    <span onClick={() => handleMenuNav('/about/location')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Location</span>
                  </div>
                </div>
              </div>

              {/* All-depth Lifting - with submenu */}
              <div className="group/alldepth">
                <div className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/alldepth:text-[#faf6f1] group-hover/alldepth:translate-x-4 uppercase transition-all duration-500 ease-out">All-depth Lifting</p>
                </div>
                <div className="max-h-0 group-hover/alldepth:max-h-[120px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px]">
                    <span onClick={() => handleMenuNav('/alldepth/redefine')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">RE:DEFINE</span>
                    <span onClick={() => handleMenuNav('/alldepth/lifting')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">All-depth Lifting</span>
                  </div>
                </div>
              </div>

              {/* Treatment - with submenu */}
              <div className="group/treat">
                <div className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/treat:text-[#faf6f1] group-hover/treat:translate-x-4 uppercase transition-all duration-500 ease-out">Treatment</p>
                </div>
                <div className="max-h-0 group-hover/treat:max-h-[200px] max-md:group-hover/treat:max-h-[250px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px] flex-wrap">
                    <span onClick={() => handleMenuNav('/treatment/lifting')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Lifting</span>
                    <span onClick={() => handleMenuNav('/treatment/pigmentation')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Brightening & Redness</span>
                    <span onClick={() => handleMenuNav('/treatment/acne-pore')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Pore & Scar</span>
                    <span onClick={() => handleMenuNav('/treatment/petit')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Petit Plastic Surgery</span>
                    <span onClick={() => handleMenuNav('/treatment/skin-booster')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Skin Booster</span>
                    <span onClick={() => handleMenuNav('/treatment/collagen-booster')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Collagen Booster</span>
                    <span onClick={() => handleMenuNav('/treatment/body')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Body Shape & Fat</span>
                    <span onClick={() => handleMenuNav('/treatment/skincare')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Premium Skin Care</span>
                    <span onClick={() => handleMenuNav('/treatment/iv-therapy')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">IV Therapy</span>
                  </div>
                </div>
              </div>

              {/* Reservation - single menu */}
              <div className="group/reservation">
                <div onClick={() => handleMenuNav('/reservation')} className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/reservation:text-[#faf6f1] group-hover/reservation:translate-x-4 uppercase transition-all duration-500 ease-out">Reservation</p>
                </div>
                <div className="max-h-0 group-hover/reservation:max-h-[100px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px]">
                    <span onClick={() => handleMenuNav('/reservation')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Reservation</span>
                  </div>
                </div>
              </div>

              {/* Promotion - single menu */}
              <div className="group/promotion">
                <div onClick={() => handleMenuNav('/promotion')} className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/promotion:text-[#faf6f1] group-hover/promotion:translate-x-4 uppercase transition-all duration-500 ease-out">Promotion</p>
                </div>
                <div className="max-h-0 group-hover/promotion:max-h-[100px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px]">
                    <span onClick={() => handleMenuNav('/promotion')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Promotion</span>
                  </div>
                </div>
              </div>

              {/* Community - with submenu */}
              <div className="group/comm">
                <div className="cursor-pointer pt-[8px] max-md:pt-[6px]">
                  <p className="inline-block transform font-['Montserrat',sans-serif] font-medium text-[38px] max-md:text-[28px] text-[rgba(250,246,241,0.5)] group-hover/comm:text-[#faf6f1] group-hover/comm:translate-x-4 uppercase transition-all duration-500 ease-out">Community</p>
                </div>
                <div className="max-h-0 group-hover/comm:max-h-[200px] max-md:group-hover/comm:max-h-[160px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="flex gap-[40px] max-md:gap-[16px] max-md:flex-col pt-[8px] pb-[12px] max-md:pt-[6px] max-md:pb-[8px] pl-[8px]">
                    <span onClick={() => handleMenuNav('/community')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Notice</span>
                    <span onClick={() => handleMenuNav('/community/column')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Column</span>
                    <span onClick={() => handleMenuNav('/community/before-after')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Before & After</span>
                    <span onClick={() => handleMenuNav('/community/inquiry')} className="inline-block transform font-['Montserrat',sans-serif] text-[17px] max-md:text-[16px] text-[rgba(250,246,241,0.5)] hover:text-[#faf6f1] hover:translate-x-2 transition-all duration-300 cursor-pointer uppercase">Online Inquiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Bottom Area */}
          <div className="flex w-full items-end justify-between mt-auto max-md:mt-12 max-md:flex-col max-md:items-start max-md:gap-10 pt-[32px] max-md:pt-[24px]">
             
            {/* Info Section */}
            <div className="flex flex-col gap-[16px] max-md:gap-[12px]">
              <div className="flex items-center gap-[24px] max-md:gap-[16px]">
                <p className="font-['Montserrat',sans-serif] font-semibold text-[18px] max-md:text-[16px] text-[#faf6f1] tracking-[2px] uppercase">Refine Dermatology</p>
                <div className="w-[4px] h-[4px] rounded-full bg-[rgba(250,246,241,0.5)] hidden md:block"></div>
                <p className="font-['Montserrat',sans-serif] text-[16px] max-md:text-[16px] text-[rgba(250,246,241,0.7)] hidden md:block">Tel. 02-1234-5678</p>
              </div>
              <p className="font-['Pretendard',sans-serif] font-normal text-[16px] max-md:text-[16px] text-[rgba(250,246,241,0.6)]">
                서울 강남구 테헤란로 123 리파인빌딩 4층
              </p>
              <div className="flex items-center gap-[24px] max-md:gap-[16px] mt-[8px]">
                <span className="font-['Pretendard',sans-serif] font-medium text-[16px] max-md:text-[16px] text-[rgba(250,246,241,0.6)] cursor-pointer hover:text-[#faf6f1] transition-colors tracking-wide">카카오톡 상담</span>
                <span className="font-['Pretendard',sans-serif] font-medium text-[16px] max-md:text-[16px] text-[rgba(250,246,241,0.6)] cursor-pointer hover:text-[#faf6f1] transition-colors tracking-wide">네이버 예약</span>
                <span className="font-['Montserrat',sans-serif] font-medium text-[16px] max-md:text-[16px] text-[rgba(250,246,241,0.6)] cursor-pointer hover:text-[#faf6f1] transition-colors tracking-wide uppercase">Instagram</span>
              </div>
            </div>

            {/* Language Section - Right Side */}
            <div className="flex flex-col md:items-end">
              <h2 className="font-['Montserrat',sans-serif] font-medium text-[16px] max-md:text-[16px] tracking-[4px] text-[rgba(250,246,241,0.5)] mb-[24px] max-md:mb-[16px] uppercase">Language</h2>
              <div className="flex items-center gap-5 max-md:gap-4">
                <div className="cursor-pointer transition-opacity hover:opacity-80"><LangKr /></div>
                <div className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"><LangUs /></div>
                <div className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"><LangJp /></div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
}

function Component() {
  return (
    <div className="h-[182px] relative shrink-0 w-[180px] max-md:h-[100px] max-md:w-[100px]" data-name="_격리_모드">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 182">
        <g clipPath="url(#clip0_1_538)" id="_ê²©ë¦¬_ëª¨ë">
          <g id="Group">
            <path d={svgPaths.p18830d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3c9eae00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <motion.g 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{ originX: "90px", originY: "91px" }}
          >
            <g id="Group_2">
              <path d={svgPaths.p3619a2f0} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p3ec42000} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p16082800} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p3f0329f2} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p18aea680} fill="var(--fill-0, white)" id="Vector_7" />
              <path d={svgPaths.p385e7a00} fill="var(--fill-0, white)" id="Vector_8" />
              <path d={svgPaths.p1ffbec00} fill="var(--fill-0, white)" id="Vector_9" />
              <path d={svgPaths.p2aa46900} fill="var(--fill-0, white)" id="Vector_10" />
              <path d={svgPaths.p257bb500} fill="var(--fill-0, white)" id="Vector_11" />
              <path d={svgPaths.p308e5e70} fill="var(--fill-0, white)" id="Vector_12" />
              <path d={svgPaths.p1e1bd5f0} fill="var(--fill-0, white)" id="Vector_13" />
              <path d={svgPaths.p3d944500} fill="var(--fill-0, white)" id="Vector_14" />
              <path d={svgPaths.p399bcf80} fill="var(--fill-0, white)" id="Vector_15" />
              <path d={svgPaths.p573a2b2} fill="var(--fill-0, white)" id="Vector_16" />
              <path d={svgPaths.p1839e200} fill="var(--fill-0, white)" id="Vector_17" />
              <path d={svgPaths.pae9b400} fill="var(--fill-0, white)" id="Vector_18" />
              <path d={svgPaths.p2f8e400} fill="var(--fill-0, white)" id="Vector_19" />
              <path d={svgPaths.p3d9e3200} fill="var(--fill-0, white)" id="Vector_20" />
              <path d={svgPaths.p2b7c2480} fill="var(--fill-0, white)" id="Vector_21" />
              <path d={svgPaths.p275f8300} fill="var(--fill-0, white)" id="Vector_22" />
              <path d={svgPaths.p2302ee80} fill="var(--fill-0, white)" id="Vector_23" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.p3fe7a300} fill="var(--fill-0, white)" id="Vector_24" />
              <path d={svgPaths.p1e3b5700} fill="var(--fill-0, white)" id="Vector_25" />
              <path d={svgPaths.pab18300} fill="var(--fill-0, white)" id="Vector_26" />
              <path d={svgPaths.p23023f0} fill="var(--fill-0, white)" id="Vector_27" />
              <path d={svgPaths.p25a24e00} fill="var(--fill-0, white)" id="Vector_28" />
              <path d={svgPaths.p92abb00} fill="var(--fill-0, white)" id="Vector_29" />
              <path d={svgPaths.p740f600} fill="var(--fill-0, white)" id="Vector_30" />
              <path d={svgPaths.p1c5f6700} fill="var(--fill-0, white)" id="Vector_31" />
              <path d={svgPaths.p396b6240} fill="var(--fill-0, white)" id="Vector_32" />
              <path d={svgPaths.p381f3400} fill="var(--fill-0, white)" id="Vector_33" />
              <path d={svgPaths.pf265300} fill="var(--fill-0, white)" id="Vector_34" />
              <path d={svgPaths.p7577c00} fill="var(--fill-0, white)" id="Vector_35" />
              <path d={svgPaths.p32fb4400} fill="var(--fill-0, white)" id="Vector_36" />
              <path d={svgPaths.pa74c400} fill="var(--fill-0, white)" id="Vector_37" />
              <path d={svgPaths.p15f18900} fill="var(--fill-0, white)" id="Vector_38" />
              <path d={svgPaths.pa705700} fill="var(--fill-0, white)" id="Vector_39" />
              <path d={svgPaths.p2f69fb00} fill="var(--fill-0, white)" id="Vector_40" />
              <path d={svgPaths.p2bac6500} fill="var(--fill-0, white)" id="Vector_41" />
              <path d={svgPaths.p30ce6870} fill="var(--fill-0, white)" id="Vector_42" />
              <path d={svgPaths.p14211680} fill="var(--fill-0, white)" id="Vector_43" />
              <path d={svgPaths.pceb400} fill="var(--fill-0, white)" id="Vector_44" />
            </g>
            <path d={svgPaths.p1d485b80} fill="var(--fill-0, white)" id="Vector_45" />
            <path d={svgPaths.p1a94a480} fill="var(--fill-0, white)" id="Vector_46" />
          </motion.g>
        </g>
        <defs>
          <clipPath id="clip0_1_538">
            <rect fill="white" height="182" width="180" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] max-md:gap-[12px] items-center not-italic relative shrink-0 text-white whitespace-nowrap">
      <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[56px] max-md:text-[24px] max-md:whitespace-normal max-md:text-center max-md:leading-[1.5]">세심하고, 정교하게 다듬어 본연의 아름다움을 만들다</p>
      <div className="font-['Pretendard',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[17px] max-md:text-[16px]">
        <p className="mb-0 max-md:whitespace-normal max-md:text-center">세심한 안목으로 본연의 아름다움을 찾고, 정교한 손길로 세련된 가치를 완성합니다.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function ScrollIndicator() {
  const isMobile = useIsMobile();
  return (
    <motion.div 
      className="flex flex-col items-center gap-[12px] max-md:gap-[8px] z-20 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span className="text-[#faf6f1] text-[16px] max-md:text-[16px] font-['Montserrat',sans-serif] font-medium tracking-[2px] uppercase opacity-90">Scroll</span>
      <div className="w-[2px] h-[60px] max-md:h-[40px] bg-[#faf6f1]/20 relative overflow-hidden">
        <motion.div 
          className="w-full h-1/2 bg-[#faf6f1] absolute left-0"
          animate={{ top: ['-50%', '100%'] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

function Frame({ heroHeight }: { heroHeight?: number }) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col gap-[14px] items-center justify-center w-full px-5 pb-[120px] -mt-[100dvh] h-[100dvh] z-10 text-center pointer-events-none">
        <Component />
        <Frame1 />
        <HeroIndicator />
      </div>
    );
  }
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.2 }} 
      className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-[calc(50%+0.5px)] pointer-events-none"
      style={{ top: heroHeight ? heroHeight * 0.48 : '48%' }}
    >
      <Component />
      <Frame1 />
      <HeroIndicator />
    </motion.div>
  );
}

function LucideMapPin() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="lucide/map-pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.p30cd2b80} stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.pd151bb0} stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Map() {
  return (
    <div className="w-full h-full relative shrink-0 overflow-hidden bg-[#e5e7eb]" data-name="map">
      <iframe
        src="https://maps.google.com/maps?q=123+Teheran-ro,+Gangnam-gu,+Seoul&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full"
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] max-md:gap-[12px] items-center justify-center relative shrink-0 whitespace-nowrap">
      <p className="font-['Montserrat',sans-serif] font-semibold relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] text-center tracking-[4px] max-md:tracking-[3px] uppercase">[ ALL-DEPTH LIFTING ]</p>
      <p className="font-['Pretendard',sans-serif] font-bold relative shrink-0 text-[#222] text-[46px] max-md:text-[24px]">올 뎁스 리프팅</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] max-md:gap-[12px] items-center leading-none relative shrink-0 w-[420px] max-md:w-full max-md:text-center">
      <Frame4 />
      <p className="font-['Pretendard',sans-serif] font-normal min-w-full not-italic relative shrink-0 text-[#666] text-[16px] max-md:text-[16px] w-[min-content] max-md:whitespace-normal max-md:leading-[1.5]">피부의 겉부터 근육층까지, 최적의 조합으로 설계되는 올뎁스 리프팅</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#b8a99a] text-[16px] whitespace-nowrap">프리미엄 리프팅</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#1c1614] text-[26px] whitespace-nowrap uppercase">{`Epidermis & Dermis`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] items-start ml-[40px] mt-[442px] relative row-1 w-[295px]">
      <Frame5 />
      <p className="font-['Pretendard',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#666] text-[17px] w-full">피부결과 탄력 개선</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#b8a99a] text-[16px] whitespace-nowrap">지방층</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#1c1614] text-[26px] whitespace-nowrap uppercase">Fat</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] items-start ml-[455px] mt-[442px] relative row-1">
      <Frame7 />
      <p className="font-['Pretendard',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#666] text-[17px] whitespace-nowrap">얼굴의 무게감을 덜어내고 라인을 탄탄하게</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#b8a99a] text-[16px] whitespace-nowrap">근막층</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame22 />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#1c1614] text-[26px] whitespace-nowrap uppercase">Fascia</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] items-start ml-[870px] mt-[442px] relative row-1 w-[171px]">
      <Frame8 />
      <p className="font-['Pretendard',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#666] text-[17px] w-full">피부의 탄력을 끌어올리는</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#b8a99a] text-[16px] whitespace-nowrap">근육층</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame23 />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#1c1614] text-[26px] whitespace-nowrap uppercase">Muscle</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] items-start ml-[1285px] mt-[442px] relative row-1 w-[248px]">
      <Frame13 />
      <p className="font-['Pretendard',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#666] text-[17px] w-full">자연스러운 리프팅 효과가 지속되도록</p>
    </div>
  );
}

const accordionData = [
  {
    tag: "프리미엄 리프팅",
    title: "Epidermis & Dermis",
    desc: "피부결과 탄력 개선",
    img: exampleImage
  },
  {
    tag: "지방층",
    title: "Fat Layer",
    desc: "얼굴의 무게감을 덜어내고 라인을 탄탄하게",
    img: accordionImage2
  },
  {
    tag: "근막층",
    title: "SMAS Fascia",
    desc: "피부의 탄력을 끌어올리는",
    img: accordionImage3
  },
  {
    tag: "근육층",
    title: "Deep Muscle",
    desc: "자연스러운 리프팅 효과가 지속되도록",
    img: exampleImage2
  }
];

function Group14() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[8px] w-full relative shrink-0">
        {accordionData.map((item, index) => (
          <div key={index} className="relative h-[140px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-0">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="absolute inset-0 z-10 p-[14px] flex flex-col justify-end">
              <div className="flex items-center justify-center px-[8px] py-[3px] w-max rounded-[4px] border border-white/50 bg-black/20 backdrop-blur-sm mb-1.5">
                <p className="font-['Pretendard',sans-serif] font-medium text-white text-[16px] leading-none whitespace-nowrap">{item.tag}</p>
              </div>
              <p className="font-['Montserrat',sans-serif] font-medium text-white text-[18px] leading-none drop-shadow-md uppercase">{item.title}</p>
              <p className="font-['Pretendard',sans-serif] font-normal text-white/90 text-[16px] leading-normal mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-[624px] w-full max-w-[1640px] gap-[20px] relative shrink-0" onMouseLeave={() => setHoveredIndex(0)}>
      {accordionData.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{ flex: isHovered ? 2.5 : 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="relative h-full overflow-hidden cursor-pointer group"
          >
            <div className="absolute inset-0 z-0">
              <motion.img
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <motion.div
                animate={{ opacity: isHovered ? 0.3 : 0.4 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-black/60 mix-blend-multiply"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="absolute inset-0 z-10 p-[40px] flex flex-col justify-end">
              <motion.div 
                className="absolute bottom-[40px] left-[40px] right-[40px] flex flex-col gap-[15px]"
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -20 : 20, pointerEvents: isHovered ? "auto" : "none" }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-center px-[12px] py-[8px] w-max rounded-[4px] border border-white/50 bg-black/20 backdrop-blur-sm">
                  <p className="font-['Pretendard',sans-serif] font-medium text-white text-[16px] leading-none whitespace-nowrap">
                    {item.tag}
                  </p>
                </div>
                
                <p className="font-['Montserrat',sans-serif] font-medium text-white text-[32px] leading-none whitespace-nowrap drop-shadow-md uppercase">
                  {item.title}
                </p>
                
                <p className="font-['Pretendard',sans-serif] font-normal text-white/90 text-[18px] leading-normal pt-2">
                  {item.desc}
                </p>
              </motion.div>

              <motion.div 
                className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex items-center justify-center"
                initial={false}
                animate={{ opacity: isHovered ? 0 : 1, pointerEvents: isHovered ? "none" : "auto" }}
                transition={{ duration: 0.4 }}
              >
                <p 
                  className="font-['Montserrat',sans-serif] font-medium text-white text-[32px] whitespace-nowrap drop-shadow-md tracking-[2px] uppercase"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {item.title}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function Frame43() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col gap-[20px] items-center w-full px-5 py-8 bg-[#faf6f1]">
        <Frame12 />
        <Group14 />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="absolute content-stretch flex flex-col gap-[80px] items-center left-1/2 -translate-x-1/2 top-[2327px] w-[1640px] max-w-[90vw]">
      <Frame12 />
      <Group14 />
    </motion.div>
  );
}

function Image() {
  const isMobile = useIsMobile();
  return (
    <div className={`relative shrink-0 ${isMobile ? 'h-[180px] w-full' : 'h-[970px] w-[960px]'}`} data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="Promotion Image" className="absolute max-w-none object-cover size-full" src={promoImage} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] max-md:gap-[10px] items-center relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-none relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] tracking-[4px] max-md:tracking-[3px] uppercase">[ PROMOTION <span className="tracking-[0px]">]</span></p>
      <div className="font-['Pretendard',sans-serif] font-bold leading-[1.5] max-md:leading-[1.4] relative shrink-0 text-[#222] text-[40px] max-md:text-[22px]">
        <p className="mb-0">신규 고객</p>
        <p>첫 방문 프로모션</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] max-md:gap-[16px] items-center justify-center relative shrink-0 text-center whitespace-nowrap max-md:whitespace-normal">
      <Frame17 />
      <p className="font-['Pretendard',sans-serif] font-normal leading-none max-md:leading-[1.4] relative shrink-0 text-[#666] text-[17px] max-md:text-[16px]">환절기 피부 장벽에 회복을 위한 집중 케어 프로그램입니다.</p>
    </div>
  );
}

function Info() {
  const isMobile = useIsMobile();
  return (
    <div className={`bg-[#f0ebe4] content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip pt-[20px] relative shrink-0 ${isMobile ? 'h-auto w-full px-5 py-6 gap-[24px]' : 'h-[970px] w-[960px] px-[60px] gap-[67px]'}`} data-name="info">
      <Frame14 />
      <div className="bg-[#1c1614] content-stretch flex h-[64px] max-md:h-[46px] items-center justify-center px-[40px] max-md:px-[24px] py-[16px] relative shrink-0 w-[240px] max-md:w-[180px] cursor-pointer hover:bg-[#2d2320] transition-colors" data-name="promoBtn">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] max-md:text-[16px] text-white tracking-[2px] whitespace-nowrap uppercase">View All</p>
      </div>
    </div>
  );
}

function Frame16() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col items-center w-full bg-[#faf6f1]">
        <Image />
        <Info />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="absolute content-stretch flex items-center left-0 top-[4336px]">
      <Image />
      <Info />
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] max-md:gap-[10px] items-start justify-center leading-none relative shrink-0 whitespace-nowrap max-md:whitespace-normal">
      <p className="font-['Montserrat',sans-serif] font-semibold relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] text-center tracking-[2px] max-md:tracking-[1.5px] uppercase">{`[ DIRECTIONS & A MEDICAL GUIDE ]`}</p>
      <p className="font-['Pretendard',sans-serif] font-bold relative shrink-0 text-[#222] text-[40px] max-md:text-[22px]">{`오시는 길 & 진료안내`}</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] tracking-[1px] whitespace-nowrap">Location</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] max-md:gap-[12px] items-start py-[36px] max-md:py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
      <Frame25 />
      <p className="font-['Pretendard',sans-serif] font-medium leading-none max-md:leading-[1.5] min-w-full not-italic relative shrink-0 text-[#1c1614] text-[20px] max-md:text-[16px] w-[min-content]">서울특별시 강남구 테헤란로 123 REFINE 피부과의원 5층</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] whitespace-nowrap">Hour</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="font-['Pretendard',sans-serif] font-medium gap-x-[77px] max-md:gap-x-[24px] gap-y-[20px] max-md:gap-y-[10px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] inline-grid relative shrink-0 text-[#222] text-[18px] max-md:text-[16px]">
      <p className="col-1 justify-self-start relative row-1 self-start shrink-0 tracking-[0.36px] whitespace-pre">{`평       일`}</p>
      <p className="col-2 justify-self-start relative row-1 self-start shrink-0 whitespace-nowrap">10:00 - 19:00</p>
      <p className="col-1 justify-self-start relative row-2 self-start shrink-0 whitespace-pre">{`토  요  일`}</p>
      <p className="col-2 justify-self-start relative row-2 self-start shrink-0 whitespace-nowrap">10:00 - 15:00</p>
      <p className="col-1 justify-self-start relative row-3 self-start shrink-0 tracking-[0.72px] whitespace-nowrap">점심시간</p>
      <p className="col-2 justify-self-start relative row-3 self-start shrink-0 whitespace-nowrap">13:00 - 14:00</p>
    </div>
  );
}

function Frame28() {
  const closedText = `\ud734\uc9c4 (Closed)  \uc77c\uc694\uc77c / \uacf5\ud734\uc77c  (sun/public holiday)`;
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-none not-italic relative shrink-0 w-full max-md:leading-[1.5]">
      <Frame31 />
      <p className="font-['Pretendard',sans-serif] font-normal min-w-full relative shrink-0 text-[#d80027] text-[17px] max-md:text-[16px] w-[min-content] whitespace-pre-wrap max-md:whitespace-normal">{closedText}</p>
    </div>
  );
}

function Frame28_DEAD() {
  return (
    <div>
      <p className="font-['Pretendard',sans-serif] font-normal min-w-full relative shrink-0 text-[#d80027] text-[17px] w-[min-content] whitespace-pre-wrap">{`휴진 (Closed)  일요일 / 공휴일  (sun/public holiday)`}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] max-md:gap-[12px] items-start py-[36px] max-md:py-[20px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b8a99a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-none relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] whitespace-nowrap">Reservation</p>
    </div>
  );
}

function ResBtn() {
  return (
    <div className="bg-[#f0ebe4] content-stretch flex flex-col gap-[14px] max-md:gap-[6px] h-[108px] max-md:h-[64px] items-center justify-center px-[32px] max-md:px-[12px] py-[16px] relative shrink-0 w-[227px] max-md:w-full max-md:flex-row" data-name="resBtn1">
      <div className="flex h-[26.403px] max-md:h-[20px] items-center justify-center relative shrink-0 w-[19.905px] max-md:w-[15px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.95deg]">
          <div className="h-[24px] relative w-[16px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
              <path d={svgPaths.p5813ce0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#222] text-[17px] max-md:text-[16px] whitespace-nowrap">전화상담</p>
    </div>
  );
}

function ResBtn1() {
  return (
    <div className="bg-[#f0ebe4] content-stretch flex flex-col gap-[14px] max-md:gap-[6px] h-[108px] max-md:h-[64px] items-center justify-center px-[32px] max-md:px-[12px] py-[16px] relative shrink-0 w-[226px] max-md:w-full max-md:flex-row" data-name="resBtn2">
      <div className="h-[26px] max-md:h-[20px] relative shrink-0 w-[30px] max-md:w-[22px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 26">
          <path d={svgPaths.p3cae5000} fill="var(--fill-0, #FFD000)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Pretendard'] font-medium leading-none not-italic relative shrink-0 text-[#222] text-[17px] max-md:text-[16px] whitespace-nowrap">카카오톡</p>
    </div>
  );
}

function ResBtn2() {
  return (
    <div className="bg-[#f0ebe4] content-stretch flex flex-col gap-[14px] max-md:gap-[6px] h-[108px] max-md:h-[64px] items-center justify-center px-[32px] max-md:px-[12px] py-[16px] relative shrink-0 w-[227px] max-md:w-full max-md:flex-row" data-name="resBtn3">
      <div className="relative shrink-0 size-[20px] max-md:size-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p25dc5ff0} fill="var(--fill-0, #71C241)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Pretendard'] font-medium leading-none not-italic relative shrink-0 text-[#222] text-[17px] max-md:text-[16px] whitespace-nowrap">네이버</p>
    </div>
  );
}

function Frame34() {
  const isMobile = useIsMobile();
  return (
    <div className={`content-stretch flex gap-[10px] max-md:gap-[8px] items-center relative shrink-0 w-full ${isMobile ? 'flex-row' : ''}`}>
      <ResBtn />
      <ResBtn1 />
      <ResBtn2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] max-md:gap-[12px] items-start py-[36px] max-md:py-[20px] relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame26 />
      <Frame32 />
    </div>
  );
}

function Frame30() {
  const isMobile = useIsMobile();
  return (
    <div className={`content-stretch flex flex-col items-start ${isMobile ? 'w-full gap-[10px]' : 'w-[700px] gap-[20px]'}`}>
      <Frame18 />
      <Frame29 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[76.92%_0_0_74.9%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.9804 8.30769">
        <g id="Group">
          <path d={svgPaths.p16125500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1097ed80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pd289500} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p72c4980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p29f8d580} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p4d2b500} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_29.41%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.882 36">
        <g id="Group">
          <path d={svgPaths.p3ad71600} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p26d13800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p37724380} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p31827800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p35a77670} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p25196200} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode() {
  return (
    <div className="h-[36px] max-md:h-[28px] overflow-clip relative shrink-0 w-[235px] max-md:w-[180px]" data-name="Isolation_Mode">
      <Group5 />
      <Group6 />
    </div>
  );
}

function FooterBrand() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px] max-md:w-full" data-name="footerBrand">
      <IsolationMode />
      <p className="font-['Pretendard'] font-light leading-relaxed not-italic relative shrink-0 text-[14px] text-[#faf6f1]/60 whitespace-nowrap max-md:whitespace-normal">
        세심하고, 정교하게 다듬어<br/>
        본연의 아름다움을 만들다
      </p>
    </div>
  );
}

function FooterColInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] max-md:gap-[12px] items-start overflow-clip relative shrink-0 w-[240px] max-md:w-full">
      <p className="font-['Montserrat'] font-semibold relative shrink-0 text-[14px] text-[#faf6f1] tracking-[2px] uppercase">Information</p>
      <div className="flex flex-col gap-[8px] font-['Pretendard'] font-light text-[14px] text-[#faf6f1]/70 leading-relaxed">
        <p>리파인의원</p>
        <p>대표자명 : 김리파</p>
        <p>사업자등록번호 : 123-45-67890</p>
        <p>서울특별시 강남구 테헤란로 123, 4층</p>
        <p className="font-['Montserrat'] mt-2">T. 02-1234-5678</p>
        <p className="font-['Montserrat']">E. contact@refineclinic.com</p>
      </div>
    </div>
  );
}

function FooterColHours() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] max-md:gap-[12px] items-start overflow-clip relative shrink-0 w-[200px] max-md:w-full">
      <p className="font-['Montserrat'] font-semibold relative shrink-0 text-[14px] text-[#faf6f1] tracking-[2px] uppercase">Clinic Hours</p>
      <div className="flex flex-col gap-[8px] font-['Pretendard'] font-light text-[14px] text-[#faf6f1]/70 leading-relaxed">
        <div className="flex justify-between w-full max-w-[160px]">
          <span>월 - 목</span>
          <span className="font-['Montserrat']">10:00 - 19:00</span>
        </div>
        <div className="flex justify-between w-full max-w-[160px]">
          <span>금요일</span>
          <span className="font-['Montserrat']">10:00 - 20:30</span>
        </div>
        <div className="flex justify-between w-full max-w-[160px]">
          <span>토요일</span>
          <span className="font-['Montserrat']">10:00 - 16:00</span>
        </div>
        <p className="mt-2 text-[#faf6f1]/50 text-[13px]">* 일요일 및 공휴일 휴진</p>
      </div>
    </div>
  );
}

function FooterColSocial() {
  const linkClass = "font-['Montserrat'] font-medium text-[13px] text-[#faf6f1]/70 cursor-pointer hover:text-[#faf6f1] transition-colors uppercase tracking-[1px]";
  return (
    <div className="content-stretch flex flex-col gap-[16px] max-md:gap-[12px] items-start overflow-clip relative shrink-0 w-[140px] max-md:w-full">
      <p className="font-['Montserrat'] font-semibold relative shrink-0 text-[14px] text-[#faf6f1] tracking-[2px] uppercase">Channels</p>
      <div className="flex flex-col gap-[12px]">
        <p className={linkClass}>Instagram</p>
        <p className={linkClass}>Kakao Talk</p>
        <p className={linkClass}>Naver</p>
        <p className={linkClass}>Youtube</p>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[80px] max-lg:gap-[40px] max-md:gap-[32px] items-start leading-[normal] overflow-clip relative shrink-0 max-md:flex-col w-full lg:w-auto lg:justify-end" data-name="footerLinks">
      <FooterColInfo />
      <FooterColHours />
      <FooterColSocial />
    </div>
  );
}

function FooterTop() {
  const isMobile = useIsMobile();
  return (
    <div className={`content-stretch flex overflow-clip relative shrink-0 w-full ${isMobile ? 'flex-col gap-[40px] items-start' : 'items-start justify-between'}`} data-name="footerTop">
      <FooterBrand />
      <FooterLinks />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex max-md:flex-col-reverse max-md:gap-[16px] h-auto items-end max-md:items-start justify-between leading-[normal] overflow-clip relative shrink-0 text-[13px] text-[#faf6f1]/40 w-full pt-[24px] mt-[60px] max-md:mt-[40px] border-t border-[#faf6f1]/10" data-name="footerBottom">
      <p className="font-['Montserrat'] font-light tracking-[0.5px]">© 2026 REFINE Dermatology Clinic. All rights reserved.</p>
      <div className="flex gap-[24px] font-['Pretendard'] font-normal text-[#faf6f1]/60">
        <p className="cursor-pointer hover:text-[#faf6f1] transition-colors">이용 약관</p>
        <p className="cursor-pointer hover:text-[#faf6f1] transition-colors">개인정보처리방침</p>
      </div>
    </div>
  );
}

export function Frame3() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative bg-[#201814] flex flex-col items-start px-6 py-[60px] w-full" data-name="Frame3">
        <FooterTop />
        <FooterBottom />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="absolute bg-[#201814] top-[6276px] content-stretch flex flex-col items-start px-[140px] xl:px-[200px] py-[100px] w-[1920px]" data-name="Frame3">
      <FooterTop />
      <FooterBottom />
    </motion.div>
  );
}

// Subpage-compatible versions (no absolute positioning)

function SubpageFrame18() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] max-md:gap-[10px] items-start justify-center leading-none relative shrink-0 whitespace-nowrap max-md:whitespace-normal">
      <p className="font-['Montserrat',sans-serif] font-medium relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] text-center tracking-[0px] max-md:tracking-[0px] uppercase">{`DIRECTIONS & A MEDICAL GUIDE`}</p>
      <p className="font-['Pretendard',sans-serif] font-bold relative shrink-0 text-[#222] text-[40px] max-md:text-[22px]">{`오시는 길 & 진료안내`}</p>
    </div>
  );
}

function SubpageFrame30() {
  const isMobile = useIsMobile();
  return (
    <div className={`content-stretch flex flex-col items-start ${isMobile ? 'w-full gap-[10px]' : 'w-[700px] gap-[20px]'}`}>
      <SubpageFrame18 />
      <Frame29 />
    </div>
  );
}

function SubpageFrame30Responsive() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] xl:gap-[20px] items-start w-full max-w-[700px]">
      <SubpageFrame18 />
      <Frame29 />
    </div>
  );
}

export function SubpageDirectionsSection() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col-reverse items-stretch w-full bg-[#faf6f1]">
        <div className="w-full flex flex-col justify-center px-5 py-6 relative">
          <SubpageFrame30 />
        </div>
        <div className="w-full h-[200px] relative">
          <Map />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full bg-[#faf6f1]">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-stretch min-h-[500px] xl:min-h-[700px]">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-[100px] xl:px-[140px] lg:pr-[40px] py-[60px] xl:py-[100px] relative shrink-0">
          <SubpageFrame30Responsive />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] xl:min-h-[700px] relative shrink-0">
          <Map />
        </motion.div>
      </div>
    </div>
  );
}

function Frame30Responsive() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] xl:gap-[20px] items-start w-full max-w-[700px]">
      <Frame18 />
      <Frame29 />
    </div>
  );
}

export function SubpageFooter() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative bg-[#201814] flex flex-col items-start px-6 py-[60px] w-full" data-name="Frame3">
        <FooterTop />
        <FooterBottom />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative bg-[#201814] content-stretch flex flex-col items-start px-[140px] xl:px-[200px] py-[100px] w-full" data-name="Frame3">
      <FooterTop />
      <FooterBottom />
    </motion.div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[54.65%_29.32%_37.79%_48.07%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.053 481.888">
        <g id="Group">
          <path d={svgPaths.p274a9b70} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.padf1300} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export function DirectionsSection() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col-reverse items-stretch w-full bg-[#faf6f1]">
        <div className="w-full flex flex-col justify-center px-5 py-6 relative">
          <Frame30 />
        </div>
        <div className="w-full h-[200px] relative">
          <Map />
        </div>
      </div>
    );
  }
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[5306px] w-[1920px] h-[970px]">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-[960px] h-full flex flex-col justify-center pl-[140px] relative shrink-0">
        <Frame30 />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-[960px] h-full relative shrink-0">
        <Map />
      </motion.div>
    </div>
  );
}

function Group11() {
  const isMobile = useIsMobile();
  const heroHeight = useHeroHeight();
  const shiftAmount = isMobile ? 0 : (heroHeight - 1080);
  
  return (
    <div className="absolute contents left-0 top-0">
      <ImageHeroBackground heroHeight={heroHeight} />
      <Frame heroHeight={heroHeight} />
      <div style={isMobile ? {} : { top: shiftAmount, position: 'absolute', width: '100%', height: '100%' }} className={isMobile ? 'flex flex-col w-full' : 'pointer-events-none'}>
        <div className="pointer-events-auto contents">
          <DirectionsSection />
          <Frame43 />
          <Frame16 />
          <Frame3 />
          <Group7 />
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[2.16%_-14.47%_10%_0.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.156 158.104">
        <g id="Group">
          <path d={svgPaths.p1d79900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p9787000} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[180px] left-[226.63px] opacity-3 top-[282px] w-[132.367px]" data-name="Container">
      <Group8 />
    </div>
  );
}

function Paragraph() {
  return null;
}

function Heading() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard',sans-serif] font-bold leading-[39px] left-0 text-[#121212] text-[28px] top-[-3.5px] tracking-[-0.65px] whitespace-nowrap">상담 예약하기</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-0 items-start left-0 pt-[32px] px-[32px] top-0 w-[339px]" data-name="Container">
      <Heading />
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[275px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[8px] relative size-full">
          <p className="font-['Pretendard',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(28,29,28,0.4)] whitespace-nowrap">성함</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(28,29,28,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.5px] items-start left-[32px] top-[16px] w-[275px]" data-name="Container">
      <TextInput />
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[275px]" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[8px] relative size-full">
          <p className="font-['Pretendard',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(28,29,28,0.4)] whitespace-nowrap">{`연락처 ('-' 제외)`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(28,29,28,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.5px] items-start left-[32px] top-[72px] w-[275px]" data-name="Container">
      <PhoneInput />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(28,29,28,0.3)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard',sans-serif] font-medium leading-[19.5px] left-0 text-[16px] text-[rgba(28,29,28,0.6)] top-px whitespace-nowrap">개인정보수집 및 이용 동의</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[21.5px] items-center left-[32px] top-[128px] w-[161px]" data-name="Label">
      <Container6 />
      <Text />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1c1614] h-[54.5px] left-[32px] top-[188px] w-[275px] cursor-pointer hover:bg-[#2d2320] transition-colors" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Pretendard',sans-serif] font-bold leading-[22.5px] left-[137.48px] text-[16px] text-center text-white top-[15px] tracking-[0.375px] whitespace-nowrap">상담 신청하기</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[264px] left-0 top-[88px] w-[339px]" data-name="Form">
      <Container4 />
      <Container5 />
      <Label />
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#fbfaf8] border-[rgba(28,29,28,0.1)] border-b border-r border-solid border-t h-[352px] left-0 overflow-clip shadow-[20px_0px_40px_0px_rgba(0,0,0,0.06)] top-0 w-[340px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Form />
    </div>
  );
}

function Icon({ isOpen }: { isOpen?: boolean }) {
  return (
    <motion.div 
      animate={{ rotate: isOpen ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      className="h-[20px] overflow-clip relative shrink-0 w-full" 
      data-name="Icon"
    >
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
            <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Container7({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="opacity-80 relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon isOpen={isOpen} />
      </div>
    </div>
  );
}

function Button1({ onClick, isOpen }: { onClick?: () => void, isOpen?: boolean }) {
  return (
    <div 
      className="absolute bg-black content-stretch flex flex-col h-[140px] items-center justify-center left-[340px] pr-px py-px top-0 w-[44px] cursor-pointer hover:bg-[#333] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[rgba(28,29,28,0.1)] border-b border-r border-solid border-t inset-0 pointer-events-none shadow-[10px_0px_20px_0px_rgba(0,0,0,0.1)]" />
      <Container7 isOpen={isOpen} />
    </div>
  );
}

export function QuickReservation() {
  const [isOpen, setIsOpen] = useState(true);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide immediately upon scrolling
    if (latest > 0 && isOpen) {
      setIsOpen(false);
    } else if (latest <= 0 && !isOpen) {
      setIsOpen(true);
    }
  });

  if (isMobile) return null;

  return (
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: isOpen ? 0 : -340 }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="relative h-[352px] w-[340px] flex" 
      data-name="QuickReservation"
    >
      <Container1 />
      <Button1 onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </motion.div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] max-md:gap-[12px] items-center leading-none relative shrink-0">
      <div className="content-stretch flex flex-col gap-[26px] max-md:gap-[10px] items-center justify-center relative shrink-0 whitespace-nowrap max-md:whitespace-normal">
        <p className="font-['Montserrat'] font-semibold relative shrink-0 text-[#b8a99a] text-[16px] max-md:text-[16px] text-center tracking-[4px] max-md:tracking-[3px] uppercase">[ EQUIPMENT ]</p>
        <p className="font-['Pretendard'] font-bold not-italic relative shrink-0 text-[#222] text-[46px] max-md:text-[24px]">장비소개</p>
      </div>
      <p className="font-['Pretendard'] font-normal not-italic relative shrink-0 text-[#666] text-[16px] max-md:text-[16px] text-center max-md:leading-[1.5]">정교하고 안전한 시술을 위해 검증된 프리미엄 장비만을 사용합니다.</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[-29.55%_-13.41%_-15.4%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646.463 675.495">
        <g id="Group">
          <path d={svgPaths.p14ba6100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3474b200} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute lg:bottom-[70px] bottom-0 lg:left-[50%] left-0 h-[466px] opacity-4 w-full lg:w-[570px] pointer-events-none" data-name="Container">
      <Group9 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-gradient-to-t lg:bg-gradient-to-l from-[#1c1614] lg:from-[rgba(0,0,0,0)] h-full left-0 to-[rgba(0,0,0,0.2)] top-0 w-full" data-name="Container" />;
}

function ImageHollywoodSpectra() {
  return (
    <div className="absolute h-full lg:h-[536px] left-1/2 lg:left-[calc(50%+0.5px)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[367px] p-8 lg:p-0" data-name="Image (Hollywood Spectra)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img alt="" className="h-full w-full object-contain" src={imgImageHollywoodSpectra} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative lg:absolute h-[400px] lg:h-[710px] left-0 lg:left-[50%] top-0 w-full lg:w-[50%]" data-name="Container">
      <Container11 />
      <ImageHollywoodSpectra />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid h-[35px] rounded-[16777200px] px-4" data-name="Text">
      <p className="font-['Pretendard'] font-medium leading-[21px] not-italic text-[16px] text-white tracking-[0.3px] whitespace-nowrap">#기미</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid h-[35px] rounded-[16777200px] px-4" data-name="Text">
      <p className="font-['Pretendard'] font-medium leading-[21px] not-italic text-[16px] text-white tracking-[0.3px] whitespace-nowrap">#모공</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid h-[35px] rounded-[16777200px] px-4" data-name="Text">
      <p className="font-['Pretendard'] font-medium leading-[21px] not-italic text-[16px] text-white tracking-[0.3px] whitespace-nowrap">#색소침착</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid h-[35px] rounded-[16777200px] px-4" data-name="Text">
      <p className="font-['Pretendard'] font-medium leading-[21px] not-italic text-[16px] text-white tracking-[0.3px] whitespace-nowrap">#피부톤</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative flex flex-wrap gap-2 w-full max-w-[387px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="font-['Montserrat'] font-medium leading-[1.2] md:leading-[65px] text-[40px] md:text-[52px] text-white whitespace-normal md:whitespace-nowrap uppercase">
        <p className="mb-0">Hollywood</p>
        <p>Spectra</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Pretendard'] font-medium leading-[33px] not-italic relative shrink-0 text-[#b8a99a] text-[22px] whitespace-nowrap">헐리우드 스펙트라</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-auto md:h-[97.195px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="relative md:absolute font-['Pretendard'] font-light leading-[32.4px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[-1px] w-[369px] max-w-full break-keep">
        <p className="mb-0">기미나 잡티 같은 다양한 색소질환에 균일하게</p>
        <p className="mb-0">레이저 빔을 전달해 얕은 색소부터 깊은 색소까지</p>
        <p>폭넓게 개선하는데 탁월한 효과를 보여줍니다.</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative md:absolute content-stretch flex flex-col gap-[30px] items-start left-0 md:top-[71px] mt-8 md:mt-0 w-[387px] max-w-full">
      <Frame37 />
      <Paragraph2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-auto md:h-[361.195px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex flex-col">
        <Container15 />
        <Frame38 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[57.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat'] font-medium leading-[0] left-0 text-[16px] text-white top-[-1px] tracking-[1.5px] whitespace-nowrap">
          <span className="leading-[22.5px]">01</span>
          <span className="leading-[22.5px] text-[rgba(255,255,255,0.6)]">{` / 03`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[56px] relative shrink-0 w-full max-w-[387px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button2 />
        <Container17 />
        <Button3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[387px] max-w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[120px] items-start py-[70px] relative w-full">
        <Container14 />
        <Container16 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative lg:absolute lg:bottom-0 content-stretch flex flex-col items-start justify-center lg:left-0 p-8 lg:p-0 lg:pl-[96px] w-full lg:w-[50%] h-full z-10" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#1c1614] min-h-[710px] overflow-clip relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full flex flex-col-reverse lg:block" data-name="Container">
      <Container9 />
      <Container12 />
      <Container10 />
    </div>
  );
}

function EquipmentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EQUIPMENT_DATA.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + EQUIPMENT_DATA.length) % EQUIPMENT_DATA.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % EQUIPMENT_DATA.length);

  const currentItem = EQUIPMENT_DATA[currentIndex];

  return (
    <div className="bg-[#1c1614] min-h-[710px] max-md:min-h-0 overflow-clip relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full flex flex-col-reverse lg:block" data-name="Container">
      <Container9 />
      
      <div className="relative lg:absolute lg:bottom-0 content-stretch flex flex-col items-start justify-center lg:left-0 p-8 max-md:px-5 max-md:py-5 lg:p-0 lg:pl-[96px] w-full lg:w-[50%] h-full z-10" data-name="Container">
        <div className="relative shrink-0 w-[387px] max-w-full" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[120px] max-md:gap-[20px] items-start py-[70px] max-md:py-[20px] relative w-full">
            
            <div className="h-auto md:h-[361.195px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex flex-col">
                <div className="relative flex flex-nowrap gap-2 max-md:gap-1 w-max mb-8 max-md:mb-3">
                  {currentItem.tags.map((tag, i) => (
                    <div key={i} className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] border-solid h-[35px] max-md:h-[26px] rounded-[16777200px] px-4 max-md:px-2.5 shrink-0" data-name="Text">
                      <p className="font-['Pretendard'] font-medium leading-[21px] not-italic text-[14px] max-md:text-[12px] text-white tracking-[0.3px] whitespace-nowrap m-0">{tag}</p>
                    </div>
                  ))}
                </div>
                
                <div className="relative md:absolute content-stretch flex flex-col gap-[30px] max-md:gap-[14px] items-start left-0 md:top-[71px] mt-8 max-md:mt-3 md:mt-0 w-[387px] max-w-full">
                  <div className="content-stretch flex flex-col gap-[12px] max-md:gap-[8px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full" data-name="Heading 3">
                      <div className="font-['Montserrat'] font-medium leading-[1.2] md:leading-[65px] text-[24px] md:text-[52px] text-white whitespace-normal md:whitespace-nowrap uppercase">
                        <AnimatePresence mode="wait">
                          <motion.div key={currentIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                            {currentItem.nameLines.map((line, i) => <p key={i} className="mb-0">{line}</p>)}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
                      <AnimatePresence mode="wait">
                        <motion.p key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="font-['Pretendard'] font-medium leading-[33px] max-md:leading-[22px] not-italic relative shrink-0 text-[#b8a99a] text-[22px] max-md:text-[16px] whitespace-nowrap m-0">
                          {currentItem.subtitle}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="h-auto md:h-[97.195px] relative shrink-0 w-full" data-name="Paragraph">
                    <div className="relative md:absolute font-['Pretendard'] font-light leading-[32.4px] max-md:leading-[22px] left-0 not-italic text-[18px] max-md:text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] w-[369px] max-w-full break-keep">
                      <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                          {currentItem.desc.map((line, i) => <p key={i} className="mb-0">{line}</p>)}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[56px] max-md:h-[44px] relative shrink-0 w-full max-w-[387px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] max-md:gap-[16px] items-center relative size-full">
                <button onClick={handlePrev} className="cursor-pointer bg-transparent border-none p-0 outline-none hover:opacity-70 transition-opacity">
                  <div className="relative rounded-[16777200px] shrink-0 size-[56px] max-md:size-[40px]" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                      <div className="relative shrink-0 size-[24px] max-md:size-[18px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                
                <div className="h-[22.5px] max-md:h-[18px] relative shrink-0 w-[57.859px] max-md:w-[50px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                    <p className="font-['Montserrat'] font-medium leading-[0] text-[16px] max-md:text-[16px] text-white tracking-[1.5px] whitespace-nowrap m-0">
                      <span className="leading-[22.5px]">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                      <span className="leading-[22.5px] text-[rgba(255,255,255,0.6)]">{` / ${EQUIPMENT_DATA.length.toString().padStart(2, '0')}`}</span>
                    </p>
                  </div>
                </div>

                <button onClick={handleNext} className="cursor-pointer bg-transparent border-none p-0 outline-none hover:opacity-70 transition-opacity">
                  <div className="relative rounded-[16777200px] shrink-0 size-[56px] max-md:size-[40px]" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                      <div className="relative shrink-0 size-[24px] max-md:size-[18px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="relative lg:absolute h-[340px] lg:h-[710px] left-0 lg:left-[50%] top-0 w-full lg:w-[50%]" data-name="Container">
        <Container11 />
        <div className="absolute h-full lg:h-[536px] left-1/2 lg:left-[calc(50%+0.5px)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[367px]" data-name="Image">
          <div className="absolute inset-0 max-lg:inset-4 overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex} 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }} 
                transition={{ duration: 0.5 }}
                alt={currentItem.nameLines.join(" ")} 
                className="absolute inset-0 w-full h-full object-contain" 
                src={currentItem.img}
                style={{ transform: `scale(${currentItem.imgScale || 1})` }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
      
    </div>
  );
}

function Frame39() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col gap-[16px] items-center w-full px-5 py-8 bg-[#faf6f1]">
        <Frame15 />
        <EquipmentCarousel />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="absolute content-stretch flex flex-col gap-[80px] items-center left-1/2 -translate-x-1/2 top-[3337px] w-[1640px] max-w-[90vw]">
      <Frame15 />
      <EquipmentCarousel />
    </motion.div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <div className="font-['Pretendard',sans-serif] font-bold leading-[1.5] max-md:leading-[1.4] not-italic relative shrink-0 text-[#222] text-[60px] max-md:text-[24px] text-center whitespace-nowrap max-md:whitespace-normal">
        <p className="mb-0">시간이 흘러도 변치 않는 가치,</p>
        <p className="text-[#121212]">본연의 아름다움을 <span className="font-bold text-[#1c1614]">Refine</span> 하다.</p>
      </div>
    </div>
  );
}

function App() {
  return <div className="bg-gradient-to-b from-[rgba(28,29,28,0.3)] h-[80px] shrink-0 to-[rgba(0,0,0,0)] w-px" data-name="App" />;
}

function Frame40() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col gap-[14px] items-center w-full px-5 py-8 bg-[#faf6f1]">
        <p className="font-['Montserrat'] font-semibold leading-none relative shrink-0 text-[#b8a99a] text-[16px] text-center tracking-[3px] whitespace-nowrap uppercase">[ REFINE PHILOSOPHY ]</p>
        <Text5 />
        <App />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="absolute content-stretch flex flex-col gap-[40px] items-center w-full left-1/2 -translate-x-1/2 top-[1211px]">
      <p className="font-['Montserrat'] font-semibold leading-none relative shrink-0 text-[#b8a99a] text-[16px] text-center tracking-[4px] whitespace-nowrap uppercase">[ REFINE PHILOSOPHY ]</p>
      <Text5 />
      <App />
    </motion.div>
  );
}

function App1() {
  return (
    <div className="h-[765px] opacity-90 relative shrink-0 w-full" data-name="App">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={refineImage} />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[594px] max-md:h-[220px] items-start ml-[91px] max-md:ml-0 mt-[40px] max-md:mt-0 overflow-clip relative row-1 w-[509px] max-md:w-full " data-name="Container">
      <App1 />
    </div>
  );
}

function App2() {
  return (
    <div className="col-1 h-[427px] max-md:h-[200px] ml-[-40px] max-md:ml-0 mt-[0px] relative row-1 w-[266px] max-md:w-full overflow-hidden max-md:hidden" data-name="App">
      <img alt="Leaf with water drop" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-auto max-w-none pointer-events-none" src={leafDropImage} />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid max-md:flex max-md:flex-col max-md:gap-5 leading-[0] place-items-start relative shrink-0 max-md:w-full">
      <Container18 />
      <App2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] max-md:gap-[14px] items-start justify-center not-italic relative shrink-0 whitespace-nowrap max-md:whitespace-normal">
      <div className="font-['Pretendard'] font-semibold leading-[1.6] max-md:leading-[1.4] relative shrink-0 text-[#1c1d1c] text-[30px] max-md:text-[18px] tracking-[-0.85px] max-md:tracking-[-0.5px]">
        <p className="mb-0">세심한 진단과 정교한 솔루션,</p>
        <p>인위적이지 않은 자연스러움.</p>
      </div>
      <div className="font-['Pretendard'] font-normal leading-[1.7] max-md:leading-[1.6] relative shrink-0 text-[#555] text-[16px] max-md:text-[16px] tracking-[0.32px] whitespace-pre max-md:whitespace-normal">
        <p className="mb-0">개인의 피부가 가진 본래의 구조와 결을 깊이 이해하고,</p>
        <p className="mb-0">이를 온전히 보존하면서 최적의 아름다움을 이끌어내는 것을</p>
        <p className="mb-0">가장 중요한 목표로 삼습니다.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">피부 속 코어부터 탄탄하게 차오르는 근본적인 변화.</p>
        <p className="mb-0">검증된 최신 장비와 의료진의 숙련된 노하우가 만나,</p>
        <p>당신의 얼굴에 가장 어울리는 우아한 선과 결을 완성합니다.</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative whitespace-nowrap">
        <p className="font-['Montserrat'] font-normal leading-[15px] relative shrink-0 text-[#666] text-[16px] max-md:text-[16px] tracking-[0.4px] uppercase">Medical Director</p>
        <p className="font-['Montserrat'] font-medium italic leading-[33px] max-md:leading-[24px] relative shrink-0 text-[#1c1d1c] text-[22px] max-md:text-[18px] tracking-[0.88px]">Refine Clinic.</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[-0.01%_-0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.0067 95.0002">
        <g id="Group">
          <path d={svgPaths.p181e5b80} fill="var(--fill-0, #1C1D1C)" id="Vector" />
          <path d={svgPaths.p26d1fe10} fill="var(--fill-0, #1C1D1C)" id="Vector_2" />
          <path d={svgPaths.p385a9200} fill="var(--fill-0, #1C1D1C)" id="Vector_3" />
          <path d={svgPaths.p9c3dc00} fill="var(--fill-0, #1C1D1C)" id="Vector_4" />
          <path d={svgPaths.p15a89600} fill="var(--fill-0, #1C1D1C)" id="Vector_5" />
          <path d={svgPaths.p2e15b900} fill="var(--fill-0, #1C1D1C)" id="Vector_6" />
          <path d={svgPaths.p3c9b0a80} fill="var(--fill-0, #1C1D1C)" id="Vector_7" />
          <path d={svgPaths.p2513d800} fill="var(--fill-0, #1C1D1C)" id="Vector_8" />
          <path d={svgPaths.p369e2c80} fill="var(--fill-0, #1C1D1C)" id="Vector_9" />
          <path d={svgPaths.p424da00} fill="var(--fill-0, #1C1D1C)" id="Vector_10" />
          <path d={svgPaths.p350f3700} fill="var(--fill-0, #1C1D1C)" id="Vector_11" />
          <path d={svgPaths.p6ea8700} fill="var(--fill-0, #1C1D1C)" id="Vector_12" />
          <path d={svgPaths.p3abd7bc0} fill="var(--fill-0, #1C1D1C)" id="Vector_13" />
          <path d={svgPaths.p2e34b000} fill="var(--fill-0, #1C1D1C)" id="Vector_14" />
          <path d={svgPaths.p7a81200} fill="var(--fill-0, #1C1D1C)" id="Vector_15" />
          <path d={svgPaths.pae0280} fill="var(--fill-0, #1C1D1C)" id="Vector_16" />
          <path d={svgPaths.p1a72c80} fill="var(--fill-0, #1C1D1C)" id="Vector_17" />
          <path d={svgPaths.p33233700} fill="var(--fill-0, #1C1D1C)" id="Vector_18" />
          <path d={svgPaths.p3f12ebf0} fill="var(--fill-0, #1C1D1C)" id="Vector_19" />
          <path d={svgPaths.p23ff0a80} fill="var(--fill-0, #1C1D1C)" id="Vector_20" />
          <path d={svgPaths.p3a296d00} fill="var(--fill-0, #1C1D1C)" id="Vector_21" />
          <path d={svgPaths.p14dde270} fill="var(--fill-0, #1C1D1C)" id="Vector_22" />
          <path d={svgPaths.p1189f400} fill="var(--fill-0, #1C1D1C)" id="Vector_23" />
          <path d={svgPaths.p874dbf0} fill="var(--fill-0, #1C1D1C)" id="Vector_24" />
          <path d={svgPaths.p22a07880} fill="var(--fill-0, #1C1D1C)" id="Vector_25" />
          <path d={svgPaths.p341ab780} fill="var(--fill-0, #1C1D1C)" id="Vector_26" />
          <path d={svgPaths.p34706100} fill="var(--fill-0, #1C1D1C)" id="Vector_27" />
          <path d={svgPaths.p93e8000} fill="var(--fill-0, #1C1D1C)" id="Vector_28" />
          <path d={svgPaths.p1b8bfa40} fill="var(--fill-0, #1C1D1C)" id="Vector_29" />
          <path d={svgPaths.p1aeb8900} fill="var(--fill-0, #1C1D1C)" id="Vector_30" />
          <path d={svgPaths.p20744b00} fill="var(--fill-0, #1C1D1C)" id="Vector_31" />
          <path d={svgPaths.p2ce85400} fill="var(--fill-0, #1C1D1C)" id="Vector_32" />
          <path d={svgPaths.p2921f240} fill="var(--fill-0, #1C1D1C)" id="Vector_33" />
          <path d={svgPaths.p19e3100} fill="var(--fill-0, #1C1D1C)" id="Vector_34" />
          <path d={svgPaths.pcf29180} fill="var(--fill-0, #1C1D1C)" id="Vector_35" />
          <path d={svgPaths.p1670f900} fill="var(--fill-0, #1C1D1C)" id="Vector_36" />
          <path d={svgPaths.p21ba4000} fill="var(--fill-0, #1C1D1C)" id="Vector_37" />
          <path d={svgPaths.pf0e7d00} fill="var(--fill-0, #1C1D1C)" id="Vector_38" />
          <path d={svgPaths.p10d03a00} fill="var(--fill-0, #1C1D1C)" id="Vector_39" />
          <path d={svgPaths.p11372e70} fill="var(--fill-0, #1C1D1C)" id="Vector_40" />
          <path d={svgPaths.p13b59a00} fill="var(--fill-0, #1C1D1C)" id="Vector_41" />
          <path d={svgPaths.p16f123f0} fill="var(--fill-0, #1C1D1C)" id="Vector_42" />
          <path d={svgPaths.p95deec0} fill="var(--fill-0, #1C1D1C)" id="Vector_43" />
          <path d={svgPaths.p84cbf00} fill="var(--fill-0, #1C1D1C)" id="Vector_44" />
          <path d={svgPaths.p27da85c0} fill="var(--fill-0, #1C1D1C)" id="Vector_45" />
          <path d={svgPaths.p866e780} fill="var(--fill-0, #1C1D1C)" id="Vector_46" />
        </g>
      </svg>
    </div>
  );
}

function RCircleLogo() {
  return (
    <div 
      className="h-[95px] max-md:h-[60px] opacity-10 relative shrink-0 w-[93px] max-md:w-[58px]" 
      data-name="RCircleLogo"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group10 />
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[31px] max-md:pt-[20px] relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(28,29,28,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Frame41 />
      <RCircleLogo />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] max-md:gap-[24px] items-start justify-center relative shrink-0 w-[475px] max-md:w-full">
      <Frame45 />
      <App3 />
    </div>
  );
}

function Frame44() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="relative flex flex-col gap-[24px] items-center w-full px-5 py-8 bg-[#faf6f1]">
        <Group13 />
        <Frame42 />
      </div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="absolute content-stretch flex gap-[80px] items-center left-1/2 -translate-x-1/2 top-[1566px]">
      <Group13 />
      <Frame42 />
    </motion.div>
  );
}

export default function Main() {
  const isMobile = useIsMobile();
  const heroHeight = useHeroHeight();
  const shiftAmount = isMobile ? 0 : (heroHeight - 1080);
  const heroCarousel = useHeroCarousel();

  return (
    <HeroCarouselContext.Provider value={heroCarousel}>
    <div className={`bg-[#faf6f1] relative ${isMobile ? 'flex flex-col w-full h-auto' : 'size-full'}`} data-name="main01">
      {!isMobile && <div className="absolute h-[421px] left-[2136px] top-[3499px] w-[195px]" data-name="온다 2" style={{ top: 3499 + shiftAmount }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.93%] left-[-63.65%] max-w-none top-[-4.28%] w-[233.21%]" src={img2} />
        </div>
      </div>}
      {!isMobile && <div style={{ position: 'absolute', top: shiftAmount, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}><Group7 /></div>}
      <ImageHeroBackground heroHeight={heroHeight} />
      <Frame heroHeight={heroHeight} />
      <div className="absolute left-0 top-0 w-full z-20 pointer-events-none" style={{ height: heroHeight || 1080 }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>
      
      <div style={isMobile ? {} : { top: shiftAmount, position: 'absolute', width: '100%', height: '100%', left: 0 }} className={isMobile ? 'flex flex-col w-full' : ''}>
        <div className={isMobile ? '' : 'contents'}>
          <Frame40 />
          <Frame44 />
          <Frame43 />
          <Frame39 />
          <Frame16 />
          <DirectionsSection />
          <Frame3 />
        </div>
      </div>
    </div>
    </HeroCarouselContext.Provider>
  );
}