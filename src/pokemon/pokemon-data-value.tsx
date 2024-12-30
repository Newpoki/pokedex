import { cn } from "@/lib/utils";

type PokemonDataValueProps = {
  children: React.ReactNode;
  className?: string;
};

export const PokemonDataValue = ({
  children,
  className,
}: PokemonDataValueProps) => {
  return <span className={cn(className, "text-grey")}>{children}</span>;
};
