import { FileSystemNode } from "../shared/types/file-system-node";
import RecentFile from "../shared/types/recent-file";
import FileMember from "../shared/types/file-member";
import { StorageReport } from "../shared/types/storage-detail";

const generateMembersArray = (n: number): FileMember[] =>
  Array(n).map((_, i) => {
    return { id: i };
  });

export const getRecentFiles = (): RecentFile[] => {
  return [
    {
      id: 1,
      filename: "Travel Landing Page",
      members: generateMembersArray(10),
      updatedAt: "Mar 8, 2020",
      type: "var(--orange)",
    },
    {
      id: 2,
      filename: "True Photos",
      members: generateMembersArray(12),
      updatedAt: "Mar 8, 2020",
      type: "var(--green)",
    },
    {
      id: 3,
      filename: "Dashboard Structure",
      members: generateMembersArray(10),
      updatedAt: "Mar 9, 2020",
      type: "var(--red)",
    },
    {
      id: 4,
      filename: "Character Illustration",
      members: generateMembersArray(3),
      updatedAt: "Mar 10, 2020",
      type: "var(--orange)",
    },
  ];
};

export const getRecentlyUsedFiles = (): FileSystemNode[] => {
  return [
    {
      id: 1,
      filename: "App Project",
      createdAt: "20.02.2020",
      members: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 2,
      filename: "Project: fitbit",
      createdAt: "28.02.2020",
      members: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 3,
      filename: "Client Documents",
      createdAt: "4.03.2020",
      members: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    },
  ];
};

export const getSharedWithMeData = (): FileSystemNode[] => {
  return [
    {
      id: 1,
      filename: "Landing Page",
      createdAt: "20.02.2020",
      members: [
        {
          id: 4,
          color: "var(--green)",
        },
        {
          id: 1,
          color: "var(--red)",
        },
      ],
    },
    {
      id: 2,
      filename: "Illustration Pack",
      createdAt: "20.02.2020",
      members: [
        {
          id: 4,
          color: "var(--green)",
        },
        {
          id: 1,
          color: "var(--red)",
        },
        {
          id: 2,
          color: "var(--orange)",
        },
      ],
    },
    {
      id: 3,
      filename: "Landing Page",
      createdAt: "20.02.2020",
      members: [
        {
          id: 4,
          color: "var(--green)",
        },
        {
          id: 2,
          color: "var(--orange)",
        },
      ],
    },
  ];
};


export const getStorageReport = (): StorageReport => {
  return {
    totalSpaceInGB: 500,
    documentTypes: [
      {
        id: 1,
        type: "Documents",
        color: "var(--orange)",
        numberOfFiles: 720,
        spaceInGB: 200
      },
      {
        id: 2,
        type: "Documents",
        color: "var(--blue)",
        numberOfFiles: 720,
        spaceInGB: 125
      },
      {
        id: 3,
        type: "Documents",
        color: "var(--green)",
        numberOfFiles: 720,
        spaceInGB: 75
      },
      {
        id: 4,
        type: "Documents",
        color: "var(--light-gray)",
        numberOfFiles: 720,
        spaceInGB: 50
      },
    ]
  }
}