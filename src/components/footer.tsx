import Logo from "@/components/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Logo className="h-6 w-6 text-muted-foreground" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Family Owned & Operated in Winnipeg, MB.
          </p>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} True North Hauling. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
