import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import JpLayout from "./jp/JpLayout";
import JpHomePage from "./jp/JpHomePage";
import HomePage from "./pages/HomePage";
import LiftingPage from "./pages/LiftingPage";
import RedefineDiagnosisPage from "./pages/RedefineDiagnosisPage";
import AllDepthLiftingPage from "./pages/AllDepthLiftingPage";
import PigmentationPage from "./pages/PigmentationPage";
import AcnePorePage from "./pages/AcnePorePage";
import SkincarePage from "./pages/SkincarePage";
import PetitPage from "./pages/PetitPage";
import SkinBoosterPage from "./pages/SkinBoosterPage";
import CollagenBoosterPage from "./pages/CollagenBoosterPage";
import BodyContouringPage from "./pages/BodyContouringPage";
import IVTherapyPage from "./pages/IVTherapyPage";
import AboutPage from "./pages/AboutPage";
import BrandValuePage from "./pages/BrandValuePage";
import DoctorPage from "./pages/DoctorPage";
import GalleryPage from "./pages/GalleryPage";
import LocationPage from "./pages/LocationPage";
import ReservationPage from "./pages/ReservationPage";
import PromotionPage from "./pages/PromotionPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import CommunityPage from "./pages/CommunityPage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import ColumnPage from "./pages/ColumnPage";
import ColumnDetailPage from "./pages/ColumnDetailPage";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import InquiryPage from "./pages/InquiryPage";
import InquiryWritePage from "./pages/InquiryWritePage";
import InquiryDetailPage from "./pages/InquiryDetailPage";
// JP pages
import JpAboutPage from "./jp/pages/JpAboutPage";
import JpBrandValuePage from "./jp/pages/JpBrandValuePage";
import JpDoctorPage from "./jp/pages/JpDoctorPage";
import JpGalleryPage from "./jp/pages/JpGalleryPage";
import JpLocationPage from "./jp/pages/JpLocationPage";
import JpLiftingPage from "./jp/pages/JpLiftingPage";
import JpRedefineDiagnosisPage from "./jp/pages/JpRedefineDiagnosisPage";
import JpAllDepthLiftingPage from "./jp/pages/JpAllDepthLiftingPage";
import JpPigmentationPage from "./jp/pages/JpPigmentationPage";
import JpAcnePorePage from "./jp/pages/JpAcnePorePage";
import JpSkincarePage from "./jp/pages/JpSkincarePage";
import JpPetitPage from "./jp/pages/JpPetitPage";
import JpSkinBoosterPage from "./jp/pages/JpSkinBoosterPage";
import JpCollagenBoosterPage from "./jp/pages/JpCollagenBoosterPage";
import JpBodyContouringPage from "./jp/pages/JpBodyContouringPage";
import JpIVTherapyPage from "./jp/pages/JpIVTherapyPage";
import JpReservationPage from "./jp/pages/JpReservationPage";
import JpPromotionPage from "./jp/pages/JpPromotionPage";
import JpPromotionDetailPage from "./jp/pages/JpPromotionDetailPage";
import JpCommunityPage from "./jp/pages/JpCommunityPage";
import JpNoticeDetailPage from "./jp/pages/JpNoticeDetailPage";
import JpColumnPage from "./jp/pages/JpColumnPage";
import JpColumnDetailPage from "./jp/pages/JpColumnDetailPage";
import JpBeforeAfterPage from "./jp/pages/JpBeforeAfterPage";
import JpInquiryPage from "./jp/pages/JpInquiryPage";
import JpInquiryWritePage from "./jp/pages/JpInquiryWritePage";
import JpInquiryDetailPage from "./jp/pages/JpInquiryDetailPage";

export const router = createBrowserRouter([
  {
    path: "/jp",
    Component: JpLayout,
    children: [
      { index: true, Component: JpHomePage },
      { path: "about", Component: JpAboutPage },
      { path: "about/brand-value", Component: JpBrandValuePage },
      { path: "about/doctor", Component: JpDoctorPage },
      { path: "about/gallery", Component: JpGalleryPage },
      { path: "about/location", Component: JpLocationPage },
      { path: "treatment/lifting", Component: JpLiftingPage },
      { path: "alldepth/redefine", Component: JpRedefineDiagnosisPage },
      { path: "alldepth/lifting", Component: JpAllDepthLiftingPage },
      { path: "treatment/skincare", Component: JpSkincarePage },
      { path: "treatment/petit", Component: JpPetitPage },
      { path: "treatment/acne-pore", Component: JpAcnePorePage },
      { path: "treatment/pigmentation", Component: JpPigmentationPage },
      { path: "treatment/skin-booster", Component: JpSkinBoosterPage },
      { path: "treatment/collagen-booster", Component: JpCollagenBoosterPage },
      { path: "treatment/body", Component: JpBodyContouringPage },
      { path: "treatment/iv-therapy", Component: JpIVTherapyPage },
      { path: "reservation", Component: JpReservationPage },
      { path: "promotion", Component: JpPromotionPage },
      { path: "promotion/:id", Component: JpPromotionDetailPage },
      { path: "community", Component: JpCommunityPage },
      { path: "community/:id", Component: JpNoticeDetailPage },
      { path: "community/column", Component: JpColumnPage },
      { path: "community/column/:id", Component: JpColumnDetailPage },
      { path: "community/before-after", Component: JpBeforeAfterPage },
      { path: "community/inquiry", Component: JpInquiryPage },
      { path: "community/inquiry/write", Component: JpInquiryWritePage },
      { path: "community/inquiry/:id", Component: JpInquiryDetailPage },
    ],
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "about/brand-value", Component: BrandValuePage },
      { path: "about/doctor", Component: DoctorPage },
      { path: "about/gallery", Component: GalleryPage },
      { path: "about/location", Component: LocationPage },
      { path: "treatment/lifting", Component: LiftingPage },
      { path: "alldepth/redefine", Component: RedefineDiagnosisPage },
      { path: "alldepth/lifting", Component: AllDepthLiftingPage },
      { path: "treatment/skincare", Component: SkincarePage },
      { path: "treatment/petit", Component: PetitPage },
      { path: "treatment/acne-pore", Component: AcnePorePage },
      { path: "treatment/pigmentation", Component: PigmentationPage },
      { path: "treatment/skin-booster", Component: SkinBoosterPage },
      { path: "treatment/collagen-booster", Component: CollagenBoosterPage },
      { path: "treatment/body", Component: BodyContouringPage },
      { path: "treatment/iv-therapy", Component: IVTherapyPage },
      { path: "reservation", Component: ReservationPage },
      { path: "promotion", Component: PromotionPage },
      { path: "promotion/:id", Component: PromotionDetailPage },
      { path: "community", Component: CommunityPage },
      { path: "community/:id", Component: NoticeDetailPage },
      { path: "community/column", Component: ColumnPage },
      { path: "community/column/:id", Component: ColumnDetailPage },
      { path: "community/before-after", Component: BeforeAfterPage },
      { path: "community/inquiry", Component: InquiryPage },
      { path: "community/inquiry/write", Component: InquiryWritePage },
      { path: "community/inquiry/:id", Component: InquiryDetailPage },
    ],
  },
]);