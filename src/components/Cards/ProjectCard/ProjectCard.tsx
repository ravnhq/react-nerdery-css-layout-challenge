import { Ellipsis } from "../../Icons/Ellipsis";
import BaseCard from "../BaseCard/BaseCard";
import styles from './ProjectCard.module.css'


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


    return (
    <BaseCard padding="padding-md">
        <img src="/src/assets/svg/stackedRectangles.svg" alt="" />
        <Ellipsis/>
        <h4>{name}</h4>
        <p>{`Created: ${date}`}</p>
    </BaseCard>
)
}

export default ProjectCard;