import styled from "@emotion/styled";
import { useMemo } from "react";
import { useFetchPokemon } from "../../pokemon/hooks/useFetchPokemon";
import { PokemonTypeName } from "../../pokemon/typings";
import { theme } from "../../theme";
import { PokemonListItem } from "../typings";
import { ReactComponent as PokeballLowOpacityIcon } from "../../icons/pokeball-low-opacity.svg";
import { ReactComponent as PointsIcon } from "../../icons/points.svg";
import { POKEMONS_ITEMS_HEIGHT, POKEMONS_ITEM_BORDER_RADIUS } from "../pokemons-constants";
import { PokemonItemLoading } from "./pokemon-item-loading";
import { NavLink } from "react-router-dom";
import { TypeChips } from "../../type/components/type-chips";

type PokemonItemProps = {
  className?: string;
  pokemon: PokemonListItem;
};

export const PokemonItem = ({ className, pokemon }: PokemonItemProps) => {
  const { data } = useFetchPokemon(pokemon.name);

  const pokemonFirstType = useMemo(() => {
    // It looks like the first one is always the first in array,
    // but as it's not our API, we must ensure by ourselves.
    return data?.types.find((type) => type.slot === 1)?.type.name;
  }, [data?.types]);

  if (!data) {
    return <PokemonItemLoading />;
  }

  return (
    <Root className={className} to={`/pokemon/${pokemon.name}`} typeName={pokemonFirstType}>
      <Id># {data.id}</Id>

      <Name>{data.name}</Name>

      <TypeChips types={data.types.map((type) => type.type)} />

      <StyledPointsIcon />

      <SpriteWrapper>
        <PokeballLowOpacityIcon />
        <Sprite
          src={data.sprites.other["official-artwork"].front_default}
          alt={`${data.name} front sprite`}
        />
        {/* <Sprite src={data.sprites.front_default} alt={`${data.name} front sprite`} /> */}
      </SpriteWrapper>
    </Root>
  );
};

const Root = styled(NavLink)<{ typeName: PokemonTypeName | undefined }>`
  border-radius: ${POKEMONS_ITEM_BORDER_RADIUS}px;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.types.background[typeName] : theme.colors.common.grey[500]};
  padding: ${theme.spacings.l}px;
  position: relative;
  display: block;
  text-decoration: none;
  height: ${POKEMONS_ITEMS_HEIGHT}px;
  box-sizing: border-box;
`;

const Id = styled.span`
  font-size: 13px;
  display: block;
  color: ${theme.colors.common.black[700]};
  margin-bottom: ${theme.spacings.xs}px;
  font-weight: bold;
`;

const Name = styled.h3`
  font-size: 22px;
  color: ${theme.colors.common.white};
  margin: 0 0 ${theme.spacings.s}px;
  text-transform: capitalize;
`;

const StyledPointsIcon = styled(PointsIcon)`
  position: absolute;
  top: 0px;
  left: 36%;
  width: 70px;
  height: 70px;
`;

const SpriteWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  display: flex;
`;

const Sprite = styled.img`
  position: absolute;
  right: 10px;
  width: 90px;
`;
