import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import GenerationIcon from "@/assets/icons/generation.svg";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import FirstGenerationsIllustration from "@/assets/generations/first-generations.svg";
import SecondGenerationsIllustration from "@/assets/generations/second-generations.svg";
import ThirdGenerationsIllustration from "@/assets/generations/third-generations.svg";
import FourthGenerationsIllustration from "@/assets/generations/fourth-generations.svg";
import FifthGenerationsIllustration from "@/assets/generations/fifth-generations.svg";
import SixthGenerationsIllustration from "@/assets/generations/sixth-generations.svg";
import SeventhGenerationsIllustration from "@/assets/generations/seventh-generations.svg";
import EighthGenerationsIllustration from "@/assets/generations/eighth-generations.svg";
import { PokemonsHeaderGenerationsDrawerButton } from "./pokemons-header-generations-drawer-button";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { GENERATION_RANGES } from "@/generations/generations-constants";

const GENERATIONS_DATA = [
  { Icon: FirstGenerationsIllustration, label: "Generation I", id: 1 },
  { Icon: SecondGenerationsIllustration, label: "Generation II", id: 2 },
  { Icon: ThirdGenerationsIllustration, label: "Generation III", id: 3 },
  { Icon: FourthGenerationsIllustration, label: "Generation IV", id: 4 },
  { Icon: FifthGenerationsIllustration, label: "Generation V", id: 5 },
  { Icon: SixthGenerationsIllustration, label: "Generation VI", id: 6 },
  { Icon: SeventhGenerationsIllustration, label: "Generation VII", id: 7 },
  { Icon: EighthGenerationsIllustration, label: "Generation VIII", id: 8 },
] as const;

const SNAP_POINTS = ["460px", 1] as const satisfies (string | number)[];

type PokemonsHeaderGenerationsDrawerProps = {
  filters: PokemonsListFilters;
  onFiltersChange: (newFilters: Partial<PokemonsListFilters>) => void;
};

export const PokemonsHeaderGenerationsDrawer = ({
  filters,
  onFiltersChange,
}: PokemonsHeaderGenerationsDrawerProps) => {
  const [snap, setSnap] = useState<number | string | null>(SNAP_POINTS[0]);

  const handleRangeChange = useCallback(
    (newRange: PokemonsListFilters["idsRange"]) => {
      onFiltersChange({ idsRange: newRange });
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
        <GenerationIcon className="h-6 w-6 text-black" />
      </DrawerTrigger>
      <DrawerContent>
        <div
          className={cn("flex-1 overflow-y-hidden px-10 py-8", {
            "overflow-y-auto": snap === 1,
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Generations</DrawerTitle>
            <DrawerDescription>
              Use search for generations to explore your Pokémon!
            </DrawerDescription>
          </DrawerHeader>

          <ul className="grid grid-cols-2 gap-3">
            {GENERATIONS_DATA.map(({ Icon, id, label }) => {
              const isSelected =
                GENERATION_RANGES[id][0] === filters.idsRange[0] &&
                GENERATION_RANGES[id][1] === filters.idsRange[1];

              return (
                <li key={id}>
                  <PokemonsHeaderGenerationsDrawerButton
                    Icon={Icon}
                    label={label}
                    id={id}
                    onFiltersChange={handleRangeChange}
                    isSelected={isSelected}
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
