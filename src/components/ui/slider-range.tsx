import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-[2px] bg-default-input">
      <SliderPrimitive.Range className="absolute h-full bg-psychic" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="shadow focus-visible:ring-ring block h-5 w-5 rounded-full border-4 border-psychic bg-white shadow-[0px_10px_20px_0px] shadow-psychic/30 transition-colors disabled:pointer-events-none" />

    <SliderPrimitive.Thumb className="shadow focus-visible:ring-ring block h-5 w-5 rounded-full border-4 border-psychic bg-white shadow-[0px_10px_20px_0px] shadow-psychic/30 transition-colors disabled:pointer-events-none" />
  </SliderPrimitive.Root>
));

export { SliderRange };
