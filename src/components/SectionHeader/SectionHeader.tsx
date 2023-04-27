import { PropsWithChildren } from 'react';
import styles from './SectionHeader.module.css';
import { Title } from '../Title';

interface Props extends PropsWithChildren {
    title: string;
}

const SectionHeader: React.FunctionComponent<Props> = ({ title, children }) => (
    <div className={styles['section-header-container']}>
        <Title name={title} />
        <>{children}</>
    </div>
);

export default SectionHeader;
