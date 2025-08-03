import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

export function Dock({
  items,
  className,
}: {
  items: {
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 rounded-xl border border-gray-200 bg-white/70 p-2 backdrop-blur-md dark:border-gray-800 dark:bg-black/30",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className="group relative flex size-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all hover:scale-110 hover:bg-gray-100 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="transition-all duration-300 group-hover:scale-125">
            {item.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
