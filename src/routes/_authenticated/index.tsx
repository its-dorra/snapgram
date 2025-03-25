import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: App,
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData({
      queryKey: ["posts"],
      queryFn: () =>
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
          res.json()
        ),
    });
  },
  wrapInSuspense: true,
});

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
