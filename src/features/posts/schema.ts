import { paginationSchema } from "@/lib/schema";
import { type } from "arktype";

export const createPostSchema = type({
  caption: type.string.atLeastLength(3).configure({
    message: "Caption must be at least 3 characters long",
  }),
  imageFile: type.instanceOf(File).configure({
    message: "File must be a valid image file",
  }),
  tags: type.string.atLeastLength(2).configure({
    message: "Tags must be at least 2 characters long",
  }),
  location: type.string.atLeastLength(3).configure({
    message: "Location must be at least 3 characters long",
  }),
});

export const editPostSchema = createPostSchema.omit("imageFile").partial();

export const postSchema = type({
  isLikedByCurrentUser: "boolean",
  isSavedByCurrentUser: "boolean",
  location: "string",
  id: "string",
  createdAt: "string.date.parse",
  updatedAt: "string.date.parse",
  userId: "string",
  imageUrl: "string",
  caption: "string",
  tags: "string",
  likesCount: "number",
  user: {
    id: "string",
    name: "string",
    image: "string | null",
  },
});

export const postsSchema = type({
  success: "boolean",
  data: {
    posts: postSchema.array(),
    pagination: paginationSchema,
  },
});
