import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import BookingForm from '@/components/booking-form';
import HowItWorks from '@/components/how-it-works';
import Faq from '@/components/faq';
import ServiceAreaMap from '@/components/service-area-map';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header />
      <main className="flex-1">
        <Gallery />
        <About />
        <BookingForm />
        <HowItWorks />
        <Faq />
        <ServiceAreaMap />
      </main>
      <Footer />
    </div>
  );
}
