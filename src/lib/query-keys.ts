export const queryKeys = {
  auth: () => ["auth"],
  feed: () => ["feed"],
  userPosts: ({ userId }: { userId: string }) => ["userPosts", userId],
  userInfo: (userId: string) => ["userInfo", userId],
  post: ({ id }: { id: string }) => ["post", id],
};
