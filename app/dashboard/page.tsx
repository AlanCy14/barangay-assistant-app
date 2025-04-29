import { getUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f3e6]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm text-center">
        <h1 className="text-4xl font-bold text-[#0a3a67] mb-4">Welcome, {user.email}</h1>
        <p className="text-gray-700">You are now logged in.</p>
      </div>
    </div>
  )
}

