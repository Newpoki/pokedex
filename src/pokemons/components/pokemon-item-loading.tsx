import styled from "@emotion/styled";
import { Skeleton } from "../../common/components/Skeleton";
import { POKEMONS_ITEMS_HEIGHT, POKEMONS_ITEM_BORDER_RADIUS } from "../pokemons-constants";

export const PokemonItemLoading = () => {
  return <StyledSkeleton />;
};

const StyledSkeleton = styled(Skeleton)`
  height: ${POKEMONS_ITEMS_HEIGHT}px;
  border-radius: ${POKEMONS_ITEM_BORDER_RADIUS}px;
  /* In order to be displayed above near absolute element */
  position: relative;
`;
