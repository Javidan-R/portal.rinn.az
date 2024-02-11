import { FC,  } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  index: number;
  curOpen: number | null;
  onOpen: (index: number | null) => void;
  children?: React.ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  index,
  curOpen,
  onOpen,
  children,
}) => {
  const isOpen = index === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : index);
  };

  return (
    <div
      className={`rounded-md bg-white shadow-md overflow-hidden border ${
        isOpen ? "border-blue-500" : "border-gray-200"
      }`}
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
        <p className="text-lg font-semibold text-gray-700">{title}</p>
        <p className="text-gray-400">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </p>
      </div>
      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-200 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};
