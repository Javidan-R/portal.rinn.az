import { AccProps } from "../../../types/type";
import ServiceHeading from "../../../components/ServiceHeading";
import { Accordion } from "./Accordion";
import TransitionSection from "../../../components/Widgets/TransitionSection";
const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/faq", name: "FAQ" },
 
];
const faqs: AccProps[] = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export const Faq = () => {
  return (
    <>
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink="/services"
          backButtonProps={{
            customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <TransitionSection>
        <section>
        <Accordion data={faqs} />

        </section>
        </TransitionSection>
       
      </div>
      </div>
    </>
  );
};






