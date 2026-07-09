import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

type SkeletonProps = {
    className?: string;
};

export function SkeletonImage({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("w-32 h-32 rounded-xl", className)}
        />
    );
}

export function SkeletonAvatar({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("w-12 h-12 rounded-full", className)}
        />
    );
}

export function SkeletonBanner({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("w-full h-48 rounded-xl", className)}
        />
    );
}

export function SkeletonText({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("h-4 w-full rounded-md", className)}
        />
    );
}

export function SkeletonTitle({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("h-7 w-2/3 rounded-md", className)}
        />
    );
}

export function SkeletonButton({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("h-10 w-28 rounded-md", className)}
        />
    );
}

export function SkeletonCard({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("w-full h-64 rounded-xl", className)}
        />
    );
}

export function SkeletonCircle({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("rounded-full", className)}
        />
    );
}

export function SkeletonRectangle({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("rounded-md", className)}
        />
    );
}
export function SkeletonNumber({ className }: SkeletonProps) {
    return (
        <Skeleton
            className={cn("h-6 w-16 rounded-md", className)}
        />
    );
}