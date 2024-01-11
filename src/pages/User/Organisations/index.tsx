import BackButton from "../../../components/atoms/Button/BackButton"
import BredCrumb from "../../../components/Common/BredCrumb"
import PageHeader from "../../../components/PageHeader"

export const Organisations = () => {
  return (
    <div>
       <div>
        <BackButton className=" bg-transparent color-blue-500 text-lg w-20 outline  ">
          Geri
        </BackButton>
        <BredCrumb link={"/"} name={" Əsas səhifə "} text={"Bütün xidmətlər"}/>
      </div>
      <div>
        <PageHeader img={"../../../assets/images/organisations/Azerkosmos.jpg"} text={"Bütün xidmətlər"}/>
      </div>



    </div>
  )
}

