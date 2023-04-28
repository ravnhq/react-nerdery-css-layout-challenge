interface RecentFile {
  id: number,
  filename: string,
  numberOfMembersSharedWith: number,
  lastModifiedDate: string,
  type: string
}

export default RecentFile