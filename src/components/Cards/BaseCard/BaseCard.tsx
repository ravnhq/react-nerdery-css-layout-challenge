import { PropsWithChildren } from 'react';
import styles from './BaseCard.module.css';

type paddingSize = 'padding-sm' | 'padding-md' | 'padding-lg';

interface Props extends PropsWithChildren {
    padding: paddingSize;
    className?: string;
}

const BaseCard: React.FunctionComponent<Props> = ({
    padding,
    children,
    className,
}) => (
    <div className={`${styles['card']} ${styles[padding]} ${className}`}>
        {children}
    </div>
);

export default BaseCard;
