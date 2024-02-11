import { FC, useState } from "react";
import Head from "../../components/Head";
import Footer from "../../layout/Footer";
import { FaUser } from "react-icons/fa";
import userphoto from "../../assets/images/user.avif";
import PrimaryButton from "../../components/atoms/Button/PrimaryButton"; 
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
      <div className="flex flex-col md:flex-row flex-grow gap-4 ">
        <Menu
          onItemClick={handleMenuItemClick}
          selectedMenuItem={selectedMenuItem}
        />
        <UserInfo selectedMenuItem={selectedMenuItem} />
      </div>
      <Footer />
    </div>
  );
};

const Menu: FC<{
  onItemClick: (title: MenuItem) => void;
  selectedMenuItem: string;
}> = ({ onItemClick, selectedMenuItem }) => {
  const menuItems: MenuItem[] = [
    "Şəxsi Məlumatlarım",
    "Müraciətlərim",
    "Əks Əlaqə",
  ];

  return (
    <div className="w-full md:w-1/4 bg-white border-r border-gray-200 p-4 shadow-xl">
      {menuItems.map((item) => (
        <MenuItem
          key={item}
          title={item}
          onItemClick={onItemClick}
          active={item === selectedMenuItem}
        />
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
      className={`flex justify-start items-center w-full text-left hover:underline mb-2 border rounded-xl h-[40px] p-2 ${
        active ? "bg-gray-100" : ""
      }`}
      onClick={() => onItemClick(title)}
    >
      <FaUser
        className={`text-base ${active ? "text-blue-500" : "text-gray-400"}`}
      />
      <p className="text-base ml-2">{title}</p>
    </button>
  );
};

interface UserInfoProps {
  selectedMenuItem: MenuItem;
}

const UserInfo: FC<UserInfoProps> = ({ selectedMenuItem }) => {
  return (
    <div className="row">
      {selectedMenuItem === "Şəxsi Məlumatlarım" && (
        <>
          <div className=" col-12 w-full md:w-4/5 p-4 bg-gray-100 border rounded-xl  my-10 shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/5 mb-4">
                <img
                  src={userphoto}
                  alt="User Avatar"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-4/5 md:pl-4">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Soyad, adı və atasının adı"
                      value="Rəcəbli Cavidan Ayaz oğlu"
                    />
                  </div>
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Fərdi identifikasiya nömrəsi"
                      value="xxxxxxx"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Sənədin verilmə tarixi"
                      value="2024-02-20"
                    />
                  </div>
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow title="Doğum Yeri" value="XXXXXX" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Sənədin seriya və nömrəsi"
                      value="XXXXXXX"
                    />
                  </div>
                  <div className="md:w-1/2  mb-4">
                    <UserInfoRow title="Doğum tarixi" value="1997" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Sənədi verən orqan"
                      value="Asan Gəncə 2"
                    />
                  </div>
                  <div className="md:w-1/2 mb-4">
                    <UserInfoRow
                      title="Qeydiyyatda olduğu ünvan"
                      value="XXXXXXXXXXXXXXXX"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/8 mb-4 ">
                <PrimaryButton className="px-8 py-2 ">Yenilə</PrimaryButton>
              </div>
            </div>
          </div>

          <div className="col-12">
            <AddUserData />
          </div>
        </>
      )}
    </div>
  );
};

const UserInfoRow: FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => {
  return (
    <div className="flex flex-col  mb-2">
      <span className="font-base">{title}:</span>
      <span className="font-custom font-black">{value}</span>
    </div>
  );
};

const AddUserData = () => {
  return (
    <div className="bg-white  row  border rounded-xl shadow-xl p-4">
      <div className="col-12 w-full flex flex-row justify-between align-center items-center">
        <div className="text-lg "> Əlaqə Məlumatlarınızı daxil edin</div>
        <PrimaryButton className="px-8 py-2 ">Əlavə et</PrimaryButton>
      </div>
    </div>
  );
};
export default AuthAccount;
