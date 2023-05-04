// Types
import { HeaderProps } from "@/types/header.types";

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-marine-blue font-bold text-4xl">{title}</h1>
      <span className="text-cool-gray">{subTitle}</span>
    </div>
  );
}
