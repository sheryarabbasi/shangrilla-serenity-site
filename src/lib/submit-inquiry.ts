import { supabase } from "@/integrations/supabase/client";

export type Inquiry = { name: string; email: string; phone: string; message?: string };

export async function submitInquiry(inquiry: Inquiry, request: typeof fetch = fetch) {
  const { data, error } = await supabase.functions.invoke("save-inquiry", { body: inquiry });
  if (error || !data?.success) throw new Error("Your inquiry could not be saved.");

  // Preserve the activated, browser-origin FormSubmit relay after durable storage.
  try {
    const response = await request("https://formsubmit.co/ajax/sheryarabbasi7@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        ...inquiry,
        _subject: `New inquiry from ${inquiry.name} - Shangrilla House`,
        _replyto: inquiry.email,
        _template: "table",
        _captcha: "false",
      }),
    });
    const result = await response.json();
    return { saved: true, emailed: response.ok && (result.success === true || result.success === "true") };
  } catch {
    // Email failure must not lose a saved lead or prompt a duplicate submission.
    return { saved: true, emailed: false };
  }
}