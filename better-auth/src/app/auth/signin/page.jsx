"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/dashboard",
    });

    if (error) {
      alert(`Error signing in: ${error.message}`);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#fefce8_100%)] px-6 py-16 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              Secure access
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
              Session-aware UI
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Welcome back
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Sign in with a cleaner form and a clearer visual hierarchy.
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              The redesigned page gives the form a stronger palette, better
              spacing, and a password toggle that stays readable inside the
              field.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Fast", "Minimal steps to reach the dashboard."],
              ["Clear", "Visible password toggle and helper text."],
              ["Consistent", "Matches the rest of the app redesign."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-semibold text-zinc-950">{title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-emerald-100/60 backdrop-blur">
          <div className="mb-6 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Sign in
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Get back into your account
            </h2>
          </div>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <InputGroup>
                <InputGroup.Input placeholder="john@example.com" />
              </InputGroup>
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <InputGroup.Suffix className="pr-0">
                  <button
                    type="button"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    onClick={() => setIsVisible((prev) => !prev)}
                    className="flex items-center rounded-r-2xl px-3 text-muted transition-colors hover:text-(--foreground)"
                  >
                    {isVisible ? (
                      <EyeSlash className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description>
                The toggle reveals the real password instead of replacing the
                value.
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-3 pt-2">
              <Button
                className="bg-zinc-950 text-white hover:bg-zinc-800"
                type="submit"
              >
                <Check />
                Sign in
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
}
