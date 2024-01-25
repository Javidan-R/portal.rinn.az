import { Link } from "react-router-dom";
import PrimaryButton from "../../components/atoms/Button/PrimaryButton";
import img404 from "../../assets/images/services/404.svg";
import MainLogo from "../../assets/images/MainLogo.svg";

const ErrorPage = () => {
  return (
    <>
    <header className={`header bg-white py-2 shadow-md lg:transition-all lg:duration-1000 lg:ease-in-outlg:h-[20rem] header--not-home-lg`} >
      <div className="container mx-auto px-2 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48 md:w-64 lg:w-auto">
            <a href="/" aria-current="page">
              <img
                alt="logo"
                src={MainLogo}
                className="object-contain"
                style={{
                  width: "18.75rem",
                  height: "4.375rem",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </div>
          <div className="flex lg:flex-row sm:flex-col items-center lg:gap-14 sm:gap-2 ">
            <a href="tel:1655" className="flex justify-center gap-4">
              <img
                src="https://portal.rinn.az/img/call.859bda17.svg"
                alt="call"
              />
              <b className="text-white font-extrabold font-semibold text-base">
                1655 Çağrı Mərkəzi
              </b>
            </a>
            <button
              className="flex item-center justify-center align-center py-[13px] px-[14px] text-[0.875rem] text-#304b82 cursor-pointer font-semibold bg-white border border-solid border-#304b82 rounded-md" >
              <img
                src="https://portal.rinn.az/img/asan-login.d86aada9.svg"
                alt="asan-login"
              />
            </button>
          </div>
        </div>

       
      </div>
    </header>
    <div className="flex justify-center items-center h-screen bg-gray-100 pt-20">
      <div className="text-center">
        <figure>
          <img
            className="mx-auto max-w-full h-auto"
            src={img404}
            alt="Zəhmət olmasa geri qayıdaraq axtarışınızı birdə yerinə yetirin"
          />
        </figure>
        <div  className="mt-6">
          <h1 className="text-6xl truncate-l">
          Səhifə Tapılmadı
          </h1>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-400">
            Zəhmət olmasa geri qayıdaraq axtarışınızı birdə yerinə yetirin
          </p>
        </div>
        <Link to={"/"}>
          <PrimaryButton className="mt-6 bg-[#304b82] text-base font-normal p-2">Geri Qayıt</PrimaryButton>
        </Link>
      </div>
    </div>
    </>
  );
};

export default ErrorPage;
