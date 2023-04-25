import { EmptySquare } from '../EmptySquare';
import styles from './NavBarItem.module.css';

interface Props extends listItem {
    active: boolean;
}

const NavBarItem: React.FunctionComponent<Props> = ({ name, active }) => (
    <li className={styles['navigation-item']}>
        {active && <div id={styles['active-indicator']} />}
        <EmptySquare />
        <p>{name}</p>
    </li>
);

export default NavBarItem;
