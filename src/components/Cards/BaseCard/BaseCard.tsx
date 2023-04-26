import { PropsWithChildren } from 'react';
import styles from './BaseCard.module.css';

type paddingSize = 'padding-sm' | 'padding-md' | 'padding-lg';

interface Props extends PropsWithChildren {
    padding: paddingSize;
}

const BaseCard: React.FunctionComponent<Props> = ({ padding, children }) => (
    <div className={`${styles['card']} ${styles[padding]}`}>{children}</div>
);

export default BaseCard;
