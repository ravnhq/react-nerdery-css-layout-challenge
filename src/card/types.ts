export interface User {
  avatar: string;
  id: number;
  type: number;
}

export interface Card {
  children: React.ReactNode;
  footer: string;
  numberUsers: User[];
}
