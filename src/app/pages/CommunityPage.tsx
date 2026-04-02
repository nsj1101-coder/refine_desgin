import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
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

export default function CommunityPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const allNotices = [
    {
      id: 1,
      title: "2024년 3월 진료 일정 안내 (삼일절 휴진)",
      date: "2024.02.25",
      isNotice: true
    },
    {
      id: 2,
      title: "새로운 리프팅 장비 '덴서티' 도입 안내",
      date: "2024.02.10",
      isNotice: true
    },
    {
      id: 3,
      title: "REFINE 겨울철 스킨케어 팁: 속보습 채우기",
      date: "2024.01.15",
      isNotice: false
    },
    {
      id: 4,
      title: "연말연시 진료 시간 변경 안내",
      date: "2023.12.20",
      isNotice: false
    },
    {
      id: 5,
      title: "REFINE 클리닉 공식 홈페이지 오픈",
      date: "2023.11.01",
      isNotice: false
    },
    {
      id: 6,
      title: "가을철 색소 치료, 주의해야 할 사항은?",
      date: "2023.10.15",
      isNotice: false
    },
    {
      id: 7,
      title: "추석 연휴 휴진 안내",
      date: "2023.09.10",
      isNotice: true
    },
    {
      id: 8,
      title: "환절기 피부 트러블 관리 방법",
      date: "2023.08.20",
      isNotice: false
    }
  ];

  const totalPages = Math.ceil(allNotices.length / itemsPerPage);
  const notices = allNotices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
        {/* ===== Minimalist Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center bg-[#201814] pt-[200px] md:pt-[240px] pb-[80px] md:pb-[120px]">
          <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">
            <FadeInUp delay={0.1}>
              <motion.p
                className="font-['Montserrat',sans-serif] font-medium text-[16px] tracking-[6px] text-white/60 uppercase mb-6"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >Community</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Notice
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/70 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                REFINE의 새로운 소식과 유용한 정보를 전해드립니다.
              </motion.p>
            </FadeInUp>
          </div>
        </section>

        {/* ===== Ultra-minimalist List Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="max-w-[1200px] mx-auto">
              <FadeInUp>
                <div className="mb-[80px] md:mb-[120px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Board
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    공지사항
                  </h2>
                </div>
              </FadeInUp>

              <div className="border-t-[2px] border-[#1c1614]">
                {notices.map((notice, idx) => (
                  <FadeInUp key={notice.id} delay={idx * 0.05}>
                    <div 
                      onClick={() => navigate(`/community/${notice.id}`)}
                      className="flex flex-col md:flex-row md:items-center py-[32px] md:py-[40px] border-b border-[#e8e5e0] group cursor-pointer hover:bg-[#faf6f1] transition-colors duration-300 px-4 md:px-8"
                    >
                      <div className="flex items-center md:w-[160px] shrink-0 mb-4 md:mb-0">
                        <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[2px] text-[#1c1614] font-medium uppercase">
                          Notice
                        </span>
                      </div>
                      <div className="flex-1 md:pr-8">
                        <h3 className="text-[20px] md:text-[24px] text-[#1c1614] font-['Pretendard',sans-serif] font-medium tracking-[-0.5px] group-hover:text-[#b8a99a] transition-colors duration-300">
                          {notice.title}
                        </h3>
                      </div>
                      <div className="mt-4 md:mt-0 md:w-[160px] text-left md:text-right shrink-0">
                        <span className="font-['Montserrat',sans-serif] text-[15px] text-[#6b5f58] tracking-[1px]">
                          {notice.date}
                        </span>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              {/* Minimalist Pagination */}
              <FadeInUp delay={0.3}>
                <div className="flex items-center justify-center gap-6 mt-[80px]">
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