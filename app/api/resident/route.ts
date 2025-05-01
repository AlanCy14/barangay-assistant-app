// src/app/api/resident/route.ts

import { NextResponse } from 'next/server';

// Mock data for now (will be replaced by a database later)
const residentData = {
  name: 'Juan Dela Cruz',
  address: '123 Barangay St, Cebu City',
  contact: '09123456789',
  email: 'juan@mail.com',
  history: ['Request 1', 'Request 2', 'Request 3'],
};

export async function GET() {
  // Return resident data as JSON
  return NextResponse.json(residentData);
}
