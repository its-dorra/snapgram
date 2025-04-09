import { logo, sideImage } from "@/assets";
import { authQueryOption } from "@/features/auth/query-options";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { type } from "arktype";

export const Route = createFileRoute("/(auth)")({
  validateSearch: type({
    "redirect?": "string",
  }),
  beforeLoad: async ({ context: { queryClient } }) => {
    const data = await queryClient.ensureQueryData(authQueryOption);
    if (data?.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: AuthLayout,
  ssr: true,
});

function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-flow-col grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <img src={logo} alt="logo" />
        <Outlet />
      </div>
      <div className="hidden h-screen lg:block lg:overflow-y-clip">
        <img
          className="h-full w-full object-cover"
          src={sideImage}
          alt="social media image"
        />
      </div>
    </div>
  );
}
