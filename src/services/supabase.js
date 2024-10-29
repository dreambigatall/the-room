import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVid3FzeW5xdGZlYXF2ZHFvaXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MjM5MTksImV4cCI6MjA0NTE5OTkxOX0.1_6K11oXeYmnxS6L5QtuqNV27ZA6WkF7D5u8wknPjUs'
export const supabaseUrl = 'https://ubwqsynqtfeaqvdqoixu.supabase.co'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;