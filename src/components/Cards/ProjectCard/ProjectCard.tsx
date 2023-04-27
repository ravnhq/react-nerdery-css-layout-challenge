import { ReactNode } from 'react';
import { EllipsisVertical } from '../../Icons/EllipsisVertical';
import BaseCard from '../BaseCard/BaseCard';
import styles from './ProjectCard.module.css';
import { Circle } from '../../Icons/Circle';

interface Props {
    date: string;
    name: string;
    circleCount: number;
}

const ProjectCard: React.FunctionComponent<Props> = ({
    date,
    name,
    circleCount,
}) => {
    const renderCircles = (): ReactNode => {
        if (circleCount <= 2) {
            return (
                <div className={styles['circle-container']}>
                    <Circle content={null} />
                    <Circle content={null} />
                </div>
            );
        }

        return (
            <div className={styles['circle-container']}>
                <Circle content={null} />
                <Circle content={null} />
                <Circle content="+3" />
            </div>
        );
    };
    return (
        <BaseCard padding="padding-md">
            <div className={styles['card-header']}>
                <span className={styles['card-subcontainer']}>
                    <img src="/src/assets/svg/stackedRectangles.svg" alt="" />
                    {renderCircles()}
                </span>
                <EllipsisVertical />
            </div>
            <h4 className={styles['card-title']}>{name}</h4>
            <p className={styles['date-text']}>{`Created: ${date}`}</p>
        </BaseCard>
    );
};

export default ProjectCard;
