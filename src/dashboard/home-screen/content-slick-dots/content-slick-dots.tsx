import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";
import "./styles.css";

const ContentSlickDots = () => {
  return (
    <Flex gap={10}>
      <IconPlaceHolder color="var(--darker-gray)" />
      <IconPlaceHolder color="#9D9FAF" />
    </Flex>
  );
};

export default ContentSlickDots;
