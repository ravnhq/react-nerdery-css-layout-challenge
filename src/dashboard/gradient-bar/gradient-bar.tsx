
import { CustomBoxModel } from "../../shared/types/box-model-properties"
import "./styles.css"

interface GradientBarProps extends CustomBoxModel{
  width: number
  height: number,
  style?: React.CSSProperties
}

export const GradientBar = ({width, height, boxProperties, style}: GradientBarProps) => {
  return <div className="gradient-bar" style={{...style, width, height, ...boxProperties}}></div>
}