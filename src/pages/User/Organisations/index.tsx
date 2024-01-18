import PageHeader from "../../../components/PageHeader";
import pageimg from "../../../assets/images/services/services.svg";
import OrganisationCard from "../../../components/OrganisationCard";
import ServiceHeading from "../../../components/ServiceHeading";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { GETAPIData } from "../../../HTTP/HTTP";
import { Organisation } from "../../../types/type";

const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/organisations", name: "Bütün Qurumlar" },
];

export const Organisations = () => {
  const [organisationName, setOrganisationName] = useState<Organisation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("/db.json");
        setOrganisationName(response.data.organisations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderOrganisationCards = useMemo(
    () =>
      organisationName.map((organisation) => (
        <Link
          to={`/services/${organisation.link}`}
          key={organisation.organisationsId}
        >
          <OrganisationCard
            servicesCount={organisation.serviceName.length}
            {...organisation}
          />
        </Link>
      )),
    [organisationName]
  );

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
            <PageHeader img={pageimg} text={"Bütün Qurumlar"} />
          </section>
        </ServiceHeading>

        <section className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {renderOrganisationCards}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Organisations;
