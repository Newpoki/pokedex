import { PokemonsHeaderGenerationsDrawer } from "./generation/pokemons-header-generations-drawer";
import { PokemonsListFilters } from "../pokemons-types";
import { PokemonsHeaderSortDrawer } from "./sort/pokemons-header-sort-drawer";
import { PokemonsHeaderFiltersDrawer } from "./filters/pokemons-header-filters-drawer";

type PokemonsHeaderProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
  onFiltersReset: () => void;
};

export const PokemonsHeader = ({
  filters,
  onFiltersChange,
  onFiltersReset,
}: PokemonsHeaderProps) => {
  return (
    <header className="mb-9 flex items-center justify-end gap-5">
      <PokemonsHeaderGenerationsDrawer
        filters={filters}
        onFiltersChange={onFiltersChange}
      />

      <PokemonsHeaderSortDrawer
        filters={filters}
        onFiltersChange={onFiltersChange}
      />

      <PokemonsHeaderFiltersDrawer
        filters={filters}
        onFiltersChange={onFiltersChange}
        onFiltersReset={onFiltersReset}
      />
    </header>
  );
};
