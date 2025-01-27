import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import MagnifyIcon from "@/assets/icons/magnify.svg";

export const SearchInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { inputClassName?: string }
>(({ className, inputClassName, type, value, ...props }, ref) => {
  return (
    <label
      className={cn(
        "flex items-center gap-2 rounded-[10px] bg-default-input px-6 py-5 text-sm text-black transition-colors focus-within:bg-pressed-input",
        className,
      )}
    >
      <MagnifyIcon className="h-5 w-5 text-grey" />

      <input
        {...props}
        type={type}
        className={cn(
          inputClassName,
          "w-full bg-transparent caret-psychic placeholder:text-grey focus-visible:outline-none",
        )}
        value={value}
        ref={ref}
      />
    </label>
  );
});
