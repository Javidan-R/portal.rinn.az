import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Category, Service } from "../../../types/type";
// import { getSingleDataCategories } from "../../../HTTP/HTTP";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import PageHeader from "../../../components/PageHeader";
import ServicesCard from "../../../components/ServicesCard";
import { getSingleDataCategories } from "../../../HTTP/HTTP";
import info from "../.../../../../assets/images/categories/info.svg";

export const SingleCategory: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleDataCategories("categories", Number(id));
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching single organisation data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
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
              { link: "/", name: "Bütün Kateqoriyalar" },
            ]}
          />
          <TransitionSection>
            {category && (
              <>
                <section className="py-2 pb-6">
                  <PageHeader
                    img={`../../${category.image}`}
                    text={category.title}
                  />
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-4">
                  {category.serviceName && category.serviceName.length > 0 ? (
                    category.serviceName.map((service: Service) => (
                      <Link
                        to={`/services/${service.serviceId}`}
                        key={service.serviceId}
                      >
                        <ServicesCard
                          image={service.image}
                          title={service.title}
                          sing={service.sing}
                          link={service.link}
                        />
                      </Link>
                    ))
                  ) : (
                    <section className="bg-white p-8 border rounded-xl shadow-lg ">
                      <div className="bg-[#fafafa] p-8 border rounded-lg  flex justify-center align-center items-center">
                        <div className=" flex flex-col justify-center ">
                          <img
                            src={info}
                            alt={category.title}
                            className="w-20 object-cover m-auto p-4"
                          />
                          <h3 className="text-center font-extrabold w-72 text-xl">
                            {" "}
                            Bu kateqoriyaya uyğun xidmət mövcud deyil{" "}
                          </h3>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </>
            )}
          </TransitionSection>
        </div>
      </div>
    </>
  );
};
export default SingleCategory;