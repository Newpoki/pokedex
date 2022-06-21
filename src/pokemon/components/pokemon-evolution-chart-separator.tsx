import styled from "@emotion/styled";
import { useMemo } from "react";
import { ReactComponent as RightArrowGrey } from "../../icons/right-arrow-grey.svg";
import { useGetLocalizedItemName } from "../../item/hooks/useGetLocalizedItemName";
import { theme } from "../../theme";
import { PokemonEvolutionChainChainDetail } from "../typings";

type PokemonEvolutionChartSeparatorProps = {
  detail: PokemonEvolutionChainChainDetail;
};

export const PokemonEvolutionChartSeparator = ({ detail }: PokemonEvolutionChartSeparatorProps) => {
  const { data: itemName } = useGetLocalizedItemName({ itemNameOrId: detail?.item?.name });

  const displayedText = useMemo(() => {
    if (detail.min_level) {
      return `(Level ${detail.min_level})`;
    }

    if (detail.trigger?.name === "use-item" && itemName) {
      return `(${itemName?.name})`;
    }
  }, [detail, itemName]);

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
