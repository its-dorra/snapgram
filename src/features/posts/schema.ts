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

export const postSchema = type({
  isLikedByCurrentUser: "boolean",
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
    pagination: {
      page: "number.integer >= 1",
      perPage: "number.integer >= 1",
      totalCount: "number.integer >= 0",
      totalPages: "number.integer >= 0",
      hasNextPage: "boolean",
    },
  },
});
