import MenuIcon from '../../../shared/ui/menu-icon'
import TextField from '../../../shared/ui/text-field'
import './styles.css'

const ContentSection = () => {
  return <div className="content-section">
    <TextField placeholder='Search' preppendIcon={<MenuIcon/>}/>
  </div>
}

export default ContentSection