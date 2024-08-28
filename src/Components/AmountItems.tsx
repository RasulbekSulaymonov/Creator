import clsx from "clsx";
import { amounts } from "../constants";

const AmountItems = () => {
  return (
    <div className="flex">
      {amounts.map((index, idx) => (
        <div
          key={index.value}
          className={clsx(
            "py-2 px-6 border-gray-200 border-y-2 border-r-2 text-gray-400 font-bold",
            idx == 0 && "leftBorderRadius border-l-2",
            idx == amounts.length - 1 && "rightBorderRadius"
          )}
        >
          € {index.value}
        </div>
      ))}
    </div>
  );
};

export default AmountItems;
