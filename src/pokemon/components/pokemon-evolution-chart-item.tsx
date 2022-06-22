import styled from "@emotion/styled";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as BigBackgroundPokeball } from "../../icons/big-background-pokeball.svg";
import { theme } from "../../theme";
import { useFetchPokemon } from "../hooks/use-fetch-pokemon";
import { formatPokemonId } from "../utils/format-pokemon-id";

type PokemonEvolutionChartItemProps = {
  pokemonName: string;
};

export const PokemonEvolutionChartItem = ({ pokemonName }: PokemonEvolutionChartItemProps) => {
  const { data: pokemon } = useFetchPokemon(pokemonName);

  const displayedId = useMemo(() => {
    return pokemon?.id ? formatPokemonId(pokemon.id) : undefined;
  }, [pokemon?.id]);

  return (
    <Root to={`/pokemon/${pokemonName.toLowerCase()}`}>
      <SpriteWrapper>
        <Sprite src={pokemon?.sprites.other["official-artwork"].front_default} />
        <StyledBigBackgroundPokeball />
      </SpriteWrapper>
      <Id>{displayedId}</Id>
      <Name>{pokemon?.name}</Name>
    </Root>
  );
};

const Root = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const SpriteWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sprite = styled.img`
  width: 75px;
  height: 75px;
  position: absolute;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: 130px;
    height: 130px;
  }
`;

const StyledBigBackgroundPokeball = styled(BigBackgroundPokeball)`
  width: 75px;
  height: 75px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    width: 130px;
    height: 130px;
  }
`;

const Id = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.grey};
  margin-bottom: ${theme.spacings.xs}px;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.black};
  text-transform: capitalize;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    font-size: 24px;
  }
`;
