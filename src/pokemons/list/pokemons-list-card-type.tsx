import { TypeIcon } from "@/type/type-icon";
import { TypeName } from "@/type/type-types";
import { useFetchType } from "@/type/use-fetch-type";

type PokemonListCardTypeProps = {
  name: TypeName;
};

export const PokemonListCardType = ({ name }: PokemonListCardTypeProps) => {
  const { type } = useFetchType({ name });

  return (
    <div
      className="flex items-center gap-1 rounded p-1 text-white"
      style={{
        backgroundColor: `hsl(var(--color-${name}))`,
      }}
    >
      <TypeIcon name={name} className="h-4 w-4" />

      <span className="text-xs capitalize">{type.name}</span>
    </div>
  );
};
