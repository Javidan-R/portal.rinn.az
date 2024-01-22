import { PagesCard } from "../../../components/PagesCard"
import ServiceHeading from "../../../components/ServiceHeading"
import TransitionSection from "../../../components/Widgets/TransitionSection"
import klassifikator from "../../../assets/images/services/klassifikator.png"
const breaditems=[
  { link: "/", name: "Əsas səhifə" },
  { link: "/services", name: "Bütün xidmətlər" },
  {
    link: "/search-offices-classifier-service",
    name: "Ümumi istifadədə olan avtomobil yolları ilə iriqabaritli və ağırçəkili nəqliyyat vasitələrinin hərəkət etməsi və onların hərəkətinə xüsusi icazənin verilməsi",
  },
]
const registrationRadio  = [
  {
    "serviceId": 7,
    "image": klassifikator,
    "name": "“Aztelekom” MMC",
    "title": "Klassifikator üzrə idarələrin axtarışı",
    "link": "search-offices-classifier-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  },
]
export const SearchOfficesClassifier = () => {
  return (

<div className="bg-gray-100">
<div className="container-fluid v-container">
<ServiceHeading mainLink={"services"} backButtonProps={{
      customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
      customStyle: undefined
    }} breadcrumbItems={breaditems}/>
    <TransitionSection>
    <section>
      <PagesCard services={registrationRadio}/>
    </section>
  <section className="bg-white rounded-xl mt-6">
  </section>
  </TransitionSection>
  
</div>
</div>
  )
}


