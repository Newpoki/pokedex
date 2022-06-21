import styled from "@emotion/styled";
import { Skeleton } from "../../common/components/Skeleton";

export const PokemonEvolutionSkeleton = () => {
  return (
    <Root>
      <Skeleton shape="round" width="75px" height="75px" />
      <Skeleton width="60px" height="10px" />
      <Skeleton shape="round" width="75px" height="75px" />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
