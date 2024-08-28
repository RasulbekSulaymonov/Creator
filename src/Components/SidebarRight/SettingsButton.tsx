import { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  text: string;
  icon: ReactElement;
  onClick?: VoidFunction;
}

const SettingsButton = ({ text, icon, onClick }: Props) => {
  return (
    <div
      className={clsx(
        "p-2 w-fit text-xs flex gap-1 cursor-pointer cornerSetting lightmode"

        // state.template == text
        //   ? "border-solid border-[1px] border-indigo-700"
        //   : state.font == text
        //   ? "border-solid border-[1px] border-indigo-700"
        //   : state.colorScheme == text &&
        //     "border-solid border-[1px] border-indigo-700",

        // bgcolor == "Light"
        //   ? "bg-[#f0f3f8]"
        //   : bgcolor == "Dark Black"
        //   ? "bg-[#2e3d4b] text-white"
        //   : "bg-[#193752] text-white"
      )}
      onClick={onClick}
    >
      <div className="w-4 h-4">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SettingsButton;
