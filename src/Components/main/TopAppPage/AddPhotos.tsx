import AddPhoto from "../../SVG/AddPhoto";

const AddPhotos = () => {
  return (
    <div
      className={`w-full min-h-28 border-dashed border-[1px] border-gray-600 flex items-center justify-center 
        cursor-pointer mb-3 cornerPresent`}
    >
      <div
        className={`w-36 h-20 bg-[#f0f3f8] flex flex-col items-center justify-center cornerSetting`}
      >
        <div>{<AddPhoto />}</div>
        <div className="text-[12px] font-black text-[#51545b]">
          Upload Photo
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
