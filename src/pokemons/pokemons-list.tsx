import { Fragment, Suspense, useEffect } from "react";
import { PokemonsListCard } from "./pokemons-list-card";
import { useInView } from "react-intersection-observer";
import { InfiniteData } from "@tanstack/react-query";
import { FetchPokemonsAPIResponse } from "./use-fetch-pokemons";

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
            {page.results.map((pokemon) => (
              <li key={pokemon.name}>
                {/* // TODO: USe skeleton */}
                <Suspense fallback={null}>
                  <PokemonsListCard name={pokemon.name} />
                </Suspense>
              </li>
            ))}
          </Fragment>
        );
      })}

      <button
        ref={loadMoreButtonRef}
        // onClick={onFetchNextPage}
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
