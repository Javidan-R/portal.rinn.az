import ServiceHeading from "../../../components/ServiceHeading";
import mainlogoblue from "../../../assets/images/services/mainlogo-blue.svg";
import { Link } from "react-router-dom";
import { InformationHeader } from "../../../components/İnformationHeader";
const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/information/22", name: "AZINTELECOM" },
];
const Privacy = () => {
  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink="/"
          backButtonProps={{
            customClassName:
              "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <section>
          <InformationHeader image={mainlogoblue} />
          <PrivacyComponent />
        </section>
      </div>
    </div>
  );
};

function PrivacyComponent() {
  return (
    <div className="row  rounded-xl shadow-xl border  border-1 mt-10 mb-4 p-6">
      <div className="col-12">
        <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
          <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
            <p className="font-extrabold">Telefon</p>
            <Link
              to="tel:1655"
              className=" flex justify-start items-center gap-4 cursor-pointer font-bold text-base leading-5"
            >
              <span className="text-[#0f52ba] font-normal text-base leading-5">
                1655 Çağrı Mərkəzi
              </span>
            </Link>
          </div>
          <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
            <p className="font-extrabold">Email</p>
            <Link
              to="mailto:info@azintelecom.az"
              className=" flex justify-center gap-4 cursor-pointer font-bold text-base leading-5"
            >
              <span className="text-[#0f52ba] font-normal text-base leading-5">
                mincom@mincom.gov.az
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-2" />
        <div className="">
          <p className="font-extrabold my-4">Məxfilik siyasəti</p>
          <p>
          Vahid Elektron Xidmətlər Portalı (bundan sonra-“Portal”), Azərbaycan Respublikası Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi (bundan sonra – “Nazirlik”) tərəfindən idarə olunur. Bu məxfilik siyasəti Portal və Portalda xidmətlərini təqdim edən və informasiya sistemi və ehtiyyatları inteqrasiya edilmiş Nazirliyin strukturuna daxil olan və olmayan tabeli  qurumları (bundan sonra – “Qurum”) ilə bağlı fərdi məlumatları necə toplayacağını, saxlamasını, istifadəsini və açıqlamalarını müəyyənləşdirir. Portaldan keçid etməklə Qurumlar tərəfindən göstərilən xidmətlərdən istifadə zamanı da ayrı-ayrı Məxfilik siyasəti sənədləri təqdim edilə bilər.

Portaldan istifadə etdiyiniz təqdirdə Nazirlik tərəfindən bu Məxfilik siyasətində göstərildiyi kimi fərdi məlumatlarınızı toplanması, istifadə edilməsi və açıqlanmasına razısınız.
Əgər bu şərtlərlə razı deyilsinizsə, onda xahiş edirik ki, Portaldan istifadəni dayandırasınız. Portalda Qurumların xidmətlərindən istifadə etdiyiniz təqdirdə Xidmətin göstərilməsi ilə əlaqəli fərdi məlumatlarınızın Qurum tərəfindən toplanması, istifadə edilməsi və açıqlanmasına razısınız.
Portaldan istifadə etmək üçün ilk öncə “ASAN Login” Sisteminə keçid edərək, müvafiq “Şərtlər və Qaydalar” (keçid) ilə tanış olmağınız tövsiyə olunur.

1. FƏRDİ MƏLUMATLARIN TOPLANILMASI

1.1.  Nazirlik, Portal üzərindən  xidmətləri  göstərmək üçün zəruri olan hallarda, habelə, qeyd edilən Xidmətlər ilə bağlı İstifadəçi ilə əlaqə qurmaq məqsədilə, İstifadəçnin fərdi məlumatlarını toplayır. Nazirlik İstifadəçinin fərdi məlumatlarını yalnız müvafiq normativ – hüquqi aktlar və Məxfilik siyasəti ilə nəzərdə tutulan hallarda və həcmdə üçüncü şəxslərə açıqlaya bilər.

1.2. Nazirlik İstifadəçinin könüllü olaraq Nazirliyə ötürdüyü, aşağıdakı qeyd edilən məlumatları toplayır:

- Elektron poçt ünvanı;
- Möbil telefon nömrəsi;
- Şəxsiyyət vəsiqəsinin FİN;
- Ad, soyad, ata adı;
- Portal bildirişlərini almaq üçün seçdiyiniz üsul;
- Portal istifadəçi adınız;
- Şəxsi hesabınızla əlaqəli fəaliyyət qeydləri (hesaba giriş cəhdləri, cihazın adı, modeli, əməliyyat sistemi və İP ünvanlar;
- Xidmətlə əlaqədar daxil olduğunuz səhifələr;
- Həmçinin Portalda təqdim edilən xidmətlərin xüsusiyyətinə görə Sizdən qanunvericiliklə tələb edilən digər məlumatlar toplanıla bilər.

2. FƏRDİ MƏLUMATLARI NİYƏ TOPLAYIRIQ

Sizin fərdi məlumatlarınızı toplamaqda əsas məqsəd sizin təhlükəsizliyinizi təmin etmək, sizin tələbatlarınıza və istəklərinizə daha uyğun olan effektiv xidmət və xüsusiyyətləri təqdim etməkdir. Biz yalnız bu məqsədə nail olmaq üçün lazım olan məlumatı toplayırıq.

3. FƏRDİ MƏLUMATLARIN EMALI

3.1. Nazirlik aşağıdakı məqsədlər ilə fərdi məlumatları emal edə bilər:
3.1.1. Portalın fəaliyyətinin təmin edilməsi, o cümlədən:
3.1.1.1. İstifadəçinin qeydiyyatdan keçməsi  və hesabına girişin təsdiqi üçün;
3.1.1.2. Portalda hesabı barədə İstifadəçiyə məlumat vermək üçün;
3.1.1.3. hesabdakı məlumatları yeniləmək üçün;
3.1.1.4. Portalın etibarlı və davamlı fəaliyyətini təmin etmək, həmçinin təqdim olunan Xidmətlərin spektrini genişləndirmək və yeniləmək üçün;
3.1.1.5. İstifadəçinin sorğularını cavablandırmaq üçün;
3.1.1.6. statistik məlumatların toplanılması üçün.

4. FƏRDİ MƏLUMATLARIN PAYLAŞILMASI

4.1. Portalda təqdim edilən Xidmətlər ilə əlaqədar müxtəlif vəzifələri yerinə yetirmək üçün, Nazirlik üçüncü tərəf - təchizatçıların xidmətlərindən istifadə edə bilər. Üçüncü şəxslərin xidmətlərinə, yalnız qeyd edilənlər ilə məhdudlaşmadan, İstifadəçilər haqqında məlumatların təhlili, Xidmətlər, veb-saytlar və məlumat bazalarının işlənməsi, yerləşdirilməsi və saxlanılması daxil ola bilər. Nazirlik bu kimi şəxslərin heç birinə İstifadəçi məlumatından hər hansı digər məqsəd üçün istifadə etməyə və ya bu kimi xidmətlər kontekstindən kənarda İstifadəçi ilə əlaqə saxlamağa icazə vermir.

4.2. Nazirlik fərdi məlumatları:
4.2.1. Dövlət orqanı və ya nümayəndəsinin qanuni sorğusuna, məhkəmə qərarına, hər hansı hüquqi proses də daxil olmaqla, Nazirliyin qanun ilə nəzərdə tutulan öhdəliklərini yerinə yetirmək;
4.2.2. Nazirliyin hüquq və mənafelərini müəyyən etmək, həyata keçirmək və ya qorumaq üçün zəruri olduqda;
4.2.3. Digər şəxsin həyat baxımından mühüm olan mənafelərini qorumaq üçün zəruri olduqda;
4.2.4. Fəaliyyətimizin tam və ya bir hissəsinin satılması, verilməsi və ya ötürülməsi və ya yenidən təşkil edilməsi ilə bağlı, və yaxud digər şəkildə İstifadəçinin razılığını əldə etdiyimiz hallar da daxil olmaqla, qüvvədə olan qanunvericiliyə uyğun olaraq açıqlaya bilər.
4.3. Yuxarıda qeyd edilən hallarda, İstifadəçinin fərdi məlumatlarını Azərbaycan Respublikasının hüdudlarından kənarda fərdi məlumatların müxtəlif səviyyədə hüquqi mühafizəsini təmin edən qanunvericiliyə malik olan ölkələrdə yerləşən üçüncü şəxslərə Azərbaycan Respublikasının qanunvericiliyinə uyğun ötürülə bilər.
4.4. Nazirlik, topladığı İstifadəçi məlumatını mühafizə etmək üçün qanunvericilik ilə nəzərdə tutulan təhlükəsizlik tədbirlərindən istifadə edir.
4.5. Portal  digər veb-saytlara və ya proqramlara istinadları ehtiva edə bilər. Nazirlik, bu veb-saytların və proqramların məxfilik siyasətinə nəzarət etmir və ya onların icrasında iştirak etmir. Nazirlik hər hansı veb-saytların və proqramların məzmununa və/və ya istifadəsinə görə məsuliyyət daşımır.

5. İSTİFADƏÇİ HÜQUQLARI 

5.1.  Qanunvericilik Sizə:
5.1.1. Fərdi məlumatlarınız ilə tanış olmaq;
5.1.2. Qeyri-dəqiq məlumatlara düzəliş etməyi tələb etmək;
5.1.3. Fərdi məlumatlarınızı silməyi tələb etmək;
5.1.4. Fərdi məlumatlarınızın işlənməsinin məhdudlaşdırılmasını tələb etmək;
5.1.5. Fərdi məlumatlarınızın işlənməsinə etiraz etmək;
5.1.6. Fərdi məlumatlarınızın surətini tələb etmək;
5.1.7. Müvafiq nəzarət orqanına şikayət vermək;
5.1.8. Fərdi məlumatların işlənməsi üçün əvvəllər verilmiş razılığı geri götürmək, və qanunvericiliklə nəzərdə tutulmuş digər hüquqları verir.
5.2. Razılığınızın geri götürülməsi, razılığın geri götürülməsinə qədər həyata keçirdiyimiz istənilən məlumat işlənməsinin qanuniliyinə, eləcə də razılıqdan fərqli olaraq, digər qanuni əsaslara istinad edilərək həyata keçirilən fərdi məlumatlarınızın işlənilməsinə təsir etməyəcək. Hüquqlarınızdan istifadə etmək istəyirsinizsə, mincom@mincom.gov.az elektron ünvanı vasitəsi ilə əlaqə saxlayın.

6. FƏRDİ MƏLUMATLARIN MƏHV EDİLMƏSİ 

6.1.  Xidmətlərdən  istifadə müddəti başa çatdıqda və ya xitam verildikdə, şəxsi hesab silindikdə Nazirlik aşağıdakı üsullardan birinin vasitəsilə İstifadəçinin fərdi məlumatlarını məhv edir:
6.1.1. Kağız informasiya daşıyıcısının müvafiq doğrama maşınları vasitəsilə məhv edilməsi;
6.1.2. Kağız informasiya daşıyıcısının yandırılması;
6.1.3. Kağız informasiya daşıyıcısının kimyəvi məhlullar vasitəsilə məhv edilməsi;
6.1.4. Elektron informasiya daşıyıcısının mexaniki təsir üsulu ilə məhv edilərək bərpası mümkün olmayan vəziyyətə salınması;
6.1.5. Elektron informasiya daşıyıcısının bərpası mümkün olmayan qaydada formatlanması;
6.1.6. Xüsusi proqram təminatı vasitəsilə elektron informasiya daşıyıcısında olan məlumatların bərpası mümkün olmayan qaydada silinməsi;
6.1.7. Nazirliyə münasib və uyğun hesab etdiyi hər hansı digər üsulla.
6.2. Nazirlik, Sizin məlumatlarınızı Xidmətlərdən  istifadə etdiyiniz müddət ərzində və bu müddətdən sonra qanuni hüquq və vəzifələrimizə uyğun olaraq 1 (bir) ay ərzində saxlayırıq.

7. FƏRDİ MƏLUMATLARIN QORUNMASI 

7.1. NAZİRLİK FƏRDİ MƏLUMATLARIN TOPLANILMASI VƏ İŞLƏNİLMƏSİ ZAMANI FƏRDİ MƏLUMATLARIN TOPLANILMASININ VƏ İŞLƏNİLMƏSİNİN QANUNİLİYİNİ VƏ TƏHLÜKƏSİZLİYİNİ TƏMİN EDİR, HƏR HANSI FƏRDİ MƏLUMATLARI YALNIZ QANUNVERİCİLİK İLƏ NƏZƏRDƏ TUTULAN HALLARDA VƏ HƏCMDƏ İSTİFADƏ EDİR VƏ FƏRDİ MƏLUMATLARI QANUNVERİCİLİYİN TƏLƏBİNƏ UYĞUN OLARAQ MÜHAFİZƏ EDİR. NAZİRLİYİN QƏSDİ VƏ KOBUD EHTİYATSIZLIĞI NƏTİCƏSİNDƏ MƏLUMATLARIN MÜHAFİZƏSİNİN TAM TƏMİN OLUNMAMASI NƏTİCƏSİNDƏ İSTİFADƏÇİYƏ DƏYƏN ZİYANA GÖRƏ NAZİRLİK QANUNVERİCİLİKDƏ NƏZƏRDƏ TUTULAN QAYDADA MƏSULİYYƏT DAŞIYIR.

7.2. Nazirlik Sizin fərdi  məlumatlarınızı  qorumaq üçün çalışır. Bunun üçün Nazirlik müxtəlif təhlükəsizlik texnologiyalarından və informasiyanın icazəsiz girişdən, istifadədən və ya açıqlanmasından qorunmasına yönələn tədbirlərdən istifadə edir. İstifadə etdiyimiz tədbirlər Sizin fərdi məlumatlarınızın emalı riskinə uyğun təhlükəsizlik səviyyəsini təmin etmək üçün nəzərdə tutulmuşdur.

8. “KUKİ” (COOKIE) SİYASƏTİ

8.1. Kukilər kompüteriniz, planşetiniz və ya mobil telefonunuzda saxlanılan kiçik mətn fayllarıdır. Bu fayllarda sizin IP adresiniz, istifadə olunan brauzer proqramının növü, saytdan istifadənin tarixi və müddəti, saytın istifadə etdiyiniz bölmələri və sairə haqqında məlumatlar saxlanılır. Nazirlik bir çox tədbiqlərdə olduğu kimi, İstifadəçiləri üçün xidmət səviyyəsinin artırılması məqsədilə kukilərdən və digər texnologiyalardan faydalanır.
8.2. Nazirlik Sizi istifadəçi kimi tanımaq və Sizin istifadə etdiyiniz xidmətləri və digər onlayn kontenti tənzimləmək, reklam aksiyalarının effektivliyini ölçmək və analitikaları yerinə yetirmək; eləcə də riskləri azaltmaq, potensial saxtakarlığın qarşısını almaq və tədbiqimizdə və xidmətlərimizdə etibarlılığın və təhlükəsizliyin artırılması üçün "kuki faylları" və geolokasiya texnologiyalarından istifadə edə bilər.
8.3. Əlavə olaraq Nazirlik statistik məqsədlər üçün üçüncü tərəflərin kukiləri vasitəsilə informasiyanı toplayır. Nazirlik bu prosesi izləmək və təhlil etmək məqsədilə “Google” tərəfindən təqdim edilən “Google Analytics” xidməti vasitəsilə həyata keçirir.
8.4. Kukilərin istifadəsini özünüz tənzimləyə bilərsiniz. Belə ki, brauzerinizin tənzimləmələri vasitəsilə kukilərin deaktiv edilməsini və ya əvvəlcədən razılığınız olmadığı halda kompüterinizdə, mobil cihazınızda saxlanılmamasını təmin edə bilərsiniz. Kukiləri qəbul etmədiyiniz halda, Portalı daha effektiv edən bir çox xüsusiyyətləri istifadə edə bilməyəcəksiniz və bəzi xidmətlər tam işləməyəcək. Nazirlik Portaldan kənarda mövcud fəaliyyətlərinizi müəyyən etmək üçün kukilərdən istifadə etmir.

9. MƏXFİLİK SİYASƏTİNƏ DƏYİŞİKLİKLƏRİN EDİLMƏSİ

Nazirlik mütəmadi olaraq xidmət və ya tətbiq olunan qanunlarda dəyişiklikləri əks etdirmək üçün bu Məxfilik Siyasətinə yenidən baxa bilər. Yenidən işlənmiş versiyada əhəmiyyətli dəyişikliklər varsa, İstifadəçiyə şəxsi hesabına bildiriş göndərməklə, 10 (on) gün əvvəl məlumat veriləcəkdir. Yeni Məxfilik Siyasəti dərc edildiyi tarixdən qüvvəyə minir.

Bu Məxfilik Siyasəti ilə bağlı  və ya Nazirliyin  məlumatların toplanması, istifadəsi və açıqlanması üsulları ilə bağlı hər hansı bir sualınız varsa, bizə mincom@mincom.gov.az elektron ünvanı vasitəsi ilə müraciət edin.

BİZİMLƏ NECƏ ƏLAQƏ SAXLAMAQ OLAR:

Əgər sizin Nazirliyin və qurumların fəaliyyəti, məxfilik qaydaları və/və ya bunun sizə təsiri haqda sual və ya təklifləriniz varsa, zəhmət olmasa, çəkinmədən bizimlə əlaqə yaradın: mincom@mincom.gov.az ünvanına elektron məktub, və yaxud poçt vasitəsilə məktub göndərin.

Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi
Zərifə Əliyeva küç. 77
Bakı / Azərbaycan

          </p>
        </div>
      </div>
    </div>
  );
}


export default Privacy;