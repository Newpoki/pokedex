import { Suspense, useRef } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonsListCardSkeleton } from "./pokemons-list-card-skeleton";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useFetchPokemons } from "../use-fetch-pokemons";
import { PokemonsListFilters, PokemonsListSort } from "../pokemons-types";
import { PokemonsListNoResults } from "./pokemons-list-no-results";
import { Link } from "@tanstack/react-router";

type PokemonsListProps = {
  filters: PokemonsListFilters;
  sort: PokemonsListSort;
  onFiltersReset: () => void;
};

export const PokemonsList = ({
  filters,
  sort,
  onFiltersReset,
}: PokemonsListProps) => {
  const { data } = useFetchPokemons({ filters, sort });

  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: data.count,
    estimateSize: () => 130,
    overscan: 20,
    gap: 16,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  if (data.count === 0) {
    return <PokemonsListNoResults onFiltersReset={onFiltersReset} />;
  }

  return (
    <div ref={listRef}>
      <ul
        className="pokemons-list"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((item) => {
          const pokemon = data.results[item.index];

          if (pokemon == null) {
            return null;
          }

          return (
            <Link
              to="/pokemon/$name"
              params={{ name: pokemon.name }}
              key={pokemon.name}
              className="absolute left-0 top-0 w-full"
              style={{
                height: `${item.size}px`,
                transform: `translateY(${
                  item.start - virtualizer.options.scrollMargin
                }px)`,
              }}
            >
              <ErrorBoundary
                // TODO: Check better fallback
                fallback={<div>Something went wrong</div>}
              >
                <Suspense fallback={<PokemonsListCardSkeleton />}>
                  <PokemonsListCard name={pokemon.name} />
                </Suspense>
              </ErrorBoundary>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
