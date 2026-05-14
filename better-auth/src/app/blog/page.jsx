import { Card, Chip, Link } from "@heroui/react";

const posts = [
  {
    title: "Building auth pages people trust",
    category: "Design",
    readTime: "4 min read",
    summary:
      "A better palette, stronger type scale, and clearer feedback make authentication feel safer and more usable.",
  },
  {
    title: "Why session-aware layouts matter",
    category: "Product",
    readTime: "5 min read",
    summary:
      "Protected routes should not look like a separate app. They should keep the same visual language and flow.",
  },
  {
    title: "Turning a starter into a real product",
    category: "Engineering",
    readTime: "6 min read",
    summary:
      "The difference between a demo and a product is often the quality of its smallest screens and edge cases.",
  },
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,#fffaf0_0%,#f8fafc_100%)] px-6 py-16 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl space-y-8">
        <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl shadow-amber-100/60 backdrop-blur sm:p-8">
          <Chip className="bg-amber-100 text-amber-800">Blog</Chip>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Notes on building a more polished auth experience.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                Short articles and implementation notes about visual hierarchy,
                protected routes, and the small details that make an app feel
                real.
              </p>
            </div>

            <Link
              href="/auth/signup"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white no-underline transition hover:bg-zinc-800"
            >
              Join the app
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card
              key={post.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-lg shadow-amber-100/40 backdrop-blur"
            >
              <Card.Content className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <Chip
                    variant="flat"
                    className="bg-emerald-100 text-emerald-800"
                  >
                    {post.category}
                  </Chip>
                  <span className="text-sm text-zinc-500">0{index + 1}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500">{post.readTime}</p>
                </div>
                <p className="text-sm leading-7 text-zinc-600">
                  {post.summary}
                </p>
              </Card.Content>
            </Card>
          ))}
        </section>

        <section className="rounded-[1.75rem] border border-white/80 bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-200/60">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">
                Reading list
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                More posts coming as the product grows.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
              >
                About this app
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 no-underline transition hover:bg-zinc-100"
              >
                Open dashboard
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
