import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Link } from "react-router-dom"
import { PagesCard } from "../../../components/PagesCard"
import BackButton from "../../../components/atoms/Button/BackButton"
import Breadcrumb from "../../../components/Common/BredCrumb"

export const PostalTracking = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
        <section className="flex justify-start gap-10 py-4">
          <Link to="/">
            <BackButton>
              <HiOutlineArrowNarrowLeft className="text-xl font-bold" style={{ fontWeight: "bolder" }} />
              <span className="lg:block sm:none"> Geri</span>
            </BackButton>
          </Link>
          <Breadcrumb
            items={[
              { link: "/", name: "Əsas səhifə" },
              { link: "/services", name: "Bütün xidmətlər" },
              { link: "/imei-check-service", name: "Poçt göndərişlərinin izlənməsi" },
            ]}
          />
        </section>
        <section>
          <PagesCard />
        </section>
        <section className="bg-[#fff]   shadow-md">
          <PostalTrackingService />
        </section>
      </div>
    </div>
  )
}

const PostalTrackingService: React.FC = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-2">
      <div className="lg:w-1/2">
        <div className="imei-check-service__check mt-4 lg:mt-0 p-4 bg-white">
          <form className="form">
            <div className="form__group">
              <label className="v-label block mb-2" htmlFor="imeiCheck">
              İzlənmə nömrəsi
              </label>
              <div className="form__wrapper flex flex-col lg:flex-row items-center">
                <input
                  placeholder="İzlənmə nömrəsini daxil edin"
                  className="v-input border border-blue-600 rounded-md px-3 py-2 lg:w-3/4 lg:mr-4 mb-4 lg:mb-0"
                  type="text"
                  id="imeiCheck"
                />
               
                <hr className="divider lg:hidden md:hidden sm:block my-4" />
                <button className="btn btn--dark bg-[#304b82] text-white px-9 py-3 rounded-md">
                  Yoxla
                </button>
              </div>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostalTrackingService;
