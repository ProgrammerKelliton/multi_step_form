// Types
import { BillingMethod } from "@/types/components/molecules/plan.types";

export default function handlerBillingMethod({
  method,
}: BillingMethod): BillingMethod {
  if (method === "monthy") return { method: "yearly" };
  return { method: "monthy" };
}
