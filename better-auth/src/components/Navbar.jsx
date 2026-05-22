"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button, Chip, Link } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar({ initialUser = null }) {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isPending } = useSession();
  const user = isPending ? initialUser : (data?.user ?? null);

  if (isPending) {
    return <div>Loading ...</div>;
  }

  const visibleNavItems = user
    ? [...navItems, { label: "Dashboard", href: "/dashboard" }]
    : navItems;

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-zinc-950/80 text-white backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white no-underline"
          >
            BetterAuth Studio
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {visibleNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? "bg-emerald-400/15 text-emerald-200"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
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
              <Chip className="border border-white/10 bg-white/5 text-zinc-200">
                {user.name || user.email}
              </Chip>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-zinc-950 hover:bg-zinc-100"
                onPress={async () => {
                  await signOut();
                  router.refresh();
                  router.replace("/");
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/10 text-white hover:bg-white/15"
                onPress={() => router.push("/auth/signin")}
              >
                Sign In
              </Button>

              <Button
                size="sm"
                className="bg-emerald-500 text-white hover:bg-emerald-400"
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
