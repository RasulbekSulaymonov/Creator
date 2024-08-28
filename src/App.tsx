import { useParams } from "react-router-dom";
import "./App.css";
import SidebarLeft from "./Components/SidebarLeft";
import { pages } from "./constants";
import Layout from "./Components/main/Layout";
import SidebatRight from "./Components/SidebarRight";

function App() {
  const { name: pageName } = useParams();
  return (
    <div className={`flex justify-between h-[100%] font`}>
      <SidebarLeft />
      {pages.map((item) => {
        if (item.name === pageName) {
          return <Layout key={item.name}>{item.element}</Layout>;
        }
      })}
      <SidebatRight />
    </div>
  );
}

export default App;
