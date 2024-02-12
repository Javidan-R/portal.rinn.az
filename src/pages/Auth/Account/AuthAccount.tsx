import { FC, useState } from "react";
import { IconType } from "react-icons";
import { FaUser, FaList, FaPhone } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import Head from "../../../components/Head";
import Footer from "../../../layout/Footer";
import Appeals from "./Appeals";
import UserContact from "./UserContact";
import UserInfo from "./Userİnfo";
import Input from "../../../components/atoms/Input/Input";

export type MenuItem = "Şəxsi Məlumatlarım" | "Müraciətlərim" | "Əks Əlaqə";
export type MenuItemIcon = { [key in MenuItem]: IconType };

const AuthAccount: FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const handleMenuItemClick = (title: MenuItem) => {
    setSelectedMenuItem(prevSelectedMenuItem => prevSelectedMenuItem === title ? null : title);
  };
  return (
    <div className="flex flex-col">
      <Head />
      <div className="flex flex-col md:flex-row flex-grow min-h-screen">
        <Menu onItemClick={handleMenuItemClick} selectedMenuItem={selectedMenuItem} />
        {selectedMenuItem === "Şəxsi Məlumatlarım" && <UserInfo selectedMenuItems={selectedMenuItem} />}
        {selectedMenuItem === "Müraciətlərim" && <Appeals />}
        {selectedMenuItem === "Əks Əlaqə" && <UserContact />}
      </div>
      <Footer />
    </div>
  );
};

export const Menu: FC<{
  onItemClick: (title: MenuItem) => void;
  selectedMenuItem: MenuItem | null;
}> = ({ onItemClick, selectedMenuItem }) => {
  const menuItems: MenuItem[] = ["Şəxsi Məlumatlarım", "Müraciətlərim", "Əks Əlaqə"];
  const menuItemIcons: MenuItemIcon = {
    "Şəxsi Məlumatlarım": FaUser,
    "Müraciətlərim": FaList,
    "Əks Əlaqə": FaPhone,
  };

  return (
    <div className="w-full md:w-1/4 bg-white border-r border-gray-200 p-4 shadow-xl">
      {menuItems.map(item => (
        <MenuItemButton
          key={item}
          title={item}
          icon={menuItemIcons[item]}
          onItemClick={onItemClick}
          active={selectedMenuItem === item}
        />
      ))}
    </div>
  );
};

const MenuItemButton: FC<{
  title: MenuItem;
  icon: IconType;
  active: boolean;
  onItemClick: (title: MenuItem) => void;
}> = ({ title, icon: Icon, active, onItemClick }) => {
  return (
    <button
      className={`flex justify-start items-center w-full text-left hover:underline mb-2 border rounded-xl h-[40px] p-2 ${active ? "bg-gray-100" : ""
        }`}
      onClick={() => onItemClick(title)}
    >
      <Icon className={`text-base ${active ? "text-blue-500 ml-2" : "text-gray-400"}`} />
      <p className="text-base ml-2">{title}</p>
    </button>
  );
};

export interface AccountInsideSearchProps {
  searchTerm: string;
  searchName: string
  setSearchTerm: (term: string) => void;
}

export const AccountInsideSearch: FC<AccountInsideSearchProps> = ({ searchTerm, setSearchTerm, searchName }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between align-center">
      <div>
        <h1 className="text-2xl font-bold">{searchName}</h1>
      </div>
      <div className="flex items-center mt-4 relative">
        <RiSearchLine className="w-6 h-8 text-gray-500 absolute top-[10px] left-[8px]" />
        <Input
          type="text"
          placeholder="Axtar..."
          name="muraciet"
          className="w-[full] px-10 py-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
export default AuthAccount;
