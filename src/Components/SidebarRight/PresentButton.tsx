import clsx from "clsx";
import Present from "../SVG/Present";

const PresentButton = ({
  color,
  onClick,
}: {
  color: string;
  onClick: VoidFunction;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-16 h-16 bg-[#eef3f6] p-4 cursor-pointer",
        "cornerPresent lightmode"
        // style,
        // style == color && "border-solid border-[1px] border-indigo-700"
      )}
    >
      <Present color={color} />
    </div>
  );
};

export default PresentButton;
