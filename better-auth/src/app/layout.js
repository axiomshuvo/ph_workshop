import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Better Auth with HeroUI",
  description:
    "A demo of how to build a better authentication flow with HeroUI and Next.js",
};

export default async function RootLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <Navbar initialUser={session?.user ?? null} />
        <main>{children}</main>
      </body>
    </html>
  );
}
