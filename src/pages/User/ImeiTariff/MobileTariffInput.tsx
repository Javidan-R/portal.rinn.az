import React, { useState, useEffect, useRef } from "react";
import Input from "../../../components/atoms/Input/Input";

export interface MobileTariffInputProps {
  label: string;
  placeholder: string;
  manufacturers: string[];
}

export const MobileTariffInput: React.FC<MobileTariffInputProps> = ({
  label,
  placeholder,
  manufacturers,
}) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<
    string | null
  >(null);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleManufacturerSelect = (item: string) => {
    setSelectedManufacturer(item);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="col-lg-8 p-2 relative ">
      <div className="bg-white rounded-lg ">
        <label htmlFor="manufacturerName" className="text-lg font-semibold">
          {label}
        </label>
        <div className="relative" ref={dropdownRef}>
          <Input
            name={"mobiletarif"}
            type={"text"}
            id={"manufacturerName"}
            placeholder={placeholder}
            readOnly
            onClick={toggleDropdown}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
          />
          <img
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            src="https://portal.rinn.az/img/select-down.ebacd8c3.svg"
            alt="Select Icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute p-8 shadow-lg rounded-2xl bg-white min-w-[47.5rem] max-h-[31.25rem] top-full overflow-y-auto overflow-x-hidden z-50">
              <div className="grid grid-cols-2 gap-4">
                {manufacturers.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleManufacturerSelect(item)}
                    className="px-4 py-2 cursor-pointer border rounded-lg bg-gray-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
