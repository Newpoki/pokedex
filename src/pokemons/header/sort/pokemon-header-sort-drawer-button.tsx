import { Button } from "@/components/ui/button";
import { PokemonListFiltersSort } from "@/pokemons/pokemons-types";
import { useCallback } from "react";

type PokemonHeaderSortDrawerButtonProps = {
  isSelected: boolean;
  option: PokemonListFiltersSort & { label: string };
  onClick: (sort: PokemonListFiltersSort) => void;
};

export const PokemonHeaderSortDrawerButton = ({
  option,
  isSelected,
  onClick,
}: PokemonHeaderSortDrawerButtonProps) => {
  const handleClick = useCallback(() => {
    onClick({ direction: option.direction, property: option.property });
  }, [onClick, option.direction, option.property]);

  return (
    <Button
      variant={isSelected ? "primary" : "secondary"}
      className="w-full"
      onClick={handleClick}
      type="button"
    >
      {option.label}
    </Button>
  );
};
