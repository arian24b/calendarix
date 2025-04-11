import { ThemeToggle } from "@/components/theme-toggle";
import { X, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import config from "@/lib/config";

export function Footer() {
  return (
    <footer className="container py-2 border-t border-[#d7dfee]/30">
      <div className="flex flex-col items-center justify-center py-2 space-y-2">
        <div className="flex space-x-6">
          <Link
            href={config.social.twitter}
            className="hover:text-[#414ba4] transition-colors"
          >
            <X className="size-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:text-[#414ba4] transition-colors">
            <Instagram className="size-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href={config.social.linkedin}
            className="hover:text-[#414ba4] transition-colors"
          >
            <Linkedin className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <div className="flex space-x-6">
          {config.nav.legal.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              className="text-sm text-muted-foreground hover:text-[#414ba4] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CalendarIX Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
