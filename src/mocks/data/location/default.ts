import { rest } from "msw";
import { Location } from "../../../location/typings";

const mockedDefaultLocationData: Location = {
  areas: [{ name: "canalave-city-area", url: "https://pokeapi.co/api/v2/location-area/1/" }],
  game_indices: [
    {
      game_index: 7,
      generation: { name: "generation-iv", url: "https://pokeapi.co/api/v2/generation/4/" },
    },
  ],
  id: 1,
  name: "canalave-city",
  names: [
    { language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" }, name: "Joliberges" },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Canalave City",
    },
  ],
  region: { name: "sinnoh", url: "https://pokeapi.co/api/v2/region/4/" },
};

const defaultLocationHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/location/canalave-city", (req, res, ctx) => {
    return res(ctx.json(mockedDefaultLocationData));
  });
};

export const mockedDefaultLocation = {
  data: mockedDefaultLocationData,
  handler: defaultLocationHandler,
};
