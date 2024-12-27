import { Fragment, Suspense, useEffect } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { useInView } from "react-intersection-observer";
import { InfiniteData } from "@tanstack/react-query";
import { FetchPokemonsAPIResponse } from "./use-fetch-pokemons";
import { ErrorBoundary } from "react-error-boundary";

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
  const { ref: loadMoreButtonRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onFetchNextPage();
    }
  }, [inView, onFetchNextPage]);

  return (
    <ul className="flex flex-col gap-8">
      {data.pages.map((page) => {
        return (
          <Fragment key={page.next}>
            {page.results.map((pokemon) => {
              return (
                <ErrorBoundary
                  fallback={<div>Something went wrong</div>}
                  key={pokemon.name}
                >
                  {/* // TODO: USe skeleton */}
                  <Suspense fallback={null}>
                    <PokemonsListCard name={pokemon.name} />
                  </Suspense>
                </ErrorBoundary>
              );
            })}
          </Fragment>
        );
      })}

      <button
        ref={loadMoreButtonRef}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
      </button>
    </ul>
  );
};
