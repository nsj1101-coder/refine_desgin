import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useIsMobile } from "../../imports/Main01";
import { ChevronRight, Calendar, User, Phone, Check } from "lucide-react";

const CinematicText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className="inline-block"
    >
      {text}
    </motion.div>
  );
};

export function QuickReservation() {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  // Hide upon scroll, but allow manual toggle
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && isOpen && !isHovered) {
      setIsOpen(false);
    } else if (latest <= 100 && !isOpen) {
      setIsOpen(true);
    }
  });

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isOpen ? 0 : -340 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start z-50 shadow-[30px_0_60px_rgba(0,0,0,0.25)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Panel */}
      <div className="w-[340px] bg-[#1a1716]/95 text-[#fdfcfb] overflow-hidden flex flex-col relative border-y border-r border-[#4a4540]/60 backdrop-blur-xl">
        
        {/* Cinematic Lighting Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8c7b6c]/10 rounded-full blur-[60px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
        {/* Header */}
        <div className="pt-12 pb-8 px-9 flex flex-col gap-3 relative z-10">
          <span className="font-['Montserrat'] font-medium text-[11px] tracking-[0.3em] text-[#dcd6ce] uppercase flex items-center gap-3">
            <span className="w-5 h-[1px] bg-[#dcd6ce]/60"></span>
            <CinematicText text="Reservation" delay={0.1} />
          </span>
          <h3 className="font-['Pretendard'] font-semibold text-[24px] tracking-[-0.03em] leading-[1.3] mt-2 text-white drop-shadow-md flex items-center gap-2">
            <CinematicText text="프라이빗" delay={0.2} />
            <CinematicText text="상담 예약" delay={0.3} />
          </h3>
        </div>

        {/* Form Content */}
        <div className="px-9 pb-10 flex flex-col gap-7 relative z-10">
          <div className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="group relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#c8c0b6]/80 group-focus-within:text-white transition-colors duration-300">
                <User size={16} strokeWidth={1.8} />
              </div>
              <input 
                type="text" 
                placeholder="성함" 
                className="w-full bg-transparent border-b border-[#c8c0b6]/40 py-3 pl-8 text-[16px] font-normal outline-none focus:border-white transition-colors duration-300 placeholder:text-[#c8c0b6]/60 text-white"
              />
            </div>

            {/* Phone Input */}
            <div className="group relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#c8c0b6]/80 group-focus-within:text-white transition-colors duration-300">
                <Phone size={16} strokeWidth={1.8} />
              </div>
              <input 
                type="tel" 
                placeholder="연락처" 
                className="w-full bg-transparent border-b border-[#c8c0b6]/40 py-3 pl-8 text-[16px] font-normal outline-none focus:border-white transition-colors duration-300 placeholder:text-[#c8c0b6]/60 text-white"
              />
            </div>
            
            {/* Preferred Date */}
            <div className="group relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#c8c0b6]/80 group-focus-within:text-white transition-colors duration-300">
                <Calendar size={16} strokeWidth={1.8} />
              </div>
              <input 
                type="text" 
                placeholder="희망 날짜 및 시간" 
                className="w-full bg-transparent border-b border-[#c8c0b6]/40 py-3 pl-8 text-[16px] font-normal outline-none focus:border-white transition-colors duration-300 placeholder:text-[#c8c0b6]/60 text-white"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer group mt-2">
            <div className="w-[18px] h-[18px] border border-[#c8c0b6]/60 rounded-sm flex items-center justify-center group-hover:border-white transition-colors duration-300 bg-[#1a1716]/50">
              <Check size={12} strokeWidth={2.5} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-[14px] text-[#c8c0b6] font-normal group-hover:text-white transition-colors duration-300">
              개인정보수집 및 이용 동의
            </span>
          </label>

          <button className="relative w-full h-[60px] bg-[#fdfcfb] text-[#1a1716] overflow-hidden group mt-4 font-['Pretendard']">
            <div className="absolute inset-0 bg-[#8c7b6c] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <div className="relative flex items-center justify-center w-full h-full font-semibold text-[16px] tracking-wide group-hover:text-white transition-colors duration-300">
              상담 신청하기
            </div>
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[340px] top-0 w-[48px] h-[64px] bg-[#1a1716]/95 backdrop-blur-xl flex items-center justify-center border-y border-r border-[#4a4540]/60 hover:bg-[#231f1d] transition-colors group shadow-[10px_0_20px_rgba(0,0,0,0.1)]"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          <ChevronRight size={20} strokeWidth={1.5} className="text-[#c8c0b6] group-hover:text-white transition-colors duration-300" />
        </motion.div>
      </button>
    </motion.div>
  );
}
