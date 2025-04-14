import { postsSchema } from "@/features/posts/schema";
import { userInfoSchema } from "@/features/users/schema";
import { paginationQuerySchema } from "@/lib/schema";
import { createFetch, createSchema } from "@better-fetch/fetch";
import { type } from "arktype";

const arktypeSchema = createSchema({
  "@get/users/:id": {
    params: type({
      id: "string",
    }),
    output: type({
      success: "boolean",
      data: userInfoSchema,
    }),
  },
  "@get/users/:id/posts": {
    params: type({
      id: "string",
    }),
    query: paginationQuerySchema,
    output: postsSchema,
  },
});

const $fetch = createFetch({
  baseURL: import.meta.env.VITE_API_URL,
  throw: true,
  schema: arktypeSchema,
  credentials: "include",
});

export function getUserInfo({ id }: { id: string }) {
  return $fetch("@get/users/:id", {
    params: { id },
  });
}

export function getUserPosts({
  id,
  page,
  perPage,
}: {
  id: string;
  page?: number;
  perPage?: number;
}) {
  return $fetch("@get/users/:id/posts", {
    params: { id },
    query: { page, perPage },
  });
}
