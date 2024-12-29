import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCallback, useState } from "react";
import FiltersIcon from "@/assets/icons/filters.svg";
import { cn } from "@/lib/utils";
import { TYPE_NAMES } from "@/type/type-constants";
import { PokemonsHeaderFiltersDrawerTypeButton } from "./pokemons-header-filters-drawer-type-button";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { PokemonsHeaderFiltersDrawerHorizontalList } from "./pokemons-header-filters-drawer-horizontal-list";
import {
  HEIGHT_CATEGORY_NAMES,
  HEIGHT_CATEGORY_RANGES,
} from "@/height/height-constants";
import { PokemonsHeaderFiltersDrawerHeightButton } from "./pokemons-header-filters-drawer-height-button";
import {
  WEIGHT_CATEGORY_NAMES,
  WEIGHT_CATEGORY_RANGES,
} from "@/weight/weight-constants";
import { PokemonsHeaderFiltersDrawerWeightButton } from "./pokemons-header-filters-drawer-weight-button";
import { PokemonsHeaderFiltersDrawerNumberRange } from "./pokemons-header-filters-drawer-number-range";
import { Button } from "@/components/ui/button";
import { usePokemonHeaderFiltersDrawer } from "./use-pokemon-header-filters-drawer";

const SNAP_POINTS = ["460px", 1] as const satisfies (string | number)[];

type PokemonsHeaderFiltersDrawerProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
  onFiltersReset: () => void;
};

export const PokemonsHeaderFiltersDrawer = (
  props: PokemonsHeaderFiltersDrawerProps,
) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [snap, setSnap] = useState<number | string | null>(SNAP_POINTS[0]);

  const {
    localFilters,
    onFiltersTypeChange,
    onFiltersHeightRangeChange,
    onFiltersWeightRangeChange,
    onFiltersIdsRangeChange,
    onFiltersChange,
    onFiltersReset,
    onLocalFiltersReset,
  } = usePokemonHeaderFiltersDrawer(props);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleApplyFilters = useCallback(() => {
    onFiltersChange();

    setIsDrawerOpen(false);
    setSnap(SNAP_POINTS[0]);
  }, [onFiltersChange]);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    setSnap(SNAP_POINTS[0]);
    onLocalFiltersReset();
  }, [onLocalFiltersReset]);

  return (
    <Drawer
      snapPoints={SNAP_POINTS}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      fadeFromIndex={0}
      onClose={handleCloseDrawer}
      open={isDrawerOpen}
    >
      <button onClick={handleOpenDrawer}>
        <FiltersIcon className="h-6 w-6 text-black" />
      </button>

      <DrawerContent>
        <div
          className={cn("flex flex-1 flex-col overflow-y-hidden py-8", {
            "overflow-y-auto": snap === 1,
          })}
        >
          <DrawerHeader className="px-10">
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>
              Use advanced search to explore Pokémon by type, weakness, height
              and more!
            </DrawerDescription>
          </DrawerHeader>
          <PokemonsHeaderFiltersDrawerHorizontalList label="Types">
            {TYPE_NAMES.map((typeName) => {
              const isSelected =
                localFilters.types.findIndex(
                  (filterTypeName) => filterTypeName === typeName,
                ) !== -1;

              return (
                <PokemonsHeaderFiltersDrawerTypeButton
                  typeName={typeName}
                  isSelected={isSelected}
                  key={typeName}
                  onClick={onFiltersTypeChange}
                />
              );
            })}
          </PokemonsHeaderFiltersDrawerHorizontalList>

          <PokemonsHeaderFiltersDrawerHorizontalList label="Height">
            {HEIGHT_CATEGORY_NAMES.map((heightCategory) => {
              const heightRange = HEIGHT_CATEGORY_RANGES[heightCategory];

              const isSelected =
                localFilters.heightRange[0] === heightRange[0] &&
                localFilters.heightRange[1] === heightRange[1];

              return (
                <PokemonsHeaderFiltersDrawerHeightButton
                  heightCategory={heightCategory}
                  isSelected={isSelected}
                  key={heightCategory}
                  onClick={onFiltersHeightRangeChange}
                />
              );
            })}
          </PokemonsHeaderFiltersDrawerHorizontalList>

          <PokemonsHeaderFiltersDrawerHorizontalList label="Weight">
            {WEIGHT_CATEGORY_NAMES.map((weightCategory) => {
              const weightRange = WEIGHT_CATEGORY_RANGES[weightCategory];

              const isSelected =
                localFilters.weightRange[0] === weightRange[0] &&
                localFilters.weightRange[1] === weightRange[1];

              return (
                <PokemonsHeaderFiltersDrawerWeightButton
                  weightCategory={weightCategory}
                  isSelected={isSelected}
                  key={weightCategory}
                  onClick={onFiltersWeightRangeChange}
                />
              );
            })}
          </PokemonsHeaderFiltersDrawerHorizontalList>

          <PokemonsHeaderFiltersDrawerNumberRange
            filters={localFilters}
            onChange={onFiltersIdsRangeChange}
          />

          <DrawerFooter className="mt-auto px-10">
            <Button
              className="w-full"
              type="button"
              onClick={onFiltersReset}
              variant="secondary"
            >
              Reset
            </Button>

            <Button
              className="w-full"
              type="button"
              onClick={handleApplyFilters}
            >
              Apply
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
