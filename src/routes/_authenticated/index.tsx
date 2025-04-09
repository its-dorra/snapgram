import { posts } from "@/assets";
import PageHeader from "@/components/page-header";
import { createFileRoute } from "@tanstack/react-router";
import Avatar from "boring-avatars";

export const Route = createFileRoute("/_authenticated/")({
  component: App,
  loader: ({ context: { queryClient } }) => {},
  wrapInSuspense: true,
});

function App() {
  return (
    <div className="flex w-full">
      <div className="mx-auto flex flex-col items-start gap-y-16">
        <PageHeader title="Home Feed" />
        <div className="inline-flex flex-col gap-y-12">
          {posts.map((post, index) => (
            <article
              className="flex w-full max-w-md flex-col gap-y-4"
              key={index}
            >
              <header className="flex items-center gap-x-3">
                <Avatar name={post.user.name} variant="beam" size={48} />
                <div className="flex h-full flex-col justify-between">
                  <p>{post.user.name}</p>
                  <p className="small-regular text-gray-500">6 hours ago</p>
                </div>
              </header>
              <div className="flex flex-col gap-2">
                <p>{post.content}</p>
                <div className="small-regular flex gap-x-1.5 text-gray-500">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <figure className="mt-4">
                  <img
                    className="aspect-square w-full rounded-4xl object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="custom-scrollbar sticky top-0 hidden h-dvh w-96 shrink-0 overflow-y-auto lg:block">
        top creators
      </div>
    </div>
  );
}
