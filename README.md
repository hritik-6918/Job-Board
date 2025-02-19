# Screenshots

![screencapture-job-board-peach-vercel-app-2025-02-19-15_24_35](https://github.com/user-attachments/assets/93f18537-7eb2-4a60-a7aa-db28950e8320)

# Mini Job Board

A simple job board application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Neon DB (PostgreSQL)**.

## Features

- **Candidate Flow**:
  - View job listings with filtering and search
  - View job details
  - Apply for jobs
- **Company Flow**:
  - Post new job listings
  - Edit and delete job listings
  - View applications for each job
- Responsive design using Tailwind CSS
- Server Actions for efficient form handling
- PostgreSQL database with Prisma ORM

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/job-board.git
cd job-board
```

2. Install dependencies:

```bash
npm install or yarn install
```

3. Set up environment variables:

  Create a `.env.local` file in the root directory and add the following:

```bash
DATABASE_URL=your_neon_db_connection_string
```
Replace `your_neon_db_connection_string` with your actual Neon DB connection string.

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account if you haven't already.
3. Create a new project on Vercel and link it to your GitHub repository.
4. In the Vercel project settings, add the `DATABASE_URL` environment variable with your Neon DB connection string.
5. Deploy the project

## Built With Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- PostgreSQL / MySQL (Database)
