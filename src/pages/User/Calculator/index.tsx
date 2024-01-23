import { PagesCard } from "../../../components/PagesCard";
import ServiceHeading from "../../../components/ServiceHeading";
import TransitionSection from "../../../components/Widgets/TransitionSection";

const breadcrumbItems = [
  { link: '/', name: 'Əsas Səhifə' },
  { link: '/services', name: 'Xidmətlər' },
  { link: '/calculator', name: 'Radiotezlik spektrindən istifadəyə görə birdəfəlik və müddətli (aylıq və ya illik) ödənişlərin hesablanması üzrə kalkulyator' },
];

const calc = [
  {
    "serviceId": 14,
    "image": "./src/assets/images/services/calculator.png",
    "name": "Dövlət Radiotezliklər İdarəsi",
    "title": "Radiotezlik spektrindən istifadəyə görə birdəfəlik və müddətli (aylıq və ya illik) ödənişlərin hesablanması üzrə kalkulyator",
    "link": "calculator",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  },
]

export const Calculator = () => {
  return (
    <div className="bg-gray-100">
      <div className="container-fluid v-container">
       <ServiceHeading mainLink={"/services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <TransitionSection>
        <section>
          <PagesCard services={calc}/>
        </section>
        <section className="bg-[#fff]   shadow-md">
        </section>
        </TransitionSection>
        
      </div>
    </div>
  )
}

 