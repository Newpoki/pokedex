import styled from "@emotion/styled";
import { Fragment, useMemo } from "react";
import { EggGroup } from "../../egg-group/components/egg-group";
import { useFetchPokemonGrowthRate } from "../../growth-rate/hooks/use-fetch-pokemon-growth-rate";
import { theme } from "../../theme";
import { TypeChips } from "../../type/components/type-chips";
import { useGetWeaknessess } from "../../type/hooks/use-get-weaknesses";
import { useFetchPokemonSpecies } from "../hooks/use-fetch-pokemon-species";
import { useGetLocalizedLatestPokemonFlavor } from "../hooks/use-get-localized-latest-pokemon-flavor";
import { useGetPokemonYieldEVs } from "../hooks/use-get-pokemon-yield-evs";
import { Pokemon } from "../typings";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonDataLabel } from "./pokemon-data-label";
import { PokemonDataValue } from "./pokemon-data-value";
import { PokemonDetails } from "./pokemon-details";
import { PokemonGenderRate } from "./pokemon-gender-rate";

type PokemonAboutProps = {
  pokemon: Pokemon;
};

export const PokemonAbout = ({ pokemon }: PokemonAboutProps) => {
  const { data: pokemonSpecies } = useFetchPokemonSpecies(pokemon.name);
  const { data: growthRate } = useFetchPokemonGrowthRate(pokemon.name);
  const flavor = useGetLocalizedLatestPokemonFlavor({ pokemonSpecies });
  const { data: weaknesses } = useGetWeaknessess(pokemon.types);
  const yieldEVs = useGetPokemonYieldEVs(pokemon);

  const pokemonFirstTypeName = useMemo(() => {
    return pokemon.types[0].type.name;
  }, [pokemon.types]);

  const pokemonGenera = useMemo(() => {
    return pokemonSpecies?.genera?.find((genera) => genera.language.name === "en");
  }, [pokemonSpecies?.genera]);

  const growthRateDescription = useMemo(() => {
    return growthRate?.descriptions?.find((description) => description.language.name === "en")
      ?.description;
  }, [growthRate?.descriptions]);

  if (!pokemonSpecies) return null;

  return (
    <>
      <Flavor>{flavor?.flavor_text}</Flavor>

      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Pokedex Data
      </StyledPokemonCategoryTitle>

      <PokemonDetails>
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
          <StyledTypeChips types={weaknesses} withLabel={false} />
        </PokemonDataValue>
      </PokemonDetails>

      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Training
      </StyledPokemonCategoryTitle>

      <PokemonDetails>
        <PokemonDataLabel>EV Yield</PokemonDataLabel>
        <PokemonDataValue>
          {yieldEVs.map((EV) => {
            return (
              <PokemonEV key={EV.stat.name}>
                {EV.effort} {EV.stat.name.replace("-", " ")}
              </PokemonEV>
            );
          })}
        </PokemonDataValue>

        <PokemonDataLabel>Catch rate</PokemonDataLabel>
        <PokemonDataValue>{pokemonSpecies?.capture_rate}</PokemonDataValue>

        <PokemonDataLabel>Base friendship</PokemonDataLabel>
        <PokemonDataValue>{pokemonSpecies?.base_happiness}</PokemonDataValue>

        <PokemonDataLabel>Base Exp</PokemonDataLabel>
        <PokemonDataValue>{pokemon.base_experience}</PokemonDataValue>

        <PokemonDataLabel>Growth Rate</PokemonDataLabel>
        <PokemonDataValue>{growthRateDescription}</PokemonDataValue>
      </PokemonDetails>

      <StyledPokemonCategoryTitle pokemonTypeName={pokemonFirstTypeName}>
        Breeding
      </StyledPokemonCategoryTitle>

      <PokemonDetails>
        <PokemonDataLabel>Growth Rate</PokemonDataLabel>
        <PokemonDataValue>
          <PokemonGenderRate pokemonGenderRate={pokemonSpecies?.gender_rate} />
        </PokemonDataValue>

        <PokemonDataLabel>Egg Groups</PokemonDataLabel>
        <PokemonDataValue>
          {pokemonSpecies.egg_groups.map((eggGroup, index) => {
            return (
              <Fragment key={eggGroup.name}>
                <EggGroup pokemonEggGroupNameOrId={eggGroup.name} />
                {index !== pokemonSpecies?.egg_groups?.length - 1 && <span>, </span>}
              </Fragment>
            );
          })}
        </PokemonDataValue>

        <PokemonDataLabel>Egg Cycles</PokemonDataLabel>
        <PokemonDataValue>
          {pokemonSpecies.hatch_counter}
          <HatchCounterSteps> ({(pokemonSpecies.hatch_counter + 1) * 255} steps)</HatchCounterSteps>
        </PokemonDataValue>
      </PokemonDetails>
    </>
  );
};

const Flavor = styled.p`
  margin-bottom: ${theme.spacings.xxxl}px;
  color: ${theme.colors.text.grey};
  font-size: 16px;
  font-weight: 400px;
`;

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
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

const StyledTypeChips = styled(TypeChips)`
  flex-wrap: wrap;

  & li {
    margin-bottom: ${theme.spacings.xs}px;
  }
`;

const PokemonEV = styled.p`
  &::first-letter {
    text-transform: capitalize;
  }
`;

const HatchCounterSteps = styled.span`
  font-size: 11px;
`;
