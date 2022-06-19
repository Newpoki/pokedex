import { mockedDefaultPokemons } from "./default";
import { error500PokemonsHandler } from "./error-500";
import { mockedSecondPagePokemons } from "./second-page";

export const mockedPokemons = {
  default: {
    data: mockedDefaultPokemons.data,
    handler: mockedDefaultPokemons.handler,
    infiniteQueryHookData: mockedDefaultPokemons.infiniteQueryHookData,
  },
  secondPage: {
    data: mockedSecondPagePokemons.data,
    handler: mockedSecondPagePokemons.handler,
    infiniteQueryHookData: mockedSecondPagePokemons.infiniteQueryHookData,
  },
  error500: {
    data: undefined,
    handler: error500PokemonsHandler,
    errorContent: null,
  },
};
