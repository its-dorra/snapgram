import { authQueryOption } from "@/features/auth/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useUser() {
  return useSuspenseQuery(authQueryOption);
}
