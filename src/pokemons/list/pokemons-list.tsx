import { forwardRef, Suspense, useRef } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonsListCardSkeleton } from "./pokemons-list-card-skeleton";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useFetchPokemons } from "../use-fetch-pokemons";
import { PokemonsListFilters } from "../pokemons-types";

type PokemonsListProps = {
  filters: PokemonsListFilters;
};

export const PokemonsList = forwardRef<HTMLDivElement, PokemonsListProps>(
  ({ filters }, ref) => {
    const { data } = useFetchPokemons({ filters });

    const listRef = useRef<HTMLDivElement | null>(null);

    const virtualizer = useWindowVirtualizer({
      count: data.count,
      estimateSize: () => 130,
      overscan: 20,
      gap: 16,
      scrollMargin: listRef.current?.offsetTop ?? 0,
    });

    return (
      <div ref={ref}>
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
              <ErrorBoundary
                // TODO: Check better fallback
                fallback={<div>Something went wrong</div>}
                key={pokemon.name}
              >
                <Suspense fallback={<PokemonsListCardSkeleton />}>
                  <div
                    className="absolute left-0 top-0 w-full"
                    style={{
                      height: `${item.size}px`,
                      transform: `translateY(${
                        item.start - virtualizer.options.scrollMargin
                      }px)`,
                    }}
                  >
                    <PokemonsListCard name={pokemon.name} />
                  </div>
                </Suspense>
              </ErrorBoundary>
            );
          })}
        </ul>
      </div>
    );
  },
);
