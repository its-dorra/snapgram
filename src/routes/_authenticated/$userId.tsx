import { useUserInfo } from "@/features/users/hooks/useUserInfo";
import { userInfoQueryOptions } from "@/features/users/query-options";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/$userId")({
  component: RouteComponent,
  loader: ({ context: { queryClient }, params }) => {
    queryClient.prefetchQuery(userInfoQueryOptions({ userId: params.userId }));
  },
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const { data } = useUserInfo({ userId });

  console.log("userId", userId);
  console.log("data", data);

  return (
    <div>
      Hello
      {userId}
    </div>
  );
}
