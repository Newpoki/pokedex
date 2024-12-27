import DownHalfPokeballPattern from "@/assets/patterns/down-half-pokeball.svg";
import { SearchInput } from "@/components/ui/search-input";
import { useFetchPokemons } from "@/pokemons/use-fetch-pokemons";
import { PokemonsList } from "@/pokemons/pokemons-list";
import { useCallback, useState } from "react";
import { PokemonsHeader } from "@/pokemons/header/pokemons-header";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { POKEMONS_LIST_DEFAULT_FILTERS } from "@/pokemons/pokemons-constants";

export const Home = () => {
  const [filters, setFilters] = useState<PokemonsListFilters>(
    POKEMONS_LIST_DEFAULT_FILTERS,
  );

  const { data, status, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useFetchPokemons({ filters });

  const handleFetchNextPage = useCallback(() => {
    void fetchNextPage();
  }, [fetchNextPage]);

  const handleFiltersChange = useCallback(
    (newFilters: Partial<PokemonsListFilters>) => {
      setFilters((current) => ({ ...current, ...newFilters }));
    },
    [],
  );

  return (
    <div className="p-10">
      <DownHalfPokeballPattern className="absolute left-0 top-0 h-auto w-full" />

      <main className="relative">
        <PokemonsHeader
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />

        <h1 className="mb-3 text-lg">Pokédex</h1>

        <p className="mb-6 text-grey">
          Search for Pokémon by name or using the Nation Pokédex number.
        </p>

        <SearchInput
          placeholder="What Pokémon are you looking for?"
          className="mb-11"
        />

        {/* TODO: Display Skeleton instead of optional chaining */}
        {status === "pending" ? (
          <div>loading</div>
        ) : status === "error" ? (
          <div>error</div>
        ) : (
          <PokemonsList
            data={data}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            onFetchNextPage={handleFetchNextPage}
          />
        )}
      </main>
    </div>
  );
};
