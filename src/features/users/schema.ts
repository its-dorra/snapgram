import { type } from "arktype";

export const userInfoSchema = type({
  id: "string",
  name: "string",
  image: "string.url | null",
  bio: "string | null",
  followersCount: "number.integer >= 0",
  followingsCount: "number.integer >= 0",
  postsCount: "number.integer >= 0",
});
