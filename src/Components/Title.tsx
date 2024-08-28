const Title = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="flex border px-[15px] py-[13px] activeBorder cornerPresent items-center gap-3">
      <div className="relative mainbg rounded-full min-w-8 h-8 font-bold">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {number}
        </span>
      </div>
      <div className="font-bold text-sm">{text}</div>
    </div>
  );
};

export default Title;
