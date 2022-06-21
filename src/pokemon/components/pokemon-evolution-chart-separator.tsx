import styled from "@emotion/styled";
import { useMemo } from "react";
import { ReactComponent as RightArrowGrey } from "../../icons/right-arrow-grey.svg";
import { useGetLocalizedItemName } from "../../item/hooks/use-get-localized-item-name";
import { useFetchLocation } from "../../location/hooks/use-fetch-location";
import { useGetLocalizedLocationName } from "../../location/hooks/use-get-localized-location-name";
import { useGetLocalizedRegionName } from "../../location/hooks/use-get-localized-region";
import { theme } from "../../theme";
import { useGetLocalizedTypeName } from "../../type/hooks/use-get-localized-type";
import { PokemonEvolutionChainChainDetail } from "../typings";

type PokemonEvolutionChartSeparatorProps = {
  detail: PokemonEvolutionChainChainDetail;
};

export const PokemonEvolutionChartSeparator = ({ detail }: PokemonEvolutionChartSeparatorProps) => {
  const { data: itemName } = useGetLocalizedItemName({ itemNameOrId: detail?.item?.name });
  const { data: location } = useFetchLocation(detail?.location?.name);
  const { data: locationName } = useGetLocalizedLocationName({
    locationNameOrId: detail?.location?.name,
  });
  const { data: typeName } = useGetLocalizedTypeName({
    typeName: detail?.known_move_type?.name,
  });

  const { data: regionName } = useGetLocalizedRegionName({
    regionNameOrId: location?.region?.name,
  });

  const displayedText = useMemo(() => {
    if (detail.trigger?.name === "level-up") {
      if (detail.min_level) {
        return `(Level ${detail.min_level})`;
      }

      if (detail.time_of_day) {
        return `Level up while ${detail.time_of_day}`;
      }

      if (detail.location) {
        return `Level up at ${locationName?.name} in ${regionName?.name}`;
      }

      if (detail.known_move_type) {
        return `Level up knnowing a ${typeName?.name} move`;
      }
    }

    if (detail.trigger?.name === "use-item" && itemName) {
      return `(${itemName?.name})`;
    }
  }, [detail, itemName, locationName, regionName, typeName]);

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
  text-align: center;
`;
