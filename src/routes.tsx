import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { NotFound } from "./common/components/NotFound";
import { Pokemon } from "./pokemon/components/pokemon";
import { Pokemons } from "./pokemons/components/pokemons";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:idOrName/*" element={<Pokemon />} />
        <Route path="/not-found" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
