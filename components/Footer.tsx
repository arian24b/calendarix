import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export function Footer() {
  return (
    <footer className="container py-4 border-t border-[#d7dfee]/30">
      <div className="flex flex-col items-center justify-between py-2 space-y-4 sm:flex-row sm:space-y-0">
        <div className="flex items-center space-x-4">
            <Link href="https://www.producthunt.com/posts/calendarix?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-calendarix" target="_blank">
              <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=953847&theme=dark&t=1744997994344" alt="Calendarix - Your smart calendar with an AI planner." width="250" height="54" className="h-auto hidden dark:block" />
              <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=953847&theme=neutral&t=1744997985239" alt="Calendarix - Your smart calendar with an AI planner." width="250" height="54" className="h-auto block dark:hidden" />
            </Link>
          </div>

        <div className="flex items-center space-x-6">
          <Link href="https://www.instagram.com/calendarix.pro" className="hover:text-[#414ba4] transition-colors">
            <Instagram className="size-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CalendarIX Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
