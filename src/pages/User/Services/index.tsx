import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETAPIData } from "../../../HTTP/HTTP";
import PageHeader from "../../../components/PageHeader";
import ServiceHeading from "../../../components/ServiceHeading";
import ServicesCard from "../../../components/ServicesCard";
import { Organisation } from "../../../types/type";
import pageimg from "../../../assets/images/services/services.svg";
import { Pagination } from "../../../components/Common/Pagination";
import TransitionSection from "../../../components/Widgets/TransitionSection";

const breadcrumbItems = [
  { link: "/", name: "Əsas Səhifə" },
  { link: "/services", name: "Xidmətlər" },
];
 const Services: FC = () => {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("organisations");
        setOrganisations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const { isAuthenticated, role } = useSelector(
  //   (state: { auth: { isAuthenticated: boolean; role: string } }) => state.auth
  // );

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
        />
        <TransitionSection>
          <section>
            <PageHeader img={pageimg} text={"Bütün xidmətlər"} />
          </section>
          <section className="mt-6 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {organisations.map((organisation) =>
                organisation.serviceName.map((service) => (
                  <Link
                    to={`/services/${service.link}`}
                    key={service.serviceId}
                  >
                    <ServicesCard sing={service.sing} image={service.image} link={service.link} title={service.title} />
                  </Link>
                ))
              )}
            </div>
            <div>
              <Pagination />
            </div>
          </section>
        </TransitionSection>
      </div>
    </div>
  );
};
export default Services