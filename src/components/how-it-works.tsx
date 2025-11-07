
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Package, MapPin } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const cards = [
    {
      title: "How It Works",
      icon: <ListChecks className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>
            Our process is simple, transparent, and designed to save you time. We make it easy to
            turn your unwanted vehicle into instant cash — no stress, no waiting.
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Contact us with your vehicle details.</li>
            <li>We schedule a convenient viewing time.</li>
            <li>Receive a fair, on-the-spot offer.</li>
            <li>Get paid instantly upon agreement.</li>
            <li>We handle all paperwork and towing.</li>
          </ol>
        </div>
      ),
      image: "/steps1.png",
      alt: "Step-by-step process for vehicle pickup",
    },
    {
      title: "What We Buy",
      icon: <Package className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>
            We buy all types of vehicles and metal-based equipment — running or not. From passenger
            cars to heavy-duty machinery, if it has value in metal, we’ll take it.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cars, trucks, SUVs, and vans</li>
            <li>Scrap and junk vehicles</li>
            <li>Catalytic converters</li>
            <li>Semi-trailers and commercial vehicles</li>
            <li>Farm equipment (case-by-case)</li>
            <li>Some industrial machinery</li>
          </ul>
        </div>
      ),
      image: "/weBuy1.png",
      alt: "Types of vehicles and items we buy",
    },
    {
      title: "Our Coverage",
      icon: <MapPin className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
          <p>
            We proudly serve Winnipeg, Manitoba, and surrounding rural municipalities. Our coverage
            extends beyond the city — we travel across Manitoba and nearby regions for larger loads.
          </p>
          <p>
            Whether you're in the city or outside provincial lines, reach out to confirm if we can
            arrange pickup. We offer flexible scheduling and quick response times.
          </p>
        </div>
      ),
      image: "/converage.png",
      alt: "Map of our coverage area in Manitoba",
    },
  ];

  return (
    <section id="process" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/70 backdrop-blur-md border border-border/30 overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                {card.icon}
                <CardTitle className="text-lg font-semibold text-foreground tracking-tight">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow px-6 pb-6">{card.content}</CardContent>

              <div className="relative w-full h-64 bg-muted/20 flex items-center justify-center p-4">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={800}
                  height={400}
                  className="object-contain w-full h-full rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
