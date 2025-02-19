import { prisma } from "@/lib/db"

export default async function JobApplications({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.id },
    include: { applications: true },
  })

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Applications for {job.title}</h1>
      <div className="grid gap-6">
        {job.applications.map((application) => (
          <div key={application.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{application.name}</h2>
            <p className="text-gray-600 mb-2">{application.email}</p>
            <a
              href={application.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2 block"
            >
              View Resume
            </a>
            <p className="text-gray-700 mt-4">{application.coverLetter}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

