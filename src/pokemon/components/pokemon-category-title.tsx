import styled from "@emotion/styled";
import { theme } from "../../theme";
import { PokemonTypeName } from "../typings";

type PokemonCategoryTitleProps = {
  children: string;
  className?: string;
  pokemonTypeName: PokemonTypeName | undefined;
};

export const PokemonCategoryTitle = ({
  children,
  className,
  pokemonTypeName,
}: PokemonCategoryTitleProps) => {
  return (
    <Root className={className} pokemonTypeName={pokemonTypeName}>
      {children}
    </Root>
  );
};

const Root = styled.h2<{ pokemonTypeName: PokemonTypeName | undefined }>`
  color: ${({ pokemonTypeName }) =>
    pokemonTypeName ? theme.colors.types[pokemonTypeName] : theme.colors.text.black};
  font-size: 16px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 24px;
  }
`;
