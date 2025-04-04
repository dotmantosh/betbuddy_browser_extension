export interface ITournament {
  id: string;
  name: string;
  eventSize: number;
}
export interface ISportList {
  id: string;
  name: string;
  eventSize: number;
  tournaments: ITournament[];
}


