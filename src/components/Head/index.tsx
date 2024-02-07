import UserButton from '../atoms/Button/UserButton'
import MainLogo from "../../assets/images/MainLogo.svg";

const Head = () => {
  return (
    <header className={`header bg-white py-2 shadow-md lg:transition-all lg:duration-1000 lg:ease-in-outlg:h-[20rem] header--not-home-lg`} >
    <div className="container mx-auto px-2 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-48 md:w-64 lg:w-auto">
          <a href="/" aria-current="page">
            <img
              alt="logo"
              src={MainLogo}
              className="object-contain"
              style={{
                width: "18.75rem",
                height: "4.375rem",
                verticalAlign: "middle",
              }}
            />
          </a>
        </div>
        <div className="flex lg:flex-row sm:flex-col items-center lg:gap-14 sm:gap-2 ">
          <a href="tel:1655" className="flex justify-center gap-4">
            <img
              src="https://portal.rinn.az/img/call.859bda17.svg"
              alt="call"
            />
            <b className="text-white font-extrabold font-semibold text-base">
              1655 Çağrı Mərkəzi
            </b>
          </a>
         <UserButton/>
        </div>
      </div>

     
    </div>
  </header>
  )
}

export default Head