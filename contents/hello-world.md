---
title: How I Built Pet-Store
description: How I built the AI-driven pet store application
excerpt: In this post, I talk about the AI-powered Pet-Store app we built, the technologies we used, and the experiences we had while developing it.
datetime: "2024-03-20"
# slug: how-i-built-pet-store
featured: true
category: How Do I
tags:
  - TypeScript
  - NextJS
  - Zustand
  - Prisma
  - PostgreSQL
  - TailwindCSS
  - AI
  - Pet Store
  - JWT
author: Vitalik Stefanisin
coverImage: /petvally.png
coverImageAlt: Screenshot of the Pet Store website
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: /images/pet-store-preview.png
ogImageAlt: Pet Store
type: article
language: "English"
---

---

In this post, I will share how we built an AI-driven pet store platform that connects pet owners with products, services, and veterinarians.

## Tech Stack

This platform is powered by a modern full-stack environment built with TypeScript and NextJS. We use TailwindCSS for styling, Zustand for lightweight global state management, and Prisma + PostgreSQL via NeonDB for the backend database layer. Authentication is handled using JWT. File and image assets are managed via Cloudinary. For animations and visuals, we use GSAP and LottieFiles.

The system also integrates AI features to enhance product recommendations, search filtering, and veterinary service suggestions based on pet profiles.

> All environment variables and Prisma schema configurations are required before running locally.

## Features

Some of the core features include:

- AI-Powered Product & Vet Recommendations 🤖
- Full Pet Catalog & Product Filtering 🐶🐱
- Secure Authentication (JWT-based) 🔐
- Responsive UI and Tailwind Design 🎨
- Image Uploads via Cloudinary ☁️
- Pet Owner and Vet User Roles 🧑‍⚕️
- Animations using GSAP and Lottie ✨
- Realtime Filtering and Zustand State 🧠
- PostgreSQL Database via NeonDB 🐘
- Accessible Interface & SEO Optimization 🌍

## Team

- @Rafi
- @Wasi
- @Montasir
- @Mahi

## Getting Started

1. Clone the repo and run:

```bash
npm install
```

2. Create a `.env` file in the root with:

```bash
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

3. Push the database and seed it:

```bash
npx prisma db push
npx prisma generate
npx prisma db seed
```

4. Start development server:

```bash
npm run dev
```

## Conclusion

This platform brings together a smart recommendation engine, a full product catalog, and a veterinary connection service — all designed for the modern pet owner. More enhancements, including AI-based chat, live vet Q&A, and scheduling, are on the roadmap.
