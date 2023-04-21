import styles from '../Layout.module.css'

export const Navbar = () => {
  return (
    <aside className={styles['navigation-bar']}>
    <nav>
      <ul>
        <li>Home</li>
        <li>My Files</li>
        <li>Recent Files</li>
        <li>Shared Files</li>
        <li>File Request</li>
        <li>Trash</li>
      </ul>
    </nav>
  </aside>
  )
}
