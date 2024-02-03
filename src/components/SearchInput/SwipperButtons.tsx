import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useDispatch } from 'react-redux';
import SwipperButton from "../atoms/Button/SwipperButton";
import "./SwiperComponent.css";
import { Service } from "../../types/type";
import { useNavigate } from "react-router-dom";
import { setSelectedService } from "../../redux/serviceBtnSlice";
const buttons = [
  {
    id: 1,
    name: "Mobil",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/Imei.png",
        title: "IMEI Qeydiyyat",
        name: "“AzInTelecom” MMC",
        link: "mcqs-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişli",
      },
      {
        serviceId: 2,
        image: "./src/assets/images/services/Mobiltarifler.png",
        title: "Mobil cihazların qeydiyyat tarifləri",
        name: "“AzInTelecom” MMC",
        link: "imei-tariff-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 3,
        image: "./src/assets/images/services/Imeiyoxlama.png",
        title: "IMEI yoxlama",
        name: "“AzInTelecom” MMC",
        link: "imei-check-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  // { id: 2, name: "MCQS" },
  // { id: 3, name: "IMEI" },
  {
    id: 2,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  {
    id: 3,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  {
    id: 4,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  {
    id: 5,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  {
    id: 6,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },
  {
    id: 7,
    name: "Poçt göndərişləri",
    serviceName: [
      {
        serviceId: 1,
        image: "./src/assets/images/services/kuce.png",
        title: "Küçə adına və poçt indeksinə görə küçələrin axtarışı",
        name: "“Azərpoçt” MMC",
        link: "street-search-service",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 10,
        image: "./src/assets/images/services/poctgonder.png",
        name: "“Azərpoçt” MMC",
        title: "Poçt göndərişlərinin izlənilməsi",
        link: "postal-tracking-service  ",
        sing: "Qeydiyyatsız",
        pay: "Ödənişsiz",
      },
    ],
  },

  // { id: 5, name: "Telekommunikasiya" },
  // { id: 6, name: "Lokal danışıqlar" },
  // { id: 7, name: "Telefon" },
  // { id: 8, name: "Küçələrin axtarışı" },
  // { id: 9, name: "Borc və İcra ödənişi" },
  // { id: 10, name: "IMEI" },
  // { id: 11, name: "Şəhadətnamələrin alınması" },
  // { id: 12, name: "Uyğunluq" },
  // { id: 13, name: "Sertifikat" },
];
interface SwiperComponentProps {
  onServiceClick: (services: Service[]) => void;
}
const SwiperComponent: React.FC<SwiperComponentProps> = ({
  onServiceClick,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (services?: Service[]) => {
    if (services && services.length > 0) {
      onServiceClick(services); // Pass the entire array to onServiceClick
      dispatch(setSelectedService(services));
      console.log(services);
      
            navigate("/search-result");
    }
  };

  return (
    <div className="search__tags">
      <Swiper spaceBetween={10} slidesPerView={7} className="swiper-container">
        {buttons.map((item, key) => (
          <SwiperSlide
            key={key}
            className="swiper-slide"
            style={{
              width: "initial",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <SwipperButton
              className="swiper-button"
              onClick={() => item.serviceName && handleButtonClick(item.serviceName)}
            >
              {item.name}
            </SwipperButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
