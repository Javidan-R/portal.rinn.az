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
  {
    id: 2,
    name: "MCQS",
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
  {
    id: 3,
    name: "IMEI",
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
    name: "Telekommunikasiya",
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
      {
        serviceId: 77 ,
        image: "./src/assets/images/services/localtalks.png",
        title: "Lokal (şəhər, rayon, daxili) çıxış danışıqlarının statistikası",
        name: "“Aztelekom” MMC",
        link: "local-talks-service",
        sing: "Qeydiyyatlı",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 45,
        image: "./src/assets/images/services/listmobile.png",
        title: "Vətəndaşların adına olan mobil nömrələr barədə məlumat",
        name: "“AzInTelecom” MMC",
        link: "list-mobile-number-service",
        sing: "Qeydiyyatlı" ,
        pay: "Ödənişsiz",
      }
      
    ],
  },
  {
    id: 6,
    name: "Lokal danışıqlar",
    serviceName: [
      {
        serviceId: 77 ,
        image: "./src/assets/images/services/localtaks.png",
        title: "Lokal (şəhər, rayon, daxili) çıxış danışıqlarının statistikası",
        name: "“Aztelekom” MMC",
        link: "local-talks-service",
        sing: "Qeydiyyatlı",
        pay: "Ödənişsiz",
      }
      
    ],
  },
  {
    id: 6,
    name: "Telefon",
    serviceName: [
      {
        serviceId: 77 ,
        image: "./src/assets/images/services/localtaks.png",
        title: "Lokal (şəhər, rayon, daxili) çıxış danışıqlarının statistikası",
        name: "“Aztelekom” MMC",
        link: "local-talks-service",
        sing: "Qeydiyyatlı",
        pay: "Ödənişsiz",
      },
      {
        serviceId: 45,
        image: "./src/assets/images/services/listmobile.png",
        title: "Vətəndaşların adına olan mobil nömrələr barədə məlumat",
        name: "“AzInTelecom” MMC",
        link: "list-mobile-number-service",
        sing: "Qeydiyyatlı" ,
        pay: "Ödənişsiz",
      },
      
    ],
  },
  {
    id: 7,
    name: "Küçə axtarışı",
    serviceName: [],
  },
  { id: 8, name: "Borc və İcra ödənişi" ,serviceName: [],},
  { id: 9, name: "Şəhadətnamələrin alınması",serviceName: [], },
  { id: 12, name: "Uyğunluq",serviceName: [
    {
      serviceId: 11,
      image: "./src/assets/images/services/uygunluqsert.png",
      name: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
      title: "Uyğunluq sertifikatının verilməsi",
      link: "issuing-certificate-conformity-service",
      sing: "Qeydiyyatsız",
      pay: "Ödənişsiz"
    }
  ], },
  { id: 13, name: "Sertifikat" ,serviceName: [
    {
      serviceId: 11,
      image: "./src/assets/images/services/uygunluqsert.png",
      name: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
      title: "Uyğunluq sertifikatının verilməsi",
      link: "issuing-certificate-conformity-service",
      sing: "Qeydiyyatsız",
      pay: "Ödənişsiz"
    }
  ],},

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
    <div className="swiper-container">
      <div className="swiper-shadow-left"></div>
      <Swiper spaceBetween={10} slidesPerView={7}>
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
      <div className="swiper-shadow-right"></div>
    </div>
  </div>
  

  );
};

export default SwiperComponent;
