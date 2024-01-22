import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import radiomane from "../../../assets/images/services/radiomane.png"

const breadcrumbItems = [
  { link: '/', name: 'Əsas Səhifə' },
  { link: '/services', name: 'Xidmətlər' },
  { link: '/appeal-radio-service', name: 'Radiomaneələrlə bağlı müraciət' },
];
const appealradio = [
  {
    "serviceId": 13,
    "image": radiomane,
    "name": "Dövlət Radiotezliklər İdarəsi",
    "title": "Radiomaneələrlə bağlı müraciət",
    "link": "appeal-radio-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  },
]

export const AppealRadio = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
       <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <TransitionSection>
        <section>
          <PagesCard services={appealradio}/>
        </section>
        <section className="bg-[#fff]   shadow-md">
        </section>
        </TransitionSection>
        
      </div>
    </div>
  )
}
