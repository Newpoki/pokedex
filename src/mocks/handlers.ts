import { mockedPokemon } from "./data/pokemon/pokemon";
import { mockedType } from "./data/type/type";

export const handlers = [
  mockedPokemon.default.handler(),
  mockedType.bug.handler(),
  mockedType.dark.handler(),
  mockedType.dragon.handler(),
  mockedType.fairy.handler(),
  mockedType.fighting.handler(),
  mockedType.fire.handler(),
  mockedType.flying.handler(),
  mockedType.ghost.handler(),
  mockedType.grass.handler(),
  mockedType.ground.handler(),
  mockedType.ice.handler(),
  mockedType.normal.handler(),
  mockedType.poison.handler(),
  mockedType.psychic.handler(),
  mockedType.rock.handler(),
  mockedType.steel.handler(),
  mockedType.water.handler(),
];
