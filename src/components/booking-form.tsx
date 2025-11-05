"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  vehicleInfo: z.string().min(5, { message: "Please specify make, model, and year." }),
  location: z.string().min(3, { message: "Please enter the vehicle's location." }),
  condition: z.string({ required_error: "Please select the vehicle condition." }),
  preferredDate: z.date({ required_error: "A date for viewing is required." }),
  preferredTime: z.string().min(3, { message: "Please suggest a time." }),
});

type FormData = z.infer<typeof formSchema>;

const businessEmail = "contact@truenorthhauling.example"; 

export default function BookingForm() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicleInfo: "",
      location: "",
      preferredTime: "",
    },
  });

  function onSubmit(data: FormData) {
    const subject = `Vehicle Viewing Request: ${data.vehicleInfo}`;
    const body = `New Vehicle Viewing Request:
-----------------------------
Customer Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
-----------------------------
Vehicle: ${data.vehicleInfo}
Location: ${data.location}
Condition: ${data.condition}
-----------------------------
Preferred Viewing: ${format(data.preferredDate, "PPP")} at ${data.preferredTime}
    `;

    const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Failed to open mailto link", error);
      toast({
        variant: "destructive",
        title: "Could not open email client",
        description: `Please copy the details and email us at ${businessEmail}.`,
      });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
            Get a Quote for Your Vehicle
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Fill out the form below and we'll contact you to schedule a viewing and provide a fair, no-obligation quote.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="(204) 555-1234" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem className="sm:col-span-2"><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="vehicleInfo" render={({ field }) => (
                <FormItem className="sm:col-span-2"><FormLabel>Vehicle Make, Model & Year</FormLabel><FormControl><Input placeholder="e.g., 2005 Honda Civic" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem><FormLabel>Vehicle Location</FormLabel><FormControl><Input placeholder="e.g., St. Vital, Winnipeg" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="condition" render={({ field }) => (
                <FormItem><FormLabel>Condition</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}><FormControl>
                      <SelectTrigger><SelectValue placeholder="Select vehicle condition" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Running">Running</SelectItem>
                      <SelectItem value="Not Running">Not Running</SelectItem>
                      <SelectItem value="Damaged">Damaged</SelectItem>
                      <SelectItem value="Scrap">Scrap</SelectItem>
                    </SelectContent>
                  </Select><FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="preferredDate" render={({ field }) => (
                <FormItem className="flex flex-col"><FormLabel>Preferred Date</FormLabel>
                  <Popover><PopoverTrigger asChild><FormControl>
                          <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                            {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>)}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl></PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))} initialFocus />
                    </PopoverContent>
                  </Popover><FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="preferredTime" render={({ field }) => (
                <FormItem><FormLabel>Preferred Time</FormLabel><FormControl><Input placeholder="e.g., Afternoon, around 2 PM" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" className="w-full sm:col-span-2 bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-ring">
                Submit Request <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
