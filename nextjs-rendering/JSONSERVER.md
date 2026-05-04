# 📦 JSON Server — Complete Guide

> একটা JSON ফাইল দিয়ে সম্পূর্ণ Fake REST API — কোনো backend code ছাড়াই।

---

## 📌 Table of Contents

- [JSON Server কী?](#-json-server-কী)
- [কেন ব্যবহার করবে?](#-কেন-ব্যবহার-করবে)
- [Installation](#-installation)
- [db.json তৈরি করো](#-dbjson-তৈরি-করো)
- [Server চালু করো](#-server-চালু-করো)
- [CRUD Operations](#-crud-operations)
- [Advanced Queries](#-advanced-queries)
- [Relationships](#-relationships)
- [Custom Routes](#-custom-routes)
- [package.json Scripts](#-packagejson-scripts)
- [Next.js এ ব্যবহার](#-nextjs-এ-ব্যবহার)
- [Sample db.json (5 Products)](#-sample-dbjson-5-products)
- [Important Notes](#-important-notes)

---

## 🤔 JSON Server কী?

JSON Server হলো একটি **Fake REST API tool** যেটা দিয়ে তুমি মাত্র একটা JSON ফাইল দিয়ে সম্পূর্ণ একটা backend API তৈরি করতে পারো — কোনো server-side code লেখা ছাড়াই।

```
db.json  →  json-server  →  Full REST API ✅
```

---

## 💡 কেন ব্যবহার করবে?

- ✅ Frontend development এর সময় real backend ready না থাকলে
- ✅ Prototype বা demo বানাতে
- ✅ API mock করে UI test করতে
- ✅ শেখার উদ্দেশ্যে CRUD practice করতে
- ✅ Zero configuration — plug and play

---

## 📥 Installation

**Globally install করো (recommended):**

```bash
npm install -g json-server
```

**অথবা project-এ locally:**

```bash
npm install json-server --save-dev
```

**Version চেক করো:**

```bash
json-server --version
```

---

## 🗂️ db.json তৈরি করো

এটাই তোমার **পুরো database**। Project root এ একটা `db.json` ফাইল বানাও:

```json
{
  "users": [
    { "id": 1, "name": "Rahim", "email": "rahim@gmail.com" },
    { "id": 2, "name": "Karim", "email": "karim@gmail.com" }
  ],
  "posts": [
    { "id": 1, "title": "Next.js শেখা", "userId": 1 },
    { "id": 2, "title": "React Hooks", "userId": 2 }
  ],
  "comments": [{ "id": 1, "body": "দারুণ পোস্ট!", "postId": 1 }]
}
```

> প্রতিটা top-level key একটা **resource/endpoint** হয়ে যায়।

---

## 🚀 Server চালু করো

```bash
# Default (port 3000)
json-server --watch db.json

# Custom port
json-server --watch db.json --port 5000

# Custom host + port
json-server --watch db.json --host 0.0.0.0 --port 5000
```

Server চালু হলে এই endpoints automatically ready থাকে:

```
GET    http://localhost:5000/users
GET    http://localhost:5000/users/1
POST   http://localhost:5000/users
PUT    http://localhost:5000/users/1
PATCH  http://localhost:5000/users/1
DELETE http://localhost:5000/users/1

GET    http://localhost:5000/posts
GET    http://localhost:5000/comments
```

---

## 🔄 CRUD Operations

### 🟢 GET — Data আনো

```js
// সব users
const res = await fetch("http://localhost:5000/users");
const users = await res.json();
console.log(users);

// একটি নির্দিষ্ট user (id দিয়ে)
const res = await fetch("http://localhost:5000/users/1");
const user = await res.json();
console.log(user);
```

---

### 🔵 POST — নতুন data যোগ করো

```js
const res = await fetch("http://localhost:5000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Salam",
    email: "salam@gmail.com",
  }),
});

const newUser = await res.json();
console.log(newUser); // id automatically assign হয়ে যাবে
```

---

### 🟡 PUT — পুরো data replace করো

```js
// id: 1 এর পুরো object replace হয়ে যাবে
const res = await fetch("http://localhost:5000/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Rahim Updated",
    email: "newrahim@gmail.com",
  }),
});

const updated = await res.json();
console.log(updated);
```

---

### 🟠 PATCH — শুধু একটা field update করো

```js
// শুধু name পরিবর্তন হবে, বাকি fields ঠিক থাকবে
const res = await fetch("http://localhost:5000/users/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Rahim Mia" }),
});

const patched = await res.json();
console.log(patched);
```

---

### 🔴 DELETE — data মুছে ফেলো

```js
await fetch("http://localhost:5000/users/1", {
  method: "DELETE",
});

console.log("User deleted!");
```

---

## 🔍 Advanced Queries

### Filter করো

```bash
GET /users?name=Rahim
GET /posts?userId=1          # userId যেটা 1, সেই posts
GET /products?category=Electronics
```

### Full-text Search

```bash
GET /users?q=rahim           # সব field এ "rahim" খুঁজবে
GET /products?q=headphone
```

### Sort করো

```bash
GET /users?_sort=name&_order=asc
GET /products?_sort=price&_order=desc
GET /posts?_sort=id&_order=asc
```

### Pagination

```bash
GET /users?_page=1&_limit=5   # প্রথম page, ৫টা করে
GET /users?_page=2&_limit=5   # দ্বিতীয় page
```

### Range

```bash
GET /users?_start=0&_end=3    # index 0 থেকে 2 পর্যন্ত
GET /users?_start=5&_end=10
```

### Operators (Greater than / Less than)

```bash
GET /products?price_gte=1000        # price >= 1000
GET /products?price_lte=5000        # price <= 5000
GET /products?price_gte=1000&price_lte=3000  # range
GET /products?stock_ne=0            # stock যেটা 0 না
```

---

## 🔗 Relationships

`db.json` এ relationship এভাবে কাজ করে — child resource এ parent এর `id` রাখো (যেমন `userId`, `postId`)।

### `_embed` — child data সহ আনো

```bash
GET /posts?_embed=comments   # প্রতিটা post এর সাথে তার comments আসবে
GET /users?_embed=posts      # প্রতিটা user এর সাথে তার posts আসবে
```

### `_expand` — parent data সহ আনো

```bash
GET /posts?_expand=user      # প্রতিটা post এর সাথে তার user আসবে
GET /comments?_expand=post   # প্রতিটা comment এর সাথে তার post আসবে
```

---

## 🛣️ Custom Routes

Project root এ `routes.json` ফাইল বানাও:

```json
{
  "/api/users": "/users",
  "/api/posts": "/posts",
  "/api/products": "/products",
  "/api/v1/*": "/$1"
}
```

Server চালু করো routes সহ:

```bash
json-server --watch db.json --routes routes.json --port 5000
```

এখন `/api/users` call করলে `/users` এর data আসবে।

---

## 📜 package.json Scripts

```json
{
  "scripts": {
    "api": "json-server --watch db.json --port 5000",
    "dev": "next dev",
    "dev:all": "concurrently \"npm run api\" \"npm run dev\""
  }
}
```

**concurrently install করো:**

```bash
npm install concurrently --save-dev
```

**একসাথে চালাও:**

```bash
npm run dev:all   # Next.js + JSON Server একসাথে চলবে
```

---

## ⚡ Next.js এ ব্যবহার

### Server Component (App Router)

```tsx
// app/products/page.tsx
async function ProductsPage() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store", // সবসময় fresh data
  });
  const products = await res.json();

  return (
    <div>
      {products.map((p: any) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>৳ {p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
```

### Client Component (useState + useEffect)

```tsx
"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {products.map((p: any) => (
        <li key={p.id}>
          {p.name} — ৳{p.price}
        </li>
      ))}
    </ul>
  );
}
```

### Server Action দিয়ে POST

```tsx
// app/actions.ts
"use server";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      price: Number(formData.get("price")),
    }),
  });
  revalidatePath("/products");
}
```

---

## 🛍️ Sample db.json (5 Products)

এটা সরাসরি তোমার `db.json` এ paste করো এবং ব্যবহার শুরু করো:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Wireless Noise-Cancelling Headphones",
      "price": 4999,
      "category": "Electronics",
      "stock": 25,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      "description": "Premium wireless headphones with active noise cancellation, 30hr battery life.",
      "brand": "SoundMax"
    },
    {
      "id": 2,
      "name": "Running Sneakers Pro",
      "price": 2499,
      "category": "Footwear",
      "stock": 40,
      "rating": 4.3,
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      "description": "Lightweight and breathable running shoes with superior cushioning.",
      "brand": "SwiftStride"
    },
    {
      "id": 3,
      "name": "Stainless Steel Water Bottle",
      "price": 799,
      "category": "Lifestyle",
      "stock": 100,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      "description": "Double-walled insulated bottle. Cold 24hrs, Hot 12hrs. BPA-free.",
      "brand": "HydroLife"
    },
    {
      "id": 4,
      "name": "Mechanical Gaming Keyboard",
      "price": 3299,
      "category": "Electronics",
      "stock": 15,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      "description": "RGB backlit mechanical keyboard with tactile switches and aluminum body.",
      "brand": "KeyForce"
    },
    {
      "id": 5,
      "name": "Leather Crossbody Bag",
      "price": 1899,
      "category": "Fashion",
      "stock": 30,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
      "description": "Genuine leather crossbody bag with multiple compartments and premium zipper.",
      "brand": "UrbanCarry"
    }
  ]
}
```

**এখন এই queries সরাসরি কাজ করবে:**

```bash
GET /products                                      # সব products
GET /products/1                                    # একটি product
GET /products?category=Electronics                 # filter by category
GET /products?_sort=price&_order=asc               # সস্তা থেকে দামি
GET /products?_sort=rating&_order=desc             # best rated first
GET /products?price_gte=1000&price_lte=3000        # price range
GET /products?q=keyboard                           # search
GET /products?_page=1&_limit=3                     # pagination
```

---

## ⚠️ Important Notes

| বিষয়                | বিস্তারিত                                                              |
| -------------------- | ---------------------------------------------------------------------- |
| **Production**       | JSON Server শুধু **development এর জন্য**, production এ ব্যবহার করবে না |
| **Data persistence** | `db.json` ফাইলে changes save হয়, server restart এ data থাকে           |
| **id**               | POST করলে `id` automatically increment হয়                             |
| **PUT vs PATCH**     | PUT পুরো object replace করে, PATCH শুধু specified fields update করে    |
| **Port conflict**    | Next.js default port 3000, তাই JSON Server এ `--port 5000` ব্যবহার করো |

---

## 📋 Quick Reference

| কাজ           | Command / URL                             |
| ------------- | ----------------------------------------- |
| Server চালু   | `json-server --watch db.json --port 5000` |
| সব data       | `GET /resource`                           |
| একটা data     | `GET /resource/:id`                       |
| তৈরি করা      | `POST /resource`                          |
| পুরো update   | `PUT /resource/:id`                       |
| আংশিক update  | `PATCH /resource/:id`                     |
| মুছে ফেলা     | `DELETE /resource/:id`                    |
| Filter        | `?field=value`                            |
| Search        | `?q=keyword`                              |
| Sort          | `?_sort=field&_order=asc`                 |
| Pagination    | `?_page=1&_limit=10`                      |
| Child embed   | `?_embed=comments`                        |
| Parent expand | `?_expand=user`                           |

---

> 💬 **Pro Tip:** `db.json` একটা real file, তাই তুমি সরাসরি edit করেও data change করতে পারো — server restart লাগবে না কারণ `--watch` flag দেওয়া আছে।
