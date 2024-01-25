// HomeModal.tsx
import React, { useState } from "react";
import Label from "../../atoms/Label";
import Select from "../../atoms/SelectOption";

interface HomeModalProps {
  onClose: () => void;
}

const HomeModal: React.FC<HomeModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
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
            <div className="modal__header">
              <div className="modal__title">Əks əlaqə</div>
              <button type="button" className="modal__close" onClick={onClose}>
                <img src="https://portal.rinn.az/img/modal-close.efba9567.svg" alt="" />
              </button>
            </div>
            <div className="modal__body d-flex justify-center align-center">
              <form className="form" onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form__group mb-20">
                        <Label className="v-label" text="İstiqamət" />
                        {/* Assume options for "direction" */}
                        <Select
                          name="direction"
                          value={formData.direction}
                          onChange={(value) => handleSelectChange("direction", value)}
                          options={["Option 1", "Option 2", "Option 3"]}
                          placeholder="Müraciətin istiqamətini seçin"
                        />
                      </div>
                      <div className="form__group mb-20">
                        <Label className="v-label" text="Qurum" />
                        {/* Use the Select component */}
                        <Select
                          name="institution"
                          value={formData.institution}
                          onChange={(value) => handleSelectChange("institution", value)}
                          options={["Option 1", "Option 2", "Option 3"]}
                          placeholder="Qurumun adını seçin"
                        />
                      </div>
                      <div className="form__group mb-20">
                        <Label className="v-label" text="Ad, soyad" />
                        <input
                          type="text"
                          className="v-input"
                          placeholder="Ad, soyadınızı daxil edin"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form__group mb-20">
                        <Label className="v-label" text=" E-mail " />
                        <input
                          className="v-input"
                          placeholder="E-mail daxil edin"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* ... (Other form fields) ... */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal__footer">
              <div className="btn-group">
                <div className="row">
                  <div className="col-12 d-flex justify-center">
                    <button className="btn btn--black mr-12 px-25 py-12" onClick={onClose}>
                      Bağla
                    </button>
                    <button type="submit" className="btn btn--dark px-25 py-12">
                      Göndər
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
