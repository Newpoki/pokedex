import styled from "@emotion/styled";
import { useMemo } from "react";
import { ReactComponent as RightArrowGrey } from "../../icons/right-arrow-grey.svg";
import { useGetLocalizedItemName } from "../../item/hooks/use-get-localized-item-name";
import { useFetchLocation } from "../../location/hooks/use-fetch-location";
import { useGetLocalizedLocationName } from "../../location/hooks/use-get-localized-location-name";
import { useGetLocalizedRegionName } from "../../location/hooks/use-get-localized-region";
import { useGetLocalizedMoveName } from "../../move/hooks/use-get-localized-move-name";
import { theme } from "../../theme";
import { useGetLocalizedTypeName } from "../../type/hooks/use-get-localized-type";
import { useGetLocalizedPokemonSpeciesName } from "../hooks/use-get-localized-pokemon-species-name";
import { PokemonEvolutionChainChainDetail } from "../typings";

type PokemonEvolutionChartSeparatorProps = {
  detail: PokemonEvolutionChainChainDetail;
};

export const PokemonEvolutionChartSeparator = ({ detail }: PokemonEvolutionChartSeparatorProps) => {
  const { data: itemName } = useGetLocalizedItemName({
    itemNameOrId: detail.item?.name ?? detail.held_item?.name,
  });
  const { data: location } = useFetchLocation(detail.location?.name);
  const { data: locationName } = useGetLocalizedLocationName({
    locationNameOrId: detail.location?.name,
  });
  const { data: typeName } = useGetLocalizedTypeName({
    typeName: detail.known_move_type?.name,
  });

  const { data: regionName } = useGetLocalizedRegionName({
    regionNameOrId: location?.region?.name,
  });

  const { data: moveName } = useGetLocalizedMoveName({
    moveNameOrId: detail.known_move?.name,
  });

  const { data: tradeSpeciesName } = useGetLocalizedPokemonSpeciesName({
    pokemonNameOrId: detail.trade_species?.name,
  });

  const formatedRelativePhysicalStats = useMemo(() => {
    if (detail?.relative_physical_stats === 1) {
      return "Atk. > Defense ";
    }

    if (detail?.relative_physical_stats === -1) {
      return "Atk. < Defense";
    }

    if (detail?.relative_physical_stats === 0) {
      return "Atk = Defense";
    }
  }, [detail?.relative_physical_stats]);

  const displayedText = useMemo(() => {
    if (detail.trigger?.name === "level-up") {
      if (detail.min_level) {
        if (detail.time_of_day) {
          return `Level up at ${detail.min_level} while it's ${detail.time_of_day}`;
        }

        if (detail.gender) {
          return `Level up at ${detail.min_level} being a ${
            detail.gender === 2 ? "male" : "female"
          }`;
        }

        // Must check for different than null because it can be a number
        if (detail.relative_physical_stats !== null) {
          return `Level up at ${detail.min_level} with ${formatedRelativePhysicalStats}`;
        }

        return `(Level ${detail.min_level})`;
      }

      if (detail.time_of_day) {
        return `Level up while it's ${detail.time_of_day}`;
      }

      if (detail.location) {
        return `Level up at ${locationName?.name} in ${regionName?.name}`;
      }

      if (detail.known_move_type) {
        return `Level up knnowing a ${typeName?.name} move`;
      }

      if (detail.min_beauty) {
        return `Level up with ${detail.min_beauty} beauty`;
      }

      if (detail.min_happiness) {
        return `Level up with ${detail.min_happiness} hapiness`;
      }

      if (detail.known_move) {
        return `Level up knowing ${moveName?.name}`;
      }

      return "Level up (No more data)";
    }

    if (detail.trigger?.name === "use-item" && itemName) {
      if (detail.gender) {
        return `(${itemName?.name} and being a ${detail.gender === 2 ? "male" : "female"})`;
      }

      return `(${itemName?.name})`;
    }

    if (detail.trigger?.name === "trade") {
      if (detail.held_item) {
        return `Trade holding ${itemName?.name}`;
      }

      if (detail.trade_species) {
        return `Trade with a ${tradeSpeciesName?.name}`;
      }

      return `Trading`;
    }
  }, [
    detail,
    formatedRelativePhysicalStats,
    itemName,
    locationName?.name,
    moveName?.name,
    regionName?.name,
    tradeSpeciesName?.name,
    typeName?.name,
  ]);

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
