<!-- ---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2025-05-16T13:00:00Z
tags:
  - DeFi
  - AI
  - IOTA
  - EVM
  - React
  - TypeScript
  - Vite
author: Sat Naing
type: article
coverImage: https://res.cloudinary.com/noezectz/image/upload/v1654754125/SatNaing/terminal-screenshot_gu3kkc.png
coverImageAlt: DeFintellect Dashboard Screenshot
title: DeFintellect - AI-Powered DeFi Portfolio Navigator for IOTA EVM
description: An AI-driven DeFi portfolio navigator optimized for the IOTA EVM network, offering intelligent insights, on-chain analysis, and real-time market data.
excerpt: Advanced portfolio optimization and on-chain analytics powered by AI for IOTA EVM DeFi.
slug: de-fintellect-ai-powered-defi-portfolio-navigator-for-iota-evm
featured: true
category: DeFi
---

Advanced portfolio optimization and on-chain analytics powered by AI for IOTA EVM DeFi.

## Overview

DeFintellect is a next-generation portfolio navigator for the IOTA EVM network, leveraging artificial intelligence to deliver personalized investment insights. Users gain access to real-time on-chain analytics, whale monitoring, and AI-driven allocation suggestions in one seamless interface.

## Key Features

- **AI-Powered Portfolio Optimization**: Dynamic allocation recommendations based on market conditions, risk profile, and historical performance.
- **Natural Language Interface**: Conversational AI for querying portfolio metrics and market analysis.
- **On-Chain Analysis**: Track large transactions and protocol metrics via IOTA Explorer data.
- **Market Intelligence**: In-depth trend and token fundamental analysis with CoinGecko integration.
- **Yield Comparison**: Evaluate DeFi protocol rewards to optimize returns.
- **Performance Tracking**: Custom chart visualizations for portfolio performance over time.
- **Token Management**: Unified dashboard to manage all IOTA EVM tokens.

## Tech Stack

- **Frontend**: React (TypeScript)
- **UI**: Tailwind CSS + shadcn/ui
- **State Management**: React Query
- **Build Tool**: Vite
- **AI API**: Google Gemini 2.5 Pro
- **Data APIs**: CoinGecko, IOTA Explorer

## Getting Started

```bash
git clone https://github.com/johnnyduo/AToIoTA.git
cd atoiota
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

Create a `.env` file in the project root with:

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_COINGECKO_API_URL=https://api.coingecko.com/api/v3
VITE_CONTRACT_ADDRESS=0xYourContractAddress
```

## Deployment

```bash
npm run build     # build for production
npm run preview   # preview production build
```

Smart contract for portfolio allocation is deployed on the IOTA EVM testnet (address in `.env`). Verify on IOTA Testnet Explorer.

## Usage Guidelines

- AI insights are educational and not financial advice.
- Always verify data through official sources.
- No user-sensitive data is stored.

## Demo & Screenshots

**Live Demo**: [https://de-fintellect.vercel.app/](https://de-fintellect.vercel.app/)

## Team

Created for IOTA Moveathon 2025 (DeFAI track) by JohnnyDuo and contributors.

## Roadmap

### Q2 2025

- MVP launch with AI integration and testnet deployment

### Q3 2025

- ElizaOS plugin, advanced whale alerts

### Q4 2025

- Mainnet launch, multi-chain support, institutional features

### 2026

- DAO governance, global expansion, TradFi integrations

## Acknowledgments

- IOTA Foundation
- Google Gemini API
- Open Source Community -->
