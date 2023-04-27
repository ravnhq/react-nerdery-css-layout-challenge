import styles from './Circle.module.css';

type BorderColor =
    | 'border-gray'
    | 'border-green'
    | 'border-yellow'
    | 'border-red';

interface Props {
    borderColor?: BorderColor;
    content: string | null;
}

const Circle: React.FunctionComponent<Props> = ({
    borderColor = 'border-gray',
    content,
}) => (
    <div className={`${styles[borderColor]} ${styles['circle']}`}>
        {content}
    </div>
);

export default Circle;
