import styled from "@emotion/styled";
import { ReactComponent as RightArrowGrey } from "../../icons/right-arrow-grey.svg";
import { PokemonEvolutionChainChainDetail } from "../typings";

type PokemonEvolutionChartSeparatorProps = {};

export const PokemonEvolutionChartSeparator = ({}: PokemonEvolutionChartSeparatorProps) => {
  return (
    <Root>
      <RightArrowGrey />
    </Root>
  );
};

const Root = styled.div``;
