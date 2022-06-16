import styled from "@emotion/styled";
import { memo } from "react";
import { PokemonType, PokemonTypeName } from "../../pokemon/typings";
import { theme } from "../../theme";
import { TypeIcon } from "./type-icon";

type PokemonTypeProps = {
  className?: string;
  type: PokemonType["type"];
};

export const TypeChip = memo(({ className, type }: PokemonTypeProps) => {
  return (
    <Root className={className} typeName={type.name}>
      <TypeIconWrapper>
        <StyledTypeIcon typeName={type.name} />
      </TypeIconWrapper>

      <Name>{type.name}</Name>
    </Root>
  );
});

const Root = styled.div<{ typeName: PokemonTypeName }>`
  background-color: ${({ typeName }) => theme.colors.types[typeName]};
  padding: ${theme.spacings.xs}px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const TypeIconWrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.xs}px;
`;

const StyledTypeIcon = styled(TypeIcon)`
  width: 12px;
  height: 12px;
`;

const Name = styled.span`
  font-size: 12px;
  color: ${theme.colors.common.white};
`;
