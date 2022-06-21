import styled from "@emotion/styled";
import { Fragment, useCallback, useMemo } from "react";
import { theme } from "../../theme";
import { Pokemon } from "../typings";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonDetails } from "./pokemon-details";
import { PokemonStat } from "./pokemon-stat";

type PokemonStatsProps = {
  pokemon: Pokemon;
};

export const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  const pokemonFirstTypeName = useMemo(() => {
    return pokemon.types[0].type.name;
  }, [pokemon.types]);

  const getHPStat = useCallback((baseStat: number, IV: number, EV: number, level: number) => {
    return ((2 * baseStat + IV + EV / 4) * level) / 100 + level + 10;
  }, []);

  const getOtherStat = useCallback(
    (baseStat: number, IV: number, EV: number, level: number, natureMultiplier: 0.9 | 1.1) => {
      return (((2 * baseStat + IV + EV / 4) * level) / 100 + 5) * natureMultiplier;
    },
    []
  );

  return (
    <>
      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Base Stats
      </StyledPokemonCategoryTitle>

      <StyledPokemonDetails>
        {pokemon.stats.map((stat) => {
          const baseStat = stat.base_stat;

          const minStat =
            stat.stat.name === "hp"
              ? getHPStat(baseStat, 0, 0, 100)
              : getOtherStat(baseStat, 0, 0, 100, 0.9);

          const maxStat =
            stat.stat.name === "hp"
              ? getHPStat(baseStat, 31, 252, 100)
              : getOtherStat(baseStat, 31, 252, 100, 1.1);

          return (
            <PokemonStat
              key={stat.stat.name}
              name={stat.stat.name}
              pokemonTypeName={pokemon.types[0].type.name}
              baseStat={stat.base_stat}
              maxStat={Math.floor(maxStat)}
              minStat={Math.floor(minStat)}
            />
          );
        })}

        <PokemonStat
          name="Total"
          baseStat={pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}
          maxStat="Max"
          minStat="Min"
          isSummary
        />

        <Informations>
          The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a
          beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs,
          0 IVs.
        </Informations>
      </StyledPokemonDetails>
    </>
  );
};

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
`;

const StyledPokemonDetails = styled(PokemonDetails)`
  grid-template-columns: 50px auto;
`;

const Informations = styled.p`
  color: ${theme.colors.text.grey};
  font-size: 12px;
  font-weight: 500;
`;
