import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { X, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container py-4">
      <Separator />

      <div className="flex items-center justify-between py-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CalendarIX Inc All rights reserved.
        </p>

        <div className="flex space-x-4">
          <Link href="#">
            <X className="size-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#">
            <Instagram className="size-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#">
            <Linkedin className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </footer>
  );
}
