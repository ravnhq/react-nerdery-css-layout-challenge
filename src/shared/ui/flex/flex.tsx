import { CustomBoxModel } from "../../types/box-model-properties";
import "./styles.css";

interface FlexProps extends CustomBoxModel {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  type: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit"
    | "stretch";

  justifyItems?:
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit";

  alignContent?:
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit";

  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit";
}

const Flex = ({
  children,
  className,
  style,
  type,
  justifyContent,
  alignContent,
  alignItems,
  justifyItems,
  ...props
}: FlexProps) => {
  return (
    <div
      className={`flex ${className ?? ""}`}
      style={{ ...style, flexDirection: type, 
        justifyContent, alignContent, alignItems, justifyItems,  ...props.boxProperties}}
    >
      {children}
    </div>
  );
};

export default Flex;
