
# Lab 9 – Single Page Application (SPA) with React

This project is a React-based Single Page Application (SPA) built with **Vite + React Router v6 + TypeScript**.  
It demonstrates the usage of client-side routing, dynamic parameters, and multiple views.

---

## 🔧 Tech Stack

- Vite (React + TypeScript)
- React Router v6
- Node.js (local development)

---

## 📂 Project Structure

```

Lab9/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Profile.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Run the development server

```bash
npm run dev
```

The app will run at:

> 📍 [http://localhost:5173](http://localhost:5173)

---

## 📄 Routes

| Path             | Description                  |
| ---------------- | ---------------------------- |
| `/`              | Home page                    |
| `/about`         | About page                   |
| `/profile`       | Static profile page          |
| `/profile/:name` | Dynamic profile for username |
| `*`              | Fallback: NotFound page      |

Example:
`http://localhost:5173/profile/echo` → shows dynamic profile for "echo"

---

## ✅ Features Implemented

* Client-side routing with `BrowserRouter`
* Dynamic route parameters (`/profile/:name`)
* 404 fallback page
* Navigation links using `<a>` and URL params

---

## 📅 Author

* Echo Cheung
* Date: 2025-05-16

```

```
