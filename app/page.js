import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import LogoMarquee from "./components/LogoMarquee";
import ServicesSection from "./components/ServicesSection";
import ImageShowcase from "./components/ImageShowcase";
import LogoSlider from "./components/LogoSlider";
import FeaturesSlider from "./components/FeaturesSlider";
import PortfolioSection from "./components/PortfolioSection";
import PosterCarousel from "./components/PosterCarousel";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />
        <ImageShowcase />
        <LogoSlider />
        <FeaturesSlider />
        <PortfolioSection />
        <PosterCarousel />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
