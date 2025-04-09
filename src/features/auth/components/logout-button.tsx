import { logoutIcon } from "@/assets";
import { useLogout } from "../hooks/useLogout";
import { cn } from "@/lib/utils";

export default function LogoutButton({ size }: { size: "small" | "large" }) {
  const { mutate, isPending: isLogingOut } = useLogout();
  return (
    <button
      className={cn(
        "hover:bg-primary-500 cursor-pointer rounded-sm text-base transition-colors",
        size === "large"
          ? "mt-auto flex w-full items-center justify-start gap-x-4 p-3 hover:text-white"
          : "p-1.5",
      )}
      onClick={() => mutate()}
      disabled={isLogingOut}
    >
      <img className="mix-blend-screen" src={logoutIcon} alt="logout icon" />
      {size === "large" && <span>Logout</span>}
    </button>
  );
}
