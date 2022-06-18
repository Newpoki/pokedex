import styled from "@emotion/styled";
import { PokemonType } from "../../pokemon/typings";
import { theme } from "../../theme";
import { TypeChip } from "./type-chip";

type TypeChipsProps = {
  className?: string;
  types: Array<PokemonType["type"]>;
  withLabel?: boolean;
};

export const TypeChips = ({ className, types, withLabel }: TypeChipsProps) => {
  return (
    <Root className={className}>
      {types.map((type) => {
        return <StyledTypeChip key={type.name} typeName={type.name} withLabel={withLabel} />;
      })}
    </Root>
  );
};

const Root = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledTypeChip = styled(TypeChip)`
  margin-right: ${theme.spacings.s}px;
`;
