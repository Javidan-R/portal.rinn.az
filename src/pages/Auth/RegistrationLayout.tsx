
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../redux/authSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { GETAPIData } from "../../HTTP/HTTP";
import { setUser } from "../../redux/userSlice";
import { Users } from "../../types/type";

import usericon from "../../assets/images/auth/usericon.svg"
import passwordicon from "../../assets/images/auth/passwordicon.svg"
import { Role } from "../../models";
import { TEToast } from "tw-elements-react";

export const RegistrationLayout = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const {search : searchPath} = useLocation();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
    const [showToast, setShowToast] = useState(false); // State for controlling toast visibility
    const fetchData = async () => {
    
      try {
        const apiData = await GETAPIData('user'); // Update the endpoint based on your API
  
        if (apiData.data) {
          const existingUser = apiData.data.find(
            (user:Users) => user.username === formData.username && user.password === formData.password
          );
  
          if (existingUser) {
            const isFormDataMatch =
              existingUser.username === formData.username && existingUser.password === formData.password;
  
            if (isFormDataMatch) {
              localStorage.setItem('role', 'USER');
              localStorage.setItem('RIN_AUTH', 'true');
              dispatch(setUser({ ...existingUser, role: Role.USER }));
              dispatch(setAuthenticated({isAuthenticated : true , role: Role.USER}));
              const path = searchPath.split("/")[1] ?? "/";
              navigate(path); 
            }
          } else {
            console.log('Authentication failed. User not found.');
          }
        } else {
          console.log('Invalid response format. Expected an array.');
        }
        setShowToast(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    fetchData();
  };
  
    return (
      <section className="bg-[#fff] relative m-0 text-left text-[#212529]">
        <div className={`bg-[#fff]  w-full  mx-auto min-h-[360px] relative overflow-hidden `}>
          <div className="row h-full">
            <div className="col-12 hover-bg-black-10 p-6 lg:p-8 xl:p-10">
              <h1 className="text-3xl font-bold mb-4 text-center">Giriş səhifəsi</h1>
              <form
                className="form-horizontal form-material input-wrapper"
                onSubmit={handleLogin}
              >
                <div className="finInput flex align-center border border-1 relative w-full p-0 my-3">
                  <img
                    className="person-img absolute  w-[25px] ml-[15px] "
                    src={usericon}
                  />
                  <input
                    className="input-field bg-[#fcfcfe] w-full font-lg  block border-none  py-3 px-4  pl-14"
                    name="pin"
                    placeholder="İdentifikasiya nömrəsini daxil edin"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  />
                  <span className="icon icon-alert-circle info-icon FinIcon"></span>
                </div>
                <div className="passwordInput flex align-center border border-1 relative w-full p-0 my-3 " >
                  <img
                    className="lock-img w-[28px] ml-[15px]"
                    src={passwordicon}
                  />
                  <input
                    className="input-field bg-[#fcfcfe] w-full font-lg  block border-none  py-3 px-4"
                    name="password"
                    placeholder="Şifrənizi daxil edin"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <button
                  className="btn btn-primary login-button check-fin-login-button w-full bg-blue-600 py-2 rounded-md shadow-lg "
                  type="submit" 
                >
                  <p className="text-3xl text-white">İrəli</p>
                </button>
              </form>
              <div className="w-full mt-6">
                <Link to="" className=" text-center text-2xl text-blue-600 mt-2">
                  <p>Şifrəni unutmusunuz?</p>
                </Link>
                <Link to="" className="  text-center text-2xl text-blue-600 mt-2">
                  <p>Qeydiyyat</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <TEToast
    open={showToast}
    color="bg-primary-100 text-primary-700"
    className="mb-6"
    onClose={() => setShowToast(false)} // Optional: Close toast on button click
  >
    {/* Toast content */}
    <div className="flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-clip-padding px-4 pb-2 pt-2.5">
      {/* Toast header */}
      <p className="flex items-center font-bold">
        <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        MDBootstrap
      </p>
      <div className="flex items-center">
        {/* Close button */}
        <button
          type="button"
          className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          onClick={() => setShowToast(false)}
          aria-label="Close"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    {/* Toast message */}
    <div className="break-words rounded-b-lg px-4 py-4">
      Hello, world! This is a toast message.
    </div>
  </TEToast>
      </section>
    );
  };
  
  
