declare module '*.module.css';

export interface listItem {
    id?: number;
    name: string;
}

export interface cardItem {
    id: number;
    name: string;
    date: string;
    circles: number;
}

export interface tableItem {
    id: number;
    projectName: string;
    members: number;
    lastModified: string;
}

export interface storageItem {
    id: number;
    name: string;
    fileAmmount: number;
    fileSize: number;
    icon: JSX.Element;
}
