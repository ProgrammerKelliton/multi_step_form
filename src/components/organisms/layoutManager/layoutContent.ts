import { LayoutManagerProps } from "@/types/layoutManager.types";

import headerContent from "../../../content/header.json";

export default function LayoutContent({ layoutStep }: LayoutManagerProps) {
  return headerContent["your info"];
}
