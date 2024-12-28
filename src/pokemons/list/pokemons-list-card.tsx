import { useFetchPokemon } from "@/pokemon/use-fetch-pokemon";
import { useMemo } from "react";
import { PokemonListCardType } from "./pokemons-list-card-type";
import DotVectorPattern from "@/assets/patterns/dot-vector.svg";
import PokeballPattern from "@/assets/patterns/pokeball.svg";

type PokemonsListCardProps = {
  name: string;
};

export const PokemonsListCard = ({ name }: PokemonsListCardProps) => {
  const { pokemon, displayedName } = useFetchPokemon({ name });

  const firstPokemonType = pokemon.types[0]?.type.name;

  if (firstPokemonType == null) {
    throw new Error("Pokemon has no known type");
  }

  const displayedId = useMemo(() => {
    const id = `${pokemon.id}`.padStart(3, "0");

    return `#${id}`;
  }, [pokemon.id]);

  const displayedSprite = useMemo(() => {
    const sprite = pokemon.sprites.other?.["official-artwork"]?.front_default;

    return sprite ?? pokemon.sprites.front_default;
  }, [pokemon.sprites.front_default, pokemon.sprites.other]);

  return (
    <li
      className="relative rounded-[10px] p-5"
      style={{
        backgroundColor: `hsl(var(--bgcolor-${firstPokemonType}))`,
        boxShadow: `0px 10px 20px 0px hsla(var(--color-${firstPokemonType}) / 40%)`,
      }}
    >
      <h2 className="text-xs font-bold text-number">{displayedId}</h2>
      <h3 className="mb-1 text-md text-white">{displayedName}</h3>

      <ul className="flex items-center gap-1">
        {pokemon.types.map((type) => {
          const typeName = type.type.name;

          return (
            <li key={typeName}>
              <PokemonListCardType name={typeName} />
            </li>
          );
        })}
      </ul>

      <img
        src={displayedSprite}
        className="absolute bottom-3 right-3 z-10 h-[130px] w-[130px]"
      />

      <DotVectorPattern className="absolute left-[90px] top-1 h-8 w-[74px]" />
      <PokeballPattern className="absolute right-0 top-0 h-[145px] w-[145px]" />
    </li>
  );
};
