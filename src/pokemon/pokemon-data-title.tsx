import { cn } from "@/lib/utils";

type PokemonDataTitleProps = {
  className?: string;
  children: React.ReactNode;
};

export const PokemonDataTitle = ({
  className,
  children,
}: PokemonDataTitleProps) => {
  return (
    <span className={cn(className, "text-xs font-medium")}>{children}</span>
  );
};
