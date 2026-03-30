import BtnInstaColor from "../../imports/BtnInstaColor";
import BtnMapColor from "../../imports/BtnMapColor";
import BtnTalkColor from "../../imports/BtnTalkColor";
import BtnYoutubeColor from "../../imports/BtnYoutubeColor";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function QuickMenu() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-end">
      {/* Main Quick Menu Container - slides up when TOP button appears */}
      <motion.div
        animate={{ y: showTopBtn ? 0 : 96 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="relative z-10 flex flex-col items-center bg-[#faf6f1] rounded-[40px] p-[12px] gap-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e6dcd3]">
          <button className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="w-[56px] h-[56px]">
              <BtnTalkColor />
            </div>
          </button>
          <button className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="w-[56px] h-[56px]">
              <BtnInstaColor />
            </div>
          </button>
          <button className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="w-[56px] h-[56px]">
              <BtnYoutubeColor />
            </div>
          </button>
          <button className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="w-[56px] h-[56px]">
              <BtnMapColor />
            </div>
          </button>
        </div>

        {/* TOP Button */}
        <div className="mt-[16px] flex justify-center">
          <AnimatePresence>
            {showTopBtn && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <button 
                  onClick={scrollToTop}
                  className="w-[80px] h-[80px] flex flex-col items-center justify-center rounded-full bg-black text-white hover:bg-[#333] hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.3)] cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                  <span className="text-[16px] font-['Montserrat',sans-serif] font-medium leading-none tracking-wider">Top</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}