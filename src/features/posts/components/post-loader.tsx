import { Skeleton } from "@/components/ui/skeleton";

export default function PostLoader() {
  return (
    <article className="flex w-full flex-col gap-y-4">
      <header className="flex items-center gap-x-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex h-full flex-col justify-between gap-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </header>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <figure className="mt-4">
          <Skeleton className="aspect-square w-full rounded-4xl" />
        </figure>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </article>
  );
}
