import { FC, useState } from "react";
import { AccProps } from "../../../types/type";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  data: AccProps[];
}

const Accordion: FC<AccordionProps> = ({ data }) => {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  return (
    <section className="space-y-4">
      {data.map((element, index) => (
        <AccordionItem
          key={element.title}
          title={element.title}
          index={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {element.text}
        </AccordionItem>
      ))}
    </section>
  );
};

interface AccordionItemProps {
  title: string;
  index: number;
  curOpen: number | null;
  onOpen: (index: number | null) => void;
  children?: React.ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({
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
    <div className="border-b">
      <div
        className="flex items-center justify-between py-3 cursor-pointer transition-colors duration-300"
        onClick={handleToggle}
      >
        <p className="text-lg font-semibold mb-2">{title}</p>
        <p className="text-gray-400 transform transition-transform duration-300">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </p>
      </div>
      <div
        className={`px-4 py-3 text-gray-700 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem };
