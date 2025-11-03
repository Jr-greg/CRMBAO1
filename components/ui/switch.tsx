import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;

    return (
      <div className="flex items-center space-x-3">
        <div className="relative inline-block">
          <input
            type="checkbox"
            id={switchId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <label
            htmlFor={switchId}
            className={cn(
              "block h-6 w-11 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-700 transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
              className
            )}
          />
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
        </div>
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };


