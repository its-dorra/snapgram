import { cn } from "@/lib/utils";

function Loader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-800 border-t-blue-500" />
    </div>
  );
}

export default Loader;
