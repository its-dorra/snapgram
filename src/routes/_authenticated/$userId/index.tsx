import { editIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { useUser } from "@/features/users/hooks/useUser";
import { useUserInfo } from "@/features/users/hooks/useUserInfo";
import { userInfoQueryOptions } from "@/features/users/query-options";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/$userId/")({
  component: RouteComponent,
  loader: ({ context: { queryClient }, params }) => {
    queryClient.prefetchQuery(userInfoQueryOptions({ userId: params.userId }));
  },
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const { data: userData } = useUserInfo({ userId });
  const { data: currentUserData } = useUser();
  const [tab, setTab] = useState<"posts" | "likedPosts">("posts");

  const user = userData.data;
  const currentUser = currentUserData!.user;

  const isCurrentUser = currentUser.id === userId;

  return (
    <div className="flex w-full max-w-4xl flex-col gap-y-8">
      <div className="flex w-full flex-col gap-y-8 self-center lg:flex-row lg:items-start lg:justify-between lg:self-start">
        <div className="flex items-start gap-x-8">
          <UserAvatar className="size-24" name={user.name} src={user.image} />
          <div className="flex flex-col items-start gap-y-2">
            <p className="font-bold">{user.name}</p>
            {user.bio && <p className="text-sm">{user.bio}</p>}
            <div className="mt-2 flex gap-x-4 text-sm">
              <p className="flex items-center gap-x-1">
                <span className="text-primary-600 font-bold">
                  {user.postsCount}
                </span>
                <span>Posts</span>
              </p>
              <p className="flex items-center gap-x-1">
                <span className="text-primary-600 font-bold">
                  {user.followersCount}
                </span>
                <span>Followers</span>
              </p>
              <p className="flex items-center gap-x-1">
                <span className="text-primary-600 font-bold">
                  {user.followingsCount}
                </span>
                <span>Following</span>
              </p>
            </div>
          </div>
        </div>
        {isCurrentUser && (
          <Link to="/$userId/edit" params={{ userId }}>
            <button
              className="bg-dark-4 flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2 hover:opacity-80"
              type="button"
            >
              <img src={editIcon} className="size-4" alt="edit icon" />
              <span>Edit Profile</span>
            </button>
          </Link>
        )}
      </div>
      {isCurrentUser && (
        <div className="flex gap-x-4">
          <Button
            variant={tab === "posts" ? "default" : "ghost"}
            onClick={() => setTab("posts")}
          >
            Posts
          </Button>
          <Button
            variant={tab === "likedPosts" ? "default" : "ghost"}
            onClick={() => setTab("likedPosts")}
          >
            Liked Posts
          </Button>
        </div>
      )}
    </div>
  );
}
