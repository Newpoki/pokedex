import { HeightCategory } from "@/height/height-types";
import { useCallback } from "react";
import ShortHeightPokemon from "@/assets/height/short-height-pokemon.svg";
import MediumHeightPokemon from "@/assets/height/medium-height-pokemon.svg";
import TallHeightPokemon from "@/assets/height/tall-height-pokemon.svg";

type PokemonsHeaderFiltersDrawerHeightButtonProps = {
  heightCategory: HeightCategory;
  isSelected: boolean;
  onClick: (heightCategory: HeightCategory, isSelected: boolean) => void;
};

const ICON_MAPPING = {
  short: ShortHeightPokemon,
  medium: MediumHeightPokemon,
  tall: TallHeightPokemon,
} as const satisfies Record<
  HeightCategory,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
>;

export const PokemonsHeaderFiltersDrawerHeightButton = ({
  heightCategory,
  isSelected,
  onClick,
}: PokemonsHeaderFiltersDrawerHeightButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(heightCategory, !isSelected);
  }, [isSelected, onClick, heightCategory]);

  const HeightIcon = ICON_MAPPING[heightCategory];

  return (
    <button
      className="rounded-full p-3"
      onClick={handleClick}
      style={{
        boxShadow: isSelected
          ? `0px 10px 20px 0px hsla(var(--color-height-${heightCategory}) / 30%)`
          : undefined,
        backgroundColor: isSelected
          ? `hsl(var(--color-height-${heightCategory}))`
          : "transparent",
      }}
      type="button"
    >
      <HeightIcon
        className="h-6 w-6"
        style={{
          color: isSelected
            ? "white"
            : `hsl(var(--color-height-${heightCategory}))`,
        }}
      />
    </button>
  );
};
