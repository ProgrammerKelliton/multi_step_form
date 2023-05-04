// Types
import { ContainerProps } from "@/types/container.types";

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-white w-2/3 h-3/4 rounded-2xl shadow-slate-100 p-4 flex justify-between">
      {children}
    </div>
  );
}
