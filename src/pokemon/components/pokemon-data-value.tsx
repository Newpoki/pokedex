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

const Root = styled.div`
  font-size: 16px;
  color: ${theme.colors.text.grey};
  font-weight: 400;
  text-transform: capitalize;
`;
