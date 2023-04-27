import { ReactNode } from 'react';
import { Circle } from '../../Icons/Circle';
import BaseCard from '../BaseCard/BaseCard';
import styles from './CompactCard.module.css';
import { cardItem } from '../../../types/types';

type Props = Omit<cardItem, 'id'>;

const CompactCard: React.FunctionComponent<Props> = ({
    name,
    date,
    circles,
}) => {
    const renderCircles = (): ReactNode => {
        if (circles <= 2) {
            return (
                <div className={styles['circle-container']}>
                    <Circle content={null} borderColor="border-green" />
                    <Circle content={null} borderColor="border-red" />
                </div>
            );
        }

        return (
            <div className={styles['circle-container']}>
                <Circle content={null} borderColor="border-green" />
                <Circle content={null} borderColor="border-red" />
                <Circle content={null} borderColor="border-yellow" />
            </div>
        );
    };

    return (
        <BaseCard padding="padding-sm">
            <div className={styles['card-header']}>
                <div className={styles['square']}></div>
                {renderCircles()}
            </div>
            <h4 className={styles['card-title']}>{name}</h4>
            <p className={styles['card-description']}>{`Created: ${date}`}</p>
        </BaseCard>
    );
};

export default CompactCard;
