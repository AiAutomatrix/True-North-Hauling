import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Package, MapPin } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <ListChecks className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-foreground">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact us with your vehicle details.</li>
                <li>We schedule a convenient viewing time.</li>
                <li>Receive a fair, on-the-spot offer.</li>
                <li>Get paid instantly upon agreement.</li>
                <li>We handle all paperwork and hauling.</li>
              </ol>
              <Image
                alt="how our process works"
                className="rounded-lg mt-4"
                height={400}
                src="/steps1.png"
                width={800}
              />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Package className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-foreground">What We Buy</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Cars, trucks, SUVs, and vans</li>
                <li>Vehicles in any condition</li>
                <li>Scrap and junk vehicles</li>
                <li>Catalytic converters</li>
                <li>Semi-trailers</li>
                <li>Farm equipment (case-by-case)</li>
                <li>Some industrial machinery</li>
              </ul>
              <Image
                alt="what we buy"
                className="rounded-lg mt-4"
                height={400}
                src="/weBuy.png"
                width={800}
              />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <MapPin className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-foreground">Our Coverage</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                We proudly serve Winnipeg, Manitoba, and surrounding rural municipalities. Contact us to confirm service in your specific area. We offer flexible pickup options.
              </p>
              <Image
                alt="map of our coverage area"
                className="rounded-lg mt-4"
                height={400}
                src="/converage.png"
                width={800}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
