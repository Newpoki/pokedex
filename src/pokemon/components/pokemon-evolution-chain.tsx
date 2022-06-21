import styled from "@emotion/styled";
import { theme } from "../../theme";
import { useFetchPokemonSpecies } from "../hooks/use-fetch-pokemon-species";
import { PokemonEvolutionChainChain, PokemonSpecies } from "../typings";
import { PokemonEvolutionChartItem } from "./pokemon-evolution-chart-item";
import { PokemonEvolutionChartSeparator } from "./pokemon-evolution-chart-separator";

type PokemonEvolutionChainProps = {
  evolutionChain: PokemonEvolutionChainChain;
  originalPokemonSpecies: PokemonSpecies;
};

export const PokemonEvolutionChain = ({
  evolutionChain,
  originalPokemonSpecies,
}: PokemonEvolutionChainProps) => {
  const { data: firstEvolutionSpecies } = useFetchPokemonSpecies(evolutionChain.species.name);

  if (!firstEvolutionSpecies) return null;

  return (
    <Root>
      <PokemonEvolutionChart>
        <PokemonEvolutionChartItem pokemonName={originalPokemonSpecies.name} />
        <PokemonEvolutionChartSeparator detail={evolutionChain.evolution_details[0]} />
        <PokemonEvolutionChartItem pokemonName={firstEvolutionSpecies.name} />
      </PokemonEvolutionChart>

      {evolutionChain?.evolves_to?.map((secondEvolutionChain, index) => {
        return (
          <PokemonEvolutionChain
            evolutionChain={secondEvolutionChain}
            key={`${secondEvolutionChain.species?.name}-${index}`}
            originalPokemonSpecies={firstEvolutionSpecies}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.div``;

const PokemonEvolutionChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacings.xxxl}px;
`;
