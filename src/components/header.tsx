"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const phoneNumber = "204-960-0090";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-7 w-7 text-accent" />
          <span className="hidden font-headline text-xl font-bold text-foreground sm:inline-block">
            True North Hauling
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild className="text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={`tel:${phoneNumber.replace(/-/g, "")}`} className="flex items-center gap-2">
                <span className="font-bold">Call Now!</span>
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline-block">{phoneNumber}</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
