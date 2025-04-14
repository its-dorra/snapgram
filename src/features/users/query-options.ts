import { PER_PAGE } from "@/lib/constants";
import { queryKeys } from "@/lib/query-keys";
import { getUserInfo, getUserPosts } from "@/services/user-api";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export function userInfoQueryOptions({ userId }: { userId: string }) {
  return queryOptions({
    queryKey: queryKeys.userInfo(userId),
    queryFn: () => getUserInfo({ id: userId }),
  });
}

export function userPostsQueryOptions(userId: string) {
  return infiniteQueryOptions({
    queryKey: queryKeys.userPosts({ userId }),
    queryFn: ({ pageParam }) =>
      getUserPosts({ id: userId, page: pageParam, perPage: PER_PAGE }),
    initialPageParam: 1,
    getNextPageParam: ({ data: { pagination } }) =>
      pagination.hasNextPage ? pagination.page + 1 : undefined,
    getPreviousPageParam: ({ data: { pagination } }) =>
      pagination.page > 1 ? pagination.page - 1 : undefined,
  });
}
