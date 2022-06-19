import { mockedBugType } from "./bug";
import { mockedDarkType } from "./dark";
import { mockedDragonType } from "./dragon";
import { mockedElectricType } from "./electric";
import { error500TypeHandler } from "./error500";
import { mockedFairyType } from "./fairy";
import { mockedFightingType } from "./fighting";
import { mockedFireType } from "./fire";
import { mockedFlyingType } from "./flying.ts";
import { mockedGhostType } from "./ghost";
import { mockedGrassType } from "./grass";
import { mockedGroundType } from "./ground";
import { mockedIceType } from "./ice";
import { mockedNormalType } from "./normal";
import { mockedPoisonType } from "./poison";
import { mockedPsychicType } from "./psychic";
import { mockedRockType } from "./rock";
import { mockedSteelType } from "./steel";
import { mockedWaterType } from "./water";

export const mockedType = {
  bug: {
    data: mockedBugType.data,
    handler: mockedBugType.handler,
  },
  dark: {
    data: mockedDarkType.data,
    handler: mockedDarkType.handler,
  },
  dragon: {
    data: mockedDragonType.data,
    handler: mockedDragonType.handler,
  },
  electric: {
    data: mockedElectricType.data,
    handler: mockedElectricType.handler,
  },
  fairy: {
    data: mockedFairyType.data,
    handler: mockedFairyType.handler,
  },
  fighting: {
    data: mockedFightingType.data,
    handler: mockedFightingType.handler,
  },
  fire: {
    data: mockedFireType.data,
    handler: mockedFireType.handler,
  },
  flying: {
    data: mockedFlyingType.data,
    handler: mockedFlyingType.handler,
  },
  ghost: {
    data: mockedGhostType.data,
    handler: mockedGhostType.handler,
  },
  grass: {
    data: mockedGrassType.data,
    handler: mockedGrassType.handler,
  },
  ground: {
    data: mockedGroundType.data,
    handler: mockedGroundType.handler,
  },
  ice: {
    data: mockedIceType.data,
    handler: mockedIceType.handler,
  },
  normal: {
    data: mockedNormalType.data,
    handler: mockedNormalType.handler,
  },
  poison: {
    data: mockedPoisonType.data,
    handler: mockedPoisonType.handler,
  },
  psychic: {
    data: mockedPsychicType.data,
    handler: mockedPsychicType.handler,
  },
  rock: {
    data: mockedRockType.data,
    handler: mockedRockType.handler,
  },
  steel: {
    data: mockedSteelType.data,
    handler: mockedSteelType.handler,
  },
  water: {
    data: mockedWaterType.data,
    handler: mockedWaterType.handler,
  },
  error500: {
    data: undefined,
    handler: error500TypeHandler,
    errorContent: null,
  },
};
