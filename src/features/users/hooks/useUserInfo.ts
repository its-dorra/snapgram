import { useSuspenseQuery } from "@tanstack/react-query";
import { userInfoQueryOptions } from "../query-options";

export const useUserInfo = ({ userId }: { userId: string }) => {
  return useSuspenseQuery(userInfoQueryOptions({ userId }));
};
