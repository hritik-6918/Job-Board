import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function submitApplication(formData: FormData) {
  "use server"

  const jobId = formData.get("jobId") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const resumeLink = formData.get("resumeLink") as string
  const coverLetter = formData.get("coverLetter") as string

  await prisma.application.create({
    data: {
      name,
      email,
      resumeLink,
      coverLetter,
      jobId,
    },
  })

  revalidatePath("/candidate/jobs")
  redirect("/candidate/jobs")
}

export default async function ApplyJob({ params }: { params: { jobId: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.jobId },
  })

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apply for {job.title}</h1>
      <form action={submitApplication} className="bg-white rounded-lg shadow-md p-6">
        <input type="hidden" name="jobId" value={job.id} />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="resumeLink" className="block text-gray-700 font-bold mb-2">
            Resume Link
          </label>
          <input type="url" id="resumeLink" name="resumeLink" required className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="coverLetter" className="block text-gray-700 font-bold mb-2">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            required
            className="w-full px-3 py-2 border rounded-lg"
            rows={5}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Application
        </button>
      </form>
    </div>
  )
}

