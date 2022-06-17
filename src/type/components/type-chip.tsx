import styled from "@emotion/styled";
import { memo } from "react";
import { PokemonTypeName } from "../../pokemon/typings";
import { theme } from "../../theme";
import { TypeIcon } from "./type-icon";

type PokemonTypeProps = {
  className?: string;
  typeName: PokemonTypeName;
  withLabel?: boolean;
};

export const TypeChip = memo(({ className, typeName, withLabel = true }: PokemonTypeProps) => {
  return (
    <Root className={className} typeName={typeName}>
      <TypeIconWrapper withLabel={withLabel}>
        <StyledTypeIcon typeName={typeName} />
      </TypeIconWrapper>

      {withLabel && <Name>{typeName}</Name>}
    </Root>
  );
});

const Root = styled.li<{ typeName: PokemonTypeName }>`
  background-color: ${({ typeName }) => theme.colors.types[typeName]};
  padding: ${theme.spacings.xs}px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const TypeIconWrapper = styled.div<{ withLabel: boolean }>`
  display: flex;
  margin-right: ${({ withLabel }) => (withLabel ? theme.spacings.xs : 0)}px;
`;

const StyledTypeIcon = styled(TypeIcon)`
  width: 12px;
  height: 12px;
`;

const Name = styled.span`
  font-size: 12px;
  color: ${theme.colors.common.white};
`;
