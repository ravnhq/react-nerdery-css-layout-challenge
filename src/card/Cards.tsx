import React, { FC } from "react";
import { Cards as CardsProps } from "./types";
import CardSmall from "./CardSmall";
import CardLarge from "./CardLarge";

const Cards: FC<CardsProps> = ({ data, shared }) => {
  if (shared) {
    return (
      <div className="cards mt-16">
        {data.map((file) => (
          <CardSmall footer={file.date} numberUsers={file.users}>
            {file.name}
          </CardSmall>
        ))}
      </div>
    );
  }
  return (
    <div className="cards mt-23">
      {data.map((file) => (
        <CardLarge footer={file.date} numberUsers={file.users}>
          {file.name}
        </CardLarge>
      ))}
    </div>
  );
};

export default Cards;
