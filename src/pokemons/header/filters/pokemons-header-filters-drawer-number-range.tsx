import { SliderRange } from "@/components/ui/slider-range";
import { GENERATION_RANGES } from "@/generations/generations-constants";
import { PokemonsListFilters } from "@/pokemons/pokemons-types";
import { useCallback, useEffect, useState } from "react";

type PokemonsHeaderFiltersDrawerNumberRangeProps = {
  filters: PokemonsListFilters;
  onChange: (newRange: [number, number]) => void;
};
export const PokemonsHeaderFiltersDrawerNumberRange = ({
  filters,
  onChange,
}: PokemonsHeaderFiltersDrawerNumberRangeProps) => {
  const [range, setRange] = useState(filters.idsRange);

  const handleValueChange = useCallback((value: number[]) => {
    const [start, end] = value;

    if (start == null || end == null) {
      return;
    }

    setRange([start, end]);
  }, []);

  const handleValueCommit = useCallback(
    (value: number[]) => {
      const [start, end] = value;

      if (start == null || end == null) {
        return;
      }

      onChange([start, end]);
    },
    [onChange],
  );

  // As filter might be reseted or change from another place
  // We might make sure to keep it synch
  useEffect(() => {
    setRange(filters.idsRange);
  }, [filters.idsRange]);

  return (
    <section className="flex w-full flex-col gap-7 px-10">
      <h3 className="text-sm font-bold">Number Range</h3>

      <SliderRange
        value={range}
        min={GENERATION_RANGES["1"][0]}
        max={GENERATION_RANGES["8"][1]}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
      />
    </section>
  );
};
