import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Mini Job Board</h1>
      <div className="flex gap-4">
        <Link href="/candidate/jobs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          For Candidates
        </Link>
        <Link href="/company/jobs" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          For Companies
        </Link>
      </div>
    </main>
  )
}

