import { Square } from '../Icons/Icons'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
  <aside className={styles['navigation-bar']}>
    <nav>
      <ul>
        <li className={styles['selected']}><span><Square/> Home</span></li>
        <li><span><Square/> My Files</span></li>
        <li><span><Square/> Recent Files</span></li>
        <li><span><Square/> Shared Files</span></li>
        <li><span><Square/> File Request</span></li>
      </ul>
    </nav>
  </aside>
  )
}
