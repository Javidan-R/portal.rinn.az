import ungunluq from "../../../assets/images/services/uygunluqsert.png";
import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
const BreadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/issuing-certificate-conformity-service",
    name: "Uyğunluq sertifikatının verilməsi",
  },
];
const issuingcert = [
  {
    serviceId: 11,
    image: ungunluq,
    name: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
    title: "Uyğunluq sertifikatının verilməsi",
    link: "issuing-certificate-conformity-service",
    sing: "Qeydiyyatsız",
    pay: "Ödənişsiz",
  },
];

export const IssuingCertificateConformity = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <ServiceHeading
          mainLink="/services"
          backButtonProps={{
            customClassName:
              "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={BreadcrumbItems}
        />
        <TransitionSection>
          <section>
            <PagesCard services={issuingcert} />
          </section>
          <section className="bg-white rounded-xl mt-6"></section>
        </TransitionSection>
      </div>
    </div>
  );
};
