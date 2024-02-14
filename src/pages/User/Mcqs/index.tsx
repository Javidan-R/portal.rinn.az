import  { useEffect, useState } from 'react';
import { PagesCard } from '../../../components/PagesCard';
import Steps from '../../../components/Steps';
import ServiceHeading from '../../../components/ServiceHeading';
import imei from '../../../../src/assets/images/services/Imei.png';
import TransitionSection from '../../../components/Widgets/TransitionSection';
import { useNavigate } from 'react-router-dom';
import ModalPage from '../../../components/Widgets/ModalContent/ModalPage';

const breadcrumbItems = [
  { link: '/', name: 'Əsas səhifə' },
  { link: '/services', name: 'Bütün xidmətlər' },
  { link: '/mcqs-service', name: 'Mobil cihazların qeydiyyat sistemi' },
];

const mcqs = [
  {
    serviceId: 1,
    image: imei,
    title: 'IMEI Qeydiyyat',
    name: '“AzInTelecom” MMC',
    link: 'mcqs-service',
    sing: 'Qeydiyyatsız',
    pay: 'Ödənişsiz',
  },
];
const Mcqs = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
    return () => {
      setIsModalOpen(false); // Bileşen kaldırıldığında modalı kapat
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/services/mcqs-service'); // Modal kapatıldığında services sayfasına yönlendir
  };

  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink="/services"
          backButtonProps={{
            customClassName: 'flex flex-row flex-nowrap justify-center gap-2 items-center align-center',
            customStyle: undefined,
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <TransitionSection>
          <section>
            <PagesCard services={mcqs} />
          </section>
          <section>
            <Steps />
          </section>
        </TransitionSection>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="transition-opacity duration-100 ease-in-out"></div>
            <div
              className=" fixed top-0 left-0 right-0 bottom-0 transition-transform duration-100 ease-in-out transform"
              style={{
                transform: isModalOpen ? "translateY(0%)" : "translateY(100%)",
              }}
            >
              <div className="flex items-center justify-center min-h-screen mt-5">
                  <ModalPage onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mcqs;
