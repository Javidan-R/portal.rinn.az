interface LabelProps {
    htmlFor?: string;
    text: string;
    className:string
  }
  
  const Label: React.FC<LabelProps> = ({ htmlFor, text , className }) => (
    <label htmlFor={htmlFor} className={`v-label ${className}`}>
      {text}
    </label>
  );
  export default Label