import { Card, Chip, Link } from "@heroui/react";

const values = [
  {
    title: "Clarity first",
    description:
      "Every screen should show the user where they are, what they can do, and what happens next.",
  },
  {
    title: "Systems over scraps",
    description:
      "The same palette, spacing, and motion language should carry across auth, content, and dashboard views.",
  },
  {
    title: "Useful by default",
    description:
      "Forms, links, and protected states should work before they start looking fancy.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)] px-6 py-16 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-8 top-40 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl space-y-8">
        <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl shadow-sky-100/60 backdrop-blur sm:p-8">
          <Chip className="bg-sky-100 text-sky-800">About this project</Chip>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                A Better Auth demo that feels like a finished product.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                This app is redesigned to make each route feel intentional: the
                home page introduces the system, auth pages explain the flow,
                and the dashboard shows what protected content looks like.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["Auth", "Better Auth + MongoDB"],
                ["UI", "HeroUI + Tailwind"],
                ["Structure", "App Router"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <p className="text-sm text-zinc-500">{label}</p>
                  <p className="mt-2 font-semibold text-zinc-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className="rounded-[1.75rem] border border-white/80 bg-white/90 shadow-lg shadow-sky-100/40 backdrop-blur"
            >
              <Card.Content className="space-y-3 p-6">
                <p className="text-lg font-semibold text-zinc-950">
                  {value.title}
                </p>
                <p className="text-sm leading-7 text-zinc-600">
                  {value.description}
                </p>
              </Card.Content>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[1.75rem] border border-white/80 bg-zinc-950 text-white shadow-2xl shadow-zinc-200/60">
            <Card.Content className="space-y-4 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">
                Mission
              </p>
              <p className="text-2xl font-semibold tracking-tight">
                Make auth screens feel trustworthy, not temporary.
              </p>
              <p className="text-sm leading-7 text-zinc-300">
                That means using a clear palette, strong spacing, readable
                controls, and route content that helps users understand the
                application before they sign in.
              </p>
            </Card.Content>
          </Card>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-xl shadow-sky-100/50 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Links
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Home", "/"],
                ["Blog", "/blog"],
                ["Dashboard", "/dashboard"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-center font-medium text-zinc-950 no-underline transition hover:border-sky-300 hover:bg-sky-50"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
