import { FC, useState } from "react";
import { AccountInsideSearch } from "./AuthAccount";

interface AppealData {
  companyName: string;
  serviceName: string;
  date: number;
}

const exampleData: AppealData[] = [
  { companyName: "AzİnTelecom MMC", serviceName: "Vətəndaşların adına mobil nömrələr olması  barədə məlumat", date: 1612337000 },
  { companyName: "AzİnTelecom MMC", serviceName: "Vətəndaşların adına mobil nömrələr olması  barədə məlumat", date: 1609459200 },
  { companyName: "AzİnTelecom MMC", serviceName: "Vətəndaşların adına mobil nömrələr olması  barədə məlumat", date: 1577836800 },
];

const Appeals: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredData = exampleData.filter(item =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full md:w-3/4 p-4 row">
      <div className="col-12 md:col-10 w-full md:w-5/6 p-4 bg-white h-96 border rounded-xl my-10 shadow-xl">
        <div>
          <AccountInsideSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchName="Müraciətlərim" />
          <div className="overflow-x-auto mt-4">
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Qurum adı</th>
                  <th className="px-4 py-2">Xidmət adı</th>
                  <th className="px-4 py-2">Tarix</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length>0 ? (filteredData.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2">{item.companyName}</td>
                    <td className="border-b px-4 py-2">{item.serviceName}</td>
                    <td className="border-b px-4 py-2">{new Date(item.date * 1000).toLocaleString()}</td>
                  </tr>
                ))) : (
                    <div className="bg-orange-300 p-4 w-full border rounded-xl my-10 shadow-xl">
              <h1 className="text-red-300">Məlumat yoxdur</h1>
            </div>
                )
            }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appeals;
