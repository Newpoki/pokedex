import { SearchInput } from "@/components/ui/search-input";
import { PokemonsListFilters } from "./pokemons-types";
import { useDebouncedCallback } from "use-debounce";
import { useCallback, useEffect, useState } from "react";

type PokemonsSearchInputProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
};

export const PokemonsSearchInput = ({
  filters,
  onFiltersChange,
}: PokemonsSearchInputProps) => {
  const [search, setSearch] = useState(filters.search);

  const debounced = useDebouncedCallback((value: string) => {
    onFiltersChange({ search: value });
  }, 400);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      debounced(value);
      setSearch(value);
    },
    [debounced],
  );

  // As search might be updated from elsewhere (reset button)
  // We have to make sure we keep it synchronised
  useEffect(() => {
    setSearch(filters.search);
  }, [filters.search]);

  return (
    <SearchInput
      value={search}
      placeholder="What Pokémon are you looking for?"
      className="mb-11"
      onChange={handleChange}
    />
  );
};
