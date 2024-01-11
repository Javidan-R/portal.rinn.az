import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwipperButton from '../atoms/Button/SwipperButton';
import './SwiperComponent.css'; 
const buttons = [
  { id: 1, name: 'Mobil' },
  { id: 2, name: 'MCQS' },
  { id: 3, name: 'IMEI' },
  { id: 4, name: 'Poçt göndərişləri' },
  { id: 5, name: 'Telekommunikasiya' },
  { id: 6, name: 'Lokal danışıqlar' },
  { id: 7, name: 'Telefon' },
  { id: 8, name: 'Küçələrin axtarışı' },
  { id: 9, name: 'Borc və İcra ödənişi' },
  { id: 10, name: 'IMEI' },
  { id: 11, name: 'Şəhadətnamələrin alınması' },
  { id: 12, name: 'Uyğunluq' },
  { id: 13, name: 'Sertifikat' },
];
const SwiperComponent: React.FC = () => {
  return (
    <div className='search__tags'>
    <Swiper spaceBetween={10} slidesPerView={7} className="swiper-container">
      {buttons.map((item, key) => (
        <SwiperSlide key={key} className="swiper-slide" style={{width:'initial',transform: 'translate3d(0px, 0px, 0px)'}}>
          <SwipperButton className="swiper-button">{item.name}</SwipperButton>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
export default SwiperComponent;
