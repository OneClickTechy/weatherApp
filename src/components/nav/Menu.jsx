import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaMap } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const menuItems = [
  { icon: <TiWeatherPartlySunny />, label: "Weather" },
  { icon: <TfiMenuAlt />, label: "Cities" },
  { icon: <FaMap />, label: "Map" },
  { icon: <VscSettings />, label: "Settings" },
];

const Menu = () => {
  return (
    <menu className="flex flex-col gap-8">
      {menuItems.map((item, index) => (
        <li key={index} className="font-sans text-text-darkGray flex flex-col justify-center items-center">
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs lg:text-sm">{item.label}</span>
        </li>
      ))}
    </menu>
  );
};

export default Menu;
