import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETAPIData } from "../../../HTTP/HTTP";
import PageHeader from "../../../components/PageHeader";
import ServiceHeading from "../../../components/ServiceHeading";
import ServicesCard from "../../../components/ServicesCard";
import { Organisation, } from "../../../types/type";
import pageimg from "../../../assets/images/services/services.svg";
import { Pagination } from "../../../components/Common/Pagination";

const breadcrumbItems = [
  { link: "/", name: "Əsas Səhifə" },
  { link: "/services", name: "Xidmətlər" },
];

export const Services: FC = () => {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("/db.json"); 
        setOrganisations(response.data.organisations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink={"/"}
          backButtonProps={{
            customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={breadcrumbItems}
        >
          <section>
          <PageHeader img={pageimg} text={"Bütün xidmətlər"} />
        </section>
        <section className="mt-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
            organisations.map((organisation) => (
                  organisation.serviceName.map((service) => (
                    <Link to={`/services/${service.link}`} key={service.serviceId}>
                      <ServicesCard {...service}>
                        
                      </ServicesCard>
                    </Link>
                  ))
            ))
          }
          </div>
          <div>
            <Pagination />
          </div>
          </section>

        </ServiceHeading>
        
      </div>
    </div>
  );
};
