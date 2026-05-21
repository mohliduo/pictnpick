/**
 * SPA root — satu halaman, navigasi anchor (#produk, #benefit, dll.)
 * Semua section dirender di sini tanpa routing tambahan.
 */
import BenefitForCafe from "./BenefitForCafe";
import Faq from "./Faq";
import Footer from "./Footer";
import GrowthHackingCampaign from "./GrowthHackingCampaign";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LeadForm from "./LeadForm";
import MidCtaBanner from "./MidCtaBanner";
import Navbar from "./Navbar";
import ProblemSolution from "./ProblemSolution";
import ProductPhotobox from "./ProductPhotobox";
import ProductPhotoreceipt from "./ProductPhotoreceipt";
import RevenueSimulation from "./RevenueSimulation";
import SocialProofTrust from "./SocialProofTrust";
import SpecialOffer from "./SpecialOffer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemSolution />
        <ProductPhotobox />
        <ProductPhotoreceipt />
        <RevenueSimulation />
        <BenefitForCafe />
        <HowItWorks />
        <MidCtaBanner />
        <GrowthHackingCampaign />
        <SocialProofTrust />
        <SpecialOffer />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
