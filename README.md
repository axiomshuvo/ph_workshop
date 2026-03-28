# 🌍 World On The Go

A simple project demonstrating the usage of a Countries API. Provides information about all countries, a specific country by code or name, or by language.

---

## 🌍 [live Demo ](https://ph-workshop.pages.dev/)

## 📚 Table of Contents

- [APIs Used](#-apis-used)
- [Endpoints](#-endpoints)
- [Usage](#-usage)
- [Example](#-example)

---

## 🔗 APIs Used

This project uses a public Countries API to fetch country data.

---

## 📌 Endpoints

### Get all countries

- https://openapi.programming-hero.com/api/all

### Get country by code (example: 116)

- https://openapi.programming-hero.com/api/alpha/116

### Get countries by language (example: English)

- https://openapi.programming-hero.com/api/lang/english

### Get country by name (example: Bangladesh)

- https://openapi.programming-hero.com/api/name/bangladesh

---

## ⚙️ Usage

1. Clone the repository
2. Open the project
3. Use the endpoints to fetch data
4. Display the data in your application

---

## 💡 Example

```js
fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## 📄 License

- This project is open-source and available for learning and educational purposes.
