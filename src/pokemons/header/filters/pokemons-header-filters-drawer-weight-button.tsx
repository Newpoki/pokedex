import { WeightCategory } from "@/weight/weight-types";
import { useCallback } from "react";
import LightWeightPokemon from "@/assets/weight/light-weight-pokemon.svg";
import MediumWeightPokemon from "@/assets/weight/normal-weight-pokemon.svg";
import HeavyWeightPokemon from "@/assets/weight/heavy-weight-pokemon.svg";

type PokemonsHeaderFiltersDrawerWeightButtonProps = {
  weightCategory: WeightCategory;
  isSelected: boolean;
  onClick: (weightCategory: WeightCategory, isSelected: boolean) => void;
};

const ICON_MAPPING = {
  light: LightWeightPokemon,
  normal: MediumWeightPokemon,
  heavy: HeavyWeightPokemon,
} as const satisfies Record<
  WeightCategory,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
>;

export const PokemonsHeaderFiltersDrawerWeightButton = ({
  weightCategory,
  isSelected,
  onClick,
}: PokemonsHeaderFiltersDrawerWeightButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(weightCategory, !isSelected);
  }, [isSelected, onClick, weightCategory]);

  const WeightIcon = ICON_MAPPING[weightCategory];

  return (
    <button
      className="rounded-full p-3"
      onClick={handleClick}
      style={{
        boxShadow: isSelected
          ? `0px 10px 20px 0px hsla(var(--color-weight-${weightCategory}) / 30%)`
          : undefined,
        backgroundColor: isSelected
          ? `hsl(var(--color-weight-${weightCategory}))`
          : "transparent",
      }}
      type="button"
    >
      <WeightIcon
        className="h-6 w-6"
        style={{
          color: isSelected
            ? "white"
            : `hsl(var(--color-weight-${weightCategory}))`,
        }}
      />
    </button>
  );
};
