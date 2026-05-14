"use client";

import { useSession } from "@/lib/auth-client";
import { Button, Card, Chip, Link, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashBoard() {
  const router = useRouter();
  const { data, isPending } = useSession();
  const user = data?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/auth/signin");
    }
  }, [isPending, user, router]);

  if (isPending) {
    return <div>Loading ...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ecfeff_100%)] px-6 py-16 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8">
        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-emerald-100/50 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <Chip className="bg-emerald-100 text-emerald-800">
                Protected area
              </Chip>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Welcome back, {user.email}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600">
                This dashboard now feels like part of the product: clearer
                color, stronger content hierarchy, and a session-aware layout
                that is easy to extend.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-zinc-950 text-white hover:bg-zinc-800"
                onPress={() => router.push("/")}
              >
                Back home
              </Button>
              <Button variant="secondary" onPress={() => router.push("/blog")}>
                Read blog
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[1.75rem] border border-white/80 bg-zinc-950 text-white shadow-2xl shadow-zinc-200/70">
            <Card.Content className="space-y-6 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">
                    Account snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Session overview
                  </h2>
                </div>
                <Chip className="border border-emerald-400/30 bg-emerald-500/10 text-emerald-100">
                  Live
                </Chip>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Status", "Signed in"],
                  ["Route", "/dashboard"],
                  ["Access", "Protected"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm text-zinc-400">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
                  Next step
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-200">
                  Add real user data, notifications, and activity logs to turn
                  this into a proper application shell.
                </p>
              </div>
            </Card.Content>
          </Card>

          <Surface className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-xl shadow-emerald-100/60 backdrop-blur">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Quick links
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                  Move between the redesigned pages
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  ["Home", "/", "Hero, stats, and product positioning"],
                  ["About", "/about", "Story, mission, and values"],
                  ["Blog", "/blog", "Reading list and featured posts"],
                ].map(([label, href, description]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-3xl border border-zinc-200 bg-white px-5 py-4 no-underline transition hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    <div>
                      <p className="font-semibold text-zinc-950">{label}</p>
                      <p className="text-sm text-zinc-600">{description}</p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-700">
                      Open
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Surface>
        </section>
      </div>
    </main>
  );
}
