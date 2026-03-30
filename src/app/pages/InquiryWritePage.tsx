import { useState, useRef } from "react";
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

export default function InquiryWritePage() {
  const heroHeight = useScaledViewportHeight();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    category: "Lifting",
    isSecret: false,
    title: "",
    content: "",
    agreePrivacy: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    alert("상담 문의가 성공적으로 접수되었습니다. 빠른 시간 내에 답변드리겠습니다.");
    navigate("/community/inquiry");
  };

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
                className="text-[50px] md:text-[86px] text-white font-['Montserrat',sans-serif] font-bold leading-[1.1] mb-6 uppercase"
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

        {/* ===== Form Section ===== */}
        <section className="w-full bg-white relative">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[140px] py-[100px] md:py-[140px] flex flex-col lg:flex-row gap-[80px] lg:gap-[120px]">
            
            {/* Left Column: Info */}
            <div className="w-full lg:w-[35%] flex flex-col">
              <div className="sticky top-[140px]">
                <FadeInUp>
                  <p className="font-['Montserrat',sans-serif] font-medium text-[#b8a99a] text-[16px] tracking-[0px] uppercase mb-4">
                    Quick Consultation
                  </p>
                  <h2 className="text-[40px] md:text-[56px] text-[#1c1614] tracking-[-1.5px] font-['Pretendard',sans-serif] font-bold leading-[1.2] mb-8">
                    상담 글쓰기
                  </h2>
                  <div className="w-12 h-[1px] bg-[#1c1614] mb-8"></div>
                  <p className="text-[16px] md:text-[18px] text-[#6b5f58] leading-[1.8] mb-10 break-keep">
                    남겨주신 문의 내용은 전문 의료진이 확인 후<br className="hidden lg:block" />
                    가장 적합한 시술 방향과 답변을<br className="hidden lg:block" />
                    빠르고 정확하게 안내해 드립니다.<br /><br />
                    첨부파일에 고민이 되는 부위의 사진을 업로드해 주시면<br className="hidden lg:block" />
                    더욱 상세한 맞춤 진단이 가능합니다.
                  </p>
                  
                  <div className="bg-[#faf6f1] p-8">
                    <p className="font-['Montserrat',sans-serif] font-medium text-[#1c1614] text-[14px] uppercase tracking-[2px] mb-4">Contact Info</p>
                    <ul className="flex flex-col gap-3 text-[15px] text-[#6b5f58]">
                      <li className="flex items-start gap-4">
                        <span className="font-['Montserrat',sans-serif] font-medium text-[#1c1614] w-[60px]">TEL</span>
                        <span>02-1234-5678</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="font-['Montserrat',sans-serif] font-medium text-[#1c1614] w-[60px]">TIME</span>
                        <span>
                          평일 10:00 - 20:00<br />
                          토요일 10:00 - 16:00<br />
                          (일요일 및 공휴일 휴진)
                        </span>
                      </li>
                    </ul>
                  </div>
                </FadeInUp>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-[65%]">
              <FadeInUp delay={0.2}>
                <form onSubmit={handleSubmit} className="flex flex-col w-full border-t border-[#1c1614]">
                  
                  {/* Row: Name */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">이름 <span className="text-[#b8a99a]">*</span></label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex items-center">
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full md:w-1/2 bg-transparent border-b border-[#e8e5e0] pb-2 text-[16px] text-[#1c1614] placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors"
                        placeholder="이름을 입력해주세요"
                      />
                    </div>
                  </div>

                  {/* Row: Phone & Password */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">연락처 / 비밀번호 <span className="text-[#b8a99a]">*</span></label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex flex-col md:flex-row items-center gap-4">
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full md:w-1/2 bg-transparent border-b border-[#e8e5e0] pb-2 text-[16px] text-[#1c1614] placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors"
                        placeholder="연락처 ('-' 제외)"
                      />
                      <input 
                        type="password" 
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full md:w-1/2 bg-transparent border-b border-[#e8e5e0] pb-2 text-[16px] text-[#1c1614] placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors"
                        placeholder="상담 확인용 비밀번호"
                      />
                    </div>
                  </div>

                  {/* Row: Category */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">관심 시술 <span className="text-[#b8a99a]">*</span></label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex items-center">
                      <div className="w-full md:w-1/2 relative">
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-[#e8e5e0] pb-2 text-[16px] text-[#1c1614] focus:outline-none focus:border-[#1c1614] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Lifting">리프팅 / 안티에이징</option>
                          <option value="Pigmentation">색소 / 기미</option>
                          <option value="AcnePore">여드름 / 모공</option>
                          <option value="SkinBooster">스킨부스터</option>
                          <option value="Petit">쁘띠 성형 (보톡스/필러)</option>
                          <option value="Etc">기타</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-[100%] pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row: Secret Post Toggle */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">비밀글 설정</label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex items-center">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 border border-[#1c1614] bg-white group-hover:bg-[#f9f9f9] transition-colors">
                          <input 
                            type="checkbox" 
                            name="isSecret"
                            checked={formData.isSecret}
                            onChange={handleInputChange}
                            className="opacity-0 absolute w-full h-full cursor-pointer"
                          />
                          {formData.isSecret && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span className="text-[15px] text-[#6b5f58] tracking-[-0.3px]">비밀글로 등록합니다</span>
                      </label>
                    </div>
                  </div>

                  {/* Row: Title */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">제목 <span className="text-[#b8a99a]">*</span></label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex items-center">
                      <input 
                        type="text" 
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-[#e8e5e0] pb-2 text-[16px] text-[#1c1614] placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors"
                        placeholder="상담 제목을 입력해주세요"
                      />
                    </div>
                  </div>

                  {/* Row: Content */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-start">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px] mt-2">상담 내용 <span className="text-[#b8a99a]">*</span></label>
                    </div>
                    <div className="flex-1 py-4 md:py-8">
                      <textarea 
                        name="content"
                        required
                        value={formData.content}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-[#f9f9f9] border border-[#e8e5e0] p-4 text-[16px] text-[#1c1614] placeholder:text-[#b8a99a] focus:outline-none focus:border-[#1c1614] transition-colors resize-none"
                        placeholder="자세한 상담 내용을 입력해주시면 더욱 정확한 답변이 가능합니다."
                      ></textarea>
                    </div>
                  </div>

                  {/* Row: File Attachment */}
                  <div className="flex flex-col md:flex-row border-b border-[#e8e5e0]">
                    <div className="md:w-[200px] py-6 md:py-8 flex items-center">
                      <label className="text-[16px] text-[#1c1614] font-medium tracking-[-0.5px]">사진 첨부</label>
                    </div>
                    <div className="flex-1 py-4 md:py-8 flex items-center gap-4">
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                        accept="image/*"
                      />
                      <button 
                        type="button"
                        onClick={handleFileClick}
                        className="px-6 py-2 border border-[#1c1614] text-[13px] font-['Montserrat',sans-serif] tracking-[1px] uppercase hover:bg-[#1c1614] hover:text-white transition-colors"
                      >
                        Upload
                      </button>
                      <span className="text-[14px] text-[#b8a99a]">
                        {fileName ? fileName : "고민 부위 사진을 업로드해주세요. (선택)"}
                      </span>
                    </div>
                  </div>

                  {/* Privacy Policy */}
                  <div className="mt-12 mb-10">
                    <div className="w-full bg-[#f9f9f9] border border-[#e8e5e0] p-6 h-[120px] overflow-y-auto text-[13px] text-[#6b5f58] leading-[1.8] mb-4">
                      <strong>개인정보 수집 및 이용 동의</strong><br/><br/>
                      1. 수집하는 개인정보 항목: 이름, 연락처 등<br/>
                      2. 수집 및 이용 목적: 온라인 상담 문의에 대한 답변 및 안내<br/>
                      3. 보유 및 이용 기간: 관련 법령에 의거하여 3년간 보관 후 지체 없이 파기합니다.
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group w-max">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-[#1c1614] bg-white group-hover:bg-[#f9f9f9] transition-colors">
                        <input 
                          type="checkbox" 
                          name="agreePrivacy"
                          checked={formData.agreePrivacy}
                          onChange={handleInputChange}
                          className="opacity-0 absolute w-full h-full cursor-pointer"
                        />
                        {formData.agreePrivacy && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#1C1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-[15px] text-[#1c1614] tracking-[-0.3px]">개인정보 수집 및 이용에 동의합니다. (필수)</span>
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <button 
                      type="button"
                      onClick={() => navigate("/community/inquiry")}
                      className="px-12 py-5 border border-[#1c1614] text-[#1c1614] font-['Montserrat',sans-serif] text-[15px] tracking-[2px] uppercase hover:bg-[#1c1614] hover:text-white transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-16 py-5 bg-[#1c1614] text-white font-['Montserrat',sans-serif] text-[15px] tracking-[2px] uppercase hover:bg-[#b8a99a] transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              </FadeInUp>
            </div>

          </div>
        </section>

        <SubpageDirectionsSection />
        <SubpageFooter />
      </div>
    </ScaledPageWrapper>
  );
}