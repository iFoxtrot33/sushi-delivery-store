export type Sushi = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
};

export enum Status {
  LOADING = "loading",
  COMPLETED = "success",
  ERROR = "error",
}

export interface SushiSliceState {
  items: Sushi[];
  status: Status;
}

export type FetchSushiArgs = Record<string, string | number>;
