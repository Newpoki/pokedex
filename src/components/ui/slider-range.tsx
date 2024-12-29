import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderRangeRef = React.ElementRef<typeof SliderPrimitive.Root>;

type SliderRangeProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>;

const SliderRange = React.forwardRef<SliderRangeRef, SliderRangeProps>(
  ({ className, value, ...props }, ref) => (
    <SliderPrimitive.Root
      {...props}
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      value={value}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-[2px] bg-default-input">
        <SliderPrimitive.Range className="absolute h-full bg-psychic" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="shadow focus-visible:ring-ring block h-5 w-5 rounded-full border-4 border-psychic bg-white shadow-[0px_10px_20px_0px] shadow-psychic/30 transition-colors before:absolute before:left-1/2 before:top-6 before:-translate-x-1/2 before:text-grey before:content-[attr(aria-valuenow)] disabled:pointer-events-none" />
      <SliderPrimitive.Thumb className="shadow focus-visible:ring-ring block h-5 w-5 rounded-full border-4 border-psychic bg-white shadow-[0px_10px_20px_0px] shadow-psychic/30 transition-colors before:absolute before:left-1/2 before:top-6 before:-translate-x-1/2 before:text-grey before:content-[attr(aria-valuenow)] disabled:pointer-events-none" />
    </SliderPrimitive.Root>
  ),
);

export { SliderRange };
