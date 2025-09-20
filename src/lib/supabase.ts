import { createClient } from '@supabase/supabase-js'

// Check if Supabase is properly configured
const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url' &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your_supabase_anon_key'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create clients if Supabase is properly configured
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// For server-side operations that need elevated permissions
export const supabaseAdmin = isSupabaseConfigured
  ? createClient(
      supabaseUrl,
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : null
