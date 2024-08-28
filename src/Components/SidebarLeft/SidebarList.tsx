import { navbarList } from "../../constants";
import SidebarItem from "./SidebarItem";

const SidebarList = () => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      {navbarList.map((item) => (
        <SidebarItem key={item.name} text={item.text} name={item.name} />
      ))}
    </div>
  );
};

export default SidebarList;
