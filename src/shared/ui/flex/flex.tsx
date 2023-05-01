import { CustomBoxModel } from "../../types/box-model-properties";
import type * as CSS from 'csstype'
import "./styles.css";

interface FlexProps extends CustomBoxModel {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  type?: "row" | "column";
  justifyContent?: CSS.Property.JustifyContent;

  justifyItems?: CSS.Property.JustifyItems;

  alignContent?: CSS.Property.AlignContent;

  alignItems?: CSS.Property.AlignItems;

  gap?: number
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
  gap,
  ...props
}: FlexProps) => {
  return (
    <div
      className={`flex ${className ?? ""}`}
      style={{ ...style, flexDirection: `${type?? 'row'}`, 
        justifyContent, alignContent, alignItems, justifyItems, gap, ...props.boxProperties}}
    >
      {children}
    </div>
  );
};

export default Flex;
