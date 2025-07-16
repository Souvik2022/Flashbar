import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import NotReadySection from "@/components/NotReadySection";
import FrictionSection from "@/components/FrictionSection";

export default function Home() {
  return (
    <div data-theme="business">
      <Header />
      <main>
        <Hero />
        
        <NotReadySection />
        <FeaturesListicle />
        <FrictionSection />
        <Testimonials3 />
        <Pricing />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
