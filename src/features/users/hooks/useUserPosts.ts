import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { userPostsQueryOptions } from "../query-options";

export function useUserPosts({ userId }: { userId: string }) {
  return useSuspenseInfiniteQuery(userPostsQueryOptions(userId));
}
