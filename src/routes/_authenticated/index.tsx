import type { postSchema } from "@/features/posts/schema";
import InfiniteScrollContainer from "@/components/infinte-scroll-container";
import Loader from "@/components/loader";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { useFeed } from "@/features/posts/hooks/useFeed";
import { feedQueryOptions } from "@/features/posts/query-options";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import Avatar from "boring-avatars";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/_authenticated/")({
  component: App,
  loader: ({ context: { queryClient } }) => {
    queryClient.prefetchInfiniteQuery(feedQueryOptions);
  },
});

function App() {
  const {
    data,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useFeed();

  console.log({ hasNextPage, data });

  const posts = data.pages.flatMap((page) => page.data.posts);

  return (
    <div className="flex w-full">
      <div className="mx-auto flex flex-col items-start gap-y-16">
        <PageHeader title="Home Feed" />
        <div className="flex flex-col gap-y-4">
          <InfiniteScrollContainer
            onBottomReached={() => {
              if (hasNextPage && !isFetching) {
                fetchNextPage();
              }
            }}
            className="inline-flex flex-col gap-y-12"
          >
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </InfiniteScrollContainer>
          {isFetchingNextPage && <Loader />}
        </div>
      </div>
      <div className="custom-scrollbar sticky top-0 hidden h-dvh w-96 shrink-0 overflow-y-auto lg:block">
        top creators
      </div>
    </div>
  );
}

function Post({
  caption,
  createdAt,
  imageUrl,
  isLikedByCurrentUser,
  likesCount,
  location,
  tags,
  user,
}: typeof postSchema.infer) {
  return (
    <article className="flex w-full max-w-lg flex-col gap-y-4">
      <header className="flex items-center gap-x-3">
        <Avatar name={user.name} variant="beam" size={48} />
        <div className="flex h-full flex-col justify-between">
          <p>{user.name}</p>
          <p className="small-regular text-gray-500">6 hours ago</p>
        </div>
      </header>
      <div className="flex flex-col gap-2">
        <p>{caption}</p>
        <div className="small-regular flex gap-x-1.5 text-gray-500">
          {tags.split(",").map((tag) => (
            <span key={tag}>#{tag.trim()}</span>
          ))}
        </div>
        <figure className="mt-4">
          <img
            className="aspect-square w-full rounded-4xl object-cover"
            src={imageUrl}
            alt="post image url"
          />
        </figure>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-2">
          <div className="cursor-pointer" role="button">
            <Heart
              className={cn(
                "text-primary-600 transition-colors hover:fill-red-500 hover:text-white",
                isLikedByCurrentUser && "fill-red-500 text-white shadow-md",
              )}
            />
          </div>

          <span>{likesCount}</span>
        </div>
        <Button variant="ghost">
          {/* <img src={saveIcon} alt="save icon" /> */}
        </Button>
      </div>
    </article>
  );
}
