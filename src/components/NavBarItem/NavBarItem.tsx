import styles from './NavBarItem.module.css'

interface Props extends listItem {
    active: boolean;
}

const NavBarItem: React.FunctionComponent<Props> = ({ name, active }) => (
    <li className={styles["navigation-item"]}>
        {
            active && (<div id={styles["active-indicator"]} />)
        }
        <span id={styles["nav-icon"]} />
        <p>{name}</p>
    </li>
)

export default NavBarItem