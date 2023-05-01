import "./style.css"

interface ButtonProps {
  children: React.ReactNode,
}

const Button = ({children}: ButtonProps) => {
  return <div className="button">
    {children}
  </div>
}

export default Button