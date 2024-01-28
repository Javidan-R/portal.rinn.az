import PageHeader from "../../../components/PageHeader";
import pageimg from '../../../assets/images/services/services.svg';
import OrganisationCard from "../../../components/OrganisationCard";
import ServiceHeading from "../../../components/ServiceHeading";
import { useState, useEffect, useMemo } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import { Organisation } from "../../../types/type";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/organisations", name: "Bütün Qurumlar" },
];

export const Organisations = () => {
  const [organisationName, setOrganisationName] = useState<Organisation[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("organisations");
        setOrganisationName(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

const renderOrganisationCards = useMemo(() => {
  return organisationName?.map((organisation) => (
    <OrganisationCard
      servicesCount={organisation.serviceName.length}
      {...organisation}
      key={organisation.organisationsId}
    >
      <Link to={`/organisations/${organisation.organisationsId}`} >
        <button className="font-normal text-[#0f52ba] text-md">Ətraflı Məlumat</button>
      </Link>
    </OrganisationCard>
  ));
}, [organisationName]);


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
        />
     <TransitionSection>
        <section>
          <PageHeader img={pageimg} text={"Bütün Qurumlar"} />
        </section>
        <section className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-8">
              {renderOrganisationCards}
            </div>
        </section>
      </TransitionSection>
        
      </div>
    </div>
  );
};

export default Organisations;