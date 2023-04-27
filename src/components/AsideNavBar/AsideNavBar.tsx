import { listItem } from '../../types/types';
import { NavBarItem } from '../NavBarItem';
import styles from './AsideNavBar.module.css';

const navItems: listItem[] = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'My Files' },
    { id: 3, name: 'Recent Files' },
    { id: 4, name: 'Shared Files' },
    { id: 5, name: 'File Request' },
    { id: 6, name: 'Trash' },
];

const dialogItems: listItem[] = [
    { id: 1, name: 'Upload File' },
    { id: 2, name: 'Upload Folder' },
    { id: 3, name: 'New Folder' },
    { id: 4, name: 'More' },
];

const AsideNavBar: React.FunctionComponent = () => (
    <div className={styles['navbar-main']}>
        <div id={styles['app-logo']} />
        <ul className={styles['navigation-items']}>
            {navItems.map((item, i) => (
                <NavBarItem key={item.id} name={item.name} active={i === 0} />
            ))}
        </ul>
        <div id={styles['navbar-footer']}>
            <div className={styles['dialong-box']}>
                <ul className={styles['dialog-items']}>
                    {dialogItems.map((item) => (
                        <li key={item.id}>□ {item.name}</li>
                    ))}
                </ul>
                <div className={styles['down-arrow']} />
            </div>
            <button className={styles['create-btn']}>
                Create New
                <span className={styles['plus-sub-btn']}>+</span>
            </button>
        </div>
    </div>
);

export default AsideNavBar;
