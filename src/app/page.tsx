import ContactSection from "@/components/organisms/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Testimonial from "@/components/organisms/Testimonial";
import AboutSection from "@/components/organisms/AboutSection";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonial />
    </div>
  );
}
