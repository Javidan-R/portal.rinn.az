import { Navigate, Outlet, useLocation, } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSliceService } from "../redux/authSlice";
import React from "react";

export const ProtectedRoutes :React.FC= ()=>{
    const {pathname} = useLocation();
    const {isAuthenticated} = useSelector(authSliceService);
	if(!isAuthenticated){
        return <Navigate to={`/auth/login?pathname=${pathname}`} />
    }
    return <>
    <Outlet/>
    </>
}