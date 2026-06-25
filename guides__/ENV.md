# 🌫️ ENV File Guide

> সহজ ভাষায় `.env` ফাইল শেখা — Beginner Friendly বাংলা গাইড

---

<div align="center">

![ENV](https://img.shields.io/badge/ENV-Configuration-9CA3AF?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-Important-6B7280?style=for-the-badge)
![Developer](https://img.shields.io/badge/Developer-Friendly-D1D5DB?style=for-the-badge)

</div>

---

# 📌 ENV ফাইল কী?

`.env` ফাইল হলো এমন একটি configuration file যেখানে application এর গুরুত্বপূর্ণ setting এবং secret তথ্য রাখা হয়।

## 🔐 এতে সাধারণত রাখা হয়:

- API Key
- Database Password
- Secret Token
- App URL
- Port Number
- Firebase Config
- Blockchain RPC URL

---

# 🧩 Basic Structure

```env
APP_NAME=MyApp
PORT=3000
API_KEY=abc123xyz
DB_PASSWORD=myPassword
```

## 📖 এখানে:

| অংশ        | কাজ           |
| ---------- | ------------- |
| `APP_NAME` | Variable Name |
| `=`        | Assignment    |
| `MyApp`    | Value         |

---

# ✍️ Variable লেখার নিয়ম

## ✅ Correct Style

```env
SITE_NAME=WpTale
NODE_ENV=development
```

## ❌ Avoid

```env
site name=my app
```

---

# 🧠 Best Practice

✅ Uppercase ব্যবহার করো
✅ Space ব্যবহার করো না
✅ `_` ব্যবহার করো
✅ Clean naming রাখো

---

# 💬 Comment কীভাবে লিখবে

Comment লিখতে `#` ব্যবহার করা হয়।

```env
# Database Config
DB_HOST=localhost
DB_PORT=5432
```

> Comment run হয় না। শুধু documentation হিসেবে কাজ করে।

---

# 🔐 কেন `.env` ব্যবহার করা হয়?

| সুবিধা             | ব্যাখ্যা                    |
| ------------------ | --------------------------- |
| Security           | Secret key hide রাখা যায়    |
| Clean Code         | Hardcoded value কমে         |
| Team Collaboration | আলাদা config manage করা যায় |
| Deployment         | Production config সহজ হয়    |

---

# 🌍 Different Environment Example

## 🛠️ Development

```env
NODE_ENV=development
API_URL=http://localhost:3000
```

## 🚀 Production

```env
NODE_ENV=production
API_URL=https://api.example.com
```

---

# ⚡ Node.js এ ENV ব্যবহার

## 1️⃣ Package Install

```bash
npm install dotenv
```

## 2️⃣ Import করো

```javascript
require("dotenv").config();
```

## 3️⃣ Access করো

```javascript
console.log(process.env.API_KEY);
```

---

# ⚠️ গুরুত্বপূর্ণ Security Rule

## 🚫 কখনো `.env` GitHub এ Push করবে না

`.gitignore` ফাইলে যোগ করো:

```gitignore
.env
```

---

# ✅ Full Example

```env
# App Config
APP_NAME=MyAwesomeApp
PORT=3000

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=secret123

# API
API_KEY=myapikey

# Mode
NODE_ENV=development
```

---

# 🚀 Extra Tips

## 📝 Quotes ব্যবহার করা যায়

```env
APP_NAME="My Awesome App"
```

## 🔘 Boolean Value

```env
DEBUG=true
```

## 🔢 Number Value

```env
PORT=5000
```

---

# 🧠 Best Practice Summary

```md
✅ Secret data .env এ রাখো
✅ .env GitHub এ push করো না
✅ Uppercase naming ব্যবহার করো
✅ Comment লিখো
✅ Different environment আলাদা রাখো
```

---

# 🎯 কোথায় বেশি ব্যবহার হয়?

<div align="center">

| Frontend         | Backend    | Cloud    |
| ---------------- | ---------- | -------- |
| React            | Node.js    | Docker   |
| Next.js          | Laravel    | Firebase |
| Shopify Apps     | Django     | Vercel   |
| Blockchain dApps | Express.js | AWS      |

</div>

---

# 📘 Small Workflow Example

## `.env`

```env
API_KEY=123456
```

## `app.js`

```javascript
console.log(process.env.API_KEY);
```

## Output

```bash
123456
```

---

# 🌟 শেষ কথা

`.env` ফাইল modern development এর খুব গুরুত্বপূর্ণ অংশ।

এটি:

- project secure রাখে
- configuration manageable করে
- clean architecture maintain করতে সাহায্য করে
- frontend + backend workflow সহজ করে

বিশেষ করে:

- React
- Next.js
- Blockchain
- Cloud
- DevOps
- API Development

— এসব জায়গায় `.env` প্রায় everywhere ব্যবহার হয়।

---

<div align="center">

## 💻 Happy Coding 🚀

</div>
