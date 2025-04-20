import InfiniteScrollContainer from "@/components/infinte-scroll-container";
import { useUserPosts } from "../hooks/useUserPosts";

export default function UserPosts({ userId }: { userId: string }) {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isFetching } =
    useUserPosts({ userId });

  const posts = data.pages.flatMap((page) => page.data.posts);

  return (
    <InfiniteScrollContainer
      hasMore={isFetchingNextPage}
      onBottomReached={() => {
        if (hasNextPage && !isFetching) {
          fetchNextPage();
        }
      }}
      className="posts-grid"
    >
      hello
    </InfiniteScrollContainer>
  );
}
