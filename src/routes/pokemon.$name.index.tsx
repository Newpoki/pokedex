import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { getPokemonDescription } from "@/pokemon/utils/get-pokemon-description";
import { getPokemonFirstTypeName } from "@/pokemon/utils/get-pokemon-first-type";
import { getPokemonGenus } from "@/pokemon/utils/get-pokemon-genera";
import { getPokemonDisplayedHeight } from "@/pokemon/utils/get-pokemon-displayed-height";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getPokemonDisplayedWeight } from "@/pokemon/utils/get-pokemon-displayed-weight";
import { useFetchPokemonAbilities } from "@/pokemon/use-fetch-pokemon-abilities";
import { useFetchPokemonStats } from "@/pokemon/use-fetch-pokemon-stats";
import { getPokemonCatchRate } from "@/pokemon/utils/get-pokemon-catch-rate";
import { getPokemonBaseHapinessCategory } from "@/pokemon/utils/get-pokemon-base-friendship-category";
import { growthRateQueryOptions } from "@/growth-rate/growth-rate-query-options";
import { getPokemonGenderRates } from "@/pokemon/utils/get-pokemon-gender-rates";
import { useFetchPokemonEggGroups } from "@/pokemon/use-fetch-pokemon-egg-groups";
import { getPokemonHatchSteps } from "@/pokemon/utils/get-pokemon-hatch-steps";
import { useFetchPokemonLocations } from "@/pokemon/use-fetch-pokemon-locations";
import { Fragment } from "react/jsx-runtime";
import { PokemonDataTitle } from "@/pokemon/pokemon-data-title";
import { PokemonDataValue } from "@/pokemon/pokemon-data-value";
import { PokemonDataCategoryTitle } from "@/pokemon/pokemon-data-category-title";

const RouteComponent = () => {
  const params = Route.useParams();

  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(params.name));
  const { data: abilities } = useFetchPokemonAbilities(
    pokemon.name,
    pokemon.abilities,
  );
  const { data: stats } = useFetchPokemonStats(pokemon.name, pokemon.stats);
  const { data: growthRate } = useSuspenseQuery(
    growthRateQueryOptions(pokemon.speciesData.growth_rate.name),
  );

  const { data: eggGroups } = useFetchPokemonEggGroups(
    pokemon.name,
    pokemon.speciesData.egg_groups,
  );

  const { data: locations } = useFetchPokemonLocations(
    pokemon.name,
    pokemon.speciesData.pokedex_numbers,
  );

  const description = getPokemonDescription(
    pokemon.speciesData.flavor_text_entries,
  );

  const genus = getPokemonGenus(pokemon.speciesData.genera);

  const firstTypeName = getPokemonFirstTypeName(pokemon.types);

  const height = getPokemonDisplayedHeight(pokemon.height);

  const weight = getPokemonDisplayedWeight(pokemon.weight);

  const catchRate = getPokemonCatchRate(pokemon.speciesData.capture_rate);

  const baseFriendshipCategory = getPokemonBaseHapinessCategory(
    pokemon.speciesData.base_happiness,
  );

  const hatchSteps = getPokemonHatchSteps(pokemon.speciesData.hatch_counter);

  const genderRates = getPokemonGenderRates(pokemon.speciesData.gender_rate);

  return (
    <main>
      {description != null && <p className="mb-8 text-grey">{description}</p>}

      <div className="grid grid-cols-[max-content_auto] items-center gap-x-0 gap-y-4">
        <PokemonDataCategoryTitle typeName={firstTypeName} className="mb-1">
          Pokédex Data
        </PokemonDataCategoryTitle>
        {/* Empty div so the grid alignment is preserved even with only one column for category */}
        <div />

        <PokemonDataTitle>Species</PokemonDataTitle>
        <PokemonDataValue>{genus}</PokemonDataValue>

        <PokemonDataTitle>Height</PokemonDataTitle>
        <PokemonDataValue className="flex items-end gap-1">
          <span>{height.meters}</span>
          <span className="text-xs">({height.feet})</span>
        </PokemonDataValue>

        <PokemonDataTitle>Weight</PokemonDataTitle>
        <PokemonDataValue className="flex items-end gap-1">
          <span>{weight.kilos}</span>
          <span className="text-xs">({weight.pounds})</span>
        </PokemonDataValue>

        <PokemonDataTitle>Abilities</PokemonDataTitle>
        <ul className="flex flex-col gap-1">
          {abilities.map((ability) => {
            const { displayName, isHidden, slot, id } = ability;

            return (
              <li key={id}>
                {isHidden ? (
                  <PokemonDataValue className="text-xs">{`${displayName} (hidden ability)`}</PokemonDataValue>
                ) : (
                  <PokemonDataValue>{`${slot}. ${displayName}`}</PokemonDataValue>
                )}
              </li>
            );
          })}
        </ul>

        <PokemonDataCategoryTitle typeName={firstTypeName} className="my-1">
          Training
        </PokemonDataCategoryTitle>
        {/* Empty div so the grid alignment is preserved even with only one column for category */}
        <div />

        <PokemonDataTitle>EV Yield</PokemonDataTitle>
        <ul className="flex flex-col gap-1">
          {stats.map((stat) => {
            const { effort, id, displayName } = stat;

            if (stat.effort == 0) {
              return null;
            }

            return (
              <PokemonDataValue key={id}>
                <span>{`${effort} ${displayName}`}</span>
              </PokemonDataValue>
            );
          })}
        </ul>

        <PokemonDataTitle>Catch Rate</PokemonDataTitle>
        <PokemonDataValue className="flex items-end gap-1">
          <span>{pokemon.speciesData.capture_rate}</span>
          <span className="text-xs">({catchRate} with Pokéball, full HP)</span>
        </PokemonDataValue>

        <PokemonDataTitle>Base Friendship</PokemonDataTitle>
        <PokemonDataValue className="flex items-end gap-1">
          <span>{pokemon.speciesData.base_happiness}</span>
          <span className="text-xs">({baseFriendshipCategory})</span>
        </PokemonDataValue>

        <PokemonDataTitle>Base Exp</PokemonDataTitle>
        <PokemonDataValue className="text-grey">
          {pokemon.base_experience}
        </PokemonDataValue>

        <PokemonDataTitle>Growth Rate</PokemonDataTitle>
        <PokemonDataValue className="capitalize text-grey">
          {growthRate.displayName}
        </PokemonDataValue>

        <PokemonDataCategoryTitle typeName={firstTypeName} className="my-1">
          Breeding
        </PokemonDataCategoryTitle>
        {/* Empty div so the grid alignment is preserved even with only one column for category */}
        <div />

        <PokemonDataTitle>Gender</PokemonDataTitle>
        {genderRates == null ? (
          <PokemonDataValue className="text-grey">
            Unknown gender
          </PokemonDataValue>
        ) : (
          <PokemonDataValue className="flex items-end gap-1">
            {genderRates.male > 0 && (
              <span className="text-flying">♀ {genderRates.male} %</span>
            )}
            {genderRates.male > 0 && genderRates.female > 0 && <span>, </span>}
            {genderRates.female > 0 && (
              <span className="text-psychic">♂ {genderRates.female} %</span>
            )}
          </PokemonDataValue>
        )}

        <PokemonDataTitle>Egg Groups</PokemonDataTitle>
        <PokemonDataValue>
          {eggGroups.map((eggGroup) => eggGroup.displayName).join(", ")}
        </PokemonDataValue>

        <PokemonDataTitle>Egg Cycles</PokemonDataTitle>
        <PokemonDataValue>
          {`${pokemon.speciesData.hatch_counter} (${hatchSteps.minSteps} - ${hatchSteps.maxSteps})`}
        </PokemonDataValue>

        <PokemonDataCategoryTitle typeName={firstTypeName} className="my-1">
          Location
        </PokemonDataCategoryTitle>
        {/* Empty div so the grid alignment is preserved even with only one column for category */}
        <div />

        {locations.map((location) => {
          const versionsDisplayedNames = location.versions
            .map((version) => version.displayName)
            .join("/");

          return (
            <Fragment key={location.pokedexId}>
              <PokemonDataTitle>{location.entryNumber}</PokemonDataTitle>

              <PokemonDataValue>{versionsDisplayedNames}</PokemonDataValue>
            </Fragment>
          );
        })}
      </div>
    </main>
  );
};

export const Route = createFileRoute("/pokemon/$name/")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
