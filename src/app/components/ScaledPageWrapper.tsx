import { useState, useEffect, useRef, useCallback } from "react";
import { useOutletContext } from "react-router";

/**
 * ScaledPageWrapper
 * 
 * 1920px 고정 너비로 렌더링한 뒤 transform: scale()로 축소하는 방식.
 * 메인 페이지와 동일한 반응형 전략을 서브페이지에도 적용.
 * 모바일(<=768px)에서는 일반 유동 반응형 유지.
 */
export function ScaledPageWrapper({ children }: { children: React.ReactNode }) {
  const { scale, isMobile } = useOutletContext<{ scale: number; isMobile: boolean }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(3000);

  const measureHeight = useCallback(() => {
    if (contentRef.current && !isMobile) {
      const h = contentRef.current.scrollHeight;
      if (h > 0) {
        setContentHeight(h);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    measureHeight();

    // Use ResizeObserver to track content height changes
    const el = contentRef.current;
    if (!el || isMobile) return;

    const observer = new ResizeObserver(() => {
      measureHeight();
    });
    observer.observe(el);

    // Also measure after images/fonts load
    const t1 = setTimeout(measureHeight, 200);
    const t2 = setTimeout(measureHeight, 500);
    const t3 = setTimeout(measureHeight, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [measureHeight, isMobile]);

  // Mobile: normal flow
  if (isMobile) {
    return <div className="w-full">{children}</div>;
  }

  // Desktop: 1920px fixed + scale
  return (
    <div style={{ height: `${contentHeight * scale}px` }}>
      <div
        ref={contentRef}
        style={{
          width: "1920px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * useScaledViewportHeight
 * 
 * 히어로 섹션에서 h-screen 대신 사용.
 * scale 적용 후에도 뷰포트 전체 높이로 보이도록 역보정한 높이를 반환.
 */
export function useScaledViewportHeight() {
  const { scale, isMobile } = useOutletContext<{ scale: number; isMobile: boolean }>();
  const [vpHeight, setVpHeight] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 900
  );

  useEffect(() => {
    const handleResize = () => setVpHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return "100vh";

  // 1920px로 렌더링 후 scale 축소하므로, 화면 가득 차려면 역보정 필요
  return `${Math.round(vpHeight / scale)}px`;
}