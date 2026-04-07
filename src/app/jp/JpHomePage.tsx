import Main from "../../imports/Main01_JP";
import { QuickReservationJP } from "../components/QuickReservationJP";
import { useIsMobile } from "../../imports/Main01_JP";
import { useState, useEffect } from "react";

export default function JpHomePage() {
  const [scale, setScale] = useState(() => typeof window !== 'undefined' ? window.innerWidth / 1920 : 1);
  const [docHeight, setDocHeight] = useState(7510);
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
        const s = window.innerWidth / 1920;
        const rect = footer.getBoundingClientRect();
        const visualBottom = rect.bottom + window.scrollY;
        const unscaledHeight = Math.ceil(visualBottom / s);
        if (unscaledHeight > 0) {
          setDocHeight(unscaledHeight);
        }
      }
    };

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
          <QuickReservationJP />
        </div>
      )}
    </>
  );
}
