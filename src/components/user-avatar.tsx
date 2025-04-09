import { cn } from "@/lib/utils";
import Avatar from "boring-avatars";

interface UserAvatarProps {
  name: string;
  src?: string;
  className?: string;
}

export default function UserAvatar({ name, className, src }: UserAvatarProps) {
  return src ? (
    <img
      className={cn("size-8 rounded-full", className)}
      src={src}
      alt={`Profile picture of ${name}`}
    />
  ) : (
    <Avatar name={name} className={cn("size-8 rounded-full", className)} />
  );
}
