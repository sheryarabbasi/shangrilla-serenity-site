import { describe, expect, mock, test } from "bun:test";

const invoke = mock(async () => ({ data: { success: true }, error: null as unknown }));
mock.module("../src/integrations/supabase/client", () => ({ supabase: { functions: { invoke } } }));
const { submitInquiry } = await import("../src/lib/submit-inquiry");
const inquiry = { name: "Test Guest", email: "guest@example.com", phone: "+923001234567", message: "Family inquiry" };

describe("inquiry storage and notification", () => {
  test("saves every detail before forwarding to the owner's email", async () => {
    invoke.mockResolvedValue({ data: { success: true }, error: null });
    const relay = mock(async (url: string | URL | Request, options?: RequestInit) => {
      expect(invoke).toHaveBeenLastCalledWith("save-inquiry", { body: inquiry });
      expect(String(url)).toBe("https://formsubmit.co/ajax/sheryarabbasi7@gmail.com");
      expect(JSON.parse(String(options?.body))).toMatchObject(inquiry);
      return Response.json({ success: "true" });
    });
    expect(await submitInquiry(inquiry, relay as typeof fetch)).toEqual({ saved: true, emailed: true });
  });

  test("keeps the saved inquiry when the email relay fails", async () => {
    invoke.mockResolvedValue({ data: { success: true }, error: null });
    const relay = mock(async () => { throw new Error("Email unavailable"); });
    expect(await submitInquiry(inquiry, relay as unknown as typeof fetch)).toEqual({ saved: true, emailed: false });
  });

  test("does not forward or report success when storage fails", async () => {
    invoke.mockResolvedValue({ data: { success: false }, error: new Error("Storage unavailable") });
    const relay = mock(async () => Response.json({ success: true }));
    await expect(submitInquiry(inquiry, relay as unknown as typeof fetch)).rejects.toThrow("could not be saved");
    expect(relay).not.toHaveBeenCalled();
  });
});