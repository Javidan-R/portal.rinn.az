import { FC } from "react";
import PrimaryButton from "../../../components/atoms/Button/PrimaryButton";
import { useSelectedUser } from "../../../redux/userSlice";
import { MenuItem } from "./AuthAccount";

const UserInfo: FC<{ selectedMenuItems: MenuItem }> = ({ selectedMenuItems }) => {
    const selectedUser = useSelectedUser("Cavidan"); // You may need to determine the username dynamically
    const userDetail = selectedUser?.userdetail[0];
  
    if (!selectedUser || !userDetail) {
      return <div>İstifadəçi tapılmadı.</div>;
    }
  
    return (
      <div className="w-full md:w-3/4 p-4 bg-gray-100">
        {selectedMenuItems === "Şəxsi Məlumatlarım" && (
          <>
            <div className=" col-12 w-full md:w-5/5 p-4 bg-white border rounded-xl  my-10 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/5  mb-4">
                  <img
                    src={`../../${userDetail.image}`}
                    alt="User Avatar"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-4/5 md:pl-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">
                          Soyad, adı və atasının adı:
                        </span>
                        <span className="font-custom font-black">
                          {userDetail.userAllName}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">
                          Fərdi identifikasiya nömrəsi:
                        </span>
                        <span className="font-custom font-black">
                          {userDetail.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">Sənədin verilmə tarixi:</span>
                        <span className="font-custom font-black">
                          {userDetail.pasDate}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">Doğum tarixi:</span>
                        <span className="font-custom font-black">
                          {userDetail.birthday}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">Sənədi verən orqan:</span>
                        <span className="font-custom font-black">
                          {userDetail.document}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2  mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">
                          Qeydiyyatda olduğu ünvan:
                        </span>
                        <span className="font-custom font-black">
                          {userDetail.address1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base"> Doğum yeri:</span>
                        <span className="font-custom font-black">
                          {userDetail.address2}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 mb-4">
                      <div className="flex flex-col  mb-2">
                        <span className="font-base">ww:</span>
                        <span className="font-custom font-black">
                          {userDetail.password}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/8 mb-4  ">
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
  
  const AddUserData: FC = () => {
    return (
      <div className="bg-white border rounded-xl shadow-xl p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg">Əlaqə Məlumatlarınızı daxil edin</div>
          <PrimaryButton className="px-8 py-2">Əlavə et</PrimaryButton>
        </div>
      </div>
    );
  };
  export default UserInfo;