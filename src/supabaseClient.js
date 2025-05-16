import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oamhfnygnoqzqggcpzro.supabase.co'; // Replace this
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hbWhmbnlnbm9xenFnZ2NwenJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDE0OTYsImV4cCI6MjA2Mjk3NzQ5Nn0.ZN0Geveu79h-tMDOH92sJMbJvrwfSL_i-fgJ5KU-acg'; // Replace this too

export const supabase = createClient(supabaseUrl, supabaseKey);
