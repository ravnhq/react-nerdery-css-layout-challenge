import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";
import SectionHeader from "../../../shared/ui/section-header";
import Section from "../../../shared/ui/section/section";
import TextField from "../../../shared/ui/text-field";
import ContentSlickDots from "../content-slick-dots/content-slick-dots";
import "./styles.css";

const FileSummary = () => {
  const recenltyUsedSectionHeader = (
    <SectionHeader
      title="Recently Used"
      append={<ContentSlickDots />}
    />
  );

  return (
    <div className="content-section">
      <TextField placeholder="Search" preppendIcon={<IconPlaceHolder />} />
      <Flex type="column" gap={38} boxProperties={{ marginTop: 25 }}>
        <Section sectionHeader={recenltyUsedSectionHeader} sectionBody={<div>Holis</div>} contentSeparator={23}></Section>
      </Flex>
    </div>
  );
};

export default FileSummary;
