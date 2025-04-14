import {
  createPostSchema,
  editPostSchema,
  postSchema,
  postsSchema,
} from "@/features/posts/schema";
import { paginationQuerySchema } from "@/lib/schema";
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
    query: paginationQuerySchema,
    output: postsSchema,
  },
  "@post/posts": {
    body: createPostSchema,
    output: type({
      success: "boolean",
      data: postSchema,
    }),
  },
  "@patch/posts/:id": {
    params: type({
      id: "string.uuid",
    }),
    body: editPostSchema,
    output: type({
      success: "boolean",
      data: postSchema,
    }),
  },
});

const $fetch = createFetch({
  baseURL: import.meta.env.VITE_API_URL,
  throw: true,
  schema: arktypeSchema,
  credentials: "include",
});

export function getPostById({ id }: { id: string }) {
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

export function createPost(data: typeof createPostSchema.infer) {
  const formData = new FormData();
  formData.append("caption", data.caption);
  formData.append("location", data.location);
  formData.append("tags", data.tags);
  formData.append("imageFile", data.imageFile);

  return $fetch("@post/posts", {
    body: formData,
  });
}

export function editPost(data: typeof editPostSchema.infer & { id: string }) {
  return $fetch("@patch/posts/:id", {
    params: { id: data.id },
    body: data,
  });
}
