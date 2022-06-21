import styled from "@emotion/styled";
import { ReactNode } from "react";
import { theme } from "../../theme";

type PokemonDataLabelProps = {
  children: ReactNode;
  className?: string;
};

export const PokemonDataLabel = ({ children, className }: PokemonDataLabelProps) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.colors.text.black};
`;
