// Types
import { Addons } from "@/types/addon.types";

import {
  RemoveAddonProps,
  getPriceProps,
  handlerAddAndRemoveAddonsProps,
  isSelectedProps,
} from "@/types/pickAddonsLogic.types";
import getPricesAddons from "@/utils/getPricesAddons";

function RemoveAddon({ addonsSelected, type }: RemoveAddonProps) {
  let updatedSeleted: Addons[] = addonsSelected.filter((addon) => {
    if (addon.type !== type) return addon;
  });

  return updatedSeleted;
}

function handlerAddAndRemoveAddons({
  type,
  price,
  addonsSelected,
  setAddonsSelected,
}: handlerAddAndRemoveAddonsProps) {
  const alreadySelect = isSelected({ type, addonsSelected });

  // if already selected remove it
  if (alreadySelect) setAddonsSelected(RemoveAddon({ addonsSelected, type }));
  // if not add this addon
  else setAddonsSelected((prev) => [...prev, { price, type }]);
}

function isSelected({ type, addonsSelected }: isSelectedProps) {
  return addonsSelected && addonsSelected.some((addon) => addon.type === type);
}

function getPrice({ type, method }: getPriceProps) {
  if (method === "monthy") {
    return getPricesAddons({ type })?.monthly;
  }
  if (method === "yearly") {
    return getPricesAddons({ type })?.yearly;
  }
}

export { handlerAddAndRemoveAddons, isSelected, RemoveAddon, getPrice };
