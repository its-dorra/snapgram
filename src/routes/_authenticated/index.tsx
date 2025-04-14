import InfiniteScrollContainer from "@/components/infinte-scroll-container";
import PageHeader from "@/components/page-header";
import Post from "@/features/posts/components/post";
import PostLoader from "@/features/posts/components/post-loader";
import { useFeed } from "@/features/posts/hooks/useFeed";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/_authenticated/")({
  component: App,
});

function App() {
  return (
    <div className="flex w-full">
      <div className="mx-auto flex w-full max-w-lg flex-col items-start gap-y-16">
        <PageHeader title="Home Feed" />
        <Suspense fallback={<PostLoader />}>
          <FeedPosts />
        </Suspense>
      </div>
      <div className="custom-scrollbar sticky top-0 hidden h-dvh w-96 shrink-0 overflow-y-auto lg:block">
        top creators
      </div>
    </div>
  );
}

function FeedPosts() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isFetching } =
    useFeed();

  const posts = data.pages.flatMap((page) => page.data.posts);

  return (
    <InfiniteScrollContainer
      hasMore={isFetchingNextPage}
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
  );
}
