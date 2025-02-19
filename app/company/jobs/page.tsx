import Link from "next/link"
import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

async function deleteJob(formData: FormData) {
  "use server"

  const jobId = formData.get("jobId") as string
  await prisma.job.delete({ where: { id: jobId } })
  revalidatePath("/company/jobs")
}

export default async function CompanyJobDashboard() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    include: { applications: true },
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Company Job Dashboard</h1>
      <Link
        href="/company/jobs/new"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-6 inline-block"
      >
        Post a New Job
      </Link>
      <div className="grid gap-6 mt-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500 mb-4">
              {job.location} • {job.salary}
            </p>
            <p className="text-gray-700 mb-4">Applications: {job.applications.length}</p>
            <div className="flex gap-2">
              <Link
                href={`/company/jobs/${job.id}/applications`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Applications
              </Link>
              <Link
                href={`/company/jobs/${job.id}/edit`}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </Link>
              <form action={deleteJob}>
                <input type="hidden" name="jobId" value={job.id} />
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

