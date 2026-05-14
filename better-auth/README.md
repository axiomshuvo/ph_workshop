# Better Auth — Learn as You Build 🚀

A hands-on Next.js project for learning [Better Auth](https://www.better-auth.com/) in a simple, practical, and fun way 🎉

Built by [Pradipta Sarker](https://github.com/axiomshuvo) 💻

---

## What is Better Auth? 🤔

Better Auth is a framework-agnostic authentication library that gives you:

- Email & password auth out of the box ✉️
- Session management 🍪
- Database adapters (MongoDB, Prisma, Drizzle, etc.) 🗄️
- OAuth providers (Google, GitHub, etc.) 🔐
- A client SDK for React (`useSession`, `signIn`, `signUp`) ⚛️

Think of it as a self-hosted alternative to Clerk or NextAuth, but with a cleaner API and first-class TypeScript support. Clean, flexible, and developer-friendly 😎

---

## Project Structure 🧭

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js      ← Catch-all API route for Better Auth
│   └── auth/
│       ├── signin/
│       │   └── page.jsx          ← Sign in screen
│       └── signup/
│           └── page.jsx          ← Signup UI using authClient
│   ├── about/
│   │   └── page.jsx              ← About page
│   ├── blog/
│   │   └── page.jsx              ← Blog page
│   ├── dashboard/
│   │   └── page.jsx              ← Protected dashboard
│   └── page.js                   ← Home page
├── lib/
│   ├── auth.js                   ← Server-side auth config (betterAuth)
│   └── auth-client.js            ← Client-side SDK (createAuthClient)
├── components/
│   └── Navbar.jsx                ← App navigation + sign out
```

## Routes ✨

- `/` - redesigned home page
- `/auth/signin` - sign in form with password toggle
- `/auth/signup` - sign up form with password toggle
- `/dashboard` - protected session-aware dashboard
- `/about` - product and project overview
- `/blog` - sample article listing page

---

## How It Works ⚙️

### 1. Server Config — `src/lib/auth.js` 🖥️

```js
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("better-auth-db");

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  database: mongodbAdapter(db, { client }),
});
```

- `betterAuth()` is the core config object — lives on the **server only**
- `mongodbAdapter` connects to your MongoDB database
- `AUTH_DB_URI` is your MongoDB connection string from `.env.local`

### 2. API Route — `src/app/api/auth/[...all]/route.js` 🌐

```js
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
```

- This single file handles **all** auth routes automatically
- Better Auth exposes endpoints like `/api/auth/sign-up/email`, `/api/auth/sign-in/email`, `/api/auth/session`, etc.
- `toNextJsHandler` adapts the Better Auth handler to Next.js App Router format

### 3. Client SDK — `src/lib/auth-client.js` 📱

```js
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
```

- `createAuthClient` is for the **browser** — never import `auth.js` in client components
- `useSession()` — React hook to read the current session
- `signIn.email()` / `signUp.email()` / `signOut()` — call these from form submit handlers

### 4. Signup Page — `src/app/auth/signup/page.jsx` ✍️

```js
const { data, error } = await authClient.signUp.email({
  email: userData.email,
  password: userData.password,
  name: userData.name,
  callbackURL: "/",
});
```

- Always `"use client"` — client components only
- Destructure `{ data, error }` from every auth call
- `callbackURL` is where the user is redirected after successful signup

---

## Environment Variables 🔑

Create a `.env` or `.env.local` file in the project root:

```env
AUTH_DB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key-here
```

| Variable                      | Purpose                                          |
| ----------------------------- | ------------------------------------------------ |
| `AUTH_DB_URI`                 | MongoDB connection string                        |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Base URL of your app for client auth requests    |
| `BETTER_AUTH_SECRET`          | Secret for signing sessions (keep this private!) |

For production, change `NEXT_PUBLIC_BETTER_AUTH_URL` to your live domain, for example `https://your-app.com`.

---

## Getting Started 🏁

```bash
npm install
npm run dev
```

Then open [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup) and start testing the flow ✨

To test the full experience:

1. Sign up at `/auth/signup`
2. Sign in at `/auth/signin`
3. Open `/dashboard` to confirm the protected route works
4. Check `/about` and `/blog` to see the redesigned content pages

---

## Common Errors & Fixes 🛠️

### 500 Internal Server Error on Auth Routes 🚨

**Symptom:** Requests to `/api/auth/*` return a 500 error. Not fun, but usually easy to fix 😅

**Most common cause — MongoDB Atlas Network Access is blocking your IP.**

#### Fix (Development) 🧪

1. Go to [MongoDB Atlas](https://cloud.mongodb.com) → your cluster → **Network Access**
2. Click **Add IP Address**
3. Add your **current local IP** (not `0.0.0.0/0`)
   - Find your IP: run `curl ifconfig.me` in terminal
4. Save and wait ~30 seconds for Atlas to apply the change

> **Do NOT use `0.0.0.0/0` (Allow Access from Anywhere)** — this is a serious security risk that exposes your database to the entire internet. Add only the IP you actually need ✅

#### Fix (Production / Deployment) 🚀

If you're deploying to Vercel, Railway, Render, etc.:

1. Find the **outbound IP addresses** of your deployment platform (each platform documents these)
2. Add those specific IPs to MongoDB Atlas Network Access
3. Or use a dedicated static IP service (e.g., Quotaguard, Fixie) for a stable IP

#### Other causes of 500 errors 👀

| Cause                                               | Fix                                                  |
| --------------------------------------------------- | ---------------------------------------------------- |
| `AUTH_DB_URI` missing or wrong                      | Double-check `.env.local`, restart dev server        |
| `BETTER_AUTH_SECRET` not set                        | Add it to `.env.local`                               |
| MongoDB connection string missing the database name | Append `/your-db-name` to the URI                    |
| Importing `auth.js` in a client component           | Only import `auth-client.js` in `"use client"` files |

---

## Key Concepts to Remember 🧠

| Concept            | File                         | Note                                            |
| ------------------ | ---------------------------- | ----------------------------------------------- |
| Server auth config | `lib/auth.js`                | Server only — never import in client components |
| Client SDK         | `lib/auth-client.js`         | Browser only — use in `"use client"` components |
| API handler        | `api/auth/[...all]/route.js` | One file handles all auth endpoints             |
| Session hook       | `useSession()`               | Returns `{ data: session, isPending }`          |

---

## Learn More 📚

- [Better Auth Docs](https://www.better-auth.com/docs)
- [Better Auth + Next.js Guide](https://www.better-auth.com/docs/integrations/next-js)
- [MongoDB Atlas Network Access](https://www.mongodb.com/docs/atlas/security/ip-access-list/)

---

## Author ❤️

Made by [Pradipta Sarker](https://github.com/axiomshuvo) 🌟
