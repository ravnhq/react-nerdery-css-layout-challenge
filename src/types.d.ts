declare module "*.module.css";

interface Project {
  id: number;
  name: string;
  creation_date: string;
  comments: number;
}

interface RecentFile {
  id: number;
  name: string;
  members: number;
  last_modified: string;
  color: string;
}

interface GraphData {
  id: number;
  name: string;
  files: number;
  size: number;
  size_type: string;
  color: string;
}
