import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {  getSingleDataOrganisation } from "../../../HTTP/HTTP";
import { Organisation, Service } from "../../../types/type";
import PageHeader from "../../../components/PageHeader";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import ServicesCard from "../../../components/ServicesCard";

interface RenderTableRowProps {
  label: string;
  value: React.ReactNode | null;}

const renderTableRow = ({ label, value }: RenderTableRowProps) => (
  <tr>
    <th className="text-bold pr-4 py-1 text-left">{label}</th>
    <td className="pr-2">{value}</td>
  </tr>
);

export const SingleOrganisation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [organisation, setOrganisation] = useState<Organisation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleDataOrganisation("organisations", Number(id));
        setOrganisation(response.data);
      } catch (error) {
        console.error("Error fetching single organisation data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
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
                <PageHeader img={`../../${organisation.photo}`} text={organisation.name}  />
              </section>
              <section className="mt-10 p-6 border rounded-xl shadow-md bg-white w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="w-full lg:w-2/3">
                    <table className="w-full">
                      <tbody>
                        {renderTableRow({ label: "Qurumun adı", value: organisation.name })}
                        {renderTableRow({
                          label: "Web səhifəsi",
                          value: (
                            <Link to={organisation.web} target="_blank" className="text-blueviolet">
                              {organisation.web}
                            </Link>
                          ),
                        })}
                        {renderTableRow({ label: "Telefon", value: organisation?.tel1 })}
                        {renderTableRow({ label: "E-poçt", value: organisation.email })}
                        {organisation?.tel2 &&
                          renderTableRow({ label: "Telefon", value: organisation?.tel2 })}
                      </tbody>
                    </table>
                    <hr className="my-6" />
                    <div>
                      <strong className="text-lg">Qurum Haqqında</strong>
                      <p>{organisation.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 hidden lg:block">
                    <iframe
                      className="w-full h-48 lg:h-64 rounded-lg"
                      // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2794653572314!2d49.831168015648274!3d40.38049836576564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcebf10b3d12e3d14!2zNDDCsDIyJzQ5LjgiTiA0OcKwNTAnMDAuMSJF!5e0!3m2!1sen!2s!4v1650270384328!5m2!1sen!2s"
                      title="Google Maps"
                    ></iframe>
                  </div>
                </div>
              </section>

              <div className="py-12 pb-20">
                <div className="flex justify-start align-center gap-4 py-4">
                  <h3 className="text-4xl text-extrabold">Xidmətlər</h3>
                  <span className="bg-[#e1e9f6] border w-[2.5rem] h-[2.5rem] text-[#304b82] rounded-md flex justify-center align-center text-3xl">
                    {organisation.serviceName.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                  {organisation.serviceName.map((service: Service) => (
                    <Link
                    to={`/services/${service.link}`}
                    key={service.serviceId}
                  >
      <ServicesCard image={service.image} title={service.title} sing={service.sing} link={service.link}  />
                        </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </TransitionSection>
      </div>
    </div>
  );
};

export default SingleOrganisation;
