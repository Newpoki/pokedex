import { mockedGrowthRate } from "./data/growth-rate/growth-rate";
import { mockedPokemonSpecies } from "./data/pokemon-species/pokemon-species";
import { mockedPokemon } from "./data/pokemon/pokemon";
import { mockedPokemons } from "./data/pokemons/pokemons";
import { mockedType } from "./data/type/type";

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
];
