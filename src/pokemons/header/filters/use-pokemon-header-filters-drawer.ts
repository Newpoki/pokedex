import { HEIGHT_CATEGORY_RANGES } from "@/height/height-constants";
import { HeightCategory } from "@/height/height-types";
import { POKEMONS_LIST_DEFAULT_FILTERS } from "@/pokemons/pokemons-constants";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { TypeName } from "@/type/type-types";
import { WEIGHT_CATEGORY_RANGES } from "@/weight/weight-constants";
import { WeightCategory } from "@/weight/weight-types";
import { useCallback, useEffect, useMemo, useState } from "react";

type UsePokemonHeaderFiltersDrawerParams = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
  onFiltersReset: () => void;
};

export const usePokemonHeaderFiltersDrawer = ({
  filters,
  onFiltersChange,
  onFiltersReset,
}: UsePokemonHeaderFiltersDrawerParams) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleLocalFiltersChange = useCallback(
    (newFilters: Partial<PokemonsListFilters>) => {
      setLocalFilters((current) => ({ ...current, ...newFilters }));
    },
    [],
  );

  const handleToggleFiltersTypes = useCallback(
    (typeName: TypeName, isSelected: boolean) => {
      if (isSelected) {
        handleLocalFiltersChange({ types: [...localFilters.types, typeName] });

        return;
      }

      handleLocalFiltersChange({
        types: localFilters.types.filter(
          (filterTypeName) => filterTypeName !== typeName,
        ),
      });
    },
    [localFilters.types, handleLocalFiltersChange],
  );

  const handleToggleFiltersHeightRange = useCallback(
    (heightCategory: HeightCategory, isSelected: boolean) => {
      if (isSelected) {
        handleLocalFiltersChange({
          heightRange: HEIGHT_CATEGORY_RANGES[heightCategory],
        });

        return;
      }

      handleLocalFiltersChange({
        heightRange: POKEMONS_LIST_DEFAULT_FILTERS.heightRange,
      });
    },
    [handleLocalFiltersChange],
  );

  const handleToggleFiltersWeightRange = useCallback(
    (weightCategory: WeightCategory, isSelected: boolean) => {
      if (isSelected) {
        handleLocalFiltersChange({
          weightRange: WEIGHT_CATEGORY_RANGES[weightCategory],
        });

        return;
      }

      handleLocalFiltersChange({
        weightRange: POKEMONS_LIST_DEFAULT_FILTERS.heightRange,
      });
    },
    [handleLocalFiltersChange],
  );

  const handleChangeFiltersIdsRange = useCallback(
    (range: [number, number]) => {
      handleLocalFiltersChange({ idsRange: range });
    },
    [handleLocalFiltersChange],
  );

  const handleFiltersChange = useCallback(() => {
    onFiltersChange(localFilters);
  }, [localFilters, onFiltersChange]);

  const handleResetLocalFilters = useCallback(() => {
    setLocalFilters(POKEMONS_LIST_DEFAULT_FILTERS);
  }, []);

  const handleFiltersReset = useCallback(() => {
    onFiltersReset();
    handleResetLocalFilters();
  }, [handleResetLocalFilters, onFiltersReset]);

  // Filters might be updated from another place
  // We need to ensure they stay up to date
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  return useMemo(
    () => ({
      localFilters,
      onFiltersTypeChange: handleToggleFiltersTypes,
      onFiltersHeightRangeChange: handleToggleFiltersHeightRange,
      onFiltersWeightRangeChange: handleToggleFiltersWeightRange,
      onFiltersIdsRangeChange: handleChangeFiltersIdsRange,
      onFiltersChange: handleFiltersChange,
      onLocalFiltersReset: handleResetLocalFilters,
      onFiltersReset: handleFiltersReset,
    }),
    [
      handleChangeFiltersIdsRange,
      handleFiltersChange,
      handleFiltersReset,
      handleResetLocalFilters,
      handleToggleFiltersHeightRange,
      handleToggleFiltersTypes,
      handleToggleFiltersWeightRange,
      localFilters,
    ],
  );
};
