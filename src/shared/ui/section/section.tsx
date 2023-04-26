import { CustomBoxModel } from '../../types/box-model-properties'
import Flex from '../flex'
import './style.css'

interface SectionProps extends CustomBoxModel{
  sectionHeader: React.ReactElement,
  sectionBody: React.ReactElement,
  contentSeparator?: number
}

const Section = ({sectionHeader, sectionBody, boxProperties, contentSeparator}: SectionProps) => {
  return <Flex type='column' boxProperties={boxProperties} gap={contentSeparator}>
    {sectionHeader}
    {sectionBody}
  </Flex>
}

export default Section; 