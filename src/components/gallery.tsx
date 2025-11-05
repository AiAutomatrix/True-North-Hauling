"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-"));

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Cash</span> for Clunkers, Converters, & <span className="text-glow text-primary">Commercial Rigs</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Got a junk car, used catalytic converter, or a semi-trailer collecting dust? We pay top dollar and haul it away. Turn your unwanted metal into instant cash today.
            </p>
          </div>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg bg-secondary">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={1200}
                        height={900}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14 hidden sm:flex" />
          <CarouselNext className="mr-14 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
