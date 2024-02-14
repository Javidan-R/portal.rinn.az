import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imeiinfo from '../../../assets/images/services/imei-info.svg';

interface ModalPageProps {
  onClose: () => void;
}

const ModalPage: React.FC<ModalPageProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleClickInside = (event: MouseEvent) => {
      event.stopPropagation();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    modalRef.current?.addEventListener("mousedown", handleClickInside);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      modalRef.current?.removeEventListener("mousedown", handleClickInside);
    };
  }, [onClose]);

  return (
    <div className="modal-content modal-slide-in bg-white rounded-lg p-6 lg:w-[65%] xl:w-[60%] xxl:w-[17%] w-full mx-4 bg-white transition-transform transform 1s ease-in transform-gpu overflow-y-auto overflow-x-hidden h-100 max-h-full " ref={modalRef}>
      <h1 className="text-2xl text-center mb-4"> Məlumat</h1>
      <hr />
      <div className='flex justify-center'>
        <img src={imeiinfo} className='w-[6rem]' alt="Gömrük Qaydaları Haqqında Məlumat" />
      </div>
      <p>
        Azərbaycan Respublikası Nazirlər Kabinetinin 14 oktyabr 2013-cü il tarixli 305 nömrəli Qərarı ilə təsdiq edilmiş “Fiziki şəxslər tərəfindən istehsal, yaxud kommersiya məqsədləri üçün nəzərdə tutulmayan malların gömrük sərhədindən keçirilməsinin güzəştli və sadələşdirilmiş Qaydaları”nın 1 nömrəli əlavəsinin 9-cu bəndinə əsasən fiziki şəxslər tərəfindən səfər zamanı, həmçinin poçt göndərişləri ilə ölkə ərazisinə gətirilən mobil telefon və digər simsiz rabitə avadanlıqları gömrük sərhədindən keçirilərkən yazılı (kağız üzərində və ya elektron) formada gömrük orqanlarında bəyan edilməlidir. Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi vətəndaşların nəzərinə çatdırır ki, cari ilin fevral ayının 15-dən etibarən fiziki şəxslər tərəfindən ölkə ərazisinə şəxsi istifadə məqsədilə gətirilən və gömrük orqanlarında bəyan edilməyən mobil telefonların İMEİ nömrəsi Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin qeydiyyat mərkəzi tərəfindən qeydiyyata alınmayacaqdır. Mobil telefonların bəyan edilməsi qaydalarına dair Dövlət Gömrük Komitəsinin www.customs.gov.az internet səhifəsindən məlumat ala bilərsiniz. Mobil cihazın bəyan edilməsi üçün aşağıdakı keçiddən istifadə edə bilərsiniz:
      </p>
      <Link to={"https://e.customs.gov.az/for-individuals/passenger-declaration"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block text-center mt-4">
        https://e.customs.gov.az/for-individuals/passenger-declaration
      </Link>
      <div className='flex justify-center mt-4'>
        <button onClick={onClose} className= " w-[16rem] text-center bg-white hover:bg-blue-700 hover:text-white text-dark-500  border border-2 border-dark-600 font-bold py-2 px-4 rounded block">
          Bağla
        </button>
      </div>
    </div>
  );
};

export default ModalPage;
