import { FC, useState } from "react";
import { AccountInsideSearch } from "./AuthAccount";

interface UserContactData {
  companyName: string;
  serviceName: string;
  date: number;
}

const exampleData: UserContactData[] = [
 ];

const UserContact: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredData = exampleData.filter(item =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full md:w-3/4 p-4 row">
      <div className="col-12 w-full md:w-5/5 p-4 bg-gray-100 border rounded-xl my-10 shadow-xl">
      <AccountInsideSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchName="Əks əlaqə" />
        {
          filteredData.length>0 ? (
           <div>{filteredData.map((index)=>(index.companyName))}</div>
          ) : (
            <div className="bg-orange-300 p-4 w-full border rounded-xl my-10 shadow-xl">
              <h1 className="text-white text-lg ">Məlumat yoxdur</h1>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default UserContact;
