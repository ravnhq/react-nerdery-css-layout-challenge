import "./style.css";

interface TextFieldProps {
  className?: string;
  placeholder: string;
  preppendIcon?: React.ReactNode;
  style?: React.CSSProperties;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextField = ({ placeholder, preppendIcon, className, style, handleChange }: TextFieldProps) => {
  return (
    <div className="text-field">
      {preppendIcon ? <i className="text-input-preppend-icon">
        {preppendIcon}
      </i> : null}
      <input
        placeholder={placeholder}
        className={`text-input ${className ?? ""}`}
        style={style?? {}}
        onChange={handleChange}
        />
    </div>
  );
};

export default TextField;
