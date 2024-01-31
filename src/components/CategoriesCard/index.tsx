import { FC } from "react";
import { Link } from "react-router-dom";
interface CategoriesCardProps {
    image:string,
  title:string,
  desc:string,
  categoriesId:number,
}
const CategoriesCard: FC<CategoriesCardProps> = ({
  image,
  title,
  desc,
  categoriesId,
}) => {
  const buttonClass =
    "w-[90.8px] h-[30px] font-normal text-sm leading-none text-blue-700 bg-blue-100 rounded-md px-2 py-1 h-5";

  return (
    <Link to={`/categories/${categoriesId}`}>

  
        <div className={`p-5 bg-white border border-solid border-gray-200  cursor-pointer shadow-md    w-full flex items-center w-full flex items-center rounded-lg  h-[104px] lg:h-[120px]`}>
          <div className="cursor-pointer text-gray-900  flex items-center ">
            <div className="flex-none">
              <img src={image} alt="icon" className="h-12 w-12 object-contain" />
            </div>
             <article className="ml-4  w-60 text-wrap">
          <div className="font-extrabold overflow-hidden truncate text-base mb-1">{title}</div>
          <div className="w-72 line-clamp-2 max-w-full " style={{fontSize: '.75rem'}}>{desc}</div>
        </article>
          </div>
        </div>
      </Link>

  );
};

export default CategoriesCard;
