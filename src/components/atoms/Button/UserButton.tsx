import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout, authSliceService } from "../../../redux/authSlice";
import { setSelectUser } from "../../../redux/userSlice";
import loginmobile from "../../../assets/images/services/loginmobilesvg.svg";
import asanlogin from "../../../assets/images/services/asportal.svg";
import PrimaryButton from "./PrimaryButton";

const UserButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(setSelectUser);
  const auth = useSelector(authSliceService);
  const userButtonStyle =
    "flex items-center justify-center space-x-2 py-[13px] px-[14px] text-[0.875rem] text-#304b82 cursor-pointer font-semibold bg-white border border-solid border-#304b82 rounded-md";
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleAccountClick = () => {
    navigate("/auth/account"); // Hesap sayfasına yönlendir
  };

  return (
    <>
      {auth.isAuthenticated && auth.role === "USER" ? (
        <div>
          <button className={userButtonStyle} onClick={handleAccountClick}>
            <FaUser />
            <span>{userName}</span>
          </button>
          <PrimaryButton className="cursor-pointer bg-white" onClick={handleLogout}>
            <img src={loginmobile} alt="mobil-menu" />
          </PrimaryButton>
        </div>
      ) : (
        <Link to={"/auth/login"}>
          <button className={userButtonStyle}>
            <img src={asanlogin} alt="asan-login" />
          </button>
        </Link>
      )}
    </>
  );
};

export default UserButton;
