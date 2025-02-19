import Link from "next/link";
import { prisma } from "@/lib/db";
import Filters from "./Filters"; // Import the Client Component
import type { Job } from "@prisma/client"; // Import Job type from Prisma

export default async function JobListings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined;
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined;
  const location = typeof searchParams.location === "string" ? searchParams.location : undefined;

  const jobs: Job[] = await prisma.job.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
        category ? { category: { equals: category, mode: "insensitive" } } : {},
        location ? { location: { contains: location, mode: "insensitive" } } : {},
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  const categories = await prisma.job.groupBy({
    by: ["category"],
    _count: true,
  });

  const locations = await prisma.job.groupBy({
    by: ["location"],
    _count: true,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>

      {/* ✅ Use the Client Component Here */}
      <Filters categories={categories} locations={locations} />

      <div className="grid gap-6">
        {jobs.map((job: Job) => (
          <Link
            href={`/candidate/jobs/${job.id}`}
            key={job.id}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500">
              {job.location} • {job.salary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}


