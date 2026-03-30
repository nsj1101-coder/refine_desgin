import Main from "../../imports/Main01";
import { QuickReservation } from "../components/QuickReservation";
import { useIsMobile } from "../../imports/Main01";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [scale, setScale] = useState(() => typeof window !== 'undefined' ? window.innerWidth / 1920 : 1);
  const [docHeight, setDocHeight] = useState(6690);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width / 1920);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const calculateHeight = () => {
      if (window.innerWidth <= 768) return;
      const footer = document.querySelector('[data-name="Frame3"]') as HTMLElement;
      if (footer) {
        const top = 6276;
        const height = footer.offsetHeight;
        if (height > 0) {
          setDocHeight(top + height);
        }
      }
    };

    const fixBrokenText = () => {
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let node;
      while ((node = walk.nextNode())) {
        if (node.nodeValue && node.nodeValue.includes('이버 예약')) {
          node.nodeValue = '네이버 예약';
        }
        if (node.nodeValue && node.nodeValue.includes('휴진') && node.nodeValue.includes('공휴일')) {
          node.nodeValue = '휴진 (Closed)  일요일 / 공휴일  (sun/public holiday)';
        }
        if (node.nodeValue && node.nodeValue.includes('탁월') && node.nodeValue.includes('효과를')) {
          node.nodeValue = '폭넓게 개선하는데 탁월한 효과를 보여줍니다.';
        }
      }
    };
    fixBrokenText();
    setTimeout(fixBrokenText, 100);
    setTimeout(fixBrokenText, 500);
    setTimeout(fixBrokenText, 1000);

    calculateHeight();
    const timer1 = setTimeout(calculateHeight, 100);
    const timer2 = setTimeout(calculateHeight, 500);
    const timer3 = setTimeout(calculateHeight, 1000);
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', calculateHeight);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <div
        style={!isMobile ? { height: `${docHeight * scale}px` } : {}}
      >
        <div
          style={!isMobile ? {
            width: '1920px',
            height: `${docHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          } : { width: '100%', position: 'relative' }}
          className={!isMobile ? "relative" : ""}
        >
          <Main />
        </div>
      </div>

      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            top: `${(413 - 60) * scale}px`,
            left: 0,
            transform: `scale(${Math.max(scale, 0.6)})`,
            transformOrigin: 'top left',
            zIndex: 999
          }}
        >
          <QuickReservation />
        </div>
      )}
    </>
  );
}
