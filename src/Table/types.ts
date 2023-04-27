export interface Data {
  name: string;
  members: number;
  date: string;
  type: number;
}
export interface TableBody {
  data: Data[];
}

export type TableCell = Data;

export type Table = TableBody;
