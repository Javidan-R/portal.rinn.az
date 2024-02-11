import React, { useState, useEffect } from "react";

interface HomeModalProps {
  onClose: () => void;
}

const HomeModal: React.FC<HomeModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  useEffect(() => {
    // Add event listener to close modal when clicking outside of it
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="  fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 flex justify-center items-center " >
      <div className="  modal-content bg-white rounded-lg shadow p-4 md:p-5 z-50 w-96 h-100 transition transition-all transition-opacity  transition-animation fadeInDown" >
        <div className="flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Create New Product
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Type product name"
                required
              />
            </div>
            {/* Include other form fields */}
          </div>
          <button type="submit" className="btn-primary">
            Add new product
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default HomeModal;
