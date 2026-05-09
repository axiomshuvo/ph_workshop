"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function NextThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
}
