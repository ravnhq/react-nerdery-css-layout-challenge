import { CustomBoxModel } from "../../types/box-model-properties";
import Flex from "../flex";
import "./style.css";

interface SectionHeaderProps extends CustomBoxModel {
  title: string;
  append?: React.ReactNode;
  className?: string;
}

const SectionHeader = ({
  className,
  append,
  title,
  boxProperties,
}: SectionHeaderProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className={className}
      boxProperties={boxProperties}
    >
      <span className="header-title">{title}</span>
      {append}
    </Flex>
  );
};

export default SectionHeader;
