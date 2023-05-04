import { HeaderProps } from "@/types/header.types";

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
}
