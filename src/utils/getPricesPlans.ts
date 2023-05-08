import { PlanType } from "@/types/plan.types";
import { Advanced } from "../content/plansValues.json";
import { Arcade } from "../content/plansValues.json";
import { Pro } from "../content/plansValues.json";

export default function getPricesPlans({ plan }: PlanType) {
  switch (plan) {
    case "Arcade":
      return Arcade;
    case "Advanced":
      return Advanced;
    case "Pro":
      return Pro;
  }
}
