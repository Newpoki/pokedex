import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type PokemonsHeaderFiltersDrawerHorizontalListProps = {
  label: string;
  children: React.ReactNode;
};

export const PokemonsHeaderFiltersDrawerHorizontalList = ({
  label,
  children,
}: PokemonsHeaderFiltersDrawerHorizontalListProps) => {
  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className="px-10 text-sm font-bold">{label}</h3>

      <ScrollArea className="w-full">
        <ul className="flex w-max items-center gap-3 px-10 pb-9">{children}</ul>

        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </section>
  );
};
