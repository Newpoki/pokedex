import FiltersIcon from "@/assets/icons/filters.svg";
import { PokemonsHeaderGenerationsDrawer } from "./generation/pokemons-header-generations-drawer";
import { PokemonsListFilters } from "../pokemons-types";
import { PokemonsHeaderSortDrawer } from "./sort/pokemons-header-sort-drawer";

type PokemonsHeaderProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
};

export const PokemonsHeader = ({
  filters,
  onFiltersChange,
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

      <FiltersIcon className="h-6 w-6 text-black" />
    </header>
  );
};
