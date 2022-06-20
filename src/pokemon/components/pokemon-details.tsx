import styled from "@emotion/styled";
import { ReactNode } from "react";
import { theme } from "../../theme";

type PokemonDetailsProps = {
  children: ReactNode;
  className?: string;
};

export const PokemonDetails = ({ children, className }: PokemonDetailsProps) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.div`
  display: inline-grid;
  grid-template-columns: 100px auto;
  grid-column-gap: ${theme.spacings.xxxl}px;
  grid-row-gap: ${theme.spacings.xl}px;
  margin-bottom: ${theme.spacings.xxxl}px;
`;
