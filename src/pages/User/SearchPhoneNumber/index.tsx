import { PagesCard } from "../../../components/PagesCard"
import ServiceHeading from "../../../components/ServiceHeading"
const breadcrumbItems = [
  { link: '/', name: 'Home' },
  { link: '/services', name: 'Services' },
  { link: '/imei-check-service', name: 'IMEI Tariff Service' },
];

export const SearchPhoneNumber = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
      <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}>
<section>
          <PagesCard/>
        </section>
        </ServiceHeading>
        
          <section className="bg-[#fff]   shadow-md">
        </section>
       </div>
       </div>
  )
}
// function SearchPhoneNumberService() {
//   return(
//     <></>
//   )
// }