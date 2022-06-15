import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { Pokemons } from "./pokemons/components/pokemons";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Pokemons />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
