<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = "https://hvaagvdfxgkvdviitxjk.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2YWFndmRmeGdrdmR2aWl0eGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NzUxNTMsImV4cCI6MjA4NDI1MTE1M30.Hizaw-89npipzq2phITfXGY2JLjTnSVdex-lU9MENxE";

  window.supabase = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
</script>
