import { storageItem } from '../../../types/types';
import styles from './StorageCard.module.css';

type Props = Omit<storageItem, 'id'>;

const StorageCard: React.FunctionComponent<Props> = ({
    name,
    icon,
    fileAmmount,
    fileSize,
}) => (
    <div className={styles['storage-card-container']}>
        {icon}
        <div>
            <p className={styles['storage-title']}>{name}</p>
            <p
                className={styles['storage-subtitle']}
            >{`${fileAmmount} files`}</p>
        </div>
        <p className={styles['storage-ammount']}>{`${fileSize} GB`}</p>
    </div>
);

export default StorageCard;
