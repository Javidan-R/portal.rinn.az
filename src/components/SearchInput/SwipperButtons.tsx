import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useDispatch } from "react-redux";
import SwipperButton from "../atoms/Button/SwipperButton";
import "./SwiperComponent.css";
import { BtnData, Service } from "../../types/type";
import { useNavigate } from "react-router-dom";
import { setSelectedService } from "../../redux/serviceBtnSlice";

interface SwiperComponentProps {
  data: BtnData[];
}
const SwiperComponent: React.FC<SwiperComponentProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = (services?: Service[]) => {
    if (services && services.length > 0) {
      dispatch(setSelectedService(services));
      // Sorğu parametrlərini əlavə et
      const queryParams = new URLSearchParams();
      queryParams.append("serviceName", services.map(service => service.name).join(","));
      queryParams.append("serviceId", services.map(service => service.serviceId).join(","));
      navigate({
        pathname: "/search-result",
        search: `?${queryParams.toString()}`,
      });
    }
  };

  return (
    <div className="search__tags">
      <div className="swiper-container">
        <Swiper spaceBetween={10} slidesPerView={7}>
          {data.map((item, key) => (
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
                onClick={() =>
                  item.serviceName && handleButtonClick(item.serviceName)
                }
              >
                {item.name}
              </SwipperButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
