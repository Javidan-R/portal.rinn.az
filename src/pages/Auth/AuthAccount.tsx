import { FC, useState } from "react";
import Head from "../../components/Head";
import Footer from "../../layout/Footer";
import { FaUser } from "react-icons/fa";

type MenuItem = "Şəxsi Məlumatlarım" | "Müraciətlərim" | "Əks Əlaqə";

const AuthAccount: FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<MenuItem>("Şəxsi Məlumatlarım");

  const handleMenuItemClick = (title: MenuItem) => {
    setSelectedMenuItem(title);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <div className="flex flex-col md:flex-row flex-grow">
        <Menu onItemClick={handleMenuItemClick}  selectedMenuItem={selectedMenuItem}/>
        <UserInfo selectedMenuItem={selectedMenuItem} />
      </div>
      <Footer />
    </div>
  );
};

const Menu: FC<{ onItemClick: (title: MenuItem) => void , selectedMenuItem:string}> = ({
  onItemClick,
  selectedMenuItem

}) => {
  const menuItems: MenuItem[] = [
    "Şəxsi Məlumatlarım",
    "Müraciətlərim",
    "Əks Əlaqə",
  ];

  return (
    <div className="w-full md:w-1/4 bg-white border-r border-gray-200 p-4 shadow-xl">
      {menuItems.map((item) => (
        <MenuItem key={item} title={item} onItemClick={onItemClick} active={item === selectedMenuItem} />
      ))}
    </div>
  );
};  

const MenuItem: FC<{
  title: MenuItem;
  active: boolean;
  onItemClick: (title: MenuItem) => void;
}> = ({ title, active, onItemClick }) => {
  return (
    <button
      className={`flex justify-start items-center w-full text-left hover:underline mb-2 border rounded-xl h-[40px] p-2 ${active ? 'bg-gray-100' : ''}`}
      onClick={() => onItemClick(title)}
    >
      <FaUser className={`text-lg ${active ? 'text-blue-500' : 'text-gray-400'}`} />
      <p className="text-lg ml-2">{title}</p>
    </button>
  );
};

interface UserInfoProps {
  selectedMenuItem: MenuItem;
}

const UserInfo: FC<UserInfoProps> = ({ selectedMenuItem }) => {
  return (
    <div className="w-full md:w-3/4 p-4 bg-gray-100 border rounded-xl m-6 my-10 shadow-xl">
      {selectedMenuItem === "Şəxsi Məlumatlarım" && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4">
            <img
              src="../../assets/images/categories/is.png"
              alt="User Avatar"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-3/4 md:pl-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4">
                <UserInfoRow title="Kullanıcı adı" value="JohnDoe" />
              </div>
              <div className="md:w-1/2 mb-4">
                <UserInfoRow title="Doğum yılı" value={1990} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4">
                <UserInfoRow title="Ata adı" value="Michael Doe" />
              </div>
              <div className="md:w-1/2 mb-4">
                <UserInfoRow title="Yaşadığı yer" value="New York" />
              </div>
            </div>
          </div>
          <div className="md:w-1/4 mb-4 ">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Yenilə
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const UserInfoRow: FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => {
  return (
    <div className="flex mb-2">
      <span className="font-semibold mr-2">{title}:</span>
      <span>{value}</span>
    </div>
  );
};

export default AuthAccount;
