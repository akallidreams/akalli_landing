
import Navbar from '@/components/landing-page/navbar';
import HeroSection from '@/components/landing-page/hero-section';
import BalderSection from '@/components/landing-page/balder-section';
import UpcomingAgentsSection from '@/components/landing-page/upcoming-agents-section';
import ContactCtaSection from '@/components/landing-page/contact-cta-section';
import Footer from '@/components/landing-page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BalderSection />
        <UpcomingAgentsSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </div>
  );
}

    