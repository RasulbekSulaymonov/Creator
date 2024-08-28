import { useState } from "react";
import { tabsElements } from "../../../constants";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActive] = useState(1);
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex border-b-2">
        {tabsElements.map((e) => (
          <Tab
            key={e.id}
            label={e.label}
            onClick={() => handleClick(e.id)}
            isActive={activeTab == e.id}
          />
        ))}
      </div>
      {tabsElements.map((e) => activeTab == e.id && e.element)}
    </div>
  );
};

export default Tabs;
