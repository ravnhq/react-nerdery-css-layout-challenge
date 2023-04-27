import styles from './EmptySquare.module.css';

type Border = 'border-white' | 'border-gray' | 'border-black';

interface Props {
    borderColor?: Border;
}

const EmptySquare: React.FunctionComponent<Props> = ({
    borderColor = 'border-white',
}) => <div className={`${styles['square-icon']} ${styles[borderColor]}`} />;

export default EmptySquare;
