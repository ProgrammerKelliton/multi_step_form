import { PlanType } from "@/types/plan.types";
import content from "../content/plansValues.json";

export default function getPricesPlans({ plan }: PlanType) {
  switch (plan) {
    case "Arcade":
      return content.Arcade;
    case "Advanced":
      return content.Advanced;
    case "Pro":
      return content.Pro;
  }
}
