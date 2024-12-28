import DownHalfPokeballPattern from "@/assets/patterns/down-half-pokeball.svg";
import { SearchInput } from "@/components/ui/search-input";
import { useFetchPokemons } from "@/pokemons/use-fetch-pokemons";
import { useCallback, useState } from "react";
import { PokemonsHeader } from "@/pokemons/header/pokemons-header";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { POKEMONS_LIST_DEFAULT_FILTERS } from "@/pokemons/pokemons-constants";
import { PokemonsListError } from "@/pokemons/list/pokemons-list-error";
import { PokemonsListSkeleton } from "./list/pokemons-list-skeleton";
import { PokemonsList } from "./list/pokemons-list";

export const Pokemons = () => {
  const [filters, setFilters] = useState<PokemonsListFilters>(
    POKEMONS_LIST_DEFAULT_FILTERS,
  );

  const { data, status } = useFetchPokemons({ filters });

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

        {/* TODO: Display popover that says "Press enter to go to "XXX" page or pokemon with id #XXX */}
        <SearchInput
          placeholder="What Pokémon are you looking for?"
          className="mb-11"
        />

        {status === "pending" ? (
          <PokemonsListSkeleton />
        ) : status === "error" ? (
          <PokemonsListError />
        ) : (
          <PokemonsList data={data} />
        )}
      </main>
    </div>
  );
};
