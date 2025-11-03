"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactElement;
  content: string;
  side?: "top" | "right" | "bottom" | "left";
}

const Tooltip = ({ children, content, side = "top" }: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <div className="relative inline-block">
      {React.cloneElement(children, {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        onFocus: () => setIsVisible(true),
        onBlur: () => setIsVisible(false),
      })}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in-0 zoom-in-95",
            sideClasses[side]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export { Tooltip };


