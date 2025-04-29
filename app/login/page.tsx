'use client'

import LoginFormClient from "@/components/auth/login-form-client"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f3e6] px-4">
      {/* Logo and Title */}
      <div className="flex flex-col items-center space-y-1 mb-6">
      </div>

      {/* Form */}
      <div className="w-full max-w-xs bg-white p-5 rounded-lg shadow-md">
        <LoginFormClient />
      </div>

      {/* Footer link */}
      <p className="mt-4 text-sm text-gray-700">
      </p>
    </div>
  )
}