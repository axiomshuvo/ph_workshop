# 🚀 Next.js Starter — JSON Server + HeroUI + Auth.js

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![HeroUI](https://img.shields.io/badge/HeroUI-Latest-6366f1?style=for-the-badge)
![Auth.js](https://img.shields.io/badge/Auth.js-5-green?style=for-the-badge&logo=authjs)
![JSON Server](https://img.shields.io/badge/JSON_Server-Mock_API-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**A modern full-stack ready boilerplate with fake REST API, beautiful UI components, and authentication — all wired up.**

[Live Demo](#) · [Report Bug](https://github.com/axiomshuvo/your-repo/issues) · [Request Feature](https://github.com/axiomshuvo/your-repo/issues)

</div>

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [JSON Server Setup](#-json-server-setup)
- [HeroUI Setup](#-heroui-setup)
- [Auth.js Setup](#-authjs-setup)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Endpoints](#-api-endpoints)
- [Author](#-author)

---

## 🧩 Project Overview

এই project টা একটা **Next.js 15 (App Router)** boilerplate যেখানে:

- 🗄️ **JSON Server** দিয়ে fake REST API mock করা হয়েছে — backend ছাড়াই CRUD possible
- 🎨 **HeroUI** দিয়ে beautiful, accessible UI components ব্যবহার করা হয়েছে
- 🔐 **Auth.js v5** দিয়ে secure authentication system তৈরি করা হয়েছে

---

## 🛠️ Tech Stack

| Technology                                             | Purpose                      | Version   |
| ------------------------------------------------------ | ---------------------------- | --------- |
| [Next.js](https://nextjs.org)                          | React Framework (App Router) | 15+       |
| [HeroUI](https://heroui.com)                           | UI Component Library         | Latest    |
| [Auth.js](https://authjs.dev)                          | Authentication               | v5 (beta) |
| [JSON Server](https://github.com/typicode/json-server) | Fake REST API                | 1.x       |
| [Tailwind CSS](https://tailwindcss.com)                | Styling                      | 3+        |
| [TypeScript](https://typescriptlang.org)               | Type Safety                  | 5+        |

---

## 📁 Folder Structure

```
your-project/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx         # Login page
│   │   └── register/
│   │       └── page.tsx         # Register page
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts     # Auth.js route handler
│   ├── dashboard/
│   │   └── page.tsx             # Protected route
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # HeroUI wrapped components
│   ├── Navbar.tsx
│   └── Providers.tsx            # HeroUI + Auth providers
├── lib/
│   ├── auth.ts                  # Auth.js config
│   └── fetcher.ts               # API fetch helpers
├── db.json                      # JSON Server database
├── routes.json                  # JSON Server custom routes
├── auth.config.ts               # Auth.js options
├── middleware.ts                 # Route protection
├── .env.local                   # Environment variables
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### ১. Repository clone করো

```bash
git clone https://github.com/axiomshuvo/your-repo.git
cd your-repo
```

### ২. Dependencies install করো

```bash
npm install
```

### ৩. Environment variables সেট করো

```bash
cp .env.example .env.local
# তারপর .env.local এ values fill up করো
```

### ৪. Development server চালাও

```bash
npm run dev:all   # Next.js + JSON Server একসাথে
```

এখন open করো:

- **App:** [http://localhost:3000](http://localhost:3000)
- **JSON Server API:** [http://localhost:5000](http://localhost:5000)

---

## 🗄️ JSON Server Setup

### Installation

```bash
npm install json-server concurrently --save-dev
```

### db.json

```json
{
  "users": [
    {
      "id": 1,
      "name": "Axiom Shuvo",
      "email": "shuvo@example.com",
      "role": "admin"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 4999,
      "category": "Electronics",
      "stock": 25,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      "id": 2,
      "name": "Running Sneakers Pro",
      "price": 2499,
      "category": "Footwear",
      "stock": 40,
      "rating": 4.3,
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
      "id": 3,
      "name": "Steel Water Bottle",
      "price": 799,
      "category": "Lifestyle",
      "stock": 100,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
    },
    {
      "id": 4,
      "name": "Mechanical Keyboard",
      "price": 3299,
      "category": "Electronics",
      "stock": 15,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    },
    {
      "id": 5,
      "name": "Leather Crossbody Bag",
      "price": 1899,
      "category": "Fashion",
      "stock": 30,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
    }
  ],
  "posts": [],
  "orders": []
}
```

### Custom Routes (`routes.json`)

```json
{
  "/api/users": "/users",
  "/api/products": "/products",
  "/api/posts": "/posts",
  "/api/orders": "/orders"
}
```

### Server চালু করো

```bash
json-server --watch db.json --routes routes.json --port 5000
```

### Fetcher Helper (`lib/fetcher.ts`)

```ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const fetcher = {
  get: async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  },

  post: async (endpoint: string, body: unknown) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.json();
  },

  patch: async (endpoint: string, body: unknown) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.json();
  },

  delete: async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, { method: "DELETE" });
    return res.json();
  },
};
```

---

## 🎨 HeroUI Setup

### Installation

```bash
npm install @heroui/react framer-motion
```

### `tailwind.config.ts`

```ts
import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
```

### Provider (`components/Providers.tsx`)

```tsx
"use client";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
}
```

### Root Layout (`app/layout.tsx`)

```tsx
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Built with Next.js + HeroUI + Auth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### HeroUI Component Example

```tsx
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="max-w-sm">
      <CardHeader className="pb-0">
        <img src={product.image} alt={product.name} className="rounded-lg" />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-primary font-semibold">৳ {product.price}</p>
        <Button color="primary" className="mt-3 w-full">
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
}
```

---

## 🔐 Auth.js Setup

### Installation

```bash
npm install next-auth@beta
```

### Auth Config (`auth.ts`)

```ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // JSON Server থেকে user খোঁজো
        const res = await fetch(
          `http://localhost:5000/users?email=${credentials?.email}`,
        );
        const users = await res.json();
        const user = users[0];

        if (user && user.password === credentials?.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
});
```

### Route Handler (`app/api/auth/[...nextauth]/route.ts`)

```ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
```

### Middleware — Route Protect করো (`middleware.ts`)

```ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

### Login Page (`app/login/page.tsx`)

```tsx
"use client";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-2xl font-bold">Login</CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="primary" onPress={handleLogin}>
            Sign In
          </Button>
          <Button variant="bordered" onPress={() => signIn("google")}>
            Continue with Google
          </Button>
          <Button variant="bordered" onPress={() => signIn("github")}>
            Continue with GitHub
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
```

### Session Access (Server Component)

```tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
```

### Session Access (Client Component)

```tsx
"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@heroui/react";

export default function UserMenu() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-3">
      <span>{session.user?.name}</span>
      <Button size="sm" color="danger" variant="flat" onPress={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}
```

---

## 🔑 Environment Variables

`.env.local` ফাইলে এগুলো রাখো:

```env
# App
NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=your-super-secret-key-here   # openssl rand -base64 32

# JSON Server
NEXT_PUBLIC_API_URL=http://localhost:5000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

> 💡 `AUTH_SECRET` generate করো: `openssl rand -base64 32`

---

## 📜 Available Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "api": "json-server --watch db.json --routes routes.json --port 5000",
    "dev:all": "concurrently \"npm run api\" \"npm run dev\""
  }
}
```

| Command           | কাজ                    |
| ----------------- | ---------------------- |
| `npm run dev`     | শুধু Next.js চালাও     |
| `npm run api`     | শুধু JSON Server চালাও |
| `npm run dev:all` | দুটো একসাথে চালাও      |
| `npm run build`   | Production build       |

---

## 🌐 API Endpoints

JSON Server এ এই endpoints available:

```
# Products
GET     /api/products              → সব products
GET     /api/products/:id          → একটা product
POST    /api/products              → নতুন product
PUT     /api/products/:id          → পুরো update
PATCH   /api/products/:id          → আংশিক update
DELETE  /api/products/:id          → delete

# Query Examples
GET /api/products?category=Electronics
GET /api/products?_sort=price&_order=asc
GET /api/products?price_gte=1000&price_lte=5000
GET /api/products?q=keyboard
GET /api/products?_page=1&_limit=4

# Users
GET     /api/users
GET     /api/users/:id
POST    /api/users
PATCH   /api/users/:id
DELETE  /api/users/:id
```

---

## 👤 Author

**Axiom Shuvo**

- GitHub: [@axiomshuvo](https://github.com/axiomshuvo)
- Project Link: [https://github.com/axiomshuvo/ph_workshop/tree/main/nextjs-rendering](https://github.com/axiomshuvo/ph_workshop/tree/main/nextjs-rendering)

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/axiomshuvo">axiomshuvo</a>
</div>
