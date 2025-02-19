import { prisma } from "@/lib/db"
import Link from "next/link"

export default async function JobDetails({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.id },
  })

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-xl mb-4">{job.company}</p>
        <p className="text-gray-600 mb-4">
          {job.location} • {job.salary}
        </p>
        <p className="text-gray-800 mb-6">{job.description}</p>
        <Link
          href={`/candidate/apply/${job.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}

