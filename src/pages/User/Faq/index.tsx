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
    title: "Vahid Elektron Xidmətlər Portalı hansı zərurətdən yaranıb?",
    text:
      "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinə tabe olan qurumların elektron xidmətlərinə tam nəzarət etmək, xidmətlər üzrə dəqiq statistik məlumatların toplanması, xidmətlərdən istifadə prosesini asanlaşdırmaq üçün Vahid Elektron Xidmətlər Portalının yaradılmasına ehtiyac yaranıb.",
  },
  {
    title: "Vahid Elektron Xidmətlər Portalının yaradılmasına məqsəd nədir?",
    text:
      "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin tabe qurumunlarının təqdim etdiyi elektron xidmətləri vətəndaşlar üçün daha əlçatan etmək, müştəri məmnuniyyətini artırmaq, istifadəçilərin elektron xidmətləri daha rahat tapması məqsədi ilə yaradılıb.",
  },
  {
    title: "Yeni portalın istifadəyə verilməsi ilə Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi hansı üstünlükləri əldə edəcək?",
    text:
      "Vahid Elektron Xidmətlər Portalı istifadəyə verildikdən sonra Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin təqdim etdiyi və vətəndaşların istifadə etdiyi elektron xidmətlərə tam nəzarət etmək, məlumat bazasını formalaşdırmaq, təhlillər əsasında sistemi çevik təkmilləşdirmək və istifadə prosesini asanlaşdırmaqla səmərəliliyi artırmaq mümkün olacaq.",
  },
  {
    title: "Vahid Elektron Xidmətlər Portalında hansı xidmətlərdən istifadə etmək mümkün olacaq?",
    text:
      "Vahid Elektron Xidmətlər Portalı üzərindən vətəndaşlar Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin bütün tabe idarələrinin, yəni 14 qurumunun təqdim etdiyi elektron xidmətlərdən istifadə edə biləcəklər.",
  },
];

 const Faq = () => {
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
        <section className="bg-white p-6 my-8 rounded-xl shadow-xl">
        <Accordion data={faqs} />

        </section>
        </TransitionSection>
       
      </div>
      </div>
    </>
  );
};






export default Faq