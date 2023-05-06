// Json content
import headerContent from "../../../content/header.json";

export default function getContent({ stepNumber }: { stepNumber: number }) {
  switch (stepNumber) {
    case 1:
      return headerContent["your info"];
    case 2:
      return headerContent["select plan"];
    case 3:
      return headerContent["add-ons"];
    case 4:
      return headerContent["summary"];
    default:
  }
}
