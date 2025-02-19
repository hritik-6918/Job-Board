import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function updateJob(formData: FormData) {
  "use server"

  const jobId = formData.get("jobId") as string
  const title = formData.get("title") as string
  const company = formData.get("company") as string
  const location = formData.get("location") as string
  const salary = formData.get("salary") as string
  const description = formData.get("description") as string
  const category = formData.get("category") as string

  await prisma.job.update({
    where: { id: jobId },
    data: {
      title,
      company,
      location,
      salary,
      description,
      category,
    },
  })

  revalidatePath("/company/jobs")
  redirect("/company/jobs")
}

export default async function EditJob({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.id },
  })

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Job</h1>
      <form action={updateJob} className="bg-white rounded-lg shadow-md p-6">
        <input type="hidden" name="jobId" value={job.id} />
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border rounded-lg"
            defaultValue={job.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-3 py-2 border rounded-lg"
            defaultValue={job.company}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-3 py-2 border rounded-lg"
            defaultValue={job.location}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
            Salary Range
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            required
            className="w-full px-3 py-2 border rounded-lg"
            defaultValue={job.salary}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            className="w-full px-3 py-2 border rounded-lg"
            defaultValue={job.category}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full px-3 py-2 border rounded-lg"
            rows={5}
            defaultValue={job.description}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update Job
        </button>
      </form>
    </div>
  )
}

