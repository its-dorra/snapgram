import { createFileRoute, redirect } from "@tanstack/react-router";
import { authQueryOption } from "../features/auth/query-options";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context: { queryClient } }) => {
    try {
      const data = await queryClient.ensureQueryData(authQueryOption);
      if (!data?.user) {
        throw redirect({
          to: "/login",
        });
      }
    } catch (e) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
