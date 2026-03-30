import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";

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

export default function PromotionPage() {
  const heroHeight = useScaledViewportHeight();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const navigate = useNavigate();

  const monthlyEvents = [
    {
      id: 2,
      branch: "REFINE 압구정",
      monthText: "February",
      period: "2026.02.01 - 2026.02.28",
      statusText: "진행중인 이벤트",
      title: "2월 시그니처 안티에이징 패키지",
      isEnded: false,
      image: "https://images.unsplash.com/photo-1748543668699-a8a9398e9161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MzcxMjg1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 1,
      branch: "REFINE 압구정",
      monthText: "January",
      period: "2026.01.01 - 2026.01.31",
      statusText: "종료된 이벤트",
      title: "REFINE 1월 리프팅 스페셜",
      isEnded: true,
      image: "https://images.unsplash.com/photo-1749143930790-65db0ee6d222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdoaXRlJTIwc2lsa3xlbnwxfHx8fDE3NzM3MTI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const spotEvents = [
    {
      id: 3,
      branch: "REFINE 전지점",
      monthText: "Spring",
      period: "2026.03.01 - 2026.03.15",
      statusText: "진행중인 이벤트",
      title: "봄맞이 화이트닝 4주 완성",
      isEnded: false,
      image: "https://images.unsplash.com/photo-1665841241612-00d9487d7c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRleHR1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MzcxMjg1OXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const [activeTab, setActiveTab] = useState<'monthly' | 'spot'>('monthly');
  const [currentPage, setCurrentPage] = useState(1);
  
  // For demonstration purposes to show the pagination design
  const totalPages = 3; 

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentEvents = activeTab === 'monthly' ? monthlyEvents : spotEvents;

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
        {/* ===== Cinematic Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ height: heroHeight }}>
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity, repeatType: "reverse" }}
            style={{ y: heroY }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1746439324859-b182173a9790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Promotion Hero"
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
              >Promotion</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Promotion
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-[rgba(255,255,255,0.9)] font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                REFINE이 준비한 특별한 혜택을 확인해 보세요.
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

        {/* ===== Promotion Content Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <FadeInUp>
              <div className="mb-[80px] md:mb-[120px] flex justify-center">
                <div className="inline-flex items-center p-1.5 bg-[#f8f5f0] border border-[#e8e5e0] relative">
                  <button
                    onClick={() => setActiveTab('monthly')}
                    className={`relative flex items-center justify-center px-6 py-3 md:px-10 md:py-4 transition-colors duration-500 ${
                      activeTab === 'monthly' ? 'text-white' : 'text-[#8c8279] hover:text-[#1c1614]'
                    }`}
                  >
                    {activeTab === 'monthly' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#1c1614]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                      <span className={`hidden md:inline-block font-['Montserrat',sans-serif] text-[11px] tracking-[2px] uppercase transition-colors ${activeTab === 'monthly' ? 'text-white/60' : 'text-[#b8a99a]'}`}>Monthly</span>
                      <span className="font-['Pretendard',sans-serif] text-[15px] md:text-[17px] tracking-[-0.02em] font-medium">월간 프로모션</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('spot')}
                    className={`relative flex items-center justify-center px-6 py-3 md:px-10 md:py-4 transition-colors duration-500 ${
                      activeTab === 'spot' ? 'text-white' : 'text-[#8c8279] hover:text-[#1c1614]'
                    }`}
                  >
                    {activeTab === 'spot' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#1c1614]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                      <span className={`hidden md:inline-block font-['Montserrat',sans-serif] text-[11px] tracking-[2px] uppercase transition-colors ${activeTab === 'spot' ? 'text-white/60' : 'text-[#b8a99a]'}`}>Spot</span>
                      <span className="font-['Pretendard',sans-serif] text-[15px] md:text-[17px] tracking-[-0.02em] font-medium">스페셜 프로모션</span>
                    </div>
                  </button>
                </div>
              </div>
            </FadeInUp>

            <div className="flex flex-col gap-[40px] max-w-[1200px] mx-auto">
              {currentEvents.map((event) => (
                <FadeInUp key={event.id}>
                  <div onClick={() => navigate(`/promotion/${event.id}`)} className={`flex flex-col md:flex-row w-full cursor-pointer group transition-colors duration-500 overflow-hidden ${event.isEnded ? 'opacity-60 grayscale' : ''}`}>
                    {/* Left Panel - Image Area */}
                    <div className="relative w-full md:w-[35%] aspect-[16/9] md:aspect-auto overflow-hidden">
                      <ImageWithFallback 
                        src={event.image} 
                        alt={event.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <div className="text-[13px] font-['Montserrat',sans-serif] text-white/80 font-medium tracking-[2px] uppercase mb-4">
                          {event.branch}
                        </div>
                        <div className="text-[40px] md:text-[48px] font-['Montserrat',sans-serif] text-white font-semibold tracking-tight uppercase">
                          {event.monthText}
                        </div>
                      </div>
                    </div>
                    {/* Right Panel - Text Area */}
                    <div className="w-full md:w-[65%] py-10 px-8 md:p-16 flex flex-col justify-center relative bg-[#fcfbf9] group-hover:bg-[#faf6f1] transition-colors duration-500 border-r border-[#e8e5e0]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div className="text-[15px] font-['Montserrat',sans-serif] font-medium tracking-[1px] text-[#8c8279]">
                          {event.period}
                        </div>
                        <div className={`text-[13px] font-['Pretendard',sans-serif] px-4 py-1.5 font-medium ${event.isEnded ? 'bg-[#e8e5e0] text-[#8c8279]' : 'bg-[#1c1614] text-white'}`}>
                          {event.statusText}
                        </div>
                      </div>
                      <h3 className={`text-[28px] md:text-[36px] font-['Pretendard',sans-serif] font-semibold tracking-[-1px] leading-[1.3] ${event.isEnded ? 'text-[#8c8279]' : 'text-[#1c1614]'}`}>
                        {event.title}
                      </h3>
                      <div className="mt-12 flex items-center gap-4">
                        <span className={`text-[14px] font-['Montserrat',sans-serif] font-semibold tracking-[2px] uppercase ${event.isEnded ? 'text-[#a09c98]' : 'text-[#1c1614] group-hover:text-[#b8a99a]'} transition-colors`}>
                          View Details
                        </span>
                        {!event.isEnded && (
                          <div className="w-[40px] h-[2px] bg-[#1c1614] group-hover:bg-[#b8a99a] transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Pagination */}
            <FadeInUp delay={0.2}>
              <div className="flex items-center justify-center gap-6 mt-[80px] md:mt-[120px] pt-[40px] border-t border-[#e8e5e0]">
                <button 
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase transition-colors ${currentPage === 1 ? 'text-[#e8e5e0] cursor-not-allowed' : 'text-[#b8a99a] hover:text-[#1c1614]'}`}
                >
                  Prev
                </button>
                <div className="flex items-center gap-6">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`text-[16px] font-['Montserrat',sans-serif] transition-colors pb-1 ${
                        currentPage === page 
                          ? "text-[#1c1614] font-medium border-b border-[#1c1614]" 
                          : "text-[#b8a99a] hover:text-[#1c1614]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase transition-colors ${currentPage === totalPages ? 'text-[#e8e5e0] cursor-not-allowed' : 'text-[#b8a99a] hover:text-[#1c1614]'}`}
                >
                  Next
                </button>
              </div>
            </FadeInUp>
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