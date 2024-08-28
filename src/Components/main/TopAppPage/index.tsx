import AddPhotos from "./AddPhotos";
import TopAppLabel from "./TopAppLabel";
import Tabs from "./Tabs";

const TopAppPage = () => {
  return (
    <div
      className={`w-[1170px] h-[100vh] px-20 pt-11 flex flex-col overflow-auto`}
    >
      <AddPhotos />
      <TopAppLabel />
      <Tabs />
    </div>
  );
};

export default TopAppPage;
