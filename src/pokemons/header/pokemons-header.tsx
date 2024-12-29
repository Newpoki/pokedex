import { PokemonsHeaderGenerationsDrawer } from "./generation/pokemons-header-generations-drawer";
import { PokemonsListFilters, PokemonsListSort } from "../pokemons-types";
import { PokemonsHeaderSortDrawer } from "./sort/pokemons-header-sort-drawer";
import { PokemonsHeaderFiltersDrawer } from "./filters/pokemons-header-filters-drawer";

type PokemonsHeaderProps = {
  filters: PokemonsListFilters;
  sort: PokemonsListSort;
  onSortChange: (sort: PokemonsListSort) => void;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
  onFiltersReset: () => void;
};

export const PokemonsHeader = ({
  filters,
  sort,
  onSortChange,
  onFiltersChange,
  onFiltersReset,
}: PokemonsHeaderProps) => {
  return (
    <header className="mb-9 flex items-center justify-end gap-5">
      <PokemonsHeaderGenerationsDrawer
        filters={filters}
        onFiltersChange={onFiltersChange}
      />

      <PokemonsHeaderSortDrawer sort={sort} onSortChange={onSortChange} />

      <PokemonsHeaderFiltersDrawer
        filters={filters}
        onFiltersChange={onFiltersChange}
        onFiltersReset={onFiltersReset}
      />
    </header>
  );
};
