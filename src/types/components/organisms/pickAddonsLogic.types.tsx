import { SetStateAction } from "react";
import { AddonType, Addons } from "../molecules/addon.types";
import { BillingMethod } from "../molecules/plan.types";

export interface AddonsSelected extends Addons {
  addonsSelected: Addons[] | [];
}

export interface RemoveAddonProps extends AddonsSelected {}

export interface isSelectedProps extends AddonsSelected {}

export interface handlerAddAndRemoveAddonsProps extends Addons {
  addonsSelected: Addons[] | [];
  setAddonsSelected: (value: SetStateAction<Addons[] | []>) => void;
}

export interface getPriceProps extends BillingMethod, AddonType {}
