import { cn } from "@/lib/utils";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-xl bg-primary py-3 font-medium text-white/80 disabled:cursor-not-allowed disabled:bg-primary-muted",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export { Button };
