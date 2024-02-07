import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout, authSliceService } from "../../../redux/authSlice";
import { setSelectUser } from "../../../redux/userSlice";
import loginmobile from "../../../assets/images/services/loginmobilesvg.svg";

const UserButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(setSelectUser);
  const auth = useSelector(authSliceService);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to the login page after logout
  };

  return (
    <>
      {auth.isAuthenticated && auth.role === "USER" ? (
        <>
          <Link to={"/auth/account"}>
            <button className="flex items-center justify-center space-x-2 py-[13px] px-[14px] text-[0.875rem] text-#304b82 cursor-pointer font-semibold bg-white border border-solid border-#304b82 rounded-md">
              <FaUser />
              <span>{userName}</span>
            </button>
          </Link>
          <button className="cursor-pointer bg-white" onClick={handleLogout}>
            <img src={loginmobile} alt="mobile-menu" />
          </button>
        </>
      ) : (
        <Link to={"/auth/login"}>
          <button className="flex items-center justify-center space-x-2 py-[13px] px-[14px] text-[0.875rem] text-#304b82 cursor-pointer font-semibold bg-white border border-solid border-#304b82 rounded-md">
            <img
              src="https://portal.rinn.az/img/asan-login.d86aada9.svg"
              alt="asan-login"
            />
          </button>
        </Link>
      )}
    </>
  );
};

export default UserButton;
