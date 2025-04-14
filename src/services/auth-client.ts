import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [
    inferAdditionalFields({
      user: {
        bio: {
          type: "string",
          required: false,
        },
        followingCount: {
          type: "number",
          required: false,
        },
        followersCount: {
          type: "number",
          required: false,
        },
        postsCount: {
          type: "number",
          required: false,
        },
      },
    }),
  ],
});
