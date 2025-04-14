import { useSuspenseQuery } from "@tanstack/react-query";
import { postQueryOptions } from "../query-options";

export function usePost({ id }: { id: string }) {
  return useSuspenseQuery(postQueryOptions({ id }));
}
