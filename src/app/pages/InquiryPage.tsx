import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../imports/Main01";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function FadeInUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface InquiryItem {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  isLocked: boolean;
  hasAnswer: boolean;
  views: number;
}

export const mockInquiries: InquiryItem[] = [
  { id: 12, title: "리프팅 시술 후 붓기가 언제쯤 빠지나요?", author: "김**", date: "2026.03.14", category: "리프팅", isLocked: false, hasAnswer: true, views: 48 },
  { id: 11, title: "기미 치료 상담 문의드립니다", author: "이**", date: "2026.03.12", category: "색소", isLocked: true, hasAnswer: true, views: 32 },
  { id: 10, title: "스킨부스터 시술 주기가 궁금합니다", author: "박**", date: "2026.03.10", category: "스킨부스터", isLocked: false, hasAnswer: true, views: 67 },
  { id: 9, title: "보톡스 시술 후 주의사항 문의", author: "최**", date: "2026.03.08", category: "쁘띠", isLocked: true, hasAnswer: false, views: 21 },
  { id: 8, title: "여드름 흉터 치료 비용 문의드립니다", author: "정**", date: "2026.03.05", category: "여드름", isLocked: false, hasAnswer: true, views: 89 },
  { id: 7, title: "환절기 피부 관리 방법이 궁금해요", author: "한**", date: "2026.03.03", category: "스킨케어", isLocked: false, hasAnswer: true, views: 112 },
  { id: 6, title: "필러 시술 상담 예약 가능한가요?", author: "강**", date: "2026.02.28", category: "쁘띠", isLocked: true, hasAnswer: true, views: 35 },
  { id: 5, title: "모공 축소 시술 종류가 궁금합니다", author: "윤**", date: "2026.02.25", category: "여드름", isLocked: false, hasAnswer: true, views: 76 },
  { id: 4, title: "올뎁스 리프팅과 일반 리프팅 차이점", author: "서**", date: "2026.02.22", category: "리프팅", isLocked: false, hasAnswer: true, views: 143 },
  { id: 3, title: "색소 레이저 시술 횟수 문의", author: "임**", date: "2026.02.18", category: "색소", isLocked: true, hasAnswer: true, views: 54 },
  { id: 2, title: "콜라겐 부스터 효과 지속 기간", author: "조**", date: "2026.02.15", category: "스킨부스터", isLocked: false, hasAnswer: true, views: 91 },
  { id: 1, title: "첫 방문 상담 절차가 어떻게 되나요?", author: "송**", date: "2026.02.10", category: "기타", isLocked: false, hasAnswer: true, views: 205 },
];

export default function InquiryPage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [currentPage, setCurrentPage] = useState(1);
  const [passwordModal, setPasswordModal] = useState<{ open: boolean; id: number | null }>({ open: false, id: null });
  const [passwordInput, setPasswordInput] = useState("");
  const itemsPerPage = 8;

  const totalPages = Math.ceil(mockInquiries.length / itemsPerPage);
  const inquiries = mockInquiries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleItemClick = (item: InquiryItem) => {
    if (item.isLocked) {
      setPasswordModal({ open: true, id: item.id });
      setPasswordInput("");
    } else {
      navigate(`/community/inquiry/${item.id}`);
    }
  };

  const handlePasswordSubmit = () => {
    // Mock: any password works for demo
    if (passwordInput.length > 0) {
      setPasswordModal({ open: false, id: null });
      navigate(`/community/inquiry/${passwordModal.id}`);
    }
  };

  const categoryChipStyles: Record<string, { bg: string; text: string; border: string }> = {
    "리프팅":     { bg: "bg-[#f3ebe4]", text: "text-[#8c6d52]", border: "border-[#e2d5c8]" },
    "색소":       { bg: "bg-[#eee8f0]", text: "text-[#7a5f85]", border: "border-[#ddd2e2]" },
    "스킨부스터": { bg: "bg-[#e6eeef]", text: "text-[#4d7a7e]", border: "border-[#cddfe0]" },
    "쁘띠":       { bg: "bg-[#fbeee8]", text: "text-[#b06a48]", border: "border-[#f0d9cc]" },
    "여드름":     { bg: "bg-[#e8ecf2]", text: "text-[#506a8a]", border: "border-[#d2dae6]" },
    "스킨케어":   { bg: "bg-[#eef1e8]", text: "text-[#5e7a48]", border: "border-[#dbe3d0]" },
    "기타":       { bg: "bg-[#f0efec]", text: "text-[#7a7770]", border: "border-[#e2e0db]" },
  };

  function CategoryChip({ category }: { category: string }) {
    const style = categoryChipStyles[category] || categoryChipStyles["기타"];
    return (
      <span className={`inline-block text-[12px] md:text-[13px] px-3 py-[3px] border ${style.bg} ${style.text} ${style.border} font-['Pretendard',sans-serif] tracking-[-0.2px] whitespace-nowrap`}>
        {category}
      </span>
    );
  }

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
              src="https://images.unsplash.com/photo-1600947871775-082dd97e2d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Consultation Hero"
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
              >Community</motion.p>
              <motion.h1
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-light leading-[1.1] mb-6 uppercase"
                initial={{ filter: "blur(6px)", opacity: 0, scale: 1.02 }}
                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Online Inquiry
              </motion.h1>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <motion.p
                className="text-[16px] md:text-[22px] text-white/90 font-['Pretendard',sans-serif] font-light tracking-[-0.3px]"
                initial={{ filter: "blur(6px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                궁금한 점을 남겨주시면 전문 의료진이 빠르고 정확하게 답변드립니다.
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

        {/* ===== Inquiry List Section ===== */}
        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="max-w-[1400px] mx-auto">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Quick Consultation
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    온라인 상담
                  </h2>
                </div>
              </FadeInUp>

              {/* Total Count */}
              <FadeInUp delay={0.1}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[15px] text-[#6b5f58]">
                    총 <span className="text-[#1c1614] font-medium">{mockInquiries.length}</span>건
                  </p>
                </div>
              </FadeInUp>

              {/* Table Header */}
              <FadeInUp delay={0.15}>
                <div className="hidden md:flex items-center border-t-2 border-[#1c1614] border-b border-b-[#e8e5e0] py-5 px-6 text-[15px] text-[#6b5f58] font-medium">
                  <div className="w-[80px] text-center font-['Montserrat',sans-serif] tracking-[1px]">No.</div>
                  <div className="w-[110px] text-center">카테고리</div>
                  <div className="flex-1 pl-6">제목</div>
                  <div className="w-[100px] text-center">작성자</div>
                  <div className="w-[140px] text-center font-['Montserrat',sans-serif] tracking-[1px]">Date</div>
                  <div className="w-[80px] text-center">답변</div>
                </div>
              </FadeInUp>

              {/* List Items */}
              <div>
                {inquiries.map((item, idx) => (
                  <FadeInUp key={item.id} delay={0.05 * idx}>
                    <div
                      onClick={() => handleItemClick(item)}
                      className="flex flex-col md:flex-row md:items-center border-b border-[#e8e5e0] py-[28px] md:py-[32px] px-6 cursor-pointer hover:bg-[#faf6f1]/60 transition-colors duration-200 group"
                    >
                      {/* Number */}
                      <div className="hidden md:block w-[80px] text-center text-[15px] text-[#b8a99a] font-['Montserrat',sans-serif]">
                        {item.id}
                      </div>
                      {/* Category */}
                      <div className="hidden md:block w-[110px] text-center">
                        <CategoryChip category={item.category} />
                      </div>
                      {/* Title */}
                      <div className="flex-1 flex items-center gap-3 pl-0 md:pl-6">
                        {/* Mobile: category badge */}
                        <span className="md:hidden shrink-0">
                          <CategoryChip category={item.category} />
                        </span>
                        {item.isLocked && (
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-40">
                            <rect x="1" y="7" width="12" height="8" rx="1" stroke="#1c1614" strokeWidth="1.2"/>
                            <path d="M4 7V4.5C4 2.84315 5.34315 1.5 7 1.5C8.65685 1.5 10 2.84315 10 4.5V7" stroke="#1c1614" strokeWidth="1.2" strokeLinecap="round"/>
                            <circle cx="7" cy="11" r="1" fill="#1c1614"/>
                          </svg>
                        )}
                        <span className="text-[18px] md:text-[20px] text-[#1c1614] group-hover:text-[#b8a99a] transition-colors duration-200 tracking-[-0.3px] line-clamp-1">
                          {item.isLocked ? (
                            <span>비밀글입니다.</span>
                          ) : (
                            item.title
                          )}
                        </span>
                      </div>
                      {/* Author */}
                      <div className="hidden md:block w-[100px] text-center text-[15px] text-[#6b5f58]">
                        {item.author}
                      </div>
                      {/* Date */}
                      <div className="hidden md:block w-[140px] text-center text-[15px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[0.5px]">
                        {item.date}
                      </div>
                      {/* Answer Status */}
                      <div className="hidden md:flex w-[80px] justify-center">
                        {item.hasAnswer ? (
                          <span className="text-[13px] font-medium text-white bg-[#1c1614] px-4 py-1.5 tracking-[0.5px]">
                            완료
                          </span>
                        ) : (
                          <span className="text-[13px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-4 py-1.5 tracking-[0.5px]">
                            대기
                          </span>
                        )}
                      </div>
                      {/* Mobile meta row */}
                      <div className="flex md:hidden items-center gap-3 mt-2 text-[13px] text-[#b8a99a]">
                        <span>{item.author}</span>
                        <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                        <span className="font-['Montserrat',sans-serif]">{item.date}</span>
                        <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                        {item.hasAnswer ? (
                          <span className="text-[11px] font-medium text-white bg-[#1c1614] px-2 py-0.5">완료</span>
                        ) : (
                          <span className="text-[11px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-2 py-0.5">대기</span>
                        )}
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              {/* Bottom: Write Button + Pagination */}
              <FadeInUp delay={0.3}>
                <div className="mt-[40px] flex flex-col items-center gap-[40px]">
                  {/* Write Button */}
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => navigate("/community/inquiry/write")}
                      className="px-10 py-4 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                    >
                      글쓰기
                    </button>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-center gap-6 pt-[40px] border-t border-[#e8e5e0] w-full">
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
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Password Modal */}
        {passwordModal.open && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-white w-[90%] max-w-[420px] p-10 relative"
            >
              <button
                onClick={() => setPasswordModal({ open: false, id: null })}
                className="absolute top-4 right-4 text-[#b8a99a] hover:text-[#1c1614] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="flex flex-col items-center">
                <svg width="28" height="32" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-30">
                  <rect x="1" y="7" width="12" height="8" rx="1" stroke="#1c1614" strokeWidth="1.2"/>
                  <path d="M4 7V4.5C4 2.84315 5.34315 1.5 7 1.5C8.65685 1.5 10 2.84315 10 4.5V7" stroke="#1c1614" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="7" cy="11" r="1" fill="#1c1614"/>
                </svg>
                <h3 className="text-[20px] text-[#1c1614] font-medium tracking-[-0.5px] mb-2">
                  비밀글입니다
                </h3>
                <p className="text-[14px] text-[#6b5f58] mb-8">
                  비밀번호를 입력해 주세요.
                </p>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                  className="w-full bg-transparent border-b border-[#e8e5e0] pb-3 text-[16px] text-[#1c1614] text-center placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors mb-8"
                  placeholder="비밀번호"
                  autoFocus
                />
                <button
                  onClick={handlePasswordSubmit}
                  className="w-full py-4 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}