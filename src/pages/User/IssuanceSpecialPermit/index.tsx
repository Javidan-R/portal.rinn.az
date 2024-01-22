import { PagesCard } from "../../../components/PagesCard"
import ServiceHeading from "../../../components/ServiceHeading"
import TransitionSection from "../../../components/Widgets/TransitionSection"
import avadanliq from "../../../assets/images/services/avadanliq.png"
const BreadcrumbItems = [
  { link: '/', name: 'Əsas səhifə' },
  { link: '/services', name: 'Bütün xidmətlər' },
  {
    link: '/issuance-special-permit-service',
    name: 'Avadanlıqların mülki dövriyyəsinə xüsusi icazənin verilməsi',
  },
];
const issuance = [ 
  {
    "serviceId": 12,
    "image": avadanliq,
    "name": "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
    "title": "Avadanlıqların mülki dövriyyəsinə xüsusi icazənin verilməsi",
    "link": "issuance-special-permit-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  }
]
export const IssuanceSpecialPermit = () => {
  return (
    <div className="bg-gray-100">
    <div className="container-fluid v-container">
    <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={BreadcrumbItems}/>
        <TransitionSection>
        <section>
          <PagesCard services={issuance}/>
        </section>
      <section className="bg-white rounded-xl mt-6">
      </section>
      </TransitionSection>
      
    </div>
  </div>
  )
}
