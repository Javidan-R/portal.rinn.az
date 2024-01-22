import { PagesCard } from "../../../components/PagesCard";
import Steps from "../../../components/Steps";
import ServiceHeading from "../../../components/ServiceHeading";
import imei from  "../../../../src/assets/images/services/Imei.png"
import TransitionSection from "../../../components/Widgets/TransitionSection";
const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/mcqs-service",
    name: "Mobil cihazların qeydiyyat sistemi",
  }
];

const mcqs = [
  {
    "serviceId": 1,
    "image": imei,
    "title": "IMEI Qeydiyyat",
    "name": "“AzInTelecom” MMC",
    "link": "mcqs-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  }
];


export const Mcqs = () => {
  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading

          mainLink="/services"
          backButtonProps={{
            customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <TransitionSection>
        <section>
          <PagesCard services={mcqs} />
        </section>
        <section>
          <Steps />
        </section>
        </TransitionSection>
        
      </div>
    </div>
  );
};
