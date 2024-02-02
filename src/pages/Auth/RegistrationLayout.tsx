
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { GETAPIData } from "../../HTTP/HTTP";
import { setUser } from "../../redux/userSlice";
import { Users } from "../../types/type";

import usericon from "../../assets/images/auth/usericon.svg"
import passwordicon from "../../assets/images/auth/passwordicon.svg"

export const RegistrationLayout = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
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
              dispatch(setUser({ ...existingUser, role: 'USER' }));
              dispatch(setAuthenticated(true));
              navigate("/"); // Redirect to the main page          } else {
              console.log('Authentication failed. User data mismatch.');
            }
          } else {
            console.log('Authentication failed. User not found.');
          }
        } else {
          console.log('Invalid response format. Expected an array.');
        }
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
      </section>
    );
  };
  
  