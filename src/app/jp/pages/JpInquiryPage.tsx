import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { ScaledPageWrapper, useScaledViewportHeight } from "../../components/ScaledPageWrapper";
import { SubpageDirectionsSection, SubpageFooter } from "../../../imports/Main01_JP";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

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

export interface JpInquiryItem {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  isLocked: boolean;
  hasAnswer: boolean;
  views: number;
}

export const jpMockInquiries: JpInquiryItem[] = [
  { id: 12, title: "リフティング施術後のむくみはいつ引きますか？", author: "田**", date: "2026.03.14", category: "リフティング", isLocked: false, hasAnswer: true, views: 48 },
  { id: 11, title: "シミ治療のご相談", author: "中**", date: "2026.03.12", category: "色素", isLocked: true, hasAnswer: true, views: 32 },
  { id: 10, title: "スキンブースターの施術サイクルについて", author: "山**", date: "2026.03.10", category: "スキンブースター", isLocked: false, hasAnswer: true, views: 67 },
  { id: 9, title: "ボトックス施術後の注意事項", author: "鈴**", date: "2026.03.08", category: "プチ整形", isLocked: true, hasAnswer: false, views: 21 },
  { id: 8, title: "ニキビ跡治療の費用について", author: "佐**", date: "2026.03.05", category: "ニキビ", isLocked: false, hasAnswer: true, views: 89 },
  { id: 7, title: "季節の変わり目の肌管理方法", author: "伊**", date: "2026.03.03", category: "スキンケア", isLocked: false, hasAnswer: true, views: 112 },
  { id: 6, title: "フィラー施術のご予約は可能ですか？", author: "渡**", date: "2026.02.28", category: "プチ整形", isLocked: true, hasAnswer: true, views: 35 },
  { id: 5, title: "毛穴縮小施術の種類について", author: "小**", date: "2026.02.25", category: "ニキビ", isLocked: false, hasAnswer: true, views: 76 },
  { id: 4, title: "オールデプスリフティングと一般リフティングの違い", author: "加**", date: "2026.02.22", category: "リフティング", isLocked: false, hasAnswer: true, views: 143 },
  { id: 3, title: "色素レーザー施術の回数について", author: "松**", date: "2026.02.18", category: "色素", isLocked: true, hasAnswer: true, views: 54 },
  { id: 2, title: "コラーゲンブースターの効果持続期間", author: "木**", date: "2026.02.15", category: "スキンブースター", isLocked: false, hasAnswer: true, views: 91 },
  { id: 1, title: "初回来院の流れについて教えてください", author: "林**", date: "2026.02.10", category: "その他", isLocked: false, hasAnswer: true, views: 205 },
];

export default function JpInquiryPage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const [currentPage, setCurrentPage] = useState(1);
  const [passwordModal, setPasswordModal] = useState<{ open: boolean; id: number | null }>({ open: false, id: null });
  const [passwordInput, setPasswordInput] = useState("");
  const itemsPerPage = 8;

  const totalPages = Math.ceil(jpMockInquiries.length / itemsPerPage);
  const inquiries = jpMockInquiries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleItemClick = (item: JpInquiryItem) => {
    if (item.isLocked) {
      setPasswordModal({ open: true, id: item.id });
      setPasswordInput("");
    } else {
      navigate(`/jp/community/inquiry/${item.id}`);
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput.length > 0) {
      setPasswordModal({ open: false, id: null });
      navigate(`/jp/community/inquiry/${passwordModal.id}`);
    }
  };

  const categoryChipStyles: Record<string, { bg: string; text: string; border: string }> = {
    "リフティング":     { bg: "bg-[#f3ebe4]", text: "text-[#8c6d52]", border: "border-[#e2d5c8]" },
    "色素":             { bg: "bg-[#eee8f0]", text: "text-[#7a5f85]", border: "border-[#ddd2e2]" },
    "スキンブースター": { bg: "bg-[#e6eeef]", text: "text-[#4d7a7e]", border: "border-[#cddfe0]" },
    "プチ整形":         { bg: "bg-[#fbeee8]", text: "text-[#b06a48]", border: "border-[#f0d9cc]" },
    "ニキビ":           { bg: "bg-[#e8ecf2]", text: "text-[#506a8a]", border: "border-[#d2dae6]" },
    "スキンケア":       { bg: "bg-[#eef1e8]", text: "text-[#5e7a48]", border: "border-[#dbe3d0]" },
    "その他":           { bg: "bg-[#f0efec]", text: "text-[#7a7770]", border: "border-[#e2e0db]" },
  };

  function CategoryChip({ category }: { category: string }) {
    const style = categoryChipStyles[category] || categoryChipStyles["その他"];
    return (
      <span className={`inline-block text-[12px] md:text-[13px] px-3 py-[3px] border ${style.bg} ${style.text} ${style.border} font-['Pretendard',sans-serif] tracking-[-0.2px] whitespace-nowrap`}>
        {category}
      </span>
    );
  }

  return (
    <ScaledPageWrapper>
      <div className="w-full bg-[#faf6f1] font-['Pretendard',sans-serif] font-light">
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
                ご質問をお寄せいただければ、専門医療スタッフが迅速・正確にお答えいたします。
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

        <section className="w-full bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px]">
            <div className="max-w-[1400px] mx-auto">
              <FadeInUp>
                <div className="mb-[60px] md:mb-[80px]">
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Quick Consultation
                  </p>
                  <h2 className="text-[28px] md:text-[42px] text-[#222] tracking-[-1px] font-['Pretendard',sans-serif] font-light">
                    オンライン相談
                  </h2>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[15px] text-[#6b5f58]">
                    全 <span className="text-[#1c1614] font-medium">{jpMockInquiries.length}</span>件
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <div className="hidden md:flex items-center border-t-2 border-[#1c1614] border-b border-b-[#e8e5e0] py-5 px-6 text-[15px] text-[#6b5f58] font-medium">
                  <div className="w-[80px] text-center font-['Montserrat',sans-serif] tracking-[1px]">No.</div>
                  <div className="w-[130px] text-center">カテゴリー</div>
                  <div className="flex-1 pl-6">タイトル</div>
                  <div className="w-[100px] text-center">投稿者</div>
                  <div className="w-[140px] text-center font-['Montserrat',sans-serif] tracking-[1px]">Date</div>
                  <div className="w-[80px] text-center">回答</div>
                </div>
              </FadeInUp>

              <div>
                {inquiries.map((item, idx) => (
                  <FadeInUp key={item.id} delay={0.05 * idx}>
                    <div
                      onClick={() => handleItemClick(item)}
                      className="flex flex-col md:flex-row md:items-center border-b border-[#e8e5e0] py-[28px] md:py-[32px] px-6 cursor-pointer hover:bg-[#faf6f1]/60 transition-colors duration-200 group"
                    >
                      <div className="hidden md:block w-[80px] text-center text-[15px] text-[#b8a99a] font-['Montserrat',sans-serif]">
                        {item.id}
                      </div>
                      <div className="hidden md:block w-[130px] text-center">
                        <CategoryChip category={item.category} />
                      </div>
                      <div className="flex-1 flex items-center gap-3 pl-0 md:pl-6">
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
                            <span>非公開の投稿です。</span>
                          ) : (
                            item.title
                          )}
                        </span>
                      </div>
                      <div className="hidden md:block w-[100px] text-center text-[15px] text-[#6b5f58]">
                        {item.author}
                      </div>
                      <div className="hidden md:block w-[140px] text-center text-[15px] text-[#b8a99a] font-['Montserrat',sans-serif] tracking-[0.5px]">
                        {item.date}
                      </div>
                      <div className="hidden md:flex w-[80px] justify-center">
                        {item.hasAnswer ? (
                          <span className="text-[13px] font-medium text-white bg-[#1c1614] px-4 py-1.5 tracking-[0.5px]">
                            完了
                          </span>
                        ) : (
                          <span className="text-[13px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-4 py-1.5 tracking-[0.5px]">
                            待機
                          </span>
                        )}
                      </div>
                      <div className="flex md:hidden items-center gap-3 mt-2 text-[13px] text-[#b8a99a]">
                        <span>{item.author}</span>
                        <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                        <span className="font-['Montserrat',sans-serif]">{item.date}</span>
                        <span className="w-[1px] h-3 bg-[#e8e5e0]"></span>
                        {item.hasAnswer ? (
                          <span className="text-[11px] font-medium text-white bg-[#1c1614] px-2 py-0.5">完了</span>
                        ) : (
                          <span className="text-[11px] font-medium text-[#b8a99a] border border-[#e8e5e0] px-2 py-0.5">待機</span>
                        )}
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>

              <FadeInUp delay={0.3}>
                <div className="mt-[40px] flex flex-col items-center gap-[40px]">
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => navigate("/jp/community/inquiry/write")}
                      className="px-10 py-4 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[14px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                    >
                      投稿する
                    </button>
                  </div>

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
                  非公開の投稿です
                </h3>
                <p className="text-[14px] text-[#6b5f58] mb-8">
                  パスワードを入力してください。
                </p>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                  className="w-full bg-transparent border-b border-[#e8e5e0] pb-3 text-[16px] text-[#1c1614] text-center placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors mb-8"
                  placeholder="パスワード"
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
