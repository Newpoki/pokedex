import styled from "@emotion/styled";
import { useMemo } from "react";
import { theme } from "../../theme";
import { useFetchPokemonEvolutionChain } from "../hooks/use-fetch-pokemon-evolution-chain";
import { useFetchPokemonSpecies } from "../hooks/use-fetch-pokemon-species";
import { Pokemon } from "../typings";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonEvolutionChartItem } from "./pokemon-evolution-chart-item";
import { PokemonEvolutionChartSeparator } from "./pokemon-evolution-chart-separator";

type PokemonEvolutionProps = {
  pokemon: Pokemon;
};

export const PokemonEvolution = ({ pokemon }: PokemonEvolutionProps) => {
  const { data: pokemonSpecies } = useFetchPokemonSpecies(pokemon.name);
  const { data: pokemonEvolutionChain } = useFetchPokemonEvolutionChain(
    pokemonSpecies?.evolution_chain?.url
  );

  const { data: firstEvolutionSpecies } = useFetchPokemonSpecies(
    pokemonEvolutionChain?.chain?.evolves_to?.[0]?.species?.name
  );
  const { data: secondEvolutionSpecies } = useFetchPokemonSpecies(
    pokemonEvolutionChain?.chain?.evolves_to?.[0]?.evolves_to[0]?.species?.name
  );

  const { data: originalPokemonSpecies } = useFetchPokemonSpecies(
    firstEvolutionSpecies?.evolves_from_species?.name
  );

  const pokemonFirstTypeName = useMemo(() => {
    return pokemon.types[0].type.name;
  }, [pokemon.types]);

  if (!originalPokemonSpecies || !firstEvolutionSpecies || !secondEvolutionSpecies) return null;

  return (
    <>
      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Evolution Chart
      </StyledPokemonCategoryTitle>

      <PokemonEvolutionChart>
        <PokemonEvolutionChartItem pokemonName={originalPokemonSpecies.name} />
        <PokemonEvolutionChartSeparator />
        <PokemonEvolutionChartItem pokemonName={firstEvolutionSpecies.name} />
      </PokemonEvolutionChart>

      <PokemonEvolutionChart>
        <PokemonEvolutionChartItem pokemonName={firstEvolutionSpecies.name} />
        <PokemonEvolutionChartSeparator />
        <PokemonEvolutionChartItem pokemonName={secondEvolutionSpecies.name} />
      </PokemonEvolutionChart>
    </>
  );
};

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
`;

const PokemonEvolutionChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacings.xxxl}px;
`;
