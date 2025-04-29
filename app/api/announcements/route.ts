import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  
  // Get announcements (no auth required for viewing)
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false })
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data })
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // Check if user is admin or staff
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single()
  
  if (userError || !userData) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  
  if (userData.role !== 'admin' && userData.role !== 'staff') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
  
  // Get request body
  const body = await request.json()
  const { title, content, is_pinned } = body
  
  // Validate required fields
  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
  }
  
  // Insert announcement
  const { data, error } = await supabase
    .from('announcements')
    .insert({
      title,
      content,
      author_id: session.user.id,
      is_pinned: is_pinned || false
    })
    .select()
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data })
}