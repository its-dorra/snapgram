import { logo } from "@/assets";
import LogoutButton from "@/features/auth/components/logout-button";
import { Link } from "@tanstack/react-router";

export default function MobileNavbar() {
  return (
    <header className="flex items-center justify-between bg-black px-5 py-4 lg:hidden">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="inline-flex items-center gap-x-3">
        <LogoutButton size="small" />
      </div>
    </header>
  );
}
