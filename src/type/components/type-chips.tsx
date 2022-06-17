import styled from "@emotion/styled";
import { PokemonType } from "../../pokemon/typings";
import { theme } from "../../theme";
import { TypeChip } from "./type-chip";

type TypeChipsProps = {
  className?: string;
  types: Array<PokemonType>;
};

export const TypeChips = ({ types }: TypeChipsProps) => {
  return (
    <Root>
      {types.map((type) => {
        return <StyledTypeChip key={type.slot} type={type.type} />;
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
