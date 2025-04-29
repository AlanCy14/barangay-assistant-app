export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          password_hash: string
          address: string | null
          barangay: string | null
          phone_number: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          password_hash: string
          address?: string | null
          barangay?: string | null
          phone_number?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          password_hash?: string
          address?: string | null
          barangay?: string | null
          phone_number?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          profile_picture: string | null
          date_of_birth: string | null
          gender: string | null
          occupation: string | null
          emergency_contact: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          profile_picture?: string | null
          date_of_birth?: string | null
          gender?: string | null
          occupation?: string | null
          emergency_contact?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          profile_picture?: string | null
          date_of_birth?: string | null
          gender?: string | null
          occupation?: string | null
          emergency_contact?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      service_requests: {
        Row: {
          id: string
          user_id: string | null
          request_type: string
          description: string
          status: string
          location: string | null
          attachment_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          request_type: string
          description: string
          status?: string
          location?: string | null
          attachment_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          request_type?: string
          description?: string
          status?: string
          location?: string | null
          attachment_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      announcements: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string | null
          is_pinned: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id?: string | null
          is_pinned?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author_id?: string | null
          is_pinned?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
