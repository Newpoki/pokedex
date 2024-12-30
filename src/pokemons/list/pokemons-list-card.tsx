import DotVectorPattern from "@/assets/patterns/dot-vector.svg";
import PokeballPattern from "@/assets/patterns/pokeball.svg";
import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { getPokemonFirstTypeName } from "@/pokemon/utils/get-pokemon-first-type";
import { getPokemonSprite } from "@/pokemon/utils/get-pokemon-sprite";
import { getPokemonDisplayedId } from "@/pokemon/utils/get-pokemon-displayed-id";
import { TypeChip } from "@/type/type-chip";

type PokemonsListCardProps = {
  name: string;
};

export const PokemonsListCard = ({ name }: PokemonsListCardProps) => {
  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(name));

  const firstPokemonType = getPokemonFirstTypeName(pokemon.types);

  const displayedId = getPokemonDisplayedId(pokemon.id);

  const sprite = getPokemonSprite(pokemon.sprites);

  return (
    <li
      className="relative rounded-[10px] p-5"
      style={{
        backgroundColor: `hsl(var(--bgcolor-${firstPokemonType}))`,
        boxShadow: `0px 10px 20px 0px hsla(var(--color-${firstPokemonType}) / 40%)`,
      }}
    >
      <h2 className="text-xs font-bold text-number">{displayedId}</h2>
      <h3 className="mb-1 text-md text-white">{pokemon.displayName}</h3>

      <ul className="flex items-center gap-1">
        {pokemon.types.map((type) => {
          const typeName = type.type.name;

          return (
            <li key={typeName}>
              <TypeChip name={typeName} />
            </li>
          );
        })}
      </ul>

      <img
        src={sprite}
        className="absolute bottom-3 right-3 z-10 h-[130px] w-[130px]"
      />

      <DotVectorPattern className="absolute left-[90px] top-1 h-8 w-[74px]" />
      <PokeballPattern className="absolute right-0 top-0 h-[145px] w-[145px]" />
    </li>
  );
};
