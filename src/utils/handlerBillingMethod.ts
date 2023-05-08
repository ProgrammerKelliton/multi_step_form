// Types
import { BillingMethod } from "@/types/plan.types";

export default function handlerBillingMethod({
  method,
}: BillingMethod): BillingMethod {
  if (method === "monthy") return { method: "yearly" };
  return { method: "monthy" };
}
