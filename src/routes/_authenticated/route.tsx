import MobileBottombar from "@/components/mobile-bottombar";
import MobileNavbar from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import { authQueryOption } from "@/features/auth/query-options";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context: { queryClient }, location }) => {
    const data = await queryClient.ensureQueryData(authQueryOption);

    if (!data?.user) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href || "/",
        },
      });
    }
  },
  component: AppLayout,
});

function AppLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (ref.current && isMobile) {
      const { height } = ref.current.getBoundingClientRect();
      setPaddingBottom(height);
    }
  }, [isMobile]);

  return (
    <div className="custom-scrollbar grid h-dvh grid-flow-col grid-cols-1 overflow-y-auto lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div>
        <MobileNavbar />
        <div
          className="flex items-center justify-center px-6 pt-2 lg:px-16 lg:py-8"
          style={{
            ...(isMobile && { paddingBottom: `${paddingBottom + 24}px` }),
          }}
        >
          <Outlet />
        </div>
      </div>

      <MobileBottombar ref={ref} />
    </div>
  );
}
