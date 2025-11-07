"use client";

import { useEffect } from "react";
import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import BookingForm from '@/components/booking-form';
import HowItWorks from '@/components/how-it-works';
import Faq from '@/components/faq';
import ServiceAreaMap from '@/components/service-area-map';
import Footer from '@/components/footer';
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

export default function Home() {
  const { toast } = useToast();

  useEffect(() => {
    const welcomeToast = setTimeout(() => {
      toast({
        className: "glass-toast font-headline",
        title: "Welcome to True North Hauling!",
        description: "Give us a call for a free quote today.",
        duration: 8000,
      });
    }, 1500); // Delay toast by 1.5 seconds

    return () => clearTimeout(welcomeToast);
  }, [toast]);

  return (
    <div className="flex min-h-dvh flex-col bg-background bg-gradient-to-br from-background to-secondary/10">
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
