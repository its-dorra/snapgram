import { PER_PAGE } from "@/lib/constants";
import { queryKeys } from "@/lib/query-keys";
import { getUserFeed, getPostById } from "@/services/post-api";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const feedQueryOptions = infiniteQueryOptions({
  queryKey: queryKeys.feed(),
  queryFn: ({ pageParam = 1 }) =>
    getUserFeed({ page: pageParam, perPage: PER_PAGE }),
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

export const postQueryOptions = ({ id }: { id: string }) =>
  queryOptions({
    queryKey: queryKeys.post({ id }),
    queryFn: () => getPostById({ id }),
  });
