import React, { useCallback } from "react";

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange }) => {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [checked, onChange]);

  return (
    <div className="form__group flex justify-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="v-checkbox v-checkbox--square v-checkbox--dark-blue p-5"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name} className="v-label px02">{label}</label>
    </div>
  );
};

export default Checkbox;
