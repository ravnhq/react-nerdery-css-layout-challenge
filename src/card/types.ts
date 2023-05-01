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

export interface Cards {
  data: { name: string; date: string; users: User[] }[];
  shared: boolean;
}
