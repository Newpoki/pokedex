import styled from "@emotion/styled";
import { useMemo } from "react";
import { theme } from "../../theme";
import { useFetchPokemonEvolutionChain } from "../hooks/use-fetch-pokemon-evolution-chain";
import { useFetchPokemonSpecies } from "../hooks/use-fetch-pokemon-species";
import { Pokemon } from "../typings";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonEvolutionChain } from "./pokemon-evolution-chain";

type PokemonEvolutionProps = {
  pokemon: Pokemon;
};

export const PokemonEvolution = ({ pokemon }: PokemonEvolutionProps) => {
  const { data: pokemonSpecies } = useFetchPokemonSpecies(pokemon.name);
  const { data: pokemonEvolutionChain } = useFetchPokemonEvolutionChain(
    pokemonSpecies?.evolution_chain?.url
  );

  const { data: originalPokemonSpecies } = useFetchPokemonSpecies(
    pokemonEvolutionChain?.chain.species.name
  );

  const pokemonFirstTypeName = useMemo(() => {
    return pokemon.types[0].type.name;
  }, [pokemon.types]);

  const firstPokemonEvolutionChain = useMemo(() => {
    return pokemonEvolutionChain?.chain?.evolves_to;
  }, [pokemonEvolutionChain?.chain?.evolves_to]);

  if (!originalPokemonSpecies) return null;

  console.log({ firstPokemonEvolutionChain });

  return (
    <>
      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Evolution Chart
      </StyledPokemonCategoryTitle>

      {!firstPokemonEvolutionChain?.length && (
        <NoEvolution>This pokemon does not evolve.</NoEvolution>
      )}

      {!!firstPokemonEvolutionChain?.length &&
        firstPokemonEvolutionChain?.map((evolutionChain, index) => {
          return (
            <PokemonEvolutionChain
              evolutionChain={evolutionChain}
              key={`${evolutionChain.species?.name}-${index}`}
              originalPokemonSpecies={originalPokemonSpecies}
            />
          );
        })}
    </>
  );
};

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
`;

const NoEvolution = styled.p`
  color: ${theme.colors.text.black};
`;
