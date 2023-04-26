declare module "*.module.css";

declare type Project = {
  id: number;
  name: string;
  creation_date: string;
  comments: number;
};

declare type RecentFile = {
  id: number;
  name: string;
  members: number;
  last_modified: string;
  color: string;
};
