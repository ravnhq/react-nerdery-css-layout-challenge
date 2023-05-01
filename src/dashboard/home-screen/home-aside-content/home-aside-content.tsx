import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";
import Section from "../../../shared/ui/section";
import SectionHeader from "../../../shared/ui/section-header";
import BuyAdvertising from "../buy-advertising/buy-advertising";
import StorageDetails from "../storage-details/storage-details";

import "./styles.css";

const HomeAsideContent = () => {
  return (
    <Flex type="column" className="storage-details">
      <Flex
        boxProperties={{ padding: "26px 25px 22px 34px" }}
        style={{ borderBottom: "1px solid var(--light-color)" }}
        justifyContent="space-between"
      >
        <Flex gap={13} alignItems="center">
          <IconPlaceHolder color="var(--shadow-color)" filled />
          <IconPlaceHolder color="var(--shadow-color)" filled />
        </Flex>
        <Flex alignItems="center" gap={10}>
          <div className="title-text">Name</div>
          <IconPlaceHolder
            size={31}
            color="var(--shadow-color)"
            filled
            style={{ borderRadius: "15px" }}
          />
        </Flex>
      </Flex>
      <Section
        boxProperties={{ padding: "17px 24px 20px 33px" }}
        sectionHeader={<SectionHeader title="Storage" />}
        contentSeparator={22}
        sectionBody={<StorageDetails />}
      />
      <div className="home-advertising">
        <BuyAdvertising />
      </div>
    </Flex>
  );
};

export default HomeAsideContent;
