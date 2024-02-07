import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import radioelekrton from "../../../assets/images/services/radioelektron.png";
const breaditems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/permission-movement-service",
    name: "Ümumi istifadədə olan avtomobil yolları ilə iriqabaritli və ağırçəkili nəqliyyat vasitələrinin hərəkət etməsi və onların hərəkətinə xüsusi icazənin verilməsi",
  },
];
const registrationRadio = [
  {
    serviceId: 15,
    image: radioelekrton,
    name: "Dövlət Radiotezliklər İdarəsi",
    title:
      "Radioelektron vasitələrinin qeydiyyatı və icazə vərəqəsinin verilməsi",
    link: "registration-radio-electronic-devices-service",
    sing: "Qeydiyyatsız",
    pay: "Ödənişsiz",
  },
];
 const RegistrationRadio = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink={"/services"}
          backButtonProps={{
            customClassName:
              "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={breaditems}
        />
        <TransitionSection>
          <section>
            <PagesCard services={registrationRadio} />
          </section>
          <section className="bg-white rounded-xl mt-6"></section>
        </TransitionSection>
      </div>
    </div>
  );
};
export default RegistrationRadio;