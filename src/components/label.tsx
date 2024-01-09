import { cn } from "@/lib/utils";
import React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label
        className={cn("text font-semibold", className)}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  },
);

export { Label };
