import React, { useState } from "react";
import Label from "../../atoms/Label";
import Select from "../../atoms/SelectOption";

interface HomeModalProps {
  onClose: () => void;
}

interface FormData {
  direction: string;
  institution: string;
  fullName: string;
  email: string;
  requestType: string;
  service: string;
  mobileNumber: string;
  text: string;
}

const HomeModal: React.FC<HomeModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    direction: "",
    institution: "",
    fullName: "",
    email: "",
    requestType: "",
    service: "",
    mobileNumber: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic for form submission here
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal--lg modal__dialog">
          <div className="modal__content">
            <ModalHeader onClose={onClose} />
            <ModalBody
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
            />
            <ModalFooter onClose={onClose} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => (
  <div className="modal__header">
    <div className="modal__title">Əks əlaqə</div>
    <button type="button" className="modal__close" onClick={onClose}>
      <img src="https://portal.rinn.az/img/modal-close.efba9567.svg" alt="" />
    </button>
  </div>
);

interface ModalBodyProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ModalBody: React.FC<ModalBodyProps> = ({ formData, handleSelectChange }) => (
  <div className="modal__body d-flex justify-center align-center">
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="container">
        <div className="row">
          {/* ... (Other form fields) ... */}
          <FormField label="Qurum" id="institution">
            <Select
              name="institution"
              value={formData.institution}
              onChange={(e) => handleSelectChange("institution", e.target.value)}
              options={["Option 1", "Option 2", "Option 3"]} // Add your options here
              placeholder="Qurumun adını seçin"
            />
          </FormField>
          {/* ... (Other form fields) ... */}
        </div>
      </div>
    </form>
  </div>
);

interface FormFieldProps {
  label: string;
  id?: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, children }) => (
  <div className="col-lg-6">
    <div className="form__group mb-20" id={id}>
      <Label className="v-label" text={label} />
      {children}
    </div>
  </div>
);

interface ModalFooterProps {
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose, onSubmit }) => (
  <div className="modal__footer">
    <div className="btn-group">
      <div className="row">
        <div className="col-12 d-flex justify-center">
          <button className="btn btn--black mr-12 px-25 py-12" onClick={onClose}>
            Bağla
          </button>
          <button type="submit" className="btn btn--dark px-25 py-12" onClick={onSubmit}>
            Göndər
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HomeModal;
