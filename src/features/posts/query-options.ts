import { queryKeys } from "@/lib/queryKeys";
import { getUserFeed } from "@/services/post-api";
import { infiniteQueryOptions } from "@tanstack/react-query";

export const feedQueryOptions = infiniteQueryOptions({
  queryKey: queryKeys.feed(),
  queryFn: ({ pageParam = 1 }) => getUserFeed({ page: pageParam, perPage: 2 }),
  initialPageParam: 1,
  getNextPageParam: (lastPage) =>
    lastPage.data.pagination.hasNextPage
      ? lastPage.data.pagination.page + 1
      : undefined,
  getPreviousPageParam: (firstPage) =>
    firstPage.data.pagination.page > 1
      ? firstPage.data.pagination.page - 1
      : undefined,
});
