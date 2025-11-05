import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const Logo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-8 w-8 text-primary", className)}
    {...props}
  >
    <title>True North Hauling Logo</title>
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
    <path
      d="M12 12.5 10 9.5h4l-2 3Z"
      transform="translate(0 -2)"
      fill="hsl(var(--primary))"
    />
    <path d="M12 6.5v3" transform="translate(0 -2)" />
  </svg>
);

export default Logo;
