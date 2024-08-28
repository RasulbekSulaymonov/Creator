const ComboBox = ({
  obj,
  label,
  id,
}: {
  obj: any;
  label: string;
  id: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${id == "1" ? "w-[35%]" : "w-[60%]"}`}>
      <div className="font-bold text-gray-400 text-sm">{label}</div>
      <select
        name="combo"
        id="1"
        className="p-4 cornerPresent bgcolor border-2 outline-none font-bold"
      >
        {obj.map((index: any) => (
          <option key={index.value} value={index.value}>
            {index.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
