import { rest } from "msw";
import { EggGroup } from "../../../egg-group/typings";

const mockedDittoEggGroupData: EggGroup = {
  id: 13,
  name: "ditto",
  names: [
    {
      language: { name: "ja-Hrkt", url: "https://pokeapi.co/api/v2/language/1/" },
      name: "メタモン",
    },
    { language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" }, name: "메타몽" },
    { language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" }, name: "Métamorph" },
    { language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" }, name: "Ditto" },
    { language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" }, name: "Ditto" },
    { language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" }, name: "Ditto" },
    { language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" }, name: "Ditto" },
  ],
  pokemon_species: [{ name: "ditto", url: "https://pokeapi.co/api/v2/pokemon-species/132/" }],
};

const dittoEggGroupHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/egg-group/ditto", (req, res, ctx) => {
    return res(ctx.json(mockedDittoEggGroupData));
  });
};

export const mockedDittoEggGroup = {
  data: mockedDittoEggGroupData,
  handler: dittoEggGroupHandler,
};
