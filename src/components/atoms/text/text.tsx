// Types
import { TextProps } from "@/types/components/atoms/text.types";

export default function Text({ name, className, fontWeight }: TextProps) {
  const font = fontWeight ? fontWeight : "font-medium";

  return (
    <span className={`${font} text-marine-blue ${className || ""}`}>
      {name}
    </span>
  );
}
