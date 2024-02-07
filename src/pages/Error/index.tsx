import { Link } from "react-router-dom";
import PrimaryButton from "../../components/atoms/Button/PrimaryButton";
import img404 from "../../assets/images/services/404.svg";
import Head from "../../components/Head";

const ErrorPage = () => {
  return (
    <>
  <Head/>
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
