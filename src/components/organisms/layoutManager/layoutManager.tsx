import { LayoutManagerProps } from "@/types/layoutManager.types";
import LayoutContent from "./layoutContent";

console.log(LayoutContent({ layoutStep: "your info" }));

export default function LayoutManager({ layoutStep }: LayoutManagerProps) {
  return <div></div>;
}
