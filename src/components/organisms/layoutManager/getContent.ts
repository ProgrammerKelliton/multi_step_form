// Types
import { LayoutManagerProps } from "@/types/layoutManager.types";

// Json content
import headerContent from "../../../content/header.json";

export default function getContent({ layoutStep }: LayoutManagerProps) {
  switch (layoutStep) {
    case "your info":
      return headerContent["your info"];
  }
}
