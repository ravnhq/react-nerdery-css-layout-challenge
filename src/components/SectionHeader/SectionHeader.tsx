import { PropsWithChildren } from 'react'
import styles from './SectionHeader.module.css'

interface Props extends PropsWithChildren {
    title: string
}

const SectionHeader: React.FunctionComponent<Props> = ({ title, children }) => (
    <div className={styles["section-header-container"]}>
        <h2 className={styles["section-main-text"]}>{ title }</h2>
        <>
            {children}
        </>
    </div>
)

export default SectionHeader;
