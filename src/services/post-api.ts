import { postSchema, postsSchema } from "@/features/posts/schema";
import { createFetch, createSchema } from "@better-fetch/fetch";
import { type } from "arktype";

const arktypeSchema = createSchema({
  "@get/posts/:id": {
    params: type({
      id: "string.uuid",
    }),
    output: type({
      success: "boolean",
      data: postSchema,
    }),
  },
  "@get/posts/feed": {
    query: type({
      page: "number.integer >= 1 = 1",
      perPage: "number.integer >= 1 = 5",
    }),
    output: postsSchema,
  },
});

const $fetch = createFetch({
  baseURL: import.meta.env.VITE_API_URL,
  throw: true,
  schema: arktypeSchema,
  credentials: "include",
});

export function getPostById(id: string) {
  return $fetch("@get/posts/:id", {
    params: { id },
  });
}

export function getUserFeed({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) {
  return $fetch("@get/posts/feed", {
    query: { page, perPage },
  });
}
