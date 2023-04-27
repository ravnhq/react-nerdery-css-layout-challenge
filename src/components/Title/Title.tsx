import styles from './Title.module.css';
interface Props {
    name: string;
}

const Title: React.FunctionComponent<Props> = ({ name }) => (
    <h2 className={styles['title-text']}>{name}</h2>
);

export default Title;
