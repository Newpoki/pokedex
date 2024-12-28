import { TypeIcon } from "@/type/type-icon";
import { TypeName } from "@/type/type-types";
import { useCallback } from "react";

type PokemonsHeaderFiltersDrawerTypeButtonProps = {
  typeName: TypeName;
  isSelected: boolean;
  onClick: (typeName: TypeName, isSelected: boolean) => void;
};

export const PokemonsHeaderFiltersDrawerTypeButton = ({
  typeName,
  isSelected,
  onClick,
}: PokemonsHeaderFiltersDrawerTypeButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(typeName, !isSelected);
  }, [isSelected, onClick, typeName]);

  return (
    <button
      className="rounded-full p-3"
      onClick={handleClick}
      style={{
        boxShadow: isSelected
          ? `0px 10px 20px 0px hsla(var(--color-${typeName}) / 30%)`
          : undefined,
        backgroundColor: isSelected
          ? `hsl(var(--bgcolor-${typeName}))`
          : "transparent",
      }}
      type="button"
    >
      <TypeIcon
        name={typeName}
        className="h-6 w-6"
        style={{
          color: isSelected ? "white" : `hsl(var(--color-${typeName}))`,
        }}
      />
    </button>
  );
};
