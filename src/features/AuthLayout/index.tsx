import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSliceService } from "../../redux/authSlice";

 const AuthLayout =() =>{
    const {isAuthenticated}  = useSelector(authSliceService)

    if(isAuthenticated){
        return <Navigate to={"/"} />
    }
    return <><Outlet /></>
}
export default AuthLayout;