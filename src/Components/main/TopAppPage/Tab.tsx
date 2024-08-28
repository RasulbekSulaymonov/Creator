import { getRootColor } from "../../../utils";

interface Props {
  label: string;
  onClick: VoidFunction;
  isActive: boolean;
}

const Tab = ({ label, onClick, isActive }: Props) => {
  console.log(getRootColor("--main-color"));
  return (
    <div
      className={`py-[17px] px-[34px] font-bold tracking-wide select-none cursor-pointer ${
        isActive && `border-b-2 tapColor relative mb-[-2px]`
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;
