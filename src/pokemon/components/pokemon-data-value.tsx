import styled from "@emotion/styled";
import { ReactNode } from "react";
import { theme } from "../../theme";

type PokemonDataValueProps = {
  children: ReactNode;
  className?: string;
};

export const PokemonDataValue = ({ children, className }: PokemonDataValueProps) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.span`
  font-size: 14px;
  color: ${theme.colors.common.grey[600]};
  text-transform: capitalize;
`;
