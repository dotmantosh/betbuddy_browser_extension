export interface Tournament {
  id: string;
  name: string;
  eventSize: number;
}
export interface ISportList {
  id: string;
  name: string;
  eventSize: number;
  tournaments: Tournament[];
}


