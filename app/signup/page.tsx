'use client'

import SignupFormClient from "@/components/auth/sign-up-form-client"
import Image from "next/image"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f3e6] px-4">
      {/* Logo and Title */}
      <div className="flex flex-col items-center space-y-2 mb-8">
      </div>

      {/* Form */}
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-md">
        <SignupFormClient />
      </div>

      {/* Footer link */}
      <p className="mt-6 text-sm text-gray-700">
      </p>
    </div>
  )
}
