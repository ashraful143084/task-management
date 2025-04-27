import { Skeleton } from "@/components/ui/skeleton";

export function DisplaySkeleton() {
  return (
    <div className="flex items-center space-x-4 mb-12">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 min-w-[700px]" />
        <Skeleton className="h-4 min-w-[700px]" />
      </div>
    </div>
  );
}
