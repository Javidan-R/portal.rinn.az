import React, { useState } from 'react';
import { ImeiTariffServiceComponent } from './ImeiTariffServiceComponent';
import { MobileTariff } from './MobileTariff';
import { MobileMarketTariff } from './MobileMarketTariff'; // Import MobileMarketTariff component

export const ImeiTariffService: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>("mobileTariff");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="imei-tariff-service__input-wrapper">
      <div className="flex justify-start gap-4">
        <ImeiTariffServiceComponent
          label="Mobil cihaz modelləri üzrə tariflər"
          id="mobileTariff"
          value="mobileTariff"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <ImeiTariffServiceComponent
          label="Mobil cihazın bazar qiyməti üzrə tariflər"
          id="mobileMarketTariff"
          value="mobileMarketTariff"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </div>
      {selectedOption === "mobileTariff" && <MobileTariff />}
      {selectedOption === "mobileMarketTariff" && <MobileMarketTariff />}
    </div>
  );
};
