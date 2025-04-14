import { useQuery } from "@tanstack/react-query";
import { authQueryOption } from "../query-options";

export function useUser() {
  return useQuery(authQueryOption);
}
