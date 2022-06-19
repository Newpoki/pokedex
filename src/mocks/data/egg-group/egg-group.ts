import { mockedMonsterEggGroup } from "./monster";
import { error500EggGroupHandler } from "./error-500";
import { mockedBugEggGroup } from "./bug";
import { mockedDittoEggGroup } from "./ditto";
import { mockedDragonEggGroup } from "./dragon";
import { mockedFairyEggGroup } from "./fairy";
import { mockedFlyingEggGroup } from "./flying";
import { mockedGroundEggGroup } from "./ground";
import { mockedHumanShapeEggGroup } from "./humanshape";
import { mockedIndeterminateEggGroup } from "./indeterminate";
import { mockedMineralEggGroup } from "./mineral";
import { mockedNoEggsEggGroup } from "./no-eggs";
import { mockedPlantEggGroup } from "./plant";
import { mockedWater1EggGroup } from "./water1";
import { mockedWater2EggGroup } from "./water2";
import { mockedWater3EggGroup } from "./water3";

export const mockedEggGroup = {
  bug: {
    data: mockedBugEggGroup.data,
    handler: mockedBugEggGroup.handler,
  },
  ditto: {
    data: mockedDittoEggGroup.data,
    handler: mockedDittoEggGroup.handler,
  },
  dragon: {
    data: mockedDragonEggGroup.data,
    handler: mockedDragonEggGroup.handler,
  },
  fairy: {
    data: mockedFairyEggGroup.data,
    handler: mockedFairyEggGroup.handler,
  },
  flying: {
    data: mockedFlyingEggGroup.data,
    handler: mockedFlyingEggGroup.handler,
  },
  ground: {
    data: mockedGroundEggGroup.data,
    handler: mockedGroundEggGroup.handler,
  },
  humanShape: {
    data: mockedHumanShapeEggGroup.data,
    handler: mockedHumanShapeEggGroup.handler,
  },
  indeterminate: {
    data: mockedIndeterminateEggGroup.data,
    handler: mockedIndeterminateEggGroup.handler,
  },
  mineral: {
    data: mockedMineralEggGroup.data,
    handler: mockedMineralEggGroup.handler,
  },
  monster: {
    data: mockedMonsterEggGroup.data,
    handler: mockedMonsterEggGroup.handler,
  },
  noEggs: {
    data: mockedNoEggsEggGroup.data,
    handler: mockedNoEggsEggGroup.handler,
  },
  plant: {
    data: mockedPlantEggGroup.data,
    handler: mockedPlantEggGroup.handler,
  },
  water1: {
    data: mockedWater1EggGroup.data,
    handler: mockedWater1EggGroup.handler,
  },
  water2: {
    data: mockedWater2EggGroup.data,
    handler: mockedWater2EggGroup.handler,
  },
  water3: {
    data: mockedWater3EggGroup.data,
    handler: mockedWater3EggGroup.handler,
  },
  error500: {
    data: undefined,
    handler: error500EggGroupHandler,
    errorContent: null,
  },
};
