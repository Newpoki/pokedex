import { rest } from "msw";
import { EggGroup } from "../../../egg-group/typings";

const mockedWater2EggGroupData: EggGroup = {
  id: 12,
  name: "water2",
  names: [
    {
      language: { name: "ja-Hrkt", url: "https://pokeapi.co/api/v2/language/1/" },
      name: "すいちゅう２",
    },
    { language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" }, name: "수중 2" },
    { language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" }, name: "Aquatique 2" },
    { language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" }, name: "Wasser 2" },
    { language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" }, name: "Agua 2" },
    { language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" }, name: "Acqua 2" },
    { language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" }, name: "Water 2" },
  ],
  pokemon_species: [
    { name: "goldeen", url: "https://pokeapi.co/api/v2/pokemon-species/118/" },
    { name: "seaking", url: "https://pokeapi.co/api/v2/pokemon-species/119/" },
    { name: "magikarp", url: "https://pokeapi.co/api/v2/pokemon-species/129/" },
    { name: "gyarados", url: "https://pokeapi.co/api/v2/pokemon-species/130/" },
    { name: "chinchou", url: "https://pokeapi.co/api/v2/pokemon-species/170/" },
    { name: "lanturn", url: "https://pokeapi.co/api/v2/pokemon-species/171/" },
    { name: "qwilfish", url: "https://pokeapi.co/api/v2/pokemon-species/211/" },
    { name: "remoraid", url: "https://pokeapi.co/api/v2/pokemon-species/223/" },
    { name: "octillery", url: "https://pokeapi.co/api/v2/pokemon-species/224/" },
    { name: "carvanha", url: "https://pokeapi.co/api/v2/pokemon-species/318/" },
    { name: "sharpedo", url: "https://pokeapi.co/api/v2/pokemon-species/319/" },
    { name: "wailmer", url: "https://pokeapi.co/api/v2/pokemon-species/320/" },
    { name: "wailord", url: "https://pokeapi.co/api/v2/pokemon-species/321/" },
    { name: "barboach", url: "https://pokeapi.co/api/v2/pokemon-species/339/" },
    { name: "whiscash", url: "https://pokeapi.co/api/v2/pokemon-species/340/" },
    { name: "relicanth", url: "https://pokeapi.co/api/v2/pokemon-species/369/" },
    { name: "luvdisc", url: "https://pokeapi.co/api/v2/pokemon-species/370/" },
    { name: "finneon", url: "https://pokeapi.co/api/v2/pokemon-species/456/" },
    { name: "lumineon", url: "https://pokeapi.co/api/v2/pokemon-species/457/" },
    { name: "basculin", url: "https://pokeapi.co/api/v2/pokemon-species/550/" },
    { name: "alomomola", url: "https://pokeapi.co/api/v2/pokemon-species/594/" },
    { name: "inkay", url: "https://pokeapi.co/api/v2/pokemon-species/686/" },
    { name: "malamar", url: "https://pokeapi.co/api/v2/pokemon-species/687/" },
    { name: "wishiwashi", url: "https://pokeapi.co/api/v2/pokemon-species/746/" },
    { name: "bruxish", url: "https://pokeapi.co/api/v2/pokemon-species/779/" },
    { name: "arrokuda", url: "https://pokeapi.co/api/v2/pokemon-species/846/" },
    { name: "barraskewda", url: "https://pokeapi.co/api/v2/pokemon-species/847/" },
  ],
};

const water2EggGroupHandler = () => {
  return rest.get("https://pokeapi.co/api/v2/egg-group/water2", (req, res, ctx) => {
    return res(ctx.json(mockedWater2EggGroupData));
  });
};

export const mockedWater2EggGroup = {
  data: mockedWater2EggGroupData,
  handler: water2EggGroupHandler,
};
