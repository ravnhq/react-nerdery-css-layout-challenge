import Flex from "../../../shared/ui/flex";

import {ReactComponent as StorageWidget} from "../../../assets/storage-widget.svg"

const StorageDetails = () => {
  return (
    <Flex type="column" alignItems="center" >
      <StorageWidget></StorageWidget>
    </Flex>
  );
};

export default StorageDetails;
