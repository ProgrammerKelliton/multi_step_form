export enum PlansTypes {
  "Arcade",
  "Advanced",
  "Pro",
}

type planType = keyof typeof PlansTypes;

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
