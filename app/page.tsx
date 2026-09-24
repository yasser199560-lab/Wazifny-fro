import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import Features from "@/components/landing/Features";
import Categories from "@/components/landing/Categories";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  // Render the landing page from the local content immediately. The landing
  // components already contain safe fallback data, so the page should not
  // wait for a cold or unavailable backend before sending HTML to the user.
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
