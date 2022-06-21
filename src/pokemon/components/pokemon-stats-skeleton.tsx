import styled from "@emotion/styled";
import times from "lodash.times";
import { Skeleton } from "../../common/components/Skeleton";
import { theme } from "../../theme";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonDetails } from "./pokemon-details";

export const PokemonStatsSkeleton = () => {
  return (
    <>
      <StyledPokemonCategoryTitle pokemonTypeName="normal">Base Stats</StyledPokemonCategoryTitle>

      <StyledPokemonDetails>
        {times(14).map((index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <Skeleton width="50xp" height="12px" />
            </div>
          );
        })}
      </StyledPokemonDetails>

      <Skeleton width="100%" height="60px" />
    </>
  );
};

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
`;

const StyledPokemonDetails = styled(PokemonDetails)`
  grid-template-columns: 50px auto;
`;
