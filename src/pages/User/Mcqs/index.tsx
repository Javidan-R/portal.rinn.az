import { PagesCard } from "../../../components/PagesCard";
import Steps from "../../../components/Steps";
import ServiceHeading from "../../../components/ServiceHeading";
const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/mcqs-service",
    name: "Mobil cihazların qeydiyyat sistemi",
  },
];
export const Mcqs = () => {
  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink={"/"}
          backButtonProps={{
            customClassName:
              "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={breadcrumbItems}
        >
          <section>
            <PagesCard />
          </section>
          <section>
            <Steps />
          </section>
        </ServiceHeading>
      </div>
    </div>
  );
};
