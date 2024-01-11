import BredCrumb from "../../../components/Common/BredCrumb"
import { Pagination } from "../../../components/Common/Pagination"
import PageHeader from "../../../components/PageHeader"
import ServiceCard from "../../../components/ServicesCard"
import BackButton from "../../../components/atoms/Button/BackButton"

export const Services = () => {
  return (
    <div>

      <div>
        <BackButton children={undefined}/>
        <BredCrumb link={""} name={""} text={""}/>
      </div>
      <div>
        <PageHeader img={""} text={""}/>
      </div>

  <div>
    <ServiceCard name={""} desc={""} image={""}/>
  </div>
  <div>
    <Pagination />
  </div>



    </div>
  )
}
