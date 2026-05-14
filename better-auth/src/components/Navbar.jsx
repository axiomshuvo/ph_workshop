"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button, Link } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = useSession();

  if (isPending) {
    return <div>Loading ...</div>;
  }
  const user = data?.user;

  console.log("Session data:", data);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-black no-underline"
          >
            BetterAuth
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium no-underline transition-colors ${
                  isActive ? "text-green-600" : "text-zinc-700 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-700">Hello, {user.email}</span>
              <Button size="sm" variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="secondary"
                size="sm"
                onPress={() => router.push("/auth/signin")}
              >
                Sign In
              </Button>

              <Button
                size="sm"
                className="bg-green-600 text-white hover:bg-green-700"
                onPress={() => router.push("/auth/signup")}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
