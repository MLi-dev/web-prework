import { createClient } from "@supabase/supabase-js";

const URL = "https://hlrnfpyfjbdyplqxiepa.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhscm5mcHlmamJkeXBscXhpZXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3ODc3MjMsImV4cCI6MjAwNDM2MzcyM30.uHGTEQNFXWIzdswui3MA6wkKFO6s1SITEKrz7pwWrBY";
export const supabase = createClient(URL, API_KEY);
