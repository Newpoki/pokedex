import { cn } from "@/lib/utils";
import { TypeName } from "@/type/type-types";

type PokemonDataCategoryTitleProps = {
  children: React.ReactNode;
  className?: string;
  typeName: TypeName;
};

export const PokemonDataCategoryTitle = ({
  children,
  className,
  typeName,
}: PokemonDataCategoryTitleProps) => {
  return (
    <h3
      className={cn(className, "font-bold")}
      // TODO: Create utils to get color / bgcolor / (drop-shadow ?) with comments
      style={{ color: `hsl(var(--color-${typeName}))` }}
    >
      {children}
    </h3>
  );
};
