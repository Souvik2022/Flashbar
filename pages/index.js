import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import NotReadySection from "@/components/NotReadySection";
import WhyFlashbar from "@/components/WhyFlashbar";

export default function Home() {
  return (
    <div data-theme="business">
      <Header />
      <main>
        <Hero />
        
        <NotReadySection />
        <FeaturesListicle />
        <Testimonials3 />
        <Pricing />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
