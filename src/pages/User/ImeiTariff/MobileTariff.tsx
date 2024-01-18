import React from 'react';
import { MobileTariffInput } from './MobileTariffInput';

export const MobileTariff: React.FC = () => {
  const manufacturers = ["Apple", "Samsung", "Lenovo", "LG", "Xiaomi", "HTC", "Nokia", "HUAWEI", "Alcatel", "Acer"];

  return (
    <div className="mobile-tariff">
      <div className="p-2">
        <div className="flex flex-wrap justify-start mx-2 text-left">
          <div className="w-full md:w-5/12 lg:w-4/12">
            <MobileTariffInput
              label="İstehsalçı adı"
              placeholder="İstehsalçı adı daxil edin"
              manufacturers={manufacturers}
            />
          </div>
          <div className="w-full md:w-5/12 lg:w-4/12 mt-4 md:mt-0">
            <MobileTariffInput
              label="Model adı"
              placeholder="Model adı daxil edin"
              manufacturers={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
