import type { postSchema } from "../schema";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import Avatar from "boring-avatars";
import { Heart } from "lucide-react";

export default function Post({
  caption,
  imageUrl,
  isLikedByCurrentUser,
  likesCount,
  location,
  isSavedByCurrentUser,
  tags,
  user,
}: typeof postSchema.infer) {
  const userId = user.id;
  console.log("userId", userId);

  return (
    <article className="flex flex-col gap-y-4">
      <Link to="/$userId" params={{ userId }} className="w-full">
        <header className="flex items-center gap-x-3">
          <Avatar name={user.name} variant="beam" size={48} />
          <div className="inline-flex h-full flex-col justify-between">
            <p>{user.name}</p>
            <p className="small-regular text-gray-500">6 hours ago</p>
          </div>
        </header>
      </Link>
      <div className="flex flex-col gap-2">
        <p>{caption}</p>
        <div className="small-regular flex gap-x-1.5 text-gray-500">
          {tags.split(",").map((tag) => (
            <span key={tag}>#{tag.trim()}</span>
          ))}
        </div>
        <figure className="mt-4">
          <img
            className="aspect-square w-full rounded-4xl object-cover"
            loading="lazy"
            src={imageUrl}
            alt="post image url"
          />
        </figure>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-2">
          <div className="cursor-pointer" role="button">
            <Heart
              className={cn(
                "text-primary-600 transition-colors hover:fill-red-500 hover:text-white",
                isLikedByCurrentUser && "fill-red-500 text-white shadow-md",
              )}
            />
          </div>

          <span>{likesCount}</span>
        </div>
        <Button variant="ghost">
          {/* <img src={saveIcon} alt="save icon" /> */}
        </Button>
      </div>
    </article>
  );
}
