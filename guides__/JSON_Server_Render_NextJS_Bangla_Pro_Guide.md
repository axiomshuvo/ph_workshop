# JSON Server Deploy Guide for Next.js Projects

**Bangla Pro Version | Updated: ১৬ মে ২০২৬**

এই গাইডে আমরা `JSON Server` দিয়ে একটি fake REST API বানাবো, GitHub-এ push করবো, Render-এ deploy করবো, এবং শেষে Next.js project থেকে সেই live API fetch করবো।

> **Target:** যারা backend ছাড়া frontend project, assignment, prototype, portfolio demo বা practice API বানাতে চান, তাদের জন্য এই guide।

---

## Quick Overview

```txt
db.json  ->  JSON Server  ->  Render Live API  ->  Next.js fetch  ->  UI
```

আপনি শেষে এমন live endpoints পাবেন:

```txt
https://your-app-name.onrender.com/products
https://your-app-name.onrender.com/books
https://your-app-name.onrender.com/products/1
```

---

## Mistake Check: আগের guide থেকে কী কী ঠিক করা হয়েছে

| আগের confusing / risky point | এখন কীভাবে ঠিক করা হয়েছে |
|---|---|
| `json-server` beta version আর stable version mix ছিল | beginner-friendly deploy guide-এর জন্য `json-server@0.17.4` fixed করা হয়েছে |
| `public/` folder-কে সব version-এর জন্য required বলা হয়েছিল | stable setup-এ mandatory না; কিন্তু safe structure হিসেবে রাখা হয়েছে |
| Render port নিয়ে wording unclear ছিল | app-কে `--port $PORT` দিয়ে চালাতে বলা হয়েছে |
| Render host binding explain করা ছিল না | `--host 0.0.0.0` কেন দরকার, সেটা explain করা হয়েছে |
| CORS error-এর fix generic ছিল | client-side fetch বনাম server-side fetch আলাদা করে explain করা হয়েছে |
| Render free plan delay mention কম ছিল | free service sleep/spin down বিষয়টা যোগ করা হয়েছে |
| JSON Server data persistence warning ছিল না | production database না, restart/redeploy হলে data reset হতে পারে - এটা clear করা হয়েছে |
| Next.js env usage simple ছিল | server component, client component, dynamic route - তিনটা example যোগ করা হয়েছে |

---

## আপনি এই guide থেকে কী শিখবেন

- `db.json` দিয়ে fake database তৈরি করা
- JSON Server দিয়ে REST API চালানো
- Local machine-এ API test করা
- GitHub-এ project push করা
- Render Web Service হিসেবে deploy করা
- Live API endpoint test করা
- Next.js App Router থেকে API call করা
- `.env.local` দিয়ে API URL manage করা
- Common deploy errors debug করা
- কোন case-এ JSON Server ব্যবহার করা উচিত আর কোন case-এ করা উচিত না

---

## Prerequisites

শুরু করার আগে এগুলো থাকা ভালো:

| Tool / Account | কেন দরকার |
|---|---|
| Node.js | JavaScript project চালানোর জন্য |
| npm | package install করার জন্য |
| Git | project GitHub-এ push করার জন্য |
| GitHub account | repository host করার জন্য |
| Render account | API deploy করার জন্য |
| Next.js basic idea | frontend থেকে API fetch করার জন্য |

Check করুন:

```bash
node -v
npm -v
git --version
```

---

## Recommended Version

এই guide-এ stable setup হিসেবে ব্যবহার করা হচ্ছে:

```bash
json-server@0.17.4
```

কারণ latest `json-server` v1 এখনো beta হতে পারে। Beta version-এ command behavior, route behavior বা pagination/search behavior change হতে পারে। তাই beginner project, assignment বা tutorial-এর জন্য stable version better।

> **Rule of thumb:** learning/demo project হলে stable version ব্যবহার করুন। নতুন feature test করতে চাইলে beta আলাদা branch/project-এ test করুন।

---

# Part ১: JSON Server Project তৈরি করা

## ১. Project Folder Structure

আমাদের API project-এর structure এমন হবে:

```txt
my-json-api/
├── db.json
├── package.json
├── .gitignore
└── public/
    └── .gitkeep
```

### File/folder গুলোর কাজ

| File / Folder | কাজ |
|---|---|
| `db.json` | fake database; এখানকার data থেকেই API route তৈরি হবে |
| `package.json` | scripts, dependencies, Node config |
| `.gitignore` | `node_modules` এর মতো unnecessary file GitHub-এ push হওয়া আটকাবে |
| `public/.gitkeep` | empty `public` folder GitHub-এ রাখার জন্য |

---

## ২. Project Initialize করুন

Terminal / CMD / PowerShell খুলে লিখুন:

```bash
mkdir my-json-api
cd my-json-api
npm init -y
```

### Command explanation

- `mkdir my-json-api` - নতুন folder তৈরি করে
- `cd my-json-api` - সেই folder-এর ভিতরে যায়
- `npm init -y` - default `package.json` তৈরি করে

---

## ৩. JSON Server Install করুন

Stable version install করুন:

```bash
npm install json-server@0.17.4
```

Install শেষে `package.json`-এ dependency যোগ হবে:

```json
"dependencies": {
  "json-server": "^0.17.4"
}
```

> চাইলে `^` remove করে exact version lock করতে পারেন: `"json-server": "0.17.4"`। Tutorial/assignment-এর জন্য exact version রাখা বেশি predictable।

---

## ৪. `.gitignore` তৈরি করুন

Root folder-এ `.gitignore` file তৈরি করুন:

```gitignore
node_modules/
.env
.env.local
.DS_Store
```

### কেন দরকার?

`node_modules` অনেক বড় folder। এটা GitHub-এ push করা উচিত না। Deploy platform নিজে `npm install` চালিয়ে dependencies install করবে।

---

## ৫. `db.json` তৈরি করুন

Root folder-এ `db.json` file তৈরি করুন:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "price": 29.99,
      "category": "Electronics",
      "stock": 50,
      "rating": 4.5,
      "image": "https://placehold.co/400x300?text=Mouse"
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "price": 79.99,
      "category": "Electronics",
      "stock": 30,
      "rating": 4.7,
      "image": "https://placehold.co/400x300?text=Keyboard"
    },
    {
      "id": 3,
      "name": "USB-C Hub",
      "price": 39.99,
      "category": "Accessories",
      "stock": 20,
      "rating": 4.3,
      "image": "https://placehold.co/400x300?text=USB-C+Hub"
    }
  ],
  "books": [
    {
      "id": 1,
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 18.99,
      "rating": 4.8
    },
    {
      "id": 2,
      "title": "Deep Work",
      "author": "Cal Newport",
      "price": 16.5,
      "rating": 4.6
    }
  ]
}
```

### `db.json` কীভাবে route তৈরি করে?

JSON Server top-level key দেখে route বানায়। এখানে top-level keys:

```txt
products
books
```

তাই routes হবে:

| Route | কাজ |
|---|---|
| `/products` | সব product দেখাবে |
| `/products/1` | `id = 1` product দেখাবে |
| `/books` | সব book দেখাবে |
| `/books/2` | `id = 2` book দেখাবে |

---

## ৬. `package.json` Configure করুন

`package.json` file-টা এমন রাখুন:

```json
{
  "name": "my-json-api",
  "version": "1.0.0",
  "description": "Fake REST API using JSON Server for Next.js projects",
  "main": "index.js",
  "scripts": {
    "dev": "json-server --watch db.json --host 127.0.0.1 --port 4000",
    "start": "json-server --watch db.json --host 0.0.0.0 --port $PORT"
  },
  "engines": {
    "node": ">=18"
  },
  "dependencies": {
    "json-server": "0.17.4"
  }
}
```

### Scripts explanation

| Script | কোথায় ব্যবহার করবেন | কাজ |
|---|---|---|
| `npm run dev` | local machine | `http://localhost:4000` এ API চালাবে |
| `npm start` | Render deployment | Render দেওয়া `$PORT` ব্যবহার করে server চালাবে |

### `--host ০.০.০.০` কেন দরকার?

Local development-এ server `localhost` এ চললেই হয়। কিন্তু deploy platform-এ বাইরে থেকে request আসবে। তাই server-কে all interfaces-এ listen করতে হয়। এজন্য Render-এর মতো platform-এ `0.0.0.0` ব্যবহার করা safer।

### `$PORT` কেন দরকার?

Render নিজে runtime port provide করে। fixed port, যেমন `4000`, production deploy-এ issue করতে পারে। তাই start script-এ `$PORT` ব্যবহার করা হয়েছে।

> Local test করার সময় `npm start` না চালিয়ে `npm run dev` চালান। কারণ Windows local environment-এ `$PORT` কাজ নাও করতে পারে।

---

## ৭. `public/.gitkeep` তৈরি করুন

```bash
mkdir public
touch public/.gitkeep
```

Windows PowerShell হলে:

```powershell
New-Item -ItemType Directory -Force public
New-Item -ItemType File public/.gitkeep
```

### `public` folder কি mandatory?

Stable `json-server@0.17.4` setup-এ সাধারণত mandatory না। তবে কিছু environment বা future version/static serving issue এড়াতে folder রাখা ভালো practice। Empty folder GitHub track করে না, তাই `.gitkeep` রাখা হয়।

---

# Part ২: Local Testing

## ৮. Local server run করুন

```bash
npm install
npm run dev
```

Terminal-এ এমন কিছু দেখতে পারেন:

```txt
Resources
http://127.0.0.1:4000/products
http://127.0.0.1:4000/books
```

Browser-এ test করুন:

```txt
http://localhost:4000/products
http://localhost:4000/books
http://localhost:4000/products/1
```

যদি JSON data দেখা যায়, local setup successful।

---

## ৯. Useful API Test URLs

| কাজ | URL |
|---|---|
| সব products | `http://localhost:4000/products` |
| single product | `http://localhost:4000/products/1` |
| category filter | `http://localhost:4000/products?category=Electronics` |
| sort by price | `http://localhost:4000/products?_sort=price&_order=asc` |
| search | `http://localhost:4000/products?q=mouse` |
| pagination | `http://localhost:4000/products?_page=1&_limit=2` |

Terminal থেকে test করতে চাইলে:

```bash
curl http://localhost:4000/products
```

---

# Part ৩: GitHub-এ Push করা

## ১০. Git initialize করুন

```bash
git init
git add .
git commit -m "initial: json server api setup"
```

Branch `main` করুন:

```bash
git branch -M main
```

GitHub-এ একটি new repository তৈরি করুন। তারপর:

```bash
git remote add origin https://github.com/your-username/my-json-api.git
git push -u origin main
```

> `your-username` এর জায়গায় আপনার GitHub username বসাবেন।

---

## ১১. Push করার আগে checklist

```txt
my-json-api/
├── db.json
├── package.json
├── package-lock.json
├── .gitignore
└── public/
    └── .gitkeep
```

Push করার আগে নিশ্চিত করুন:

- `node_modules/` push হয়নি
- `db.json` root folder-এ আছে
- `package.json`-এ `start` script আছে
- local এ `npm run dev` কাজ করছে

---

# Part ৪: Render-এ Deploy করা

## ১২. Render service type নির্বাচন করুন

Render dashboard থেকে:

```txt
New -> Web Service
```

**Static Site select করবেন না।** JSON Server একটা running API server, তাই Web Service দরকার।

---

## ১৩. Render Settings

| Setting | Value |
|---|---|
| Service Type | Web Service |
| Runtime | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Root Directory | blank, যদি project repo root-এ থাকে |
| Environment | Node |
| Instance Type | Free/Starter যেটা দরকার |

Optional environment variable:

| Key | Value |
|---|---|
| `NODE_VERSION` | `20` |

> যদি আপনার API project repo-এর ভিতরে subfolder-এ থাকে, তাহলে Root Directory-তে সেই folder name দিতে হবে। যেমন: `server` বা `api`।

---

## ১৪. Deploy করার পর live URL

Deploy complete হলে Render এমন URL দেবে:

```txt
https://your-app-name.onrender.com
```

Live endpoints:

```txt
https://your-app-name.onrender.com/products
https://your-app-name.onrender.com/books
https://your-app-name.onrender.com/products/1
```

Browser-এ open করুন। JSON data দেখা গেলে deploy successful।

---

## ১৫. Render Free Plan Note

Render free web service inactive থাকলে sleep/spin down হতে পারে। তাই অনেক সময় first request slow হবে। এটা error না। প্রথম request-এর পর service wake up হলে পরের request দ্রুত আসবে।

---

## ১৬. Important: Data Persistence Warning

JSON Server file-based mock API। এটা real production database না। Render restart/redeploy হলে `db.json` আবার original file state-এ ফিরে যেতে পারে।

তাই:

- `GET` request practice/demo-এর জন্য perfect
- `POST`, `PUT`, `PATCH`, `DELETE` practice করা যায়
- কিন্তু production data save করার জন্য JSON Server ব্যবহার করা উচিত না

Production app হলে ব্যবহার করুন:

- MongoDB Atlas
- PostgreSQL
- Supabase
- Firebase
- Render Postgres

---

# Part ৫: Next.js থেকে API Fetch

## ১৭. Environment Variable Setup

Next.js project-এর root folder-এ `.env.local` file তৈরি করুন:

```env
NEXT_PUBLIC_API_URL=https://your-app-name.onrender.com
```

### কখন `NEXT_PUBLIC_` ব্যবহার করবেন?

| Situation | Variable type |
|---|---|
| Client Component / browser থেকে fetch | `NEXT_PUBLIC_API_URL` |
| Server Component / server-side only fetch | `API_URL` ব্যবহার করলেও চলবে |
| Secret key/API token | কখনোই `NEXT_PUBLIC_` দেবেন না |

এই API public mock API, তাই `NEXT_PUBLIC_API_URL` ব্যবহার করা acceptable।

> `.env.local` update করলে Next.js dev server restart করুন।

---

## ১৮. App Router Server Component Example

`app/page.jsx`:

```jsx
async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

### Code explanation

| Code | Meaning |
|---|---|
| `fetch(...)` | API থেকে data আনছে |
| `next: { revalidate: 60 }` | ৬০ seconds পর data refresh করতে পারে |
| `if (!res.ok)` | API fail করলে error throw করছে |
| `products.map(...)` | product list UI-তে render করছে |

---

## ১৯. Client Component Example

`app/products/page.jsx`:

```jsx
"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Products</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </article>
      ))}
    </main>
  );
}
```

### Client Component কখন ব্যবহার করবেন?

যদি browser interaction, loading state, filter button, search input, cart button ইত্যাদি থাকে, তখন Client Component useful।

---

## ২০. Dynamic Route Example: Single Product Page

Folder structure:

```txt
app/
└── products/
    └── [id]/
        └── page.jsx
```

`app/products/[id]/page.jsx`:

```jsx
async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <main>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Rating: {product.rating}</p>
    </main>
  );
}
```

Now visit:

```txt
http://localhost:3000/products/1
http://localhost:3000/products/2
```

---

# Part ৬: Troubleshooting

## ২১. Common Errors & Fixes

| Problem | Possible reason | Fix |
|---|---|---|
| Render app crashed | `start` script wrong | `npm start` যেন correct command চালায় |
| No open ports detected | app `$PORT` এ listen করছে না | `--host 0.0.0.0 --port $PORT` ব্যবহার করুন |
| Cannot find `db.json` | file root folder-এ নেই | `db.json` root-এ রাখুন অথবা Root Directory ঠিক করুন |
| Works locally, fails on Render | local port hardcoded | Render start command-এ `$PORT` ব্যবহার করুন |
| First request slow | Render free instance sleeping | কিছুক্ষণ wait করে refresh করুন |
| CORS issue | client-side request blocked/incorrect URL | deployed URL ঠিক কিনা check করুন; stable JSON Server ব্যবহার করুন |
| Next.js env undefined | dev server restart করা হয়নি | `.env.local` update করার পর `npm run dev` restart করুন |
| GitHub push fails | branch/remote issue | `git branch -M main` এবং remote URL check করুন |
| Data save হচ্ছে না | JSON Server persistent DB না | real database ব্যবহার করুন |

---

## ২২. Debug Checklist

যদি API deploy না হয়, এই order-এ check করুন:

1. Local এ `npm run dev` কাজ করছে?
2. `db.json` valid JSON?
3. `package.json` valid JSON?
4. `start` script exactly আছে?
5. GitHub repo-তে latest code push হয়েছে?
6. Render Build Command `npm install`?
7. Render Start Command `npm start`?
8. Render logs-এ কোন error দেখাচ্ছে?
9. App কি `$PORT` ব্যবহার করছে?
10. App কি `0.0.0.0` host-এ bind করছে?

---

## ২৩. `db.json` valid কিনা check করার simple trick

VS Code-এ `db.json` open করলে syntax error থাকলে red underline দেখাবে।

Terminal থেকেও check করতে পারেন:

```bash
node -e "JSON.parse(require('fs').readFileSync('db.json','utf8')); console.log('Valid JSON')"
```

যদি `Valid JSON` print হয়, file ঠিক আছে।

---

# Part ৭: Best Practices

## ২৪. Do and Don't

| Do | Don't |
|---|---|
| local test করে deploy করুন | test না করে direct deploy করবেন না |
| exact version lock করুন | blindly latest beta ব্যবহার করবেন না |
| API URL `.env.local`-এ রাখুন | সব জায়গায় hardcode করবেন না |
| Render logs পড়ুন | শুধু “app crashed” দেখে guess করবেন না |
| JSON Server demo/mock API হিসেবে ব্যবহার করুন | production database হিসেবে ব্যবহার করবেন না |

---

## ২৫. Recommended Final Project Files

```txt
my-json-api/
├── db.json
├── package.json
├── package-lock.json
├── .gitignore
└── public/
    └── .gitkeep
```

### Minimum files needed for deploy

```txt
db.json
package.json
package-lock.json
```

`public/.gitkeep` optional কিন্তু safe। `.gitignore` strongly recommended।

---

## ২৬. Final Checklist Before Submitting Assignment

- [ ] `npm install` successful
- [ ] `npm run dev` successful
- [ ] `http://localhost:4000/products` এ data দেখা যাচ্ছে
- [ ] GitHub repo updated
- [ ] Render Web Service selected
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Live API URL কাজ করছে
- [ ] Next.js `.env.local` এ correct API URL আছে
- [ ] Next.js dev server restart করা হয়েছে
- [ ] UI-তে data render হচ্ছে

---

## ২৭. Short Summary

এই project-এ:

- `db.json` হলো fake database
- JSON Server সেই database থেকে REST API বানায়
- GitHub project code host করে
- Render API live করে
- Next.js সেই live API থেকে data fetch করে UI দেখায়

Final flow:

```txt
Write data in db.json
        ↓
Run JSON Server
        ↓
Push to GitHub
        ↓
Deploy on Render
        ↓
Fetch from Next.js
        ↓
Show data in UI
```

---

## Reference Notes

- JSON Server official package currently shows version 1 beta as latest, so this guide intentionally uses stable `0.17.4` for predictable tutorial behavior.
- Render Web Services should listen on the port provided by the `PORT` environment variable and bind to `0.0.0.0` for external traffic.
- Next.js supports `.env.local`; variables prefixed with `NEXT_PUBLIC_` are available in browser-side code.

