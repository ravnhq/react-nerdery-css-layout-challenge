import "./style.css"

interface ButtonProps {
  children: string,
}

const Button = ({children}: ButtonProps) => {
  return <div className="button">
    {children}
  </div>
}

export default Button