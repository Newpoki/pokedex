import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors rounded-[10px]",
  {
    variants: {
      variant: {
        primary:
          "bg-psychic text-white shadow-[0px_10px_20px_0px] shadow-psychic/30",
        secondary: "bg-default-input text-grey",
      },
      size: {
        normal: "p-5",
        card: "px-4 pb-5 pt-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
