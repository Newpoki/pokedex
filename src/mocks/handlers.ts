import { mockedGrowthRate } from "./data/growth-rate/growth-rate";
import { mockedPokemonSpecies } from "./data/pokemon-species/pokemon-species";
import { mockedPokemon } from "./data/pokemon/pokemon";
import { mockedPokemons } from "./data/pokemons/pokemons";
import { mockedType } from "./data/type/type";

import { mockedEggGroup } from "./data/egg-group/egg-group";
import { mockedItem } from "./data/item/item";
import { mockedLocationArea } from "./data/location-area/location-area";
import { mockedLocation } from "./data/location/location";
import { mockedRegion } from "./data/region/region";

export const handlers = [
  /* Pokemons */
  mockedPokemons.default.handler(),

  /* Pokemon */
  mockedPokemon.default.handler(),

  /* Types */
  mockedType.bug.handler(),
  mockedType.dark.handler(),
  mockedType.dragon.handler(),
  mockedType.fairy.handler(),
  mockedType.fighting.handler(),
  mockedType.fire.handler(),
  mockedType.flying.handler(),
  mockedType.ghost.handler(),
  mockedType.grass.handler(),
  mockedType.electric.handler(),
  mockedType.ground.handler(),
  mockedType.ice.handler(),
  mockedType.normal.handler(),
  mockedType.poison.handler(),
  mockedType.psychic.handler(),
  mockedType.rock.handler(),
  mockedType.steel.handler(),
  mockedType.water.handler(),

  /* Growth Rates */
  mockedGrowthRate.default.handler(),

  /* Pokemon Species */
  mockedPokemonSpecies.default.handler(),

  /* Egg Groups */
  mockedEggGroup.bug.handler(),
  mockedEggGroup.ditto.handler(),
  mockedEggGroup.dragon.handler(),
  mockedEggGroup.fairy.handler(),
  mockedEggGroup.flying.handler(),
  mockedEggGroup.ground.handler(),
  mockedEggGroup.humanShape.handler(),
  mockedEggGroup.indeterminate.handler(),
  mockedEggGroup.mineral.handler(),
  mockedEggGroup.monster.handler(),
  mockedEggGroup.noEggs.handler(),
  mockedEggGroup.plant.handler(),
  mockedEggGroup.water1.handler(),
  mockedEggGroup.water2.handler(),
  mockedEggGroup.water3.handler(),

  /* Items */
  mockedItem.default.handler(),

  /* Location Areas */
  mockedLocationArea.default.handler(),

  /* Locations */
  mockedLocation.default.handler(),

  /* Regions */
  mockedRegion.default.handler(),
];
