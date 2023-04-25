import { ProjectCard } from '../Cards/ProjectCard';
import { EmptySquare } from '../EmptySquare';
import { SectionHeader } from '../SectionHeader';
import { Table } from '../Table';
import styles from './Dashboard.module.css';

const projectData: projectItem[] = [
    {
        id: 1,
        name: 'App Project',
        date: '20.02.2020',
        circles: 2,
    },
    {
        id: 2,
        name: 'Project: fitbit',
        date: '28.02.2020',
        circles: 2,
    },
    {
        id: 3,
        name: 'Client Documents',
        date: '4.03.2020',
        circles: 3,
    },
];

const tableData: tableItem[] = [
    {
        id: 1,
        projectName: 'Travel Landing Page',
        members: 5,
        lastModified: 'Mar 8, 2020',
    },
    {
        id: 2,
        projectName: 'True Photos',
        members: 12,
        lastModified: 'Mar 8, 2020',
    },
    {
        id: 3,
        projectName: 'Dashboard Structure',
        members: 10,
        lastModified: 'Mar 9, 2020',
    },
    {
        id: 4,
        projectName: 'Character Illustration',
        members: 3,
        lastModified: 'Mar 10, 2020',
    },
];

const Dashboard: React.FunctionComponent = () => (
    <div className={styles['dashboard-main']}>
        <div className={styles['search-wrapper']}>
            <EmptySquare borderColor="border-gray" />
            <input type="text" placeholder="Search" />
        </div>
        <section>
            <SectionHeader title="Recently Used">
                <div className={styles['section-btn-container']}>
                    <EmptySquare borderColor="border-black" />
                    <EmptySquare borderColor="border-gray" />
                </div>
            </SectionHeader>
            <div className={styles['card-container']}>
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        date={project.date}
                        name={project.name}
                        circleCount={project.circles}
                    />
                ))}
            </div>
        </section>
        <section>
            <SectionHeader title="Recent Files">
                <a href="/">View All</a>
            </SectionHeader>
            <Table data={tableData} />
        </section>
    </div>
);

export default Dashboard;
