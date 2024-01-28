import { FC } from "react";
import Input from "../Input/Input";
import Label from "../Label";

interface CheckboxProps {
  name: string;
  label: string;
}

 const Checkbox:FC<CheckboxProps> = ({ name, label }) => {
  return (
    <div className="form__group flex justify-start gap-2  cursor-pointer">
      <Input
        type="checkbox" name={name} id={name} className="v-checkbox v-checkbox--square v-checkbox--dark-blue " value={name}  />   
         <Label htmlFor={name} className="v-label px02  " text= {label}/>
    </div>
  );
};
export default Checkbox;