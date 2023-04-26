import { colors } from "./Layout/constants";

export const TABLE_HEADERS: Array<string> = [
  "Name",
  "Members",
  "Last Modified",
  "",
];

export const TABLE_DATA: Array<RecentFile> = [
  {
    id: 1,
    name: "Travel Landing Page",
    members: 5,
    last_modified: "Mar 8, 2020",
    color: colors.ORANGE,
  },
  {
    id: 2,
    name: "True Photos",
    members: 12,
    last_modified: "Mar 10, 2023",
    color: colors.GREEN,
  },
  {
    id: 3,
    name: "Dashboard Structure",
    members: 12,
    last_modified: "Mar 10, 2023",
    color: colors.RED,
  },
  {
    id: 4,
    name: "Character Illustration",
    members: 3,
    last_modified: "Mar 10, 2024",
    color: colors.NAVYBLUE,
  },
];

export const RECENT_PROJECTS: Array<Project> = [
  {
    id: 1,
    name: "JS Challenge",
    creation_date: "14.4.2023",
    comments: 2,
  },
  {
    id: 2,
    name: "React Challenge",
    creation_date: "17.4.2023",
    comments: 2,
  },
  {
    id: 3,
    name: "Style Challenge",
    creation_date: "20.4.2023",
    comments: 4,
  },
  {
    id: 4,
    name: "Project #4",
    creation_date: "16.4.2023",
    comments: 2,
  },
];

export const SHARED_PROJECTS: Array<Project> = [
  {
    id: 10,
    name: "Landing Page",
    creation_date: "14.4.2023",
    comments: 2,
  },
  {
    id: 22,
    name: "Illustration Pack",
    creation_date: "17.4.2023",
    comments: 2,
  },
  {
    id: 33,
    name: "CV Design",
    creation_date: "20.4.2023",
    comments: 4,
  },
  {
    id: 43,
    name: "Test Data Creation",
    creation_date: "16.4.2023",
    comments: 2,
  },
];
