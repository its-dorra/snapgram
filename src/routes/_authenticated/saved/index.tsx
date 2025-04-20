import { posts, saveIcon } from "@/assets";
import PageHeader from "@/components/page-header";

import UserAvatar from "@/components/user-avatar";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/saved/")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) => {},
  head: () => ({
    meta: [
      { title: "Saved Posts - Snapgram" },
      {
        name: "description",
        content: "View and manage your saved posts on Snapgram.",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="flex w-full max-w-4xl flex-col gap-y-8">
      <PageHeader icon={saveIcon} title="Saved Posts" />

      <section className="posts-grid px-2">
        {posts.map((post, index) => (
          <Link key={index} to="/posts/$postId" params={{ postId: `${index}` }}>
            <figure className="group relative aspect-square overflow-clip rounded-3xl transition-opacity hover:opacity-80">
              <img
                className="size-full rounded-3xl mask-b-from-80% mask-b-to-transparent"
                src={post.imageUrl}
                alt={`post image ${index}`}
              />
              <UserAvatar
                name={post.user.name}
                src={post.user.imageUrl}
                className="absolute bottom-6 left-6 size-10"
              />
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
}
