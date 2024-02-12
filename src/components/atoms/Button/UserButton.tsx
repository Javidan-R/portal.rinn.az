/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUsernames, useSelectedUser } from "../../../redux/userSlice";
import loginmobile from "../../../assets/images/services/loginmobilesvg.svg";
import asanlogin from "../../../assets/images/services/asportal.svg";
import PrimaryButton from "./PrimaryButton";
import { logout } from "../../../redux/authSlice";

const UserButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernames = useSelector(selectUsernames);
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const role = useSelector((state: any) => state.auth.role);

  const selectedUser = useSelectedUser(usernames[0]); // Dynamically determine the username

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {isAuthenticated && role === "USER" ? (
        <div className="flex justify-center gap-4 align-center items-center">
          <Link to={"/auth/account"}>
            <div className="flex justify-center align-center items-center gap-2">
              <img
                src={`../../../${selectedUser?.userdetail[0].image}`}
                alt={selectedUser?.userdetail[0].userAllName  }
                className="w-12 h-12 rounded"
              />
              <span className="text-xl font-bold text-white">
  {selectedUser?.userdetail[0].userAllName.split(' ').slice(0, 2).join(' ')}
</span>

            </div>
          </Link>
          <PrimaryButton
            className="cursor-pointer bg-white"
            onClick={handleLogout}
          >
            <img src={loginmobile} alt="mobil-menu" />
          </PrimaryButton>
        </div>
      ) : (
        <Link to={"/auth/login"}>
         <PrimaryButton className="bg-white  px-[.9rem] py-[.9rem]  rounded-[8px]" >
            <img src={asanlogin} alt="asan-login" />
          </PrimaryButton>
        </Link>
      )}
    </>
  );
};

export default UserButton;
