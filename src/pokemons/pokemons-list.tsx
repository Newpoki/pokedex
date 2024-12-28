import { Fragment, Suspense, useEffect } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { useInView } from "react-intersection-observer";
import { InfiniteData } from "@tanstack/react-query";
import { FetchPokemonsAPIResponse } from "./use-fetch-pokemons";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonsListCardSkeleton } from "./pokemons-list-card-skeleton";

type PokemonsListProps = {
  data: InfiniteData<FetchPokemonsAPIResponse, unknown>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onFetchNextPage: () => void;
};

export const PokemonsList = ({
  data,
  hasNextPage,
  isFetchingNextPage,

  onFetchNextPage,
}: PokemonsListProps) => {
  const { ref: listEndRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onFetchNextPage();
    }
  }, [inView, onFetchNextPage]);

  return (
    <>
      <ul className="pokemons-list-card">
        {data.pages.map((page) => {
          return (
            <Fragment key={page.next}>
              {page.results.map((pokemon) => {
                return (
                  <ErrorBoundary
                    fallback={<div>Something went wrong</div>}
                    key={pokemon.name}
                  >
                    <Suspense fallback={<PokemonsListCardSkeleton />}>
                      <PokemonsListCard name={pokemon.name} />
                    </Suspense>
                  </ErrorBoundary>
                );
              })}
            </Fragment>
          );
        })}

        {(hasNextPage || isFetchingNextPage) && (
          <li>
            <PokemonsListCardSkeleton />
          </li>
        )}
      </ul>

      <div ref={listEndRef} className="opacity-0" />
    </>
  );
};
