import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
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

export const router = createBrowserRouter([
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