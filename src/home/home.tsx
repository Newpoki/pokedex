import GenerationIcon from "@/assets/icons/generation.svg";
import SortIcon from "@/assets/icons/sort.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import DownHalfPokeballPattern from "@/assets/patterns/down-half-pokeball.svg";
import { SearchInput } from "@/components/ui/search-input";
import { useFetchPokemons } from "@/pokemons/use-fetch-pokemons";
import { PokemonsList } from "@/pokemons/pokemons-list";
import { useCallback } from "react";

export const Home = () => {
  const { data, status, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useFetchPokemons();

  const handleFetchNextPage = useCallback(() => {
    void fetchNextPage();
  }, [fetchNextPage]);

  return (
    <div className="p-10">
      <DownHalfPokeballPattern className="absolute left-0 top-0 h-auto w-full" />

      <main className="relative">
        <header className="mb-9 flex items-center justify-end gap-5">
          <GenerationIcon className="h-6 w-6 text-black" />
          <SortIcon className="h-6 w-6 text-black" />
          <FiltersIcon className="h-6 w-6 text-black" />
        </header>

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
