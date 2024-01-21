import React, { FC, ReactNode } from "react";
import styles from "./Accordion.module.css";
import { AccProps } from "../../../types/type";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionItemProps extends AccProps {
  index: number;
  curOpen: number | null;
  onOpen: (index: number | null) => void;
  children?: ReactNode;
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
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </p>
      {isOpen && <div className={styles["content-box"]}>{children}</div>}
    </div>
  );
};
