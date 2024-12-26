export type PaginationResponse<TResults> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<TResults>;
};
