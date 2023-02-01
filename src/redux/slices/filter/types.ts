export type Sort = {
  name: string;
  sortProperty: "rating" | "price" | "-price" | "-title";
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
