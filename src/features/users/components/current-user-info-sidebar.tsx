import UserAvatar from "@/components/user-avatar";
import { Link } from "@tanstack/react-router";
import { useUser } from "./hooks/useUser";

export default function CurrentUserInfoSidebar() {
  const { data } = useUser();

  const user = data!.user;

  return (
    <Link
      className="flex items-center gap-x-2 rounded-lg py-2 hover:bg-gray-900"
      to="/$userId"
      params={{ userId: user.id }}
    >
      <UserAvatar className="size-10" name={user.name} src={user.image} />
      <div className="inline-flex flex-col justify-start">
        <p className="font-bold">{user.name}</p>
        <p className="subtle-semibold text-gray-600">Click to see profile</p>
      </div>
    </Link>
  );
}
