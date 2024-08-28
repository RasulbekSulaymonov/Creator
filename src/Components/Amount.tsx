import AmountItems from "./AmountItems";

const Amount = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="font-bold text-5xl">€ 1000.56</div>
      <AmountItems />
    </div>
  );
};

export default Amount;
