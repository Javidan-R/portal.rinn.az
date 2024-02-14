import React, { useRef, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/SelectOption";

interface FormValues {
  istiqamet: string;
  qurum: string;
  adSoyad: string;
  email: string;
  muracietNovu: string;
  xidmet: string;
  mobilNomre: string;
  metn: string;
}

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);
  const initialValues: FormValues = {
    istiqamet: "",
    qurum: "",
    adSoyad: "",
    email: "",
    muracietNovu: "",
    xidmet: "",
    mobilNomre: "",
    metn: ""
  };

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
  
    const handleClickInside = (event: MouseEvent) => {
      event.stopPropagation();
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
    modalRef.current?.addEventListener("mousedown", handleClickInside);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      modalRef.current?.removeEventListener("mousedown", handleClickInside);
    };
  }, [onClose]);
  
  return (
    
    <div className={`modal-content modal-slide-in ${showModal ? 'show' : 'hide'} bg-white rounded-lg p-6  lg:w-[65%] xl:w-[60%]  xxl:w-[17%] w-full mx-4 bg-white  transition-transform transform 1s ease-in transform-gpu overflow-y-auto overflow-x-hidden   h-100 max-h-full my-6`} ref={modalRef}>
            <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
        }}
      >
        <Form>
          <h1 className="text-2xl text-center ">Əks Əlaqə</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">İstiqamət</label>
              <Select
                name="istiqamet"
                options={["Option 1", "Option 2", "Option 3"]}
                placeholder="Müraciətin istiqamətini seçin"
                value=""
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Müraciətin növü</label>
              <Select
                name="qurum"
                options={["Option A", "Option B", "Option C"]}
                placeholder="Müraciətin növünü seçin"
                value=""
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Qurum</label>
              <Select
                name="qurum"
                options={["Option 1", "Option 2", "Option 3"]}
                placeholder="Qurumu seçin"
                value=""
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Xidmət</label>
              <Select
                name="xidmet"
                options={["Option 1", "Option 2", "Option 3"]}
                placeholder="Xidməti seçin"
                value=""
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Ad, soyad</label>
              <Input
                type="text"
                name="adSoyad"
                placeholder="Ad, soyadınızı daxil edin"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">E-mail</label>
              <Input
                type="email"
                name="email"
                placeholder="E-mail daxil edin"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Mobil Nömrə</label>
              <Input
                type="text"
                name="mobilNomre"
                placeholder="Mobil Nömrəni daxil edin"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            </div>
            
            <div className="">
              <label className="block text-gray-700 text-sm font-bold ">Mətn</label>
              <textarea
                name="metn"
                placeholder="Mətni daxil edin"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Göndər
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalContent;
