# 🌐 MerStats Web | Live VEX Analytics

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
</div>

<br/>

## 📱 The Vision
**MerStats Web** is the mobile-first companion to the MerStats ecosystem. While the Java desktop client is built for deep, big-screen data analysis, this web application is designed specifically for the chaos of competition day. 

Built for speed and accessibility, MerStats Web allows teams, coaches, and scouters to pull up live TrueRank leaderboards, calculate real-time schedule luck, and view opponent OPR matrices directly from their phones while standing in the tournament pits.

---

## 🏗️ Architecture

This repository contains the frontend UI, which is completely decoupled from the Python ETL pipeline. 

* **Framework:** [Next.js](https://nextjs.org/) 
* **Styling:** Tailwind CSS + UI Components
* **Database Connection:** Supabase (PostgreSQL)
* **Hosting:** Vercel (Continuous Deployment)

The data displayed here is asynchronously populated by the `MerStats-VEX` backend Python workers, which constantly scrape the RobotEvents API and push mathematically smoothed Elo ratings into the shared Supabase Data Lake.

---

## 🚀 Local Development Setup

To run the web app on your local machine, follow these steps:

### Prerequisites
* **Node.js** (v18 or higher)
* **npm** or **yarn**
