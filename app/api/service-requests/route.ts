import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // Get service requests for the current user
  const { data, error } = await supabase
    .from('service_requests')
    .select('*')
    .eq('user_id', session.user.id)
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
  
  // Get request body
  const body = await request.json()
  const { request_type, description, location } = body
  
  // Validate required fields
  if (!request_type || !description) {
    return NextResponse.json({ error: 'Request type and description are required' }, { status: 400 })
  }
  
  // Insert service request
  const { data, error } = await supabase
    .from('service_requests')
    .insert({
      user_id: session.user.id,
      request_type,
      description,
      location,
      status: 'pending'
    })
    .select()
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data })
}