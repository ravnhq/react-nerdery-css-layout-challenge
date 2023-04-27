import { tableItem } from '../../types/types';
import { EllipsisHorizontal } from '../Icons/EllipsisHorizontal';
import styles from './Table.module.css';

interface Props {
    data: tableItem[];
}

const Table: React.FunctionComponent<Props> = ({ data }) => (
    <div className={styles['table-container']}>
        <div className={`${styles['table-header']} ${styles['row']}`}>
            <p>Name</p>
            <p>Members</p>
            <p>Last Modified</p>
            <p></p>
        </div>
        {data.map((dt) => (
            <div
                key={dt.id}
                className={`${styles['row']} ${styles['table-content']}`}
            >
                <div className={styles['project-name-container']}>
                    <div className={styles['square']}></div>
                    <p>{dt.projectName}</p>
                </div>
                <p>{`${dt.members} members`}</p>
                <p>{dt.lastModified}</p>
                <EllipsisHorizontal />
            </div>
        ))}
    </div>
);

export default Table;
