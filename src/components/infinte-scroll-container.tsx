import { loaderIcon } from "@/assets";
import { useIntersectionObserver } from "usehooks-ts";

interface InfiniteScrollContainerProps {
  children: React.ReactNode;
  onBottomReached: () => void;
  className?: string;
  hasMore: boolean;
}

export default function InfiniteScrollContainer({
  children,
  onBottomReached,
  className,
  hasMore,
}: InfiniteScrollContainerProps) {
  const { ref } = useIntersectionObserver({
    rootMargin: "50px",
    onChange: (inView) => {
      if (inView) {
        onBottomReached();
      }
    },
  });

  return (
    <div className={className}>
      {children}
      <div ref={ref} />
      {hasMore && (
        <div className="mt-4 flex w-full items-center justify-center">
          <img src={loaderIcon} />
        </div>
      )}
    </div>
  );
}
