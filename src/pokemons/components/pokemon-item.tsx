import styled from "@emotion/styled";
import { useMemo } from "react";
import { useFetchPokemon } from "../../pokemon/hooks/useFetchPokemon";
import { PokemonTypeName } from "../../pokemon/typings";
import { theme } from "../../theme";
import { TypeChip } from "../../type/components/type-chip";
import { PokemonListItem } from "../typings";
import { ReactComponent as PokeballLowOpacityIcon } from "../../icons/pokeball-low-opacity.svg";
import { ReactComponent as PointsIcon } from "../../icons/points.svg";

type PokemonItemProps = {
  className?: string;
  pokemon: PokemonListItem;
};

export const PokemonItem = ({ className, pokemon }: PokemonItemProps) => {
  const { data } = useFetchPokemon(pokemon.url);

  const pokemonFirstType = useMemo(() => {
    // It looks like the first one is always the first in array,
    // but as it's not our API, we must ensure by ourselves.
    return data?.types.find((type) => type.slot === 1)?.type.name;
  }, [data?.types]);

  if (!data) {
    return <p>loading</p>;
  }

  return (
    <Root className={className} typeName={pokemonFirstType}>
      <Id># {data.id}</Id>

      <Name>{data.name}</Name>

      <TypeList>
        {data.types.map((type) => {
          return <StyledTypeChip key={type.slot} type={type.type} />;
        })}
      </TypeList>

      <StyledPointsIcon />

      <SpriteWrapper>
        <PokeballLowOpacityIcon />
        <Sprite src={data.sprites.front_default} alt={`${data.name} front sprite`} />
      </SpriteWrapper>
    </Root>
  );
};

const Root = styled.li<{ typeName: PokemonTypeName | undefined }>`
  border-radius: 10px;
  background-color: ${({ typeName }) =>
    typeName ? theme.colors.types.background[typeName] : theme.colors.common.grey};
  padding: ${theme.spacings.l}px;
  position: relative;
`;

const Id = styled.span`
  font-size: 13px;
  display: block;
  color: ${theme.colors.common.black};
  margin-bottom: ${theme.spacings.xs}px;
  font-weight: bold;
`;

const Name = styled.h3`
  font-size: 22px;
  color: ${theme.colors.common.white};
  margin: 0 0 ${theme.spacings.s}px;
  text-transform: capitalize;
`;

const TypeList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledTypeChip = styled(TypeChip)`
  margin-right: ${theme.spacings.s}px;
`;

const StyledPointsIcon = styled(PointsIcon)`
  position: absolute;
  top: -28px;
  left: 36%;
  width: 90px;
  height: 90px;
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
`;
