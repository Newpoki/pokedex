import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import FiltersIcon from "@/assets/icons/filters.svg";
import { cn } from "@/lib/utils";

const SNAP_POINTS = ["460px", 1] as const satisfies (string | number)[];

export const PokemonsHeaderFiltersDrawer = () => {
  const [snap, setSnap] = useState<number | string | null>(SNAP_POINTS[0]);

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
          className={cn("flex-1 overflow-y-hidden px-10 py-8", {
            "overflow-y-auto": snap === 1,
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>
              Use advanced search to explore Pokémon by type, weakness, height
              and more!
            </DrawerDescription>
          </DrawerHeader>

          <div>mes filtres</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
