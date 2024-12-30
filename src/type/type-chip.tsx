import { useSuspenseQuery } from "@tanstack/react-query";
import { TypeIcon } from "./type-icon";
import { TypeName } from "./type-types";
import { typeQueryOptions } from "./type-query-options";

type TypeChipProps = {
  name: TypeName;
};

export const TypeChip = ({ name }: TypeChipProps) => {
  const { data: type } = useSuspenseQuery(typeQueryOptions(name));

  return (
    <div
      className="flex items-center gap-1 rounded p-1 text-white"
      style={{
        backgroundColor: `hsl(var(--color-${name}))`,
      }}
    >
      <TypeIcon name={name} className="h-4 w-4" />

      <span className="text-xs capitalize">{type.name}</span>
    </div>
  );
};
