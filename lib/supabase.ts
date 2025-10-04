import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Profile = {
  id: string
  email: string
  full_name: string
  company_name?: string
  subscription_status: 'trial' | 'active' | 'cancelled'
  created_at: string
}

export type Conversation = {
  id: string
  user_id: string
  category: string
  situation: string
  generated_script: {
    opening: string
    main: string
    action: string
    coaching: {
      tone: string[]
      delivery: string[]
      followup: string[]
    }
  }
  created_at: string
}

export type LearningProgress = {
  id: string
  user_id: string
  course_id: string
  progress_percentage: number
  updated_at: string
}