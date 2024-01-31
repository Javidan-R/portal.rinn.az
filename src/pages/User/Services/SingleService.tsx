import { useState, useEffect, FC } from "react";
import {  useParams } from "react-router-dom";
import { getSingleDataService } from "../../../HTTP/HTTP";
import { Organisation } from "../../../types/type";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import { PagesCard } from "../../../components/PagesCard";

export const SingleService: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [organisation, setOrganisation] = useState<Organisation | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleDataService("organisations", Number(id));        
        setOrganisation(response.data);
      } catch (error) {
        console.error("Error fetching single organisation data:", error);
      }
    };

    fetchData();
  }, [id,organisation]);

  return (
    <div>
      <div className="bg-[#f6f7f9]">
        <div className="container-fluid v-container">
          <ServiceHeading
            mainLink="/"
            backButtonProps={{
              customClassName:
                "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
              customStyle: undefined,
            }}
            breadcrumbItems={[
              { link: "/", name: "Əsas səhifə" },
              { link: "/organisations", name: "Bütün Qurumlar" },
            ]}
          />
          <TransitionSection>
            {organisation && (
              <>
                <section>
                  <PagesCard services={organisation.serviceName} />
                </section>
                <section>
                    <p>{organisation.desc}</p>

                </section>
              </>
            )}
          </TransitionSection>
        </div>
      </div>
    </div>
  );
};
