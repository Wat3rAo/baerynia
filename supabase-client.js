// === Supabase Configuration ===
const SUPABASE_URL = 'https://bvaugprradqvfmznrxpl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2YXVncHJyYWRxdmZtem5yeHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MzQ2NDAsImV4cCI6MjEwMDExMDY0MH0.4-ufPwqQW7viU1fCjxVY1kAVyoxBHqzywymkKomLtkw';

window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
