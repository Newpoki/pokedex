import styled from "@emotion/styled";
import { useMemo } from "react";
import { useFetchPokemonGrowthRate } from "../../growth-rate/hooks/useFetchGrowthRate";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useGetWeaknessess } from "../../type/hooks/useGetWeaknesses";
import { useFetchPokemonSpecies } from "../hooks/useFetchPokemonSpecies";
import { useGetLatestPokemonFlavor } from "../hooks/useGetLatestPokemonFlavor";
import { Pokemon } from "../typings";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonDataLabel } from "./pokemon-data-label";
import { PokemonDataValue } from "./pokemon-data-value";

type PokemonAboutProps = {
  pokemon: Pokemon;
};

export const PokemonAbout = ({ pokemon }: PokemonAboutProps) => {
  const { data: pokemonSpecies } = useFetchPokemonSpecies(pokemon.name);
  const flavor = useGetLatestPokemonFlavor({ pokemonSpecies });
  const weaknesses = useGetWeaknessess(pokemon.types);
  const { data: growthRate } = useFetchPokemonGrowthRate(pokemonSpecies?.growth_rate?.url);

  const pokemonFirstTypeName = useMemo(() => {
    return pokemon.types[0].type.name;
  }, [pokemon.types]);

  const pokemonGenera = useMemo(() => {
    return pokemonSpecies?.genera.find((genera) => genera.language.name === "en");
  }, [pokemonSpecies?.genera]);

  const growthRateDescription = useMemo(() => {
    return growthRate?.descriptions.find((description) => description.language.name === "en")
      ?.description;
  }, [growthRate?.descriptions]);

  return (
    <>
      <Flavor>{flavor?.flavor_text}</Flavor>

      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Pokedex Data
      </StyledPokemonCategoryTitle>

      <Data>
        <PokemonDataLabel>Species</PokemonDataLabel>
        <PokemonDataValue>{pokemonGenera?.genus}</PokemonDataValue>

        <PokemonDataLabel>Height</PokemonDataLabel>
        <PokemonDataValue>{pokemon.height / 10}m</PokemonDataValue>

        <PokemonDataLabel>Weight</PokemonDataLabel>
        <PokemonDataValue>{pokemon.weight / 10}kg</PokemonDataValue>

        <PokemonDataLabel>Abilities</PokemonDataLabel>
        <PokemonDataValue>
          {pokemon.abilities.map((ability) => {
            const isHiddenAbility = ability.is_hidden;
            return (
              <PokemonAbility isHiddenAbility={isHiddenAbility} key={ability.slot}>
                {isHiddenAbility
                  ? `${ability.ability.name} (hidden ability)`
                  : ability.ability.name}
              </PokemonAbility>
            );
          })}
        </PokemonDataValue>

        <PokemonDataLabel>Weaknessess</PokemonDataLabel>
        <PokemonDataValue>
          <TypeChips types={weaknesses} withLabel={false} />
        </PokemonDataValue>
      </Data>

      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Training
      </StyledPokemonCategoryTitle>

      <Training>
        <PokemonDataLabel>Catch rate</PokemonDataLabel>
        <PokemonDataValue>{pokemonSpecies?.capture_rate}</PokemonDataValue>

        <PokemonDataLabel>Base friendship</PokemonDataLabel>
        <PokemonDataValue>{pokemonSpecies?.base_happiness}</PokemonDataValue>

        <PokemonDataLabel>Base Exp</PokemonDataLabel>
        <PokemonDataValue>{pokemon.base_experience}</PokemonDataValue>

        <PokemonDataLabel>Growth Rate</PokemonDataLabel>
        <PokemonDataValue>{growthRateDescription}</PokemonDataValue>
      </Training>
    </>
  );
};

const Flavor = styled.p`
  margin-bottom: ${theme.spacings.xxxl}px;
  color: ${theme.colors.common.grey[900]};
`;

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxxl}px;
`;

const Data = styled.div`
  display: inline-grid;
  grid-template-columns: 100px auto;
  grid-column-gap: ${theme.spacings.xxxl}px;
  grid-row-gap: ${theme.spacings.xxl}px;
  margin-bottom: ${theme.spacings.xxxl}px;
`;

const PokemonAbility = styled.span<{ isHiddenAbility: boolean }>`
  display: block;
  text-transform: capitalize;
  ${({ isHiddenAbility }) =>
    isHiddenAbility &&
    `
        font-size: 11px;
    `}
`;

const Training = styled(Data)``;
