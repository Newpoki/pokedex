import { Button } from "@/components/ui/button";

type PokemonsListNoResultsProps = {
  onFiltersReset: () => void;
};

export const PokemonsListNoResults = ({
  onFiltersReset,
}: PokemonsListNoResultsProps) => {
  return (
    <section className="flex flex-1 flex-col items-center justify-end gap-2">
      <h3 className="text-md">No results</h3>
      <p className="text-grey">Sorry, no result are matching your filters</p>
      <Button className="w-full" type="button" onClick={onFiltersReset}>
        Reset filters
      </Button>
    </section>
  );
};
