import { type } from "arktype";
import { postSchema } from "../posts/schema";

export const userInfoSchema = type({
  id: "string",
  name: "string",
  image: "string.url | null",
  bio: "string | null",
  followersCount: "number.integer >= 0",
  followingsCount: "number.integer >= 0",
  postsCount: "number.integer >= 0",
});

export const userLikedPostsSchema = type({
  success: "true",
  data: type({
    post: postSchema.omit("isLikedByCurrentUser", "user"),
  }).array(),
});
