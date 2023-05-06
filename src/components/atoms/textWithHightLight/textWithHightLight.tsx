// Types
import { TextWithHighLightProps } from "@/types/textWithHightLight.types";

export default function TextWithHightLight({
  name,
  hightLightColor,
  normalColor,
  enableHightLight,
}: TextWithHighLightProps) {
  let textColor = enableHightLight ? hightLightColor : normalColor;

  return <span className={`${textColor} font-medium`}>{name}</span>;
}
