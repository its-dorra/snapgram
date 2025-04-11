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
