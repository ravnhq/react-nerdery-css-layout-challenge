import IconPlaceHolder from '../../../shared/ui/icon-placeholder'
import SectionHeader from '../../../shared/ui/section-header'
import TextField from '../../../shared/ui/text-field'
import ContentSlickDots from '../content-slick-dots/content-slick-dots'
import './styles.css'

const ContentSection = () => {
  return <div className="content-section">
    <TextField placeholder='Search' preppendIcon={<IconPlaceHolder/>}/>
    <SectionHeader title='Recently Used' boxProperties={{
      marginTop: 25
    }} append={<ContentSlickDots />} />
  </div>
}

export default ContentSection