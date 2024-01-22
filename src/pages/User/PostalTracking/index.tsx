import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import avtombil from "../../../assets/images/services/avtomobil.png"

const breaditems=[
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/permission-movement-servic",
    name: "Poçt göndərişlərinin izlənməsi",
  },
]

const permissionMovement  = [
  {
    "serviceId": 10,
          "image": avtombil,
          "name": "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
          "title": "Ümumi istifadədə olan avtomobil yolları ilə iriqabaritli və ağırçəkili nəqliyyat vasitələrinin hərəkət etməsi və onların hərəkətinə xüsusi icazənin verilməsi",
          "link": "permission-movement-service",
          "sing": "Qeydiyyatsız",
          "pay": "Ödənişsiz"
  }
]
export const PostalTracking = () => {
  return (
    <div className="bg-gray-100">
    <div className="container-fluid v-container">
    <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breaditems}/>
        <TransitionSection>
        <section>
          <PagesCard services={permissionMovement}/>
        </section>
      <section className="bg-white rounded-xl mt-6">
      </section>
      </TransitionSection>
      <section className="bg-[#fff]   shadow-md">
      <PostalTrackingService />
    </section>
      
    </div>
  </div>
  );
};

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
