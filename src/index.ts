import { useSearchParams } from "next/navigation";
import { UseQueryType } from "./types";

export function useQuery(): UseQueryType {
  const searchParams = useSearchParams();

  return {
    getAll: (options?: {
      toQueryFormat: boolean;
    }): { [key: string]: string } | string => {
      const searchParamsString = searchParams.toString();
      if (options?.toQueryFormat) {
        return searchParamsString && searchParamsString !== ""
          ? "?" + searchParamsString
          : "";
      } else {
        let queries: { [key: string]: string } = {};
        for (let query of Array.from(searchParams)) {
          queries[query[0]] = query[1];
        }

        return queries;
      }
    },
    get: (key: string): string => {
      const getSearchParam = searchParams.get(key);
      return getSearchParam ? getSearchParam : "";
    },
    set: (queries: { [key: string]: string }): string => {
      let qsEntries = Object.entries(queries);
      let qs = "?";
      for (let i = 0; i < qsEntries.length; i++) {
        if (qsEntries[i][1] !== "") {
          if (i !== 0 && qs !== "?") {
            qs += `&${qsEntries[i][0]}=${qsEntries[i][1]}`;
          } else {
            qs += `${qsEntries[i][0]}=${qsEntries[i][1]}`;
          }
        }
      }

      return qs;
    },
    add: (key: string, value: string): string => {
      // update as necessary
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      // Check if value is empty
      if (!value) {
        current.delete(key);
      } else {
        current.set(key, value);
      }

      // cast to string
      const search = current.toString();

      // check if search is empty and add ? if not
      const query = search ? `?${search}` : "";

      return query;
    },
    addMany: (...items: { [key: string]: string }[]): string => {
      // update as necessary
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      for (let item of items) {
        for (let key in item) {
          // Check if value is empty
          if (!item[key]) {
            current.delete(key);
          } else {
            current.set(key, item[key]);
          }
        }
      }

      // cast to string
      const search = current.toString();

      // check if search is empty and add ? if not
      const query = search ? `?${search}` : "";

      return query;
    },
    delete: (key: string): string => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete(key);

      // cast to string
      const search = current.toString();

      // check if search is empty and add ? if not
      const query = search ? `?${search}` : "";

      return query;
    },
    deleteMany: (...keys: string[]): string => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      for (let key of keys) {
        current.delete(key);
      }

      // cast to string
      const search = current.toString();

      // check if search is empty and add ? if not
      const query = search ? `?${search}` : "";

      return query;
    },
  };
}
export * from "./types";

export default useQuery;
