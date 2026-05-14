import { Card, Chip, Link, Surface } from "@heroui/react";

const featureCards = [
  {
    eyebrow: "Fast setup",
    title: "Start with real auth, not placeholder UI",
    description:
      "Wire up signup, sign in, sessions, and protected flows from a clean Better Auth foundation.",
  },
  {
    eyebrow: "MongoDB ready",
    title: "Keep your auth data in one predictable place",
    description:
      "This project already connects Better Auth to MongoDB, so you can focus on product flow instead of adapter plumbing.",
  },
  {
    eyebrow: "App Router",
    title: "Built for modern Next.js structure",
    description:
      "Use a clean App Router setup with server-first pages, focused client components, and room to scale.",
  },
];

const quickStats = [
  { value: "3", label: "core auth layers" },
  { value: "1", label: "catch-all auth route" },
  { value: "100%", label: "project-owned UI" },
];

const quickSteps = [
  "Create an account with email and password.",
  "Connect MongoDB Atlas and confirm your IP is allowed.",
  "Extend the flow with session-aware pages and dashboard access.",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-linear-to-b from-emerald-50 via-white to-lime-50 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-lime-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl" />
      </div>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Chip variant="flat">Better Auth</Chip>
            <Chip variant="flat">Next.js 16</Chip>
            <Chip variant="flat">HeroUI</Chip>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Ship auth with less noise
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Build a cleaner auth experience without the usual setup mess.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              This starter pairs Better Auth, MongoDB, and HeroUI into a
              polished base so you can move straight into product work instead
              of rebuilding auth screens from scratch.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/auth/signup"
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white no-underline shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
            >
              Create account
            </Link>
            <Link
              href="/auth/signin"
              className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-200 bg-white px-6 text-sm font-semibold text-zinc-900 no-underline transition hover:border-emerald-400 hover:bg-emerald-50"
            >
              Sign in
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickStats.map((item) => (
              <Card
                key={item.label}
                className="border border-white/70 bg-white/80 shadow-sm backdrop-blur"
              >
                <Card.Content className="space-y-2 p-5">
                  <p className="text-3xl font-semibold text-zinc-950">
                    {item.value}
                  </p>
                  <p className="text-sm text-zinc-500">{item.label}</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <Surface className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-zinc-950 p-6 text-white shadow-2xl shadow-emerald-100">
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-emerald-400/20 to-transparent" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">
                  Launch panel
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Better Auth starter
                </h2>
              </div>
              <Chip className="border border-emerald-400/40 bg-emerald-500/10 text-emerald-100">
                Ready to extend
              </Chip>
            </div>

            <Card className="border border-white/10 bg-white/5 text-white shadow-none">
              <Card.Header className="space-y-2 p-5 pb-0">
                <Card.Title className="text-lg font-semibold text-white">
                  What you can build next
                </Card.Title>
                <Card.Description className="text-sm text-zinc-300">
                  Move from starter auth to a full product flow with protected
                  pages and session-aware experiences.
                </Card.Description>
              </Card.Header>
              <Card.Content className="p-5">
                <div className="space-y-3">
                  {quickSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-6 text-zinc-200">{step}</p>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
                Project promise
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-200">
                Clear routes, predictable auth state, and a UI layer that feels
                like a product instead of a temporary demo.
              </p>
            </div>
          </div>
        </Surface>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Why this starter works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Designed for learning fast and shipping faster.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
            The goal is simple: make auth readable, extendable, and pleasant to
            work on from the first screen.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              className="h-full rounded-[1.75rem] border border-white/70 bg-white/85 shadow-lg shadow-emerald-100/60 backdrop-blur"
            >
              <Card.Header className="space-y-3 p-6 pb-0">
                <Chip variant="flat" className="w-fit text-emerald-700">
                  {card.eyebrow}
                </Chip>
                <Card.Title className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {card.title}
                </Card.Title>
              </Card.Header>
              <Card.Content className="p-6 pt-4">
                <Card.Description className="text-base leading-7 text-zinc-600">
                  {card.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <Card className="overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-linear-to-r from-emerald-600 via-emerald-500 to-lime-500 text-white shadow-2xl shadow-emerald-200/70">
          <Card.Content className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                Ready to build
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Turn this starter into your real auth foundation.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-emerald-50/90">
                Create your first account, connect your database safely, and
                start shaping the product experience around real users.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/auth/signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-emerald-700 no-underline transition hover:bg-emerald-50"
              >
                Start with sign up
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
              >
                Open sign in
              </Link>
            </div>
          </Card.Content>
        </Card>
      </section>
    </main>
  );
}
