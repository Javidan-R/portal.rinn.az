import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import  telefon from "../../../assets/images/services/telefon.png";
import SearchPhoneNumberService from "./SearchPhoneNumberService.1";

const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Xidmətlər" },
  { link: "/search-phone-number-service", name: "Telefon nömrəsi üzrə axtarış" },
];
const searchPhoneNumber =[ {
  "serviceId": 6,
  "image": telefon,
  "name": "“Aztelekom” MMC",
  "title": "Telefon nömrəsi üzrə axtarış",
  "link": "search-phone-number-service",
  "sing": "Qeydiyyatsız",
  "pay": "Ödənişsiz"
},]
 const SearchPhoneNumber = () => {
  return (
    <div className="bg-gray-100">
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
          <section>
            <PagesCard services={searchPhoneNumber} />
          </section>

        <SearchPhoneNumberService onSelect={()=>{}}/>
      </div>
    </div>
  );
};

export default SearchPhoneNumber;
