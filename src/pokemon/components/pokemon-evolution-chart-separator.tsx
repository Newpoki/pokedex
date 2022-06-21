import styled from "@emotion/styled";
import { useMemo } from "react";
import { ReactComponent as RightArrowGrey } from "../../icons/right-arrow-grey.svg";
import { theme } from "../../theme";
import { PokemonEvolutionChainChainDetail } from "../typings";

type PokemonEvolutionChartSeparatorProps = {
  detail: PokemonEvolutionChainChainDetail;
};

export const PokemonEvolutionChartSeparator = ({ detail }: PokemonEvolutionChartSeparatorProps) => {
  const displayedText = useMemo(() => {
    if (detail.min_level) {
      return `(Level ${detail.min_level})`;
    }
  }, [detail.min_level]);

  return (
    <Root>
      <StyledRightArrowGrey />
      <EvolutionCondition>{displayedText}</EvolutionCondition>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRightArrowGrey = styled(RightArrowGrey)`
  margin-bottom: ${theme.spacings.s}px;
`;

const EvolutionCondition = styled.span`
  color: ${theme.colors.text.black};
  font-weight: 700;
`;
