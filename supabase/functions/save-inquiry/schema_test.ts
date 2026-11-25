import { inquirySchema } from "./schema.ts";

Deno.test("inquiry storage accepts all four submitted contact details", () => {
  const entry = { name: "Test Guest", email: "guest@example.com", phone: "+923001234567", message: "Family stay inquiry" };
  const parsed = inquirySchema.parse(entry);
  if (JSON.stringify(parsed) !== JSON.stringify(entry)) throw new Error("Inquiry details were not preserved");
});

Deno.test("inquiry storage rejects missing or invalid contact details", () => {
  for (const entry of [ {}, { name: "Guest", email: "invalid", phone: "+923001234567" } ]) {
    if (inquirySchema.safeParse(entry).success) throw new Error("Invalid inquiry was accepted");
  }
});