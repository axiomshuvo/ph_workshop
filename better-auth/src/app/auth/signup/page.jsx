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

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      callbackURL: "/",
    });

    if (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#f0fdf4_100%)] px-6 py-16 text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
              New account
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
              Password toggle ready
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Create your profile
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Sign up with a more polished form and stronger visual contrast.
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              The signup page now reads like a product screen instead of a plain
              form: richer colors, clearer spacing, and a more obvious password
              reveal control.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Trust", "The page looks more like a real onboarding flow."],
              ["Readable", "Text, buttons, and cards all have clear contrast."],
              ["Useful", "Password visibility stays inside the field area."],
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

        <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl shadow-emerald-100/60 backdrop-blur">
          <div className="mb-6 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Sign up
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Create your account
            </h2>
          </div>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label>Your Name</Label>
              <InputGroup>
                <InputGroup.Input placeholder="Type your full name" />
              </InputGroup>
              <FieldError />
            </TextField>

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
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
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
                Use at least 8 characters with one uppercase letter and one
                number.
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-3 pt-2">
              <Button
                className="bg-zinc-950 text-white hover:bg-zinc-800"
                type="submit"
              >
                <Check />
                Create account
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
