import clsx from "clsx";
import CreditCard from "../../SVG/CreditCard";

const TopAppLabel = () => {
  return (
    <div className="w-full min-h-[160px] flex items-center justify-center">
      <div
        className={clsx(
          "flex items-center gap-3 border-solid px-5 py-3 border-[2px]",
          "fullCorner",
          "activeBorder"
        )}
      >
        <div className="w-7 h-7 flex items-center">
          <CreditCard />
        </div>

        <div className="text-[22px] font-bold">Top-Up Card by Crypto</div>
      </div>
    </div>
  );
};

export default TopAppLabel;
