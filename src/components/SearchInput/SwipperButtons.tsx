import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import SwipperButton from '../atoms/Button/SwipperButton';


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
    <Swiper
      spaceBetween={10}
      slidesPerView={7}
      style={{
        position: 'relative',
        width: '100%',
        height: '2.3rem', // Set a fixed height
        zIndex: 1,
        display: 'flex',
        overflow: 'hidden', // Hide overflow to keep fixed height
        boxSizing: 'content-box',
        gap: '10px',
        margin: '20px auto  ',
        boxShadow: '4px 0 0 rgba(0, 0, 0, 0.1), 1px 0 0 rgba(0, 0, 0, 0.1)',

      }}
    >
      {buttons.map((item, key) => (
        <SwiperSlide key={key} style={{
          width:'auto',
            whiteSpace: 'nowrap',
            marginRight: '10px',
            height: '2.2rem', // Set a fixed height


        }}  >
            
          <SwipperButton
           style={{
            padding: '.5rem .875rem',
            borderRadius: '1rem',
            backgroundColor: 'hsla(0,0%,100%,.2)',
            display: 'inline-block',
            fontSize: '.875rem',
            lineHeight: '1.125rem',
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
            border: 'none',
            width: 'auto',
            whiteSpace: 'nowrap',
          }}
           
          >
            {item.name}
          </SwipperButton>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export  default SwiperComponent;