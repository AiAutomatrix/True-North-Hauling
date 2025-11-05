import { Banknote, Car, Truck, Wrench } from "lucide-react";

const services = [
  {
    icon: <Truck className="h-8 w-8 text-accent" />,
    title: "Flatbed Pickup & Hauling",
    description: "Safe and reliable transportation for all types of vehicles.",
  },
  {
    icon: <Car className="h-8 w-8 text-accent" />,
    title: "Vehicle Purchasing",
    description: "We buy used cars, trucks, and vans, running or not.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: "Scrap & Recycling",
    description: "Eco-friendly disposal for end-of-life vehicles.",
  },
  {
    icon: <Banknote className="h-8 w-8 text-accent" />,
    title: "Instant Payment",
    description: "Get paid on the spot when we pick up your vehicle.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
              Family-Run, Fair Deals
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At True North Hauling, we're committed to providing honest, friendly service. We treat your property with respect and offer competitive prices for every vehicle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-y-12 gap-x-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-16">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
                {service.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-headline text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
