import styled from "@emotion/styled";
import { useMemo } from "react";
import { theme } from "../../theme";

type PokemonGenderRateProps = {
  pokemonGenderRate: number;
};

export const PokemonGenderRate = ({ pokemonGenderRate }: PokemonGenderRateProps) => {
  const formatedGenderRate = useMemo(() => {
    if (pokemonGenderRate === -1) {
      return { male: 0, female: 0, assexual: true };
    }

    // Multiplying by 8 because the pokemonGenderRate is expressed in eights
    const femaleRate = 100 / (8 * pokemonGenderRate);

    return { male: 100 - femaleRate, female: femaleRate, assexual: false };
  }, [pokemonGenderRate]);

  if (formatedGenderRate.assexual) {
    return <>Assexual</>;
  }

  return (
    <>
      <MaleRate>♂ {formatedGenderRate.male}% </MaleRate>
      <span>/</span>
      <FemaleRate>♀ {formatedGenderRate.female}%</FemaleRate>
    </>
  );
};

const MaleRate = styled.span`
  color: ${theme.colors.types.flying};
`;

const FemaleRate = styled.span`
  color: ${theme.colors.types.fairy};
`;
