import { logo, sidebarLinks } from "@/assets";
import { Link } from "@tanstack/react-router";
import LogoutButton from "@/features/auth/components/logout-button";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 hidden h-screen flex-col gap-8 px-8 py-8 lg:flex">
      <img className="w-44" src={logo} alt="logo" />
      <div>user</div>

      <div className="inline-flex flex-col gap-4">
        {sidebarLinks.map((link) => (
          <Link
            className="hover:bg-primary-500 flex items-center justify-start gap-4 rounded-sm px-3 py-3 transition-colors"
            activeProps={{
              className: "bg-primary-600",
            }}
            {...link.route}
            key={link.label}
          >
            <img
              className="mix-blend-screen"
              src={link.imgURL}
              alt="link icon"
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <LogoutButton size="large" />
    </aside>
  );
}
