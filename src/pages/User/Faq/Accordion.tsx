import { FC, useState } from "react";
import styles from "./Accordion.module.css";
import { AccProps } from "../../../types/type";
import { AccordionItem } from "./AccordionItem";
export interface AccordionProps {
  data: AccProps[];
}
export const Accordion: FC<AccordionProps> = ({ data }) => {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  return (
    <section className={styles.accordion}>
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
