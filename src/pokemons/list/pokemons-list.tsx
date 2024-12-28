import { Suspense } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonsListCardSkeleton } from "./pokemons-list-card-skeleton";
import { Pokemon } from "@/pokemon/pokemon-types";

type PokemonsListProps = {
  data: Pokemon[];
};

export const PokemonsList = ({ data }: PokemonsListProps) => {
  return (
    <ul className="pokemons-list">
      {data.map((pokemon) => {
        return (
          <ErrorBoundary
            // TODO: Check better fallback
            fallback={<div>Something went wrong</div>}
            key={pokemon.name}
          >
            <Suspense fallback={<PokemonsListCardSkeleton />}>
              <PokemonsListCard name={pokemon.name} />
            </Suspense>
          </ErrorBoundary>
        );
      })}
    </ul>
  );
};
