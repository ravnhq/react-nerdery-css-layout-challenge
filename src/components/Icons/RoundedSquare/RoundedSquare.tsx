import styles from './RoundedSquare.module.css';

type Colors = 'bg-green' | 'bg-blue' | 'bg-yellow' | 'bg-gray';

interface Props {
    color: Colors;
}

const RoundedSquare: React.FunctionComponent<Props> = ({ color }) => (
    <div className={`${styles['squircle']} ${styles[color]}`} />
);

export default RoundedSquare;
