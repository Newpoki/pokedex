import {
  Effect,
  LanguageCode,
  Name,
  NamedAPIRessource,
  VerboseEffect,
} from "@/api/api-types";

type AbilityEffectChange = {
  /** The previous effect of this ability listed in different languages. */
  effect_entries: Effect[];

  /** The version group in which the previous effect of this ability originated. */
  version_group: NamedAPIRessource;
};

type AbilityFlavorText = {
  /** The localized name for an API resource in a specific language. */
  flavor_text: string;

  /** The language this text resource is in.  */
  language: NamedAPIRessource<LanguageCode>;

  /** The version group that uses this flavor text. */
  version_group: NamedAPIRessource;
};

type AbilityPokemon = {
  /** Whether or not this a hidden ability for the referenced Pokémon. */
  is_hidden: boolean;

  /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
   * This is the slot of this ability for the referenced pokemon. */
  slot: boolean;

  /** The Pokémon this ability could belong to. */
  pokemon: NamedAPIRessource;
};

export type Ability = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** Whether or not this ability originated in the main series of the video games. */
  is_main_series: boolean;

  /** The generation this ability originated in. */
  generation: NamedAPIRessource;

  /** The name of this resource listed in different languages. */
  names: Name[];

  /** The effect of this ability listed in different languages. */
  effect_entries: VerboseEffect[];

  /** The list of previous effects this ability has had across version groups. */
  effect_changes: AbilityEffectChange[];

  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: AbilityFlavorText[];

  /** A list of Pokémon that could potentially have this ability. */
  pokemon: AbilityPokemon[];
};
