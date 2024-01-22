import { PagesCard } from "../../../components/PagesCard"
import ServiceHeading from "../../../components/ServiceHeading"
import TransitionSection from "../../../components/Widgets/TransitionSection";
import imeiyoxlama from '../../../assets/images/services/Imeiyoxlama.png'

const breadcrumbItems = [
  { link: '/', name: 'Home' },
  { link: '/services', name: 'Services' },
  { link: '/imei-check-service', name: 'IMEI Check Service' },
];

const imeiCheck = [
  {
    "serviceId": 3,
          "image": imeiyoxlama,
          "title": "IMEI yoxlama",
          "name": "“AzInTelecom” MMC",
          "link": "imei-check-service",
          "sing": "Qeydiyyatsız",
          "pay": "Ödənişsiz"
  }
]
export const ImeiCheck = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
       <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <TransitionSection>
        <section>
          <PagesCard services={imeiCheck}/>
        </section>
        <section className="bg-[#fff]   shadow-md">
          <ImeiCheckService />
        </section>
        </TransitionSection>
        
      </div>
    </div>
  )
}

const ImeiCheckService: React.FC = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-2">
      <div className="lg:w-1/2">
        <div className="imei-check-service__check mt-4 lg:mt-0 p-4 bg-white">
          <form className="form">
            <div className="form__group">
              <label className="v-label block mb-2" htmlFor="imeiCheck">
                IMEI
              </label>
              <div className="form__wrapper flex flex-col lg:flex-row items-center">
                <input
                  placeholder="353556094510108"
                  className="v-input border border-blue-600 rounded-md px-3 py-2 lg:w-3/4 lg:mr-4 mb-4 lg:mb-0"
                  type="text"
                  id="imeiCheck"
                />
                <div className="form__group-info mb-4 lg:hidden text-sm opacity-30">
                  Cihazda *#06# yığdıqdan sonra işıqlanan 15 rəqəmli kodu daxil edin
                </div>
                <hr className="divider d-block d-md-none my-4" />
                <button className="btn btn--dark bg-[#304b82] text-white px-9 py-3 rounded-md">
                  Yoxla
                </button>
              </div>
            </div>
            <div className="form__group-info mt-4 md:hidden lg:block text-sm opacity-30  ">
              Cihazda *#06# yığdıqdan sonra işıqlanan 15 rəqəmli kodu daxil edin
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImeiCheckService;
