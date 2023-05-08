export default function CheckMark({
  onClick,
  forceChecked,
}: {
  onClick: () => void;
  forceChecked?: boolean;
}) {
  return (
    <input
      readOnly
      checked={forceChecked}
      onClick={onClick}
      type="checkbox"
      className="appearance-none relative flex justify-center items-center rounded-md border w-6 h-6 checked:bg-purplish-blue before:bg-[url('/icons/checkmark.svg')] before:content-normal before:h-3 before:w-3 before:bg-no-repeat before:bg-center before:bg-contain checked:before:block before:hidden"
    />
  );
}
