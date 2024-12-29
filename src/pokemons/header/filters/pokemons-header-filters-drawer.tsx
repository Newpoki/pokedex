import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCallback, useState } from "react";
import FiltersIcon from "@/assets/icons/filters.svg";
import { cn } from "@/lib/utils";
import { TYPE_NAMES } from "@/type/type-constants";
import { PokemonsHeaderFiltersDrawerTypeButton } from "./pokemons-header-filters-drawer-type-button";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { TypeName } from "@/type/type-types";
import { PokemonsHeaderFiltersDrawerHorizontalList } from "./pokemons-header-filters-drawer-horizontal-list";
import {
  HEIGHT_CATEGORY_NAMES,
  HEIGHT_CATEGORY_RANGES,
} from "@/height/height-constants";
import { PokemonsHeaderFiltersDrawerHeightButton } from "./pokemons-header-filters-drawer-height-button";
import { HeightCategory } from "@/height/height-types";
import { POKEMONS_LIST_DEFAULT_FILTERS } from "@/pokemons/pokemons-constants";

const SNAP_POINTS = ["460px", 1] as const satisfies (string | number)[];

type PokemonsHeaderFiltersDrawerProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
};

export const PokemonsHeaderFiltersDrawer = ({
  filters,
  onFiltersChange,
}: PokemonsHeaderFiltersDrawerProps) => {
  const [snap, setSnap] = useState<number | string | null>(SNAP_POINTS[0]);

  const handleToggleFiltersTypes = useCallback(
    (typeName: TypeName, isSelected: boolean) => {
      if (isSelected) {
        onFiltersChange({ types: [...filters.types, typeName] });

        return;
      }

      onFiltersChange({
        types: filters.types.filter(
          (filterTypeName) => filterTypeName !== typeName,
        ),
      });
    },
    [filters.types, onFiltersChange],
  );

  const handleToggleFiltersCategoryRange = useCallback(
    (heightCategory: HeightCategory, isSelected: boolean) => {
      if (isSelected) {
        onFiltersChange({
          heightRange: HEIGHT_CATEGORY_RANGES[heightCategory],
        });

        return;
      }

      onFiltersChange({
        heightRange: POKEMONS_LIST_DEFAULT_FILTERS.heightRange,
      });
    },
    [onFiltersChange],
  );

  return (
    <Drawer
      snapPoints={SNAP_POINTS}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      fadeFromIndex={0}
    >
      <DrawerTrigger>
        <FiltersIcon className="h-6 w-6 text-black" />
      </DrawerTrigger>
      <DrawerContent>
        <div
          className={cn("flex-1 overflow-y-hidden py-8", {
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
                filters.types.findIndex(
                  (filterTypeName) => filterTypeName === typeName,
                ) !== -1;

              return (
                <PokemonsHeaderFiltersDrawerTypeButton
                  typeName={typeName}
                  isSelected={isSelected}
                  key={typeName}
                  onClick={handleToggleFiltersTypes}
                />
              );
            })}
          </PokemonsHeaderFiltersDrawerHorizontalList>

          <PokemonsHeaderFiltersDrawerHorizontalList label="Height">
            {HEIGHT_CATEGORY_NAMES.map((heightCategory) => {
              const heightRange = HEIGHT_CATEGORY_RANGES[heightCategory];

              const isSelected =
                filters.heightRange[0] === heightRange[0] &&
                filters.heightRange[1] === heightRange[1];

              return (
                <PokemonsHeaderFiltersDrawerHeightButton
                  heightCategory={heightCategory}
                  isSelected={isSelected}
                  key={heightCategory}
                  onClick={handleToggleFiltersCategoryRange}
                />
              );
            })}
          </PokemonsHeaderFiltersDrawerHorizontalList>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
