# Demo Video

https://github.com/user-attachments/assets/d9fe67de-aa5e-4ba5-b1c1-0bdd135e7383

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

## Development Approach
### Tech Stack Choices
We chose **Next.js** for its flexibility in handling both server-side rendering (SSR) and static site generation (SSG), enhancing performance and SEO. **TypeScript** was integrated to ensure type safety and maintainability. **TailwindCSS** was used for rapid UI development with minimal custom styling. **Prisma** was selected as the ORM for its simplicity in database management and migrations.

### Backend Architecture
The backend is built using **Prisma ORM** to manage the database schema and interactions. We used **PostgreSQL** as the primary database due to its robustness and scalability. API routes in Next.js handle CRUD operations efficiently, ensuring a smooth user experience.

### Frontend Implementation
The frontend is structured using Next.js's App Router, utilizing a **component-based architecture** for reusability and maintainability. The job listings, candidate applications, and company job management features are built using React components with TailwindCSS for styling.

### Challenges Faced & Solutions
1. **Dynamic Routing Issues**: Managing dynamic paths for job details and applications was complex. We solved this by leveraging Next.js's file-based routing and dynamic segments.
2. **State Management**: Handling state across multiple components became a challenge. We used **React Context API** to share state efficiently between pages.
3. **Database Migrations**: Keeping schema changes in sync across different environments was difficult. Prisma’s migration tools helped in version-controlling and applying schema updates seamlessly.
4. **Performance Optimization**: Large job listings caused slow rendering. We implemented **pagination and server-side fetching** to improve performance.

## Built With Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- PostgreSQL / MySQL (Database)
