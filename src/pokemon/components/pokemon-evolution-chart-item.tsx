import styled from "@emotion/styled";
import { useMemo } from "react";
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
    <Root>
      <SpriteWrapper>
        <Sprite src={pokemon?.sprites.other["official-artwork"].front_default} />
        <BigBackgroundPokeball />
      </SpriteWrapper>
      <Id>{displayedId}</Id>
      <Name>{pokemon?.name}</Name>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const Id = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.grey};
  margin-bottom: ${theme.spacings.xs}px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.black};
  text-transform: capitalize;
`;
