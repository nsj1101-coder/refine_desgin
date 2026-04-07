import { Outlet, useLocation } from "react-router";
import { Frame36, MobileContext } from "../../imports/Main01_JP";
import { QuickMenu } from "../components/QuickMenu";
import { useState, useEffect } from "react";

export default function JpLayout() {
  const [scale, setScale] = useState(() => typeof window !== 'undefined' ? window.innerWidth / 1920 : 1);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setScale(width / 1920);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MobileContext.Provider value={isMobile}>
      <div className={`w-full bg-[#faf6f1] overflow-x-hidden ${isMobile ? 'mobile-container' : ''}`}>
        <Outlet context={{ scale, isMobile }} />

        {/* Header - always visible & fixed */}
        <div
          style={!isMobile ? {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '1920px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            zIndex: 1000
          } : {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <Frame36 />
          </div>
        </div>

        {/* QuickMenu */}
        {!isMobile && (
          <div
            style={{
              position: 'fixed',
              bottom: `${160 * scale}px`,
              right: `${100 * scale}px`,
              transform: `scale(${Math.max(scale, 0.6)})`,
              transformOrigin: 'bottom right',
              zIndex: 999
            }}
          >
            <QuickMenu />
          </div>
        )}
        {isMobile && (
          <div style={{ position: 'fixed', bottom: 14, right: 10, zIndex: 999, transform: 'scale(0.6)', transformOrigin: 'bottom right' }}>
            <QuickMenu />
          </div>
        )}
      </div>
    </MobileContext.Provider>
  );
}
