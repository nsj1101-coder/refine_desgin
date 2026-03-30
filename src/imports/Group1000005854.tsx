import svgPaths from "./svg-020sj7tnfk";
import imgHeroImage from "figma:asset/911c43aa41a188e0b0225af4a6453f7de9884114.png";
import imgDescImage from "figma:asset/f2b46e9413d559297602684700d18851df7cd8b4.png";
import imgDeviceImg from "figma:asset/07758dc85877104280dffba75f1081a08886bac2.png";
import imgDeviceImg1 from "figma:asset/7d9f40f9c375850fc3fc2229b7d450d32065d37a.png";
import imgDeviceImg2 from "figma:asset/25c2dec2509e10208a3c01af3ac8a8f60b409979.png";
import imgDeviceImg3 from "figma:asset/cde5501f10468044befe6f969beac0349d79e8a2.png";
import imgImage18 from "figma:asset/9e4805af0525702e874b9e726b386dc38f4733f2.png";
import imgImage19 from "figma:asset/eba5aa836c9d2daeefee2ce3ae1563f84149940f.png";

function HeroImage() {
  return (
    <div className="absolute h-[560px] left-0 top-0 w-[1440px]" data-name="heroImage">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[257.14%] left-0 max-w-none top-[-78.57%] w-full" src={imgHeroImage} />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[36px] h-[32px] items-center overflow-clip relative shrink-0" data-name="nav">
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn1">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">About</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn2">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">Signature</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn3">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">Treatment</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn4">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">Reservation</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn5">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">Promotion</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0" data-name="cn6">
          <div className="content-stretch flex h-full items-start py-[8px] relative">
            <p className="font-['Montserrat'] font-medium leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[2px] whitespace-nowrap">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[60px] py-[24px] relative w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[560px] left-0 overflow-clip top-0 w-[1440px]" data-name="Hero Section">
      <HeroImage />
      <p className="absolute uppercase font-['Montserrat',sans-serif] font-bold leading-none left-[546px] text-[60px] text-white top-[228px] tracking-[4px] whitespace-nowrap">Treatment</p>
      <p className="absolute font-['Pretendard',sans-serif] font-light leading-[normal] left-[120px] text-[48px] text-white top-[312px] tracking-[-1px] whitespace-nowrap">리프팅</p>
      <p className="absolute font-['Montserrat',sans-serif] font-light leading-[normal] left-[120px] text-[18px] text-[rgba(255,255,255,0.8)] top-[388px] tracking-[2px] whitespace-nowrap uppercase">Lifting</p>
      <div className="absolute font-['Pretendard',sans-serif] font-light leading-[1.8] left-[120px] text-[16px] text-[rgba(255,255,255,0.8)] top-[426px] w-[400px]">
        <p className="mb-0">자연스러운 윤곽, 탄력 있는 피부를</p>
        <p>정교한 시술로 되찾아드립니다</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]" data-name="overlayHeader">
        <div className="bg-[#b8a99a] h-[2px] shrink-0 w-full" data-name="topAccent" />
        <Header />
      </div>
    </div>
  );
}

function DescLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative self-stretch" data-name="descLeft">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="descHeader">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b8a99a] text-[16px] tracking-[0px] whitespace-nowrap uppercase">Lifting</p>
        <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[32px] tracking-[-0.5px] whitespace-nowrap">리프팅이란?</p>
        <div className="bg-[#b8a99a] h-px shrink-0 w-[40px]" data-name="divider" />
      </div>
      <div className="font-['Pretendard',sans-serif] leading-[1.9] relative shrink-0 text-[#6b7280] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">리프팅은 피부 속 콜라겐과 탄력 섬유를 자극하여 처진 피부를 끌어올리고, 자연스러운 윤곽과 탄력을 회복시키는 시술입니다.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">나이가 들수록 콜라겐 생성이 줄어들며 피부는 중력에 의해 점차 처지게 됩니다. 리프팅 시술은 비수술적 방법으로 피부 깊은 층의 SMAS 근막층까지 에너지를 전달하여, 즉각적인 탄력 개선과 장기적인 콜라겐 리모델링 효과를 동시에 제공합니다.</p>
        <p className="mb-0">&nbsp;</p>
        <p>REFINE에서는 환자 개개인의 피부 상태와 노화 정도를 정밀하게 진단한 후, 최적의 리프팅 시술을 설계하여 자연스럽고 세련된 결과를 만들어 드립니다.</p>
      </div>
    </div>
  );
}

function DescImage() {
  return (
    <div className="h-[500px] relative shrink-0 w-[480px]" data-name="descImage">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDescImage} />
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[80px] items-start left-0 overflow-clip p-[120px] top-[560px] w-[1440px]" data-name="Description Section">
      <DescLeft />
      <DescImage />
    </div>
  );
}

function LucideFrown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lucide/frown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lucide/frown">
          <path d={svgPaths.pf1a42e0} id="Vector" stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function NeedCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="needCard1">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[28px] py-[32px] relative w-full">
          <LucideFrown />
          <div className="font-['Pretendard',sans-serif] font-medium leading-[1.6] min-w-full relative shrink-0 text-[#1c1614] text-[16px] text-center w-[min-content]">
            <p className="mb-0">볼과 턱선이</p>
            <p>처져 보이는 분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LucideTimer() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lucide/timer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lucide/timer">
          <path d={svgPaths.p3c40a070} id="Vector" stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function NeedCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="needCard2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[28px] py-[32px] relative w-full">
          <LucideTimer />
          <div className="font-['Pretendard',sans-serif] font-medium leading-[1.6] min-w-full relative shrink-0 text-[#1c1614] text-[16px] text-center w-[min-content]">
            <p className="mb-0">나이보다</p>
            <p>더 들어 보이는 분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LucideSparkles() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lucide/sparkles">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lucide/sparkles">
          <path d={svgPaths.p69c8570} id="Vector" stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function NeedCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="needCard3">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[28px] py-[32px] relative w-full">
          <LucideSparkles />
          <div className="font-['Pretendard',sans-serif] font-medium leading-[1.6] min-w-full relative shrink-0 text-[#1c1614] text-[16px] text-center w-[min-content]">
            <p className="mb-0">탄력이 떨어지고</p>
            <p>주름이 깊어진 분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LucideShieldCheck() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lucide/shield-check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lucide/shield-check">
          <path d={svgPaths.p4589500} id="Vector" stroke="var(--stroke-0, #b8a99a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function NeedCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="needCard4">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[28px] py-[32px] relative w-full">
          <LucideShieldCheck />
          <div className="font-['Pretendard',sans-serif] font-medium leading-[1.6] min-w-full relative shrink-0 text-[#1c1614] text-[16px] text-center w-[min-content]">
            <p className="mb-0">수술 없이</p>
            <p>자연스러운 개선을 원하는 분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeedGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="needGrid">
      <NeedCard />
      <NeedCard1 />
      <NeedCard2 />
      <NeedCard3 />
    </div>
  );
}

function WhoNeedsSection() {
  return (
    <div className="absolute bg-[#f7f8fa] content-stretch flex flex-col gap-[60px] items-center left-0 overflow-clip px-[120px] py-[100px] top-[1300px] w-[1440px]" data-name="Who Needs Section">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="needHeader">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b8a99a] text-[16px] tracking-[0px] whitespace-nowrap uppercase">Who Needs</p>
        <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[32px] tracking-[-0.5px] whitespace-nowrap">이런 분께 추천합니다</p>
        <div className="bg-[#b8a99a] h-px shrink-0 w-[40px]" data-name="divider" />
      </div>
      <NeedGrid />
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative" data-name="textArea">
      <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[24px] whitespace-nowrap">덴서티</p>
      <div className="font-['Montserrat',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#6b7280] text-[16px] uppercase">
        <p className="mb-0">High-Intensity Focused</p>
        <p>Ultrasound</p>
      </div>
    </div>
  );
}

function DeviceImg() {
  return (
    <div className="relative shrink-0 size-[280px]" data-name="deviceImg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeviceImg} />
    </div>
  );
}

function CardDensity() {
  return (
    <div className="absolute bg-white content-stretch flex h-[280px] items-center left-[120px] overflow-clip pl-[40px] rounded-[8px] top-[2056px] w-[588px]" data-name="card-density">
      <TextArea />
      <DeviceImg />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative whitespace-nowrap" data-name="textArea">
      <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[24px]">온다</p>
      <p className="font-['Montserrat',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#6b7280] text-[16px] uppercase">Microwave 방식의 RF</p>
    </div>
  );
}

function DeviceImg1() {
  return (
    <div className="relative shrink-0 size-[280px]" data-name="deviceImg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeviceImg1} />
    </div>
  );
}

function CardOnda() {
  return (
    <div className="absolute bg-white content-stretch flex h-[280px] items-center left-[732px] overflow-clip pl-[40px] rounded-[8px] top-[2349px] w-[588px]" data-name="card-onda">
      <TextArea1 />
      <DeviceImg1 />
    </div>
  );
}

function TextArea2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative whitespace-nowrap" data-name="textArea">
      <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[24px]">슈링크</p>
      <p className="font-['Montserrat',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#6b7280] text-[16px] uppercase">Focused Ultrasound</p>
    </div>
  );
}

function DeviceImg2() {
  return (
    <div className="relative shrink-0 size-[280px]" data-name="deviceImg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeviceImg2} />
    </div>
  );
}

function CardShrink() {
  return (
    <div className="absolute bg-white content-stretch flex h-[280px] items-center left-[120px] overflow-clip pl-[40px] rounded-[8px] top-[2642px] w-[588px]" data-name="card-shrink">
      <TextArea2 />
      <DeviceImg2 />
    </div>
  );
}

function TextArea3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative whitespace-nowrap" data-name="textArea">
      <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[24px]">포텐자</p>
      <p className="font-['Montserrat',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#6b7280] text-[16px] uppercase">Microneedling RF</p>
    </div>
  );
}

function DeviceImg3() {
  return (
    <div className="relative shrink-0 size-[280px]" data-name="deviceImg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeviceImg3} />
    </div>
  );
}

function CardPotenza() {
  return (
    <div className="absolute bg-white content-stretch flex h-[280px] items-center left-[732px] overflow-clip pl-[40px] rounded-[8px] top-[2935px] w-[588px]" data-name="card-potenza">
      <TextArea3 />
      <DeviceImg3 />
    </div>
  );
}

function LeftTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-[280px]" data-name="leftTitle">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b8a99a] text-[16px] tracking-[0px] whitespace-nowrap uppercase">Cautions</p>
      <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[32px] tracking-[-0.5px] whitespace-nowrap">주의사항</p>
      <div className="bg-[#b8a99a] h-px shrink-0 w-[40px]" data-name="leftDiv" />
      <div className="font-['Pretendard',sans-serif] leading-[1.7] relative shrink-0 text-[#6b7280] text-[16px] w-[200px]">
        <p className="mb-0">시술 후 주의사항을</p>
        <p>안내합니다.</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip py-[24px] relative shrink-0 w-full" data-name="row1">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a6f8f] text-[16px] whitespace-nowrap">01</p>
      <div className="bg-[#e5e7eb] h-[16px] shrink-0 w-px" data-name="r1bar" />
      <p className="flex-[1_0_0] font-['Pretendard',sans-serif] leading-[1.7] min-h-px min-w-px relative text-[#6b7280] text-[16px]">피부 속 초음파 열이 효과적으로 유지될 수 있도록 시술 후 3일간 미온수로 세안을 권장힙니다.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip py-[24px] relative shrink-0 w-full" data-name="row2">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a6f8f] text-[16px] whitespace-nowrap">02</p>
      <div className="bg-[#e5e7eb] h-[16px] shrink-0 w-px" data-name="r2bar" />
      <p className="flex-[1_0_0] font-['Pretendard',sans-serif] leading-[1.7] min-h-px min-w-px relative text-[#6b7280] text-[16px]">시술 후 약간의 붉은기나 부기가 생길 수 있으나, 대부분 수 시간 이내에 가라앉습니다.</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip py-[24px] relative shrink-0 w-full" data-name="row3">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a6f8f] text-[16px] whitespace-nowrap">03</p>
      <div className="bg-[#e5e7eb] h-[16px] shrink-0 w-px" data-name="r3bar" />
      <p className="flex-[1_0_0] font-['Pretendard',sans-serif] leading-[1.7] min-h-px min-w-px relative text-[#6b7280] text-[16px]">시술 직후 외출 시에는 자외선 차단제를 꼭 바르고, 가벼운 메이크업은 바로 가능합니다.</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip py-[24px] relative shrink-0 w-full" data-name="row4">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a6f8f] text-[16px] whitespace-nowrap">04</p>
      <div className="bg-[#e5e7eb] h-[16px] shrink-0 w-px" data-name="r4bar" />
      <p className="flex-[1_0_0] font-['Pretendard',sans-serif] leading-[1.7] min-h-px min-w-px relative text-[#6b7280] text-[16px]">시술 후 2~3일간 음주, 흡연, 사우나, 찜질방은 피해주세요.</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip py-[24px] relative shrink-0 w-full" data-name="row5">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a6f8f] text-[16px] whitespace-nowrap">05</p>
      <div className="bg-[#e5e7eb] h-[16px] shrink-0 w-px" data-name="r5bar" />
      <p className="flex-[1_0_0] font-['Pretendard',sans-serif] leading-[1.7] min-h-px min-w-px relative text-[#6b7280] text-[16px]">드물게 감각이 둔해지거나 두통이 생길 수 있으나, 시간이 지나면 자연스럽게 사라집니다.</p>
    </div>
  );
}

function RightList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="rightList">
      <Row />
      <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="sep1" />
      <Row1 />
      <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="sep2" />
      <Row2 />
      <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="sep3" />
      <Row3 />
      <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="sep4" />
      <Row4 />
      <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="sep5" />
    </div>
  );
}

function CautionSection() {
  return (
    <div className="absolute bg-[#f7f8fa] content-stretch flex gap-[80px] items-start left-0 overflow-clip px-[120px] py-[100px] top-[3248px] w-[1440px]" data-name="Caution Section">
      <LeftTitle />
      <RightList />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f7f8fa] h-[1433px] left-0 top-[1815px] w-[1440px]" />
      <HeroSection />
      <DescriptionSection />
      <WhoNeedsSection />
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[120px] top-[1908px] w-[1200px]" data-name="treatHeader">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b8a99a] text-[16px] tracking-[0px] whitespace-nowrap uppercase">Treatments</p>
        <p className="font-['Pretendard',sans-serif] leading-[normal] relative shrink-0 text-[#1c1614] text-[32px] tracking-[-0.5px] whitespace-nowrap">리프팅 시술 종류</p>
        <div className="bg-[#b8a99a] h-px shrink-0 w-[40px]" data-name="divider" />
      </div>
      <CardDensity />
      <CardOnda />
      <CardShrink />
      <CardPotenza />
      <CautionSection />
      <p className="absolute font-['Montserrat',sans-serif] font-medium leading-[normal] left-[946px] text-[16px] text-black top-[2281px] whitespace-nowrap">왼쪽 같은 구어체 형식으로 리디자인 필요.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[720px] top-[2057px]">
      <div className="absolute h-[166px] left-[720px] top-[2057px] w-[680px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
      <div className="absolute h-[86px] left-[726px] top-[2240px] w-[195px]" data-name="image 19">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[128.86%]" src={imgImage19} />
        </div>
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <Group2 />
    </div>
  );
}