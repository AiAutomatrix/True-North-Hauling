import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of vehicles do you purchase?",
    answer: "We buy a wide range of vehicles, including cars, trucks, SUVs, and vans, regardless of their age or condition. We also consider farm equipment and other machinery on a case-by-case basis.",
  },
  {
    question: "How quickly can you pick up my vehicle?",
    answer: "We strive to offer same-day or next-day service within Winnipeg. For surrounding areas, pickup is typically scheduled within 48 hours, depending on your location and our availability.",
  },
  {
    question: "What paperwork do I need?",
    answer: "You will need the vehicle's ownership/registration and a valid piece of photo ID. If you can't find the ownership, please let us know when you contact us, as we may still be able to assist.",
  },
  {
    question: "How do I get paid?",
    answer: "We provide instant payment at the time of pickup. We can pay in cash or via e-transfer, whichever you prefer.",
  },
  {
    question: "Is there any cost to me for hauling?",
    answer: "No, our offer includes the cost of towing and removal. There are no hidden fees. The price we agree on is the amount you receive.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions? We've got answers. Here are some common things customers ask.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
