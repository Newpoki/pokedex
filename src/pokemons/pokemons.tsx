import DownHalfPokeballPattern from "@/assets/patterns/down-half-pokeball.svg";
import { Suspense, useCallback, useState } from "react";
import { PokemonsHeader } from "@/pokemons/header/pokemons-header";
import {
  PokemonsListFilters,
  PokemonsListSort,
} from "@/pokemons/pokemons-types";
import {
  POKEMONS_LIST_DEFAULT_FILTERS,
  POKEMONS_LIST_DEFAULT_SORT,
} from "@/pokemons/pokemons-constants";
import { PokemonsListError } from "@/pokemons/list/pokemons-list-error";
import { PokemonsListSkeleton } from "./list/pokemons-list-skeleton";
import { PokemonsList } from "./list/pokemons-list";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonsSearchInput } from "./pokemons-search-input";

export const Pokemons = () => {
  const [filters, setFilters] = useState<PokemonsListFilters>(
    POKEMONS_LIST_DEFAULT_FILTERS,
  );

  const [sort, setSort] = useState<PokemonsListSort>(
    POKEMONS_LIST_DEFAULT_SORT,
  );

  const handleFiltersChange = useCallback(
    (newFilters: Partial<PokemonsListFilters>) => {
      setFilters((current) => ({ ...current, ...newFilters }));
    },
    [],
  );

  const handleFiltersResets = useCallback(() => {
    setFilters(POKEMONS_LIST_DEFAULT_FILTERS);
  }, []);

  return (
    <div className="flex flex-1 flex-col p-10">
      <DownHalfPokeballPattern className="absolute left-0 top-0 h-auto w-full" />

      <main className="relative flex flex-1 flex-col">
        <PokemonsHeader
          filters={filters}
          sort={sort}
          onSortChange={setSort}
          onFiltersChange={handleFiltersChange}
          onFiltersReset={handleFiltersResets}
        />

        <h1 className="mb-3 text-lg">Pokédex</h1>

        <p className="mb-6 text-grey">
          Search for Pokémon by name or using the Nation Pokédex number.
        </p>

        <PokemonsSearchInput
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />

        <ErrorBoundary FallbackComponent={PokemonsListError}>
          <Suspense fallback={<PokemonsListSkeleton />}>
            <PokemonsList
              sort={sort}
              filters={filters}
              onFiltersReset={handleFiltersResets}
            />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};
