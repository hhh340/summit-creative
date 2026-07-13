import "server-only";
import { Resend } from "resend";
import { isResendConfigured } from "@/lib/env";

export function getResendClient() {
  if (!isResendConfigured) return null;
  return new Resend(process.env.RESEND_API_KEY!);
}
