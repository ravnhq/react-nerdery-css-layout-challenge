import MenuIcon from '../../../shared/ui/menu-icon'
import SectionHeader from '../../../shared/ui/section-header'
import TextField from '../../../shared/ui/text-field'
import './styles.css'

const ContentSection = () => {
  return <div className="content-section">
    <TextField placeholder='Search' preppendIcon={<MenuIcon/>}/>
    <SectionHeader title='Recently Used' boxProperties={{
      marginTop: 25
    }} append={<div>Holis</div>} />
  </div>
}

export default ContentSection