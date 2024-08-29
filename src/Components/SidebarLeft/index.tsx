import SidebarList from "./SidebarList";
import logo from "../SVG/Vector.svg";

const SidebarLeft = () => {
  return (
    <div className={`w-[220px] h-[100vh] p-3 bgcolor`}>
      <div className="flex gap-2 px-4 pt-10 pb-11">
        <img src={logo} alt="" />
        <p className="text-2xl font-black flex items-center">Logotype</p>
      </div>
      <SidebarList />
    </div>
  );
};

export default SidebarLeft;
