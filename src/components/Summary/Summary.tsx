import { storageItem } from '../../types/types';
import { StorageCard } from '../Cards/StorageCard';
import { PieChart } from '../Icons/PieChart';
import { RoundedSquare } from '../Icons/RoundedSquare';
import { Square } from '../Icons/Square';
import { Title } from '../Title';
import styles from './Summary.module.css';

const storageDetails: storageItem[] = [
    {
        id: 1,
        name: 'Documents',
        fileAmmount: 720,
        fileSize: 200,
        icon: <RoundedSquare color="bg-yellow" />,
    },
    {
        id: 2,
        name: 'Pictures',
        fileAmmount: 720,
        fileSize: 125,
        icon: <RoundedSquare color="bg-blue" />,
    },
    {
        id: 3,
        name: 'Documents',
        fileAmmount: 720,
        fileSize: 75,
        icon: <RoundedSquare color="bg-green" />,
    },
    {
        id: 4,
        name: 'Documents',
        fileAmmount: 720,
        fileSize: 50,
        icon: <RoundedSquare color="bg-gray" />,
    },
];

const Summary: React.FunctionComponent = () => (
    <div className={styles['summary-main']}>
        <header className={styles['summary-header']}>
            <div className={styles['square-container']}>
                <Square />
                <Square />
            </div>
            <div className={styles['profile']}>
                <p>Name</p>
                <div className={styles['circle']} />
            </div>
        </header>
        <div className={styles['storage-resume-section']}>
            <Title name="Storage" />
            <PieChart />
            <p className={styles['space-remaining-text']}>
                420.2 GB of 500 GB used
            </p>
            <div className={styles['cards-container']}>
                {storageDetails.map((storage) => (
                    <StorageCard
                        key={storage.id}
                        name={storage.name}
                        icon={storage.icon}
                        fileAmmount={storage.fileAmmount}
                        fileSize={storage.fileSize}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Summary;
