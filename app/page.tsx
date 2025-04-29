"use client"

import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

// No need to import getUser() if you're not using it here!

export default function Home() {
  // Redirect immediately to login page
  redirect("/login")

  // In case you ever want to *show* the login page directly, comment out the redirect above
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f3e6]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="mr-3">
              <Image src="/logo.svg" alt="Barangay Assistant Logo" width={60} height={60} priority />
            </div>
            <div>
              <h1 className="text-[#0a3a67] text-3xl font-bold leading-none">Barangay</h1>
              <h1 className="text-[#0a3a67] text-3xl font-bold leading-none">Assistant</h1>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#0a3a67] mb-8">Log In</h2>

        {/* Login Form */}
        <form className="space-y-4" action="/api/auth/login" method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a3a67]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a3a67]"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#1e5b94] text-white font-semibold rounded hover:bg-[#0a3a67] transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#0a3a67] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
