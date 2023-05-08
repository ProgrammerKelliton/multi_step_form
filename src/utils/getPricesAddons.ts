import { Addons } from "@/types/addon.types";
import content from "../content/addonsValues.json";

export default function getPricesAddons({ type }: Addons) {
  switch (type) {
    case "Online services":
      return content["Online Service"];
    case "larger storage":
      return content["Larger storage"];
    case "Customizable profile":
      return content["Customizable profile"];
  }
}
