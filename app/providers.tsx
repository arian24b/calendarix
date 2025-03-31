"use client";

import { ThemeProvider } from "next-themes";
import { BackToTop } from "@/components/back-to-top";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableColorScheme
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <BackToTop />
      <Toaster />
      <Footer />
    </ThemeProvider>
  );
}
