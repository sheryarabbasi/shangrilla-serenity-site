import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { inquirySchema } from "./schema.ts";

const reply = (body: object, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, "Content-Type": "application/json" },
});

// Public write-only contact intake. No inquiry read/update/delete API is exposed.
Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return reply({ error: "Method not allowed" }, 405);
  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 8000) return reply({ error: "Inquiry is too large" }, 413);
    input = JSON.parse(body);
  } catch {
    return reply({ error: "Please submit a valid inquiry" }, 400);
  }
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) return reply({ error: "Please check your name, email, phone and message" }, 400);

  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return reply({ error: "Inquiry storage is unavailable" }, 503);
  try {
    const database = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await database.from("contact_submissions").insert({
      ...parsed.data,
      message: parsed.data.message ?? "",
    });
    if (error) return reply({ error: "Your inquiry could not be saved. Please try again." }, 500);
    return reply({ success: true });
  } catch {
    return reply({ error: "Inquiry storage is unavailable" }, 503);
  }
});