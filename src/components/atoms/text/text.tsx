export default function Text({
  name,
  className,
  fontWeight,
}: {
  name: string;
  className?: string;
  fontWeight?: string;
}) {
  const font = fontWeight ? fontWeight : "font-medium";

  return (
    <span className={`${font} text-marine-blue ${className || ""}`}>
      {name}
    </span>
  );
}
