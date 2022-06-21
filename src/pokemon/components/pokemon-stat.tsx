import styled from "@emotion/styled";
import { ReactNode, useMemo } from "react";
import { theme } from "../../theme";
import { PokemonStatName, PokemonTypeName } from "../typings";
import { PokemonDataLabel } from "./pokemon-data-label";
import { PokemonDataValue } from "./pokemon-data-value";

type PokemonStatProps = {
  pokemonTypeName?: PokemonTypeName;
  name: PokemonStatName | "Total";
  baseStat: number;
  maxStat: ReactNode;
  minStat: ReactNode;
  isSummary?: boolean;
};

export const PokemonStat = ({
  pokemonTypeName,
  name,
  baseStat,
  maxStat,
  minStat,
  isSummary = false,
}: PokemonStatProps) => {
  const displayedName = useMemo(() => {
    switch (name) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
      default:
        return name;
    }
  }, [name]);

  return (
    <>
      <PokemonDataLabel>{displayedName}</PokemonDataLabel>
      <StyledPokemonDataValue>
        <BaseStat isSummary={isSummary}>{baseStat}</BaseStat>

        {pokemonTypeName && (
          // We should be able to only use PercentBar component here, but it doesn't work with emotion
          // A weird bug makes all PercentBar having the same width
          <PercentBarWrapper value={baseStat}>
            <PercentBar pokemonTypeName={pokemonTypeName} />
          </PercentBarWrapper>
        )}

        <MinStat isSummary={isSummary}>{minStat}</MinStat>
        <MaxStat isSummary={isSummary}>{maxStat}</MaxStat>
      </StyledPokemonDataValue>
    </>
  );
};

const BaseStat = styled.span<{ isSummary: boolean }>`
  margin-right: ${theme.spacings.xl}px;
  width: 25px;
  text-align: right;

  ${({ isSummary }) =>
    isSummary &&
    `
      font-weight: 700;
  `}
`;

const PercentBarWrapper = styled.div<{ value: number }>`
  width: ${({ value }) => value}px;
  max-width: 150px;
`;

const PercentBar = styled.div<{ pokemonTypeName: PokemonTypeName }>`
  background-color: ${({ pokemonTypeName }) => theme.colors.types[pokemonTypeName]};
  height: 4px;
  border-radius: 2px;
  animation: 0.3s appear ease-out forwards;

  @keyframes appear {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
`;

const StyledPokemonDataValue = styled(PokemonDataValue)`
  display: flex;
  align-items: center;
`;

const MinStat = styled(PokemonDataValue)<{ isSummary: boolean }>`
  margin-left: auto;
  padding-left: ${theme.spacings.m}px;

  ${({ isSummary }) =>
    isSummary &&
    `
      color: ${theme.colors.text.black};
      font-size: 12px;
  `}
`;

const MaxStat = styled(PokemonDataValue)<{ isSummary: boolean }>`
  margin-left: ${theme.spacings.s}px;
  ${({ isSummary }) =>
    isSummary &&
    `
      color: ${theme.colors.text.black};
      font-size: 12px;
  `}
`;
