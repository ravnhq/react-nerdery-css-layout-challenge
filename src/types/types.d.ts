declare module '*.module.css';

interface listItem {
    id?: number;
    name: string;
}

interface projectItem {
    id: number;
    name: string;
    date: string;
    circles: number;
}

interface tableItem {
    id: number;
    projectName: string;
    members: number;
    lastModified: string;
}
