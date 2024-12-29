import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SortIcon from "@/assets/icons/sort.svg";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { PokemonsListSort } from "@/pokemons/pokemons-types";
import { PokemonHeaderSortDrawerButton } from "./pokemon-header-sort-drawer-button";

type PokemonsHeaderSortDrawerProps = {
  sort: PokemonsListSort;
  onSortChange: (sort: PokemonsListSort) => void;
};

const SNAP_POINTS = ["460px", "520px"] as const satisfies (string | number)[];

const SORT_OPTIONS = [
  { label: "Smallest number first", direction: "ASC", property: "id" },
  { label: "Highest number first", direction: "DESC", property: "id" },
  { label: "A-Z", direction: "ASC", property: "name" },
  { label: "Z-A", direction: "DESC", property: "name" },
] as const;

export const PokemonsHeaderSortDrawer = ({
  sort,
  onSortChange,
}: PokemonsHeaderSortDrawerProps) => {
  const [snap, setSnap] = useState<number | string | null>(SNAP_POINTS[0]);

  const handleSortChange = useCallback(
    (newSort: PokemonsListSort) => {
      onSortChange(newSort);
    },
    [onSortChange],
  );

  return (
    <Drawer
      snapPoints={SNAP_POINTS}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      fadeFromIndex={0}
    >
      <DrawerTrigger>
        <SortIcon className="h-6 w-6 text-black" />
      </DrawerTrigger>
      <DrawerContent>
        <div
          className={cn("flex-1 overflow-y-hidden px-10 py-8", {
            "overflow-y-auto": snap === 1,
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Sort</DrawerTitle>
            <DrawerDescription>
              Sort Pokémons alphabetically or by National Pokédex number!
            </DrawerDescription>
          </DrawerHeader>

          <ul className="flex flex-col gap-5">
            {SORT_OPTIONS.map((option) => {
              const isSelected =
                option.direction === sort.direction &&
                option.property === sort.property;

              return (
                <li key={`${option.direction}-${option.property}`}>
                  <PokemonHeaderSortDrawerButton
                    option={option}
                    isSelected={isSelected}
                    onClick={handleSortChange}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
