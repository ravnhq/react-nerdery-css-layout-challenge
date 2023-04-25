import { ProjectCard } from '../Cards/ProjectCard'
import { EmptySquare } from '../EmptySquare'
import { SectionHeader } from '../SectionHeader'
import styles from './Dashboard.module.css'

const projectData: projectItem[] = [
    {
        id: 1,
        name: "App Project",
        date: "20.02.2020",
        circles: 2
    },
    {
        id: 2,
        name: "Project: fitbit",
        date: "28.02.2020",
        circles: 2
    },
    {
        id: 3,
        name: "Client Documents",
        date: "4.03.2020",
        circles: 3
    },
]

const Dashboard: React.FunctionComponent = () => (
    <div className={styles["dashboard-main"]}>
        <div className={styles["search-wrapper"]}>
            <EmptySquare  borderColor="border-gray" />
            <input type="text" placeholder='Search' />
        </div>
        <section>
            <SectionHeader title="Recently Used">
                <div className={styles["section-btn-container"]}>
                    <EmptySquare  borderColor="border-black" />
                    <EmptySquare  borderColor="border-gray" />
                </div>
            </SectionHeader>
            <div className={styles["card-container"]}>
                {
                    projectData.map((project) => (
                        <ProjectCard key={project.id} date={project.date} name={project.name} circleCount={project.circles} />
                    ))
                }
            </div>
        </section>
    </div>
)

export default Dashboard