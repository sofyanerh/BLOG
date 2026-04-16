import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

let supabase
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn(
    'Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in a .env file.'
  )
  supabase = {
    from: () => ({ data: [], error: null }),
  }
} else {
  supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
}

export { supabase }
