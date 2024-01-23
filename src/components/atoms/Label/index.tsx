interface LabelProps {
    htmlFor: string;
    text: string;
  }
  
  const Label: React.FC<LabelProps> = ({ htmlFor, text }) => (
    <label htmlFor={htmlFor} className="v-label">
      {text}
    </label>
  );
  export default Label