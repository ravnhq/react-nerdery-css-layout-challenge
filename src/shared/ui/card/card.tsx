import "./style.css";
import { ReactComponent as VerticalEllipsisIcon } from "../../../assets/vertical=ellipsis-icon.svg";
import { CustomBoxModel } from "../../types/box-model-properties";
import Flex from "../flex";
import { ReactNode } from "react";

import type * as CSS from 'csstype'

interface CardProps extends CustomBoxModel{
  details?: boolean;
  header: ReactNode,
  body: ReactNode,
  contentSeparator?: number,

  alignItems?: CSS.Property.AlignItems
}

const Card = ({ details, boxProperties, header, body, contentSeparator, alignItems }: CardProps) => {
  return <Flex alignItems={alignItems} type="column" gap={contentSeparator} className="card" style={{...boxProperties}}>
    <div className="card-actions">
      {details && <VerticalEllipsisIcon/> }
    </div>
      {header}
      {body}
  </Flex>;
};

export default Card;
