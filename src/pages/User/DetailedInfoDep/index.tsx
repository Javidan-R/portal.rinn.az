import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import poctgoner from "../../../assets/images/services/poctgonder.png"
const breadcrumbItems = [
  { link: '/', name: 'Əsas Səhifə' },
  { link: '/services', name: 'Xidmətlər' },
  { link: '/detailed-information-departments-service', name: 'İdarələr üzrə ətraflı məlumat' },
];

const detailedinfo = [
  {
    "serviceId": 9,
    "image":poctgoner ,
    "name": "“Aztelekom” MMC",
    "title": "İdarələr üzrə ətraflı məlumat",
    "link": "detailed-information-departments-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  }
]
export const DetailedInfoDep = () => {
  return (
    <div className="bg-gray-100">
    <div className="container-fluid v-container">
     <ServiceHeading mainLink={"/services"} backButtonProps={{
        customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
        customStyle: undefined
      }} breadcrumbItems={breadcrumbItems}/>
      <TransitionSection>
      <section>
        <PagesCard services={detailedinfo}/>
      </section>
      <section className="bg-[#fff]   shadow-md">
      </section>
      </TransitionSection>
      
    </div>
  </div>
    
  )
}
