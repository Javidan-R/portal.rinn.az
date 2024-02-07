import { useEffect, useState } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import CategoriesCard from "../../../components/CategoriesCard";
import { Category } from "../../../types/type";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("categories");
        setCategories(response.data);        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        id="categories"
        className="pt-6 md:pt-10 pb-8  sm:h-auto md:h-96 lg:h-[27rem] "
      >
        <div className="container mx-auto">
          <div className="h-20">
            <h3 className="font-semibold text-3xl text-#14142b">
              Elektron xidmət kateqoriyaları
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((category: Category) => (
            <CategoriesCard {...category} key={category.categoriesId} />
          ))}
        </div>
      </section>
    </>
  );
};

// export async function loader() {
//   try {
//     const categories: Category[] = await getCategories();
//     return categories;
//   } catch (error) {
//     console.error("Error loading categories:", error);
//     return [];
//   }
// }
