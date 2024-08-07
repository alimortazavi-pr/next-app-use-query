export type UseQueryType = {
  getAll: (options?: { toQueryFormat: boolean }) =>
    | {
        [key: string]: string;
      }
    | string;
  get: (key: string) => string;
  set: (queries: { [key: string]: string }) => string;
  add: (key: string, value: string) => string;
  addMany: (
    ...items: {
      [key: string]: string;
    }[]
  ) => string;
  delete: (key: string) => string;
  deleteMany: (...keys: string[]) => string;
};
