import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { feedQueryOptions } from "../query-options";

export function useFeed() {
  return useSuspenseInfiniteQuery(feedQueryOptions);
}
