import React from 'react';
interface TariffRow {
  description: string;
  price: string;
}

export const MobileMarketTariff: React.FC = () => {
  const tariffRows: TariffRow[] = [
    {
      description: "Foto, videoçəkiliş və internetə çıxış funksiyaları olmayan mobil cihazların qeydiyyata alınması",
      price: "15 AZN",
    },
    { description: "100 ABŞ dollarına qədər", price: "20 AZN" },
    {
      description: "101 ABŞ dollarından 200 ABŞ dollarına qədər",
      price: "30 AZN",
    },
    {
      description: "201 ABŞ dollarından 400 ABŞ dollarına qədər",
      price: "40 AZN",
    },
    {
      description: "401 ABŞ dollarından 700 ABŞ dollarına qədər",
      price: "50 AZN",
    },
    {
      description: "701 ABŞ dollarından 1 000 ABŞ dollarına qədər",
      price: "70 AZN",
    },
    { description: "1001 ABŞ dollarından yuxarı olduqda", price: "100 AZN" },
  ];

  return (
    <div className="mobile-market-tariff p-6">
      <div className="row ">
        <div className="col-12 col-lg-12">
          <div className="table min-w-full">
            <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#304b82] text-white">
                <tr>
                  <th className="py-4 px-4 text-xl font-bold text-start">
                    Mobil cihazın bazar qiyməti
                  </th>
                  <th className="text-center py-4 px-4 text-xl font-bold text-center">
                    Dövlət Rüsumu
                  </th>
                </tr>
              </thead>
              <tbody>
                {tariffRows.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0
                        ? "even:bg-gray-50 dark:bg-gray-100"
                        : "odd:bg-gray-100"} border-b dark:border-gray-100 transition-all hover:bg-gray-300`}
                  >
                    <td className="py-4 px-4 text-lg ">{row.description}</td>
                    <td className="text-center py-4 px-4 text-lg font-medium">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 bg-gray-200 rounded-xl border p-8 mt-6">
          <ul className="mobile-market-tariff__info text-xl">
            <li className="mb-2 list-disc list-inside">
              <span>
                Marka və modeli, habelə bazar qiyməti müəyyənləşdirilməyən mobil
                cihazların qeydiyyata alınmasına görə 15 manat dövlət rüsumu
                ödənilir.
              </span>
            </li>
            <li className="mb-2 list-disc list-inside">
              <span>
                İki simkartlı mobil cihazların qeydiyyata alınması zamanı 2 IMEI
                üzrə bir dövlət rüsumu tələb edilir.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMarketTariff;
