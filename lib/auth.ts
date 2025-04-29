"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getSupabaseServer } from "@/lib/supabase/server"
import type { Database } from "@/lib/database.types"

// Helper to create a Supabase client easily
function createClient() {
  return createServerActionClient<Database>({ cookies })
}

// Sign up a new user
export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const fullName = formData.get("name") as string

  const supabase = createClient()

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  })

  if (authError) return { error: authError.message }

  if (authData.user) {
    const { error: userError } = await supabase.from("users").insert({
      id: authData.user.id,
      email,
      full_name: fullName,
      password_hash: "managed-by-supabase-auth", // Never store real passwords
      role: "resident",
    })

    if (userError) return { error: userError.message }
  }

  return { success: true }
}

// Sign in an existing user
export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: error.message }

  return { success: true }
}

// Sign out the user
export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect("/login")
}

// Get the current logged-in user
export async function getUser() {
  const supabase = await getSupabaseServer()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session?.user || null
}
