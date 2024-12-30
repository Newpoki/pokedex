import { Description, NamedAPIRessource } from "@/api/api-types";

type GrowthRateExperienceLevel = {
  /** The level gained. */
  level: number;

  /** The amount of experience required to reach the referenced level. */
  experience: number;
};

export type GrowthRate = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** The formula used to calculate the rate at which the Pokémon species gains level. */
  formula: string;

  /** The descriptions of this characteristic listed in different languages. */
  descriptions: Description[];

  /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
  levels: GrowthRateExperienceLevel[];

  /** A list of Pokémon species that gain levels at this growth rate. */
  pokemon_species: NamedAPIRessource[];
};
