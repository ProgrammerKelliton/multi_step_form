// Types
import { HeaderProps } from "@/types/components/molecules/header.types";

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className="flex flex-col justify-center gap-4 max-sm:w-full w-3/4">
      <h1 className="text-marine-blue font-bold text-4xl max-sm:text-xl">
        {title}
      </h1>
      <span className="text-cool-gray">{subTitle}</span>
    </div>
  );
}
