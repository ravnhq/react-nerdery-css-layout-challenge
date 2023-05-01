import { CustomBoxModel } from "../../../shared/types/box-model-properties";
import Button from "../../../shared/ui/button";
import Card from "../../../shared/ui/card";
import { GradientBar } from "../../gradient-bar";

import "./styles.css"

const BuyAdvertising = ({ boxProperties }: CustomBoxModel) => {
  const advertisingBody = (
    <>
      <div className="home-advertising-body text-center">
        <div className="title-text">Buy more space now!</div>
        <div className="subtitle-text">Upgrade to cloud premium</div>
      </div>
      <Button>Upgrade Account</Button>
    </>
  )
  return (
    <Card
      boxProperties={{paddingBottom: 11,...boxProperties}}
      header={<GradientBar boxProperties={{marginTop: 17}} width={119} height={73} />}
      body={advertisingBody}
      contentSeparator={11}
      alignItems="center"
    ></Card>
  );
};

export default BuyAdvertising;
