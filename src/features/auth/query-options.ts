import { queryKeys } from "@/lib/queryKeys";
import { queryOptions } from "@tanstack/react-query";
import { authClient } from "../../services/auth-client";

export const authQueryOption = queryOptions({
  queryKey: queryKeys.auth(),
  queryFn: () => authClient.getSession().then((res) => res.data),
  staleTime: Infinity,
});
