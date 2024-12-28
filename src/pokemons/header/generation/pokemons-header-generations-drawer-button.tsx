import { Button } from "@/components/ui/button";
import DotVectorGrey from "@/assets/patterns/dot-vector-grey.svg";
import TopHalfPokeballGrey from "@/assets/patterns/top-half-pokeball-grey.svg";
import { useCallback } from "react";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { GenerationsNumber } from "@/generations/generations-types";
import { GENERATION_RANGES } from "@/generations/generations-constants";
import { POKEMONS_LIST_DEFAULT_FILTERS } from "@/pokemons/pokemons-constants";
import { cn } from "@/lib/utils";

type PokemonsHeaderGenerationsDrawerButtonProps = {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  label: string;
  isSelected: boolean;
  id: GenerationsNumber;
  onFiltersChange: (newRanges: PokemonsListFilters["idsRange"]) => void;
};

export const PokemonsHeaderGenerationsDrawerButton = ({
  Icon,
  isSelected,
  label,
  id,
  onFiltersChange,
}: PokemonsHeaderGenerationsDrawerButtonProps) => {
  const handleToggleGeneration = useCallback(() => {
    if (isSelected) {
      onFiltersChange(POKEMONS_LIST_DEFAULT_FILTERS.idsRange);

      return;
    }

    onFiltersChange(GENERATION_RANGES[id]);
  }, [id, isSelected, onFiltersChange]);

  return (
    <Button
      variant={isSelected ? "primary" : "secondary"}
      className="relative"
      size="card"
      onClick={handleToggleGeneration}
      type="button"
    >
      <DotVectorGrey className="absolute left-4 top-3 h-9 w-20" />

      <section className="relative z-10 flex flex-col gap-4">
        <Icon className="h-11 w-full" />

        <span>{label}</span>
      </section>

      <TopHalfPokeballGrey
        className={cn("absolute bottom-0 right-0 transition-opacity", {
          "opacity-30": isSelected,
        })}
      />
    </Button>
  );
};
