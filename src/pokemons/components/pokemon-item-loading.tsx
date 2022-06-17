import styled from "@emotion/styled";
import { Skeleton } from "../../common/components/Skeleton";
import { POKEMONS_ITEM_BORDER_RADIUS } from "../pokemons-constants";

export const PokemonItemLoading = () => {
  return <StyledSkeleton />;
};

const StyledSkeleton = styled(Skeleton)`
  height: 106px;
  margin-bottom: 20px;
  border-radius: ${POKEMONS_ITEM_BORDER_RADIUS}px;
`;
