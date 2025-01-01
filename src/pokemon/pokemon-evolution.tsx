import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonQueryOptions } from "./pokemon-query-options";
import { evolutionChainQueryOptions } from "@/evolution-chain/evolution-chain-query-options";
import { PokemonEvolutionEntry } from "./pokemon-evolution-entry";
import { Fragment } from "react/jsx-runtime";

type PokemonEvolutionProps = {
  name: string;
};

export const PokemonEvolution = ({ name }: PokemonEvolutionProps) => {
  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(name));
  const { data: evolutionChain } = useSuspenseQuery(
    evolutionChainQueryOptions(pokemon.speciesData.evolution_chain.url),
  );

  return (
    <div className="grid grid-cols-3 items-center justify-center gap-x-2 gap-y-8">
      {evolutionChain.chain.evolves_to.map((target) => {
        return (
          <Fragment key={`${pokemon.id}-${target.species.name}`}>
            <PokemonEvolutionEntry
              target={target}
              fromName={pokemon.name}
              key={pokemon.id}
            />

            {target.evolves_to.map((targetEvolution) => (
              <PokemonEvolutionEntry
                target={targetEvolution}
                fromName={target.species.name}
                key={pokemon.id}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};
