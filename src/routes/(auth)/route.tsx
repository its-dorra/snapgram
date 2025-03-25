import { logo, sideImage } from "@/assets";
import { authQueryOption } from "@/features/auth/query-options";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
  beforeLoad: async ({ context: { queryClient } }) => {
    const data = await queryClient.ensureQueryData(authQueryOption);
    if (data?.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center gap-y-8 items-center">
        <img src={logo} alt="logo" />
        <Outlet />
      </div>
      <div className="hidden lg:block h-screen lg:overflow-y-clip">
        <img
          className="object-cover h-full w-full"
          src={sideImage}
          alt="social media image"
        />
      </div>
    </div>
  );
}
