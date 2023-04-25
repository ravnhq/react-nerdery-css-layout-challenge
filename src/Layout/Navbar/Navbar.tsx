import { Square } from '../Icons/Icons'
import styles from './navbar.module.css'
import primitives from '../Primitives/primitives.module.css'

export const Navbar = () => {
  return (
    <>
      <div className={styles['navigation-bar']}>
        <nav>
          <div className={styles['logo']}></div>
          <ul className={styles['menu-bar']}>
            <li><span><Square/> Home</span></li>
            <li><span><Square/> My Files</span></li>
            <li><span><Square/> Recent Files</span></li>
            <li><span><Square/> Shared Files</span></li>
            <li><span><Square/> File Request</span></li>
            <li><span><Square/> Trash</span></li>

          </ul>
          <div className={styles['divider']}/>
        </nav>
        
        <div className={styles['check-list-wrapper']}>
          <div className={styles['check-list']}>
            <div>
              <input className={primitives['checkbox']} type="checkbox" name="uploadFiles" id="uploadFiles" />
              <label htmlFor="uploadFiles">Upload Files</label>
            </div>
            <div>
              <input className={primitives['checkbox']} type="checkbox" name="uploadFolder" id="uploadFolder" />
              <label htmlFor="uploadFolder">Upload Folder</label>
            </div>
            <div>
              <input className={primitives['checkbox']} type="checkbox" name="newFolder" id="newFolder" />
              <label htmlFor="newFolder">New folder</label>
            </div>
            <div>
              <input className={primitives['checkbox']} type="checkbox" name="more" id="more" />
              <label htmlFor="more">More</label>
            </div>
          </div>
          <button className={primitives['primary-button']}>Create New</button>
        </div>
      </div>
  </>  
  )
}
