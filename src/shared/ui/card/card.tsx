import "./style.css";
import { ReactComponent as EllipsisIcon } from "../../../assets/triple-dots.svg";
import { CustomBoxModel } from "../../types/box-model-properties";
import Flex from "../flex";
import { ReactNode } from "react";

interface CardProps extends CustomBoxModel{
  details?: boolean;
  header: ReactNode,
  body: ReactNode,
  contentSeparator?: number
}

const Card = ({ details, boxProperties, header, body, contentSeparator }: CardProps) => {
  return <div className="card" style={{...boxProperties}}>
    <div className="card-actions">
      {details && <EllipsisIcon/> }
    </div>
    <Flex type="column" gap={contentSeparator}>
      {header}
      {body}
    </Flex>
  </div>;
};

export default Card;
