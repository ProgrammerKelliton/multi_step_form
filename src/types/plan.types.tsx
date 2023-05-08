export enum PlansTypes {
  "Arcade",
  "Advanced",
  "Pro",
}

export enum BillingMethods {
  "monthy",
  "yearly",
}

type billingMethod = keyof typeof BillingMethods;

type planType = keyof typeof PlansTypes;

export interface BillingMethod {
  method: billingMethod;
}

export interface PlanType {
  plan: planType;
}

export interface PlanProps {
  icon: string;
  alt: string;
  name: string;
  priceMonth: number;
  priceYear: number;
  monthsFree: number;
  showMonthPrice?: boolean;
  selected?: boolean;
  onClick: () => void;
}
