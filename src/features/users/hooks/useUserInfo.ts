import { useSuspenseQuery } from "@tanstack/react-query";
import { userInfoQueryOptions } from "../query-options";

export function useUserInfo({ userId }: { userId: string }) {
  return useSuspenseQuery(userInfoQueryOptions({ userId }));
}
