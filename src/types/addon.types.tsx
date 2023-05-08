export enum AddonsTypes {
  "Online services",
  "larger storage",
  "Customizable profile",
}

type addonsType = keyof typeof AddonsTypes;

export interface Addons {
  type?: addonsType;
  price?: number;
}

export interface AddonProps {
  name: string;
  descrition: string;
  priceMonths: number;
  priceYear: number;
  billingMethodIsMonthy?: boolean;
  onClick: () => void;
  select?: boolean;
}
