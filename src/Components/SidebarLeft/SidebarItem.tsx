import { useNavigate, useParams } from "react-router-dom";

interface Props {
  text: string;
  name: string;
}

const SidebarItem = ({ text, name }: Props) => {
  const navigate = useNavigate();
  const { name: pageName } = useParams();
  return (
    <div
      className={`px-5 py-4 font-medium cornerPresent hover:bg-black hover:text-white 
    ${name === pageName && "bg-black text-white"}`}
      onClick={() => navigate(`/${name}`)}
    >
      {text}
    </div>
  );
};

export default SidebarItem;
