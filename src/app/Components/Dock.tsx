import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Dock({
  items,
  className,
}: {
  items: {
    name: string;
    icon: string;
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
          className="group relative flex size-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition-all hover:scale-110 hover:bg-gray-100 dark:bg-black dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={24}
            height={24}
            className="transition-all duration-300 group-hover:scale-125"
          />
        </Link>
      ))}
    </div>
  );
}
